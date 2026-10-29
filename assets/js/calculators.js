(function () {
  function num(id, fallback, min, max) {
    var el = document.getElementById(id);
    if (!el) return fallback;
    var v = Number(el.value);
    if (!isFinite(v)) v = fallback;
    v = Math.max(min, Math.min(max, v));
    el.value = String(v);
    return v;
  }

  function money(n) {
    return "R " + Math.round(n).toLocaleString("en-ZA");
  }

  function show(html) {
    var box = document.getElementById("result");
    box.innerHTML = html;
    box.classList.add("is-on");
  }

  function accepted(copy) {
    var ok = document.getElementById("accept") && document.getElementById("accept").checked;
    if (!ok) {
      show("<p>" + copy.ui.needAccept + "</p>");
      return false;
    }
    return true;
  }

  function buildingCost(area, type, luxury, storeys) {
    var base = BOS.rates.types[type] || BOS.rates.types.house;
    var lux = BOS.rates.luxury[String(luxury)] || 1;
    var storeyFactor = 1 + Math.max(0, storeys - 1) * 0.04;
    var mid = area * base * lux * storeyFactor;
    return { low: mid * 0.88, mid: mid, high: mid * 1.18 };
  }

  /* SACAP-style fee scale: base fee for the band + band percentage on the amount above the band start.
     (The source spreadsheet multiplied the percentage by the band start instead — see docs/CALCULATORS.md.) */
  function scaleFee(budget, cx) {
    var rows = BOS.fees.scale[cx] || BOS.fees.scale.medium;
    var row = rows[0];
    for (var i = 0; i < rows.length; i++) {
      if (budget >= rows[i].from) row = rows[i];
    }
    var above = Math.max(0, budget - row.from + 1);
    return { fee: row.base + above * row.pct, row: row };
  }

  function pct(n, d) {
    return (n * 100).toFixed(d === undefined ? 1 : d).replace(".0", "") + "%";
  }

  function taskFactor(state) {
    return state === "I" ? 1 : state === "L" ? 0.5 : 0;
  }

  function bindFees(form, copy, langCode) {
    var f = copy.feesCalc;
    var F = BOS.fees;
    var af = langCode === "af";
    var method = document.getElementById("method");
    var pkg = document.getElementById("pkg");
    var selects = Array.prototype.slice.call(form.querySelectorAll(".task-state"));
    var pkgIndex = { full: 0, half: 1, minimal: 2 };

    function showMethod() {
      Array.prototype.slice.call(form.querySelectorAll("[data-for]")).forEach(function (el) {
        var off = el.getAttribute("data-for") !== method.value;
        el.hidden = off;
        /* disabled fields are skipped by browser validation, so a hidden empty box can't block "calculate" */
        Array.prototype.slice.call(el.querySelectorAll("input, select")).forEach(function (c) {
          c.disabled = off;
        });
      });
    }

    function applyPackage() {
      if (!(pkg.value in pkgIndex)) return;
      var k = pkgIndex[pkg.value];
      selects.forEach(function (sel) {
        var task = F.stages[sel.getAttribute("data-s")].tasks[sel.getAttribute("data-t")];
        sel.value = task.pkg.charAt(k);
      });
      updateStageSums();
    }

    function updateStageSums() {
      F.stages.forEach(function (st, si) {
        var share = 0;
        selects.forEach(function (sel) {
          if (Number(sel.getAttribute("data-s")) !== si) return;
          share += st.tasks[sel.getAttribute("data-t")].pct * taskFactor(sel.value);
        });
        var out = form.querySelector(".stage-sum[data-stage='" + si + "']");
        if (out) out.textContent = pct(share) + " / " + pct(st.pct);
      });
    }

    method.addEventListener("change", showMethod);
    pkg.addEventListener("change", applyPackage);
    selects.forEach(function (sel) {
      sel.addEventListener("change", function () {
        pkg.value = "custom";
        updateStageSums();
      });
    });
    form.addEventListener("reset", function () {
      setTimeout(function () {
        showMethod();
        applyPackage();
        document.getElementById("result").classList.remove("is-on");
      }, 0);
    });
    showMethod();
    applyPackage();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (window.bosFeesExpired && window.bosFeesExpired()) return;
      if (!accepted(copy)) return;
      var budget = num("budget", 3000000, 50000, 2000000000);
      var cx = document.getElementById("cx").value;
      var full = scaleFee(budget, cx);
      var out = "";
      if (method.value === "scale") {
        out =
          "<p>" + f.totalFee + " <strong>" + money(full.fee) + "</strong> (" + pct(full.fee / budget) + ")</p>" +
          "<p class='note'>" + f.bandNote.replace("{lo}", money(full.row.from)).replace("{base}", money(full.row.base)).replace("{pct}", pct(full.row.pct, 2)) + "</p>" +
          "<p>" + f.totalHours + " " + Math.round(full.fee / F.hourly).toLocaleString("en-ZA") + " h</p>";
      } else if (method.value === "time") {
        var hours = num("hours", 120, 1, 20000);
        out = "<p>" + hours.toLocaleString("en-ZA") + " h × " + money(F.hourly) + " → <strong>" + money(hours * F.hourly) + "</strong></p>";
      } else {
        var share = 0;
        var rows = "";
        F.stages.forEach(function (st, si) {
          var s = 0;
          selects.forEach(function (sel) {
            if (Number(sel.getAttribute("data-s")) === si) s += st.tasks[sel.getAttribute("data-t")].pct * taskFactor(sel.value);
          });
          share += s;
          rows +=
            "<tr><td>" + (af ? st.af : st.en) + "</td><td>" + pct(s) + "</td><td>" + money(full.fee * s) + "</td></tr>";
        });
        var fee = full.fee * share;
        var deposit = fee * Math.pow(1 - share, 2) / 4;
        out =
          "<table class='breakdown'><thead><tr><th>" + f.stage + "</th><th>" + f.share + "</th><th>" + f.fee + "</th></tr></thead><tbody>" +
          rows +
          "</tbody></table>" +
          "<p>" + f.totalFee + " (" + pct(share) + ") <strong>" + money(fee) + "</strong></p>" +
          "<p>" + f.totalHours + " " + Math.round(fee / F.hourly).toLocaleString("en-ZA") + " h</p>" +
          "<p>" + f.deposit + " " + money(deposit) + "</p>";
      }
      show("<p>" + copy.ui.indicative + "</p><div class='result-body'>" + out + "</div>");
    });
  }

  window.bosScaleFee = scaleFee;

  window.bosBindCalculators = function (langCode) {
    var copy = BOS.i18n[langCode];
    var build = document.getElementById("calc-build");
    if (build) {
      build.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!accepted(copy)) return;
        var plot = num("plot", 500, 50, 100000);
        var lines = num("lines", 2, 0, 20);
        var area = num("area", 180, 20, 20000);
        var storeys = num("storeys", 1, 1, 20);
        var type = document.getElementById("type").value;
        var luxury = document.getElementById("luxury").value;
        var cover = area / Math.max(plot, 1);
        var cost = buildingCost(area, type, luxury, storeys);
        var note =
          cover > 0.85
            ? langCode === "af"
              ? "Dekking lyk hoog teenoor erf-grootte en boulyne; toets met ’n stadsbeplanner."
              : "Coverage looks high against plot size and building lines; test with a planner."
            : "";
        show(
          "<p>" +
            copy.ui.indicative +
            "</p><p><strong>" +
            money(cost.low) +
            " – " +
            money(cost.high) +
            "</strong></p><p>" +
            (langCode === "af" ? "middelpunt " : "midpoint ") +
            money(cost.mid) +
            "</p><p>" +
            note +
            "</p>"
        );
      });
    }

    var fees = document.getElementById("calc-fees");
    if (fees) bindFees(fees, copy, langCode);

    var project = document.getElementById("calc-project");
    if (project) {
      project.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!accepted(copy)) return;
        var area = num("area", 180, 20, 20000);
        var type = document.getElementById("type").value;
        var land = num("land", 1500000, 0, 200000000);
        var cont = num("cont", 10, 0, 40) / 100;
        var build = buildingCost(area, type, 2, 1).mid;
        var expired = window.bosFeesExpired && window.bosFeesExpired();
        var cxEl = document.getElementById("cx");
        var feesAmt = expired ? 0 : scaleFee(build, cxEl ? cxEl.value : "medium").fee;
        var municipal = Math.min(250000, build * 0.04);
        var sub = build + feesAmt + land + municipal;
        var total = sub * (1 + cont);
        show(
          "<p>" +
            copy.ui.indicative +
            "</p><p>" +
            (langCode === "af" ? "bou " : "building ") +
            money(build) +
            "</p><p>" +
            (langCode === "af" ? "argiteksfooi (aanwysend) " : "architect fee (indicative) ") +
            (expired ? (langCode === "af" ? "tariewe het verval — kontak bos" : "rates expired — contact bos") : money(feesAmt)) +
            "</p><p>" +
            (langCode === "af" ? "munisipale plekhouer " : "municipal placeholder ") +
            money(municipal) +
            "</p><p>" +
            (langCode === "af" ? "grond " : "land ") +
            money(land) +
            "</p><p><strong>" +
            (langCode === "af" ? "projek-omhulsel " : "project envelope ") +
            money(total) +
            "</strong></p>"
        );
      });
    }
  };
})();
