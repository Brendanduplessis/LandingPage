(function () {
  var page = document.body.getAttribute("data-page") || "home";
  var depth = Number(document.body.getAttribute("data-depth") || "0");
  var prefix = "../".repeat(depth);
  var asset = prefix + "assets/";

  var memoryLang = null;

  function readLang() {
    try {
      return window.localStorage.getItem("bos-lang");
    } catch (e) {
      return memoryLang;
    }
  }

  function lang() {
    var stored = readLang() || memoryLang;
    if (stored === "af" || stored === "en") return stored;
    var nav = (navigator.language || "").toLowerCase();
    return nav.indexOf("af") === 0 ? "af" : "en";
  }

  function setLang(next) {
    memoryLang = next;
    try {
      window.localStorage.setItem("bos-lang", next);
    } catch (e) {
      /* private mode or blocked storage: keep the choice for this page view only */
    }
    render();
  }

  function href(id) {
    return prefix + BOS.pages[id].path;
  }

  function t() {
    return BOS.i18n[lang()];
  }

  function sun() {
    return (
      '<svg viewBox="0 0 64 64" aria-hidden="true">' +
      '<circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<g stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
      '<path d="M32 6v10M32 48v10M6 32h10M48 32h10M13 13l7 7M44 44l7 7M13 51l7-7M44 20l7-7"/>' +
      "</g></svg>"
    );
  }

  function navHtml() {
    var copy = t();
    var links = copy.nav
      .map(function (item) {
        var active = item.id === page || (item.id === "costs" && String(page).indexOf("Calc") >= 0);
        var extra = "";
        if (item.id === "costs" && (page === "costs" || String(page).indexOf("Calc") >= 0)) {
          extra =
            '<div class="sub">' +
            copy.costSub
              .map(function (s) {
                return '<a class="' + (s.id === page ? "is-active" : "") + '" href="' + href(s.id) + '">' + s.label + "</a>";
              })
              .join("") +
            "</div>";
        }
        return (
          '<a class="' +
          (active ? "is-active" : "") +
          '" href="' +
          href(item.id) +
          '">' +
          item.label +
          "</a>" +
          extra
        );
      })
      .join("");
    return (
      '<aside class="rail" id="rail">' +
      '<a class="brand" href="' +
      href("home") +
      '">' +
      sun() +
      '<div class="word">bos</div></a>' +
      '<nav class="nav">' +
      links +
      "</nav>" +
      '<div class="rail-foot"><div class="lang">' +
      '<button type="button" data-lang="en" class="' +
      (lang() === "en" ? "is-active" : "") +
      '">en</button>' +
      '<button type="button" data-lang="af" class="' +
      (lang() === "af" ? "is-active" : "") +
      '">af</button>' +
      "</div></div></aside>"
    );
  }

  function heroes() {
    var files = BOS.heroes[page] || BOS.heroes.home;
    return (
      '<div class="hero">' +
      files
        .map(function (f, i) {
          return '<img src="' + asset + "img/" + f + '" alt="" decoding="async"' + (i ? ' loading="lazy"' : "") + ">";
        })
        .join("") +
      "</div>"
    );
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function pageBody() {
    var copy = t();
    if (page === "home") {
      var h = copy.home;
      return (
        '<h1>' +
        h.title +
        "</h1><p class='lede'>" +
        h.lede +
        "</p><div class='split'><div><h2>" +
        h.aboutTitle +
        "</h2><p>" +
        h.p1 +
        "</p><p>" +
        h.p2 +
        "</p><p>" +
        h.p3 +
        "</p><h2>" +
        h.bioTitle +
        "</h2>" +
        h.bio.map(function (para) { return "<p>" + para + "</p>"; }).join("") +
        "<h3>" +
        h.assocTitle +
        "</h3><ul class='assoc'>" +
        h.assoc.map(function (x) { return "<li>" + x + "</li>"; }).join("") +
        "</ul></div><div class='stack'><img src='" +
        asset +
        "img/about-stone.jpg' alt='' loading='lazy' decoding='async'><img src='" +
        asset +
        "img/landscape-ruins.jpg' alt='' loading='lazy' decoding='async'></div></div>"
      );
    }
    if (page === "design") {
      var d = copy.design;
      return (
        "<h1>" +
        d.title +
        "</h1><p class='lede'>" +
        d.lede +
        "</p><ul>" +
        d.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") +
        "</ul><h2>" +
        d.timeless +
        "</h2><div class='split'><div><p>" +
        d.p1 +
        "</p><p>" +
        d.p2 +
        "</p></div><div><img src='" +
        asset +
        "img/img_006.jpg' alt='' loading='lazy' decoding='async'></div></div>"
      );
    }
    if (page === "services") {
      var s = copy.services;
      return (
        "<h1>" +
        s.title +
        "</h1><p class='lede'>" +
        s.lede +
        "</p><p>" +
        s.intro +
        "</p><p>" +
        s.extra +
        "</p><h2>" +
        s.stagesTitle +
        "</h2><div class='stages'>" +
        s.stages
          .map(function (st) {
            return "<article><h3>" + st.t + "</h3><p>" + st.d + "</p></article>";
          })
          .join("") +
        "</div>"
      );
    }
    if (page === "costs") {
      var c = copy.costs;
      return (
        "<h1>" +
        c.title +
        "</h1><p class='lede'>" +
        c.lede +
        "</p><aside class='disclaimer'>" +
        c.box +
        "<br><a href='" +
        href("calculators") +
        "'>" +
        c.go +
        "</a></aside><h2>" +
        c.vsTitle +
        "</h2><p>" +
        c.vs +
        "</p><h2>" +
        c.landTitle +
        "</h2><p>" +
        c.land +
        "</p>"
      );
    }
    if (page === "calculators") {
      var k = copy.calculators;
      return (
        "<h1>" +
        k.title +
        "</h1><p class='lede'>" +
        k.lede +
        "</p><aside class='disclaimer'>" +
        k.box +
        "</aside><h2>" +
        k.listTitle +
        "</h2>" +
        k.items
          .map(function (it) {
            return (
              "<p class='calc-links'><a href='" +
              href(it.id) +
              "'>" +
              it.label +
              "</a><br>" +
              it.d +
              "</p>"
            );
          })
          .join("")
      );
    }
    if (page === "constructionCalc") {
      var b = copy.constructionCalc;
      var types =
        lang() === "af"
          ? [
              ["house", "huis"],
              ["townhouse", "meenthuis"],
              ["apartment", "woonstel"],
              ["office", "kantoor"],
              ["warehouse", "pakhuis"],
              ["retail", "kleinhandel"]
            ]
          : [
              ["house", "house"],
              ["townhouse", "townhouse"],
              ["apartment", "apartment"],
              ["office", "office"],
              ["warehouse", "warehouse"],
              ["retail", "retail"]
            ];
      return (
        "<h1>" +
        b.title +
        "</h1><aside class='disclaimer wide'>" +
        b.box +
        "</aside><h2>" +
        b.guideTitle +
        "</h2><p>" +
        b.guide +
        "</p><form class='calc' id='calc-build'>" +
        field(lang() === "af" ? "erf grootte (m²)" : "plot size (m²)", "plot", "number", "500") +
        field(lang() === "af" ? "boulyne (m)" : "building lines (m)", "lines", "number", "2") +
        "<div class='field'><label>" +
        (lang() === "af" ? "gebou tipe" : "building type") +
        "</label><select id='type'>" +
        types
          .map(function (x) {
            return "<option value='" + x[0] + "'>" + x[1] + "</option>";
          })
          .join("") +
        "</select></div>" +
        field(lang() === "af" ? "area van gebou (m²)" : "building area (m²)", "area", "number", "180") +
        "<div class='field'><label>" +
        (lang() === "af" ? "luuksheidsfaktor" : "luxury factor") +
        "</label><select id='luxury'><option value='1'>1</option><option value='2' selected>2</option><option value='3'>3</option><option value='4'>4</option></select></div>" +
        field(lang() === "af" ? "storeye" : "storeys", "storeys", "number", "1") +
        acceptBlock() +
        actions() +
        "<div class='result' id='result'></div></form>"
      );
    }
    if (page === "feesCalc") {
      var f = copy.feesCalc;
      var F = BOS.fees;
      var box = fill(f.box);
      var head = "<h1>" + f.title + "</h1><p class='lede'>" + f.lede + "</p><aside class='disclaimer wide'>" + box + "</aside>";
      if (feesExpired()) {
        return head + "<p class='expired'>" + fill(f.expired) + "</p><p><a href='" + href("contact") + "'>" + copy.nav[6].label + " >>></a></p>";
      }
      var af = lang() === "af";
      var stageHtml = F.stages
        .map(function (st, si) {
          return (
            "<details class='stage'" + (si === 0 ? " open" : "") + "><summary><span>" + (af ? st.af : st.en) +
            "</span><span class='stage-sum' data-stage='" + si + "'>" + Math.round(st.pct * 100) + "%</span></summary>" +
            st.tasks
              .map(function (tk, ti) {
                return (
                  "<div class='task-row'><span class='task-text'><span class='task-name'>" + (af ? tk.af : tk.en) +
                  "</span><small>" + (tk.pct * 100).toFixed(1) + "% " + f.share + "</small></span>" +
                  "<select class='task-state' data-s='" + si + "' data-t='" + ti + "' aria-label='" + f.stage + " " + (si + 1) + "." + (ti + 1) + "'>" +
                  ["I", "L", "X"].map(function (k) { return "<option value='" + k + "'>" + f.state[k] + "</option>"; }).join("") +
                  "</select></div>"
                );
              })
              .join("") +
            "</details>"
          );
        })
        .join("");
      return (
        head +
        "<form class='calc' id='calc-fees'>" +
        field(f.budget, "budget", "number", "3000000") +
        "<div class='field'><label for='cx'>" + f.complexity + "</label><select id='cx'>" +
        ["low", "medium", "high"].map(function (k) { return "<option value='" + k + "'" + (k === "medium" ? " selected" : "") + ">" + f.cx[k] + "</option>"; }).join("") +
        "</select></div>" +
        "<div class='field'><label for='method'>" + f.method + "</label><select id='method'>" +
        ["scale", "time", "architad"].map(function (k) { return "<option value='" + k + "'>" + f.methods[k] + "</option>"; }).join("") +
        "</select></div>" +
        "<div data-for='time'>" + field(f.hours, "hours", "number", "120") + "</div>" +
        "<div data-for='architad'><div class='field'><label for='pkg'>" + f["package"] + "</label><select id='pkg'>" +
        ["full", "half", "minimal", "custom"].map(function (k) { return "<option value='" + k + "'>" + f.packages[k] + "</option>"; }).join("") +
        "</select></div><div class='stages-list'>" + stageHtml + "</div></div>" +
        "<p class='note'>" + fill(f.rateNote) + "</p>" +
        acceptBlock() +
        actions() +
        "<div class='result' id='result'></div></form>"
      );
    }
    if (page === "projectCalc") {
      var p = copy.projectCalc;
      return (
        "<h1>" +
        p.title +
        "</h1><p class='lede'>" +
        p.lede +
        "</p><aside class='disclaimer wide'>" +
        p.box +
        "</aside><form class='calc' id='calc-project'>" +
        field(lang() === "af" ? "bou-area (m²)" : "building area (m²)", "area", "number", "180") +
        "<div class='field'><label>" +
        (lang() === "af" ? "gebou tipe" : "building type") +
        "</label><select id='type'><option value='house'>" +
        (lang() === "af" ? "huis" : "house") +
        "</option><option value='office'>" +
        (lang() === "af" ? "kantoor" : "office") +
        "</option><option value='warehouse'>" +
        (lang() === "af" ? "pakhuis" : "warehouse") +
        "</option></select></div>" +
        "<div class='field'><label for='cx'>" + copy.feesCalc.complexity + "</label><select id='cx'>" +
        ["low", "medium", "high"].map(function (k) { return "<option value='" + k + "'" + (k === "medium" ? " selected" : "") + ">" + copy.feesCalc.cx[k] + "</option>"; }).join("") +
        "</select></div>" +
        field(lang() === "af" ? "grond (ZAR)" : "land (ZAR)", "land", "number", "1500000") +
        field(lang() === "af" ? "kontingensie %" : "contingency %", "cont", "number", "10") +
        acceptBlock() +
        actions() +
        "<div class='result' id='result'></div></form>"
      );
    }
    if (page === "knowledge") {
      var kn = copy.knowledge;
      return (
        "<h1>" +
        kn.title +
        "</h1><p class='lede'>" +
        kn.lede +
        "</p><div class='article-list'>" +
        kn.articles
          .map(function (a) {
            return (
              "<article><span class='meta'>" +
              a.date +
              "</span><h2>" +
              a.title +
              "</h2><p>" +
              a.d +
              "</p><a href='" +
              href(a.id) +
              "'>" +
              copy.ui.readMore +
              "</a></article>"
            );
          })
          .join("") +
        "</div>"
      );
    }
    if (copy.articles[page]) {
      var art = copy.articles[page];
      return (
        "<a class='back' href='" +
        href("knowledge") +
        "'>" +
        copy.ui.back +
        "</a><span class='meta'>" +
        art.date +
        "</span><h1>" +
        art.title +
        "</h1><p class='lede'>" +
        art.intro +
        "</p>" +
        art.sections
          .map(function (sec) {
            return "<h2>" + sec.t + "</h2><p>" + sec.d + "</p>";
          })
          .join("") +
        "<p><img src='" +
        asset +
        "img/img_019.jpg' alt='' loading='lazy' decoding='async'></p>"
      );
    }
    if (page === "portfolio") {
      var po = copy.portfolio;
      return (
        "<h1>" +
        po.title +
        "</h1><p class='lede'>" +
        po.lede +
        "</p><div class='gallery'>" +
        po.items
          .map(function (it) {
            return (
              "<figure><img src='" +
              asset +
              "img/" +
              it.img +
              "' alt='" +
              escapeHtml(it.cap).replace(/'/g, "&#39;") +
              "' loading='lazy' decoding='async'><figcaption>" +
              escapeHtml(it.cap) +
              "</figcaption></figure>"
            );
          })
          .join("") +
        "</div>"
      );
    }
    if (page === "contact") {
      var co = copy.contact;
      return (
        "<h1>" +
        co.title +
        "</h1><p class='lede'>" +
        co.lede +
        "</p><form class='contact-gate' id='gate'><p>" +
        co.prompt +
        " <strong id='q'></strong>?</p>" +
        "<div class='field'><label>captcha</label><input id='ans' inputmode='numeric' autocomplete='off'></div>" +
        "<div class='actions'><button class='btn' type='submit'>" +
        co.show +
        "</button></div><p id='gate-err'></p></form>" +
        "<div class='contact-card hidden' id='card'><button type='button' class='btn ghost close' id='hide' aria-label='" +
        (lang() === "af" ? "versteek" : "hide") +
        "'>×</button><canvas id='contact-canvas' role='img' aria-label='" +
        (lang() === "af" ? "kontakbesonderhede as prent" : "contact details as an image") +
        "'></canvas></div>"
      );
    }
    return "<h1>bos</h1>";
  }

  var MONTHS = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    af: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"]
  };

  function longDate(iso) {
    var p = String(iso).split("-");
    return Number(p[2]) + " " + MONTHS[lang()][Number(p[1]) - 1] + " " + p[0];
  }

  function feesExpired() {
    var d = new Date();
    var today = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
    return today > BOS.fees.validUntil;
  }

  function fill(text) {
    return String(text)
      .replace("{updated}", longDate(BOS.fees.updated))
      .replace("{expires}", longDate(BOS.fees.validUntil))
      .replace("{rate}", "R " + BOS.fees.hourly.toLocaleString("en-ZA"));
  }

  window.bosFeesExpired = feesExpired;
  window.bosFill = fill;

  function field(label, id, type, val) {
    return (
      "<div class='field'><label for='" +
      id +
      "'>" +
      label +
      "</label><input id='" +
      id +
      "' type='" +
      type +
      "' value='" +
      val +
      "' min='0' step='any' required></div>"
    );
  }

  function acceptBlock() {
    return (
      "<label class='check'><input type='checkbox' id='accept'><span>" +
      t().ui.accept +
      "</span></label>"
    );
  }

  function actions() {
    return (
      "<div class='actions'><button class='btn' type='submit'>" +
      t().ui.calculate +
      "</button><button class='btn ghost' type='reset'>" +
      t().ui.reset +
      "</button></div>"
    );
  }

  function render() {
    var copy = t();
    var pageCopy = copy[page] || {};
    document.documentElement.lang = lang() === "af" ? "af" : "en";
    document.title = pageCopy.docTitle || copy.home.docTitle;
    document.getElementById("app").innerHTML =
      '<a class="skip" href="#main">skip</a>' +
      '<button class="menu-btn" type="button" id="menu" aria-controls="rail" aria-expanded="false" aria-label="' +
      copy.ui.menu +
      '"><span></span><span></span><span></span></button>' +
      '<div class="scrim" id="scrim" hidden></div>' +
      '<div class="shell">' +
      navHtml() +
      '<div class="main" id="main">' +
      heroes() +
      '<div class="content">' +
      pageBody() +
      "</div></div></div>";

    var rail = document.getElementById("rail");
    var menu = document.getElementById("menu");
    var scrim = document.getElementById("scrim");
    function setMenu(open) {
      rail.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
      menu.setAttribute("aria-expanded", open ? "true" : "false");
      scrim.hidden = !open;
    }
    menu.onclick = function () {
      setMenu(!rail.classList.contains("is-open"));
    };
    scrim.onclick = function () {
      setMenu(false);
    };
    rail.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setMenu(false);
      });
    });
    document.onkeydown = function (e) {
      if (e.key === "Escape" && rail.classList.contains("is-open")) {
        setMenu(false);
        menu.focus();
      }
    };
    window.bosCloseMenu = function () {
      setMenu(false);
    };
    if (window.matchMedia && !window.bosWideBound) {
      window.bosWideBound = true;
      var wide = window.matchMedia("(min-width: 861px)");
      var onWide = function () {
        if (wide.matches && window.bosCloseMenu) window.bosCloseMenu();
      };
      if (wide.addEventListener) wide.addEventListener("change", onWide);
      else if (wide.addListener) wide.addListener(onWide);
    }
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.onclick = function () {
        setLang(btn.getAttribute("data-lang"));
      };
    });
    if (window.bosBindCalculators) window.bosBindCalculators(lang());
    if (window.bosBindContact) window.bosBindContact(lang());
  }

  window.bosHref = href;
  window.bosLang = lang;
  window.bosRender = render;
  render();
})();
