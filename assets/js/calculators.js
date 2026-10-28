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
    if (fees) {
      fees.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!accepted(copy)) return;
        var method = document.getElementById("method").value;
        var buildcost = num("buildcost", 3000000, 100000, 500000000);
        var feeType = document.getElementById("feeType").value;
        var out = "";
        if (method === "pct") {
          var pct = BOS.rates.feePct[feeType] || 0.08;
          out =
            (langCode === "af" ? "persentasie-metode " : "percentage method ") +
            (pct * 100).toFixed(1) +
            "% → <strong>" +
            money(buildcost * pct) +
            "</strong>";
        } else if (method === "time") {
          var ph = num("phours", 40, 0, 2000);
          var th = num("thours", 80, 0, 5000);
          var sum = ph * BOS.rates.principalPerHour + th * BOS.rates.technologistPerHour;
          out =
            (langCode === "af" ? "tyd-metode → " : "time method → ") +
            "<strong>" +
            money(sum) +
            "</strong>";
        } else {
          var picked = Array.prototype.slice.call(document.querySelectorAll("input[name=task]:checked"));
          var perHour = BOS.rates.technologistPerHour * 0.45 + BOS.rates.principalPerHour * 0.2;
          var hours = 0;
          var rows = "";
          picked.forEach(function (box) {
            var found = null;
            for (var i = 0; i < BOS.rates.tasks.length; i++) {
              if (BOS.rates.tasks[i].id === box.value) found = BOS.rates.tasks[i];
            }
            if (!found) return;
            hours += found.hours;
            rows +=
              "<tr><td>" +
              (langCode === "af" ? found.labelAf : found.labelEn) +
              "</td><td>" +
              found.hours +
              " h</td><td>" +
              money(found.hours * perHour) +
              "</td></tr>";
          });
          var arch = hours * perHour;
          out =
            (rows
              ? "<table class='breakdown'><thead><tr><th>" +
                (langCode === "af" ? "diens" : "service") +
                "</th><th>" +
                (langCode === "af" ? "ure" : "hours") +
                "</th><th>" +
                (langCode === "af" ? "aanduidend" : "indicative") +
                "</th></tr></thead><tbody>" +
                rows +
                "</tbody></table>"
              : "") +
            "ArchiTAD " +
            hours +
            (langCode === "af" ? " ure → " : " hours → ") +
            "<strong>" +
            money(arch) +
            "</strong>";
        }
        show("<p>" + copy.ui.indicative + "</p><div class='result-body'>" + out + "</div>");
      });
    }

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
        var feesAmt = build * (BOS.rates.feePct.house || 0.085);
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
            money(feesAmt) +
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
