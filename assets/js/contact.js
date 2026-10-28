(function () {
  function decode(arr) {
    return arr.map(function (n) { return String.fromCharCode(n); }).join("");
  }

  function puzzle() {
    var a = 2 + Math.floor(Math.random() * 7);
    var b = 2 + Math.floor(Math.random() * 7);
    return { q: a + " + " + b, a: a + b };
  }

  var visibleLang = null;
  var resizeTimer = null;

  window.bosBindContact = function (langCode) {
    var form = document.getElementById("gate");
    visibleLang = null;
    if (!form) return;
    var current = puzzle();
    document.getElementById("q").textContent = current.q;
    var err = document.getElementById("gate-err");
    var copy = BOS.i18n[langCode].contact;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = Number(document.getElementById("ans").value);
      if (val !== current.a) {
        err.textContent = copy.wrong;
        current = puzzle();
        document.getElementById("q").textContent = current.q;
        document.getElementById("ans").value = "";
        return;
      }
      err.textContent = "";
      form.classList.add("hidden");
      document.getElementById("card").classList.remove("hidden");
      visibleLang = langCode;
      draw(langCode);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () {
          if (visibleLang) draw(visibleLang);
        });
      }
    });

    document.getElementById("hide").addEventListener("click", function () {
      visibleLang = null;
      document.getElementById("card").classList.add("hidden");
      form.classList.remove("hidden");
      current = puzzle();
      document.getElementById("q").textContent = current.q;
    });
  };

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (visibleLang && document.getElementById("contact-canvas")) draw(visibleLang);
    }, 120);
  });

  /* Draws the details as pixels sized to the screen. Narrow screens stack label above value,
     so the text stays readable on phones and sharp on high-density displays. */
  function draw(langCode) {
    var canvas = document.getElementById("contact-canvas");
    if (!canvas) return;
    var cssW = Math.max(220, Math.floor(canvas.parentNode.clientWidth - 4));
    var stacked = cssW < 460;
    var size = stacked ? 17 : 19;
    var labels = BOS.contact.labels[langCode];
    var rows = [
      [labels.phone, decode(BOS.contact.phone)],
      [labels.email, decode(BOS.contact.email)],
      [labels.address, langCode === "af" ? BOS.contact.cityAf : BOS.contact.cityEn]
    ];
    var rowH = stacked ? size * 3.2 : size * 2.6;
    var cssH = Math.ceil(rows.length * rowH + size);
    var dpr = Math.min(window.devicePixelRatio || 1, 3);

    canvas.style.width = cssW + "px";
    canvas.style.height = cssH + "px";
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);

    var ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, cssW, cssH);
    ctx.textBaseline = "alphabetic";

    rows.forEach(function (row, i) {
      var top = size * 0.6 + i * rowH;
      if (stacked) {
        ctx.fillStyle = "#7a7a7a";
        ctx.font = "300 " + Math.round(size * 0.8) + "px Lexend, 'Segoe UI', sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(row[0], 0, top + size);
        ctx.fillStyle = "#2b2b2b";
        ctx.font = "300 " + size + "px Lexend, 'Segoe UI', sans-serif";
        ctx.fillText(row[1], 0, top + size * 2.25);
      } else {
        ctx.fillStyle = "#7a7a7a";
        ctx.font = "300 " + size + "px Lexend, 'Segoe UI', sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(row[0], 0, top + size * 1.3);
        ctx.fillStyle = "#2b2b2b";
        ctx.textAlign = "right";
        ctx.fillText(row[1], cssW, top + size * 1.3);
      }
      if (i < rows.length - 1) {
        ctx.fillStyle = "#e3e3e3";
        ctx.fillRect(0, Math.round(top + rowH - size * 0.35), cssW, 1);
      }
    });
  }
})();
