window.BOS = {
  brand: "bos",
  architect: "Rudolf van Schalkwyk",
  pages: {
    home: { path: "index.html", depth: 0 },
    design: { path: "design/index.html", depth: 1 },
    services: { path: "services/index.html", depth: 1 },
    costs: { path: "costs/index.html", depth: 1 },
    calculators: { path: "costs/calculators/index.html", depth: 2 },
    constructionCalc: { path: "costs/construction/index.html", depth: 2 },
    feesCalc: { path: "costs/fees/index.html", depth: 2 },
    projectCalc: { path: "costs/project/index.html", depth: 2 },
    knowledge: { path: "knowledge/index.html", depth: 1 },
    articleBudget: { path: "knowledge/construction-budget/index.html", depth: 2 },
    articleDesign: { path: "knowledge/design-process/index.html", depth: 2 },
    articlePricing: { path: "knowledge/construction-pricing/index.html", depth: 2 },
    articleProcess: { path: "knowledge/construction-process/index.html", depth: 2 },
    portfolio: { path: "portfolio/index.html", depth: 1 },
    contact: { path: "contact/index.html", depth: 1 }
  },
  heroes: {
    home: ["hero-glass.jpg", "hero-cantilever.jpg", "hero-brick.jpg"],
    design: ["img_005.jpg", "img_006.jpg", "img_007.jpg"],
    services: ["img_008.jpg", "img_009.jpg", "img_010.jpg"],
    costs: ["img_011.jpg", "img_012.jpg", "img_013.jpg"],
    calculators: ["img_011.jpg", "img_012.jpg", "img_013.jpg"],
    constructionCalc: ["img_011.jpg", "img_012.jpg", "img_013.jpg"],
    feesCalc: ["img_011.jpg", "img_012.jpg", "img_013.jpg"],
    projectCalc: ["img_011.jpg", "img_012.jpg", "img_013.jpg"],
    knowledge: ["img_014.jpg", "img_015.jpg", "img_016.jpg"],
    articleBudget: ["img_017.jpg", "img_018.jpg", "img_019.jpg"],
    articleDesign: ["img_017.jpg", "img_018.jpg", "img_019.jpg"],
    articlePricing: ["img_017.jpg", "img_018.jpg", "img_019.jpg"],
    articleProcess: ["img_017.jpg", "img_018.jpg", "img_019.jpg"],
    portfolio: ["hero-glass.jpg", "about-stone.jpg", "hero-brick.jpg"],
    contact: ["img_020.jpg", "img_021.jpg", "img_022.jpg"]
  },
  i18n: {
    en: {
      nav: [
        { id: "home", label: "home" },
        { id: "design", label: "design" },
        { id: "services", label: "services" },
        { id: "costs", label: "costs" },
        { id: "knowledge", label: "knowledge" },
        { id: "portfolio", label: "portfolio" },
        { id: "contact", label: "contact" }
      ],
      costSub: [
        { id: "constructionCalc", label: "building cost" },
        { id: "feesCalc", label: "architectural fees" },
        { id: "projectCalc", label: "project cost" }
      ],
      ui: {
        lang: "en",
        menu: "menu",
        back: "<<< back",
        readMore: "read more >>>",
        calculate: "calculate",
        reset: "reset",
        accept: "I have read the indemnity and understand that these figures are indicative only.",
        needAccept: "Please accept the indemnity before calculating.",
        indicative: "Indicative estimate (excl. VAT, professional fees unless shown, and site-specific unknowns):",
        more: "read more >>>"
      },
      home: {
        title: "home",
        docTitle: "bos — architecture studio",
        lede: "bos is a design studio undertaking architectural services for projects in and around South Africa, under the guidance of Rudolf van Schalkwyk, Professional Architect.",
        aboutTitle: "about us",
        p1: "We work for buildings that last, age honestly, and keep their value. The studio treats budget, programme, and statutory process as design tools rather than afterthoughts.",
        p2: "Practice is grounded in measured drawing, clear documentation, and a strict architectural process: inception through close-out, with the client able to see what each stage costs and delivers.",
        p3: "Rudolf van Schalkwyk is a Professional Architect. Work is offered across new buildings, alterations, heritage-sensitive fabric, and repeat or measured work, with facilitation of council submissions where required."
      },
      design: {
        title: "design philosophy",
        docTitle: "design philosophy — bos",
        lede: "The work is aimed at buildings that remain useful, calm, and repairable.",
        timeless: "timeless",
        items: [
          "Eternal, enduring design — made to age and to change, with minimal maintenance, expressing materials as naturally as possible.",
          "Spatial quality and textural transitions.",
          "Passive design and critical regionalism.",
          "Style with adherence: a language held consistently, not a costume changed per project.",
          "The Vitruvian triad — firmness, commodity, and delight — interpolated rather than treated as separate slogans."
        ],
        p1: "A building should still make sense when the first client has left, when the climate has shifted, and when the finishes have been worn in. We prefer assemblies that can be maintained with ordinary skills.",
        p2: "Regional climate, light, and making traditions come before imported images. Where a classical or modern language is used, it is used with discipline."
      },
      services: {
        title: "architectural services",
        docTitle: "services — bos",
        lede: "Services follow the SACAP stages of work, with bos-specific emphasis on sequence, deliverables, and cost visibility at each gate.",
        stagesTitle: "SACAP project stages",
        intro: "Standard work stages are the spine of the appointment. bos adds explicit stop/go points, a written task list (ArchiTAD), and a fee that can be read against those tasks rather than only against a percentage.",
        extra: "Additional services include heritage work, repeat or measured surveys, environmental input coordination, and council running / facilitation.",
        stages: [
          { t: "stage 1 — project definition / inception", d: "Confirm brief, site constraints, budget envelope, and the professional team. Deliverable: inception report and appointment clarity." },
          { t: "stage 2 — concept and viability", d: "Test planning envelope, bulk, and character. Deliverable: concept drawings and a viability note against the construction budget." },
          { t: "stage 3 — design development", d: "Fix the building: structure, envelope, primary services. Deliverable: developed design set for client approval." },
          { t: "stage 4 — documentation and procurement", d: "Technical documentation for pricing and statutory submission. Deliverable: tender / construction information and facilitation of bids." },
          { t: "stage 5 — construction", d: "Inspection, information, and contract administration to the appointed scope. Deliverable: site instructions, certificates as applicable." },
          { t: "stage 6 — close-out", d: "As-built information, manuals, and final accounts support. Deliverable: close-out pack." }
        ]
      },
      costs: {
        title: "construction costs",
        docTitle: "costs — bos",
        lede: "This section introduces construction cost, budgets, cost control, and the calculators. Figures on this site are teaching tools, not quotations.",
        vsTitle: "project cost versus building cost",
        vs: "Building cost is the contractor’s works. Project cost also includes land, finance, professional fees, municipal charges, furniture, and contingency. Confusing the two is the usual way a budget breaks.",
        landTitle: "site acquisition",
        land: "Land price is not a construction rate. Servitudes, building lines, geotech, and bulk rights often move the real number more than the finishes do.",
        box: "Calculator pages are for illustration only, and only under indemnity.",
        go: "calculators >>>"
      },
      calculators: {
        title: "cost calculators",
        docTitle: "cost calculators — bos",
        lede: "Three estimators sit behind a single indemnity: construction, architectural fees, and a combined project view.",
        box: "INDEMNITY: ALL INFORMATION HERE IS GIVEN ON CONDITION THAT A REGISTERED QUANTITY SURVEYOR MUST BE ENGAGED FOR REAL BUILDING COST ESTIMATES. bos is not responsible for decisions made from these figures. Prices are indicative only.",
        listTitle: "list of calculators",
        items: [
          { id: "constructionCalc", label: "building cost calculator >>>", d: "Indicative construction cost from area, type, and a luxury factor, loosely in the spirit of published cost data (AECOM / Stats SA CPAP context)." },
          { id: "feesCalc", label: "architectural services calculator >>>", d: "No discounts. Project-cost based, time based, or ArchiTAD task based." },
          { id: "projectCalc", label: "project cost calculator >>>", d: "Rolls building, fees, land, and allowances into one envelope." }
        ]
      },
      constructionCalc: {
        title: "building cost calculator",
        docTitle: "building cost calculator — bos",
        guideTitle: "user guide",
        guide: "Enter erf size, building lines as a simple constraint, building type, floor area, and a luxury factor. The engine uses locked studio rates so the public cannot rewrite the model. Output is a range, not a bid.",
        box: "INDEMNITY: ALL INFORMATION HERE IS GIVEN ON CONDITION THAT A REGISTERED QUANTITY SURVEYOR MUST BE ENGAGED FOR REAL BUILDING COST ESTIMATES."
      },
      feesCalc: {
        title: "architectural services calculator",
        docTitle: "architectural fees — bos",
        lede: "Fees may be read three ways. None of these is an offer of discount, and none replaces a signed client–architect agreement.",
        box: "INDEMNITY: Fee outputs are educational. SACAP guidelines, time records, and the actual brief govern a real appointment."
      },
      projectCalc: {
        title: "project cost calculator",
        docTitle: "project cost calculator — bos",
        lede: "Combines an indicative building cost with land, professional allowances, municipal and finance placeholders.",
        box: "INDEMNITY: A total project number on this page is a planning envelope, not a bankable budget."
      },
      knowledge: {
        title: "construction knowledge",
        docTitle: "knowledge — bos",
        lede: "Notes on staying in budget and on the value of design. This index is meant to grow like a studio blog: dated, expandable, and easy to edit in content.js.",
        articles: [
          { id: "articleBudget", title: "setting a construction budget", date: "CRvS, 2026/06/21", d: "How an envelope is set before drawings pretend to be precise." },
          { id: "articleDesign", title: "design process", date: "CRvS, 2026/06/21", d: "Gates, drawings, and why sequence protects both quality and money." },
          { id: "articlePricing", title: "construction pricing", date: "CRvS, 2026/06/21", d: "Rates, indices, and what CPAP is for." },
          { id: "articleProcess", title: "construction process", date: "CRvS, 2026/06/21", d: "From site handover to close-out, in plain language." }
        ]
      },
      articles: {
        articleBudget: {
          title: "setting a construction budget",
          date: "CRvS, 2026/06/21",
          intro: "A budget is a design brief. If it is a wish rather than a constraint, the drawings will invent a building the client cannot occupy.",
          sections: [
            { t: "introduction", d: "Set the total project envelope first: land already spent, professional fees, municipal costs, furniture, contingency, and only then the amount left for the contractor." },
            { t: "purpose of a budget", d: "The purpose is not to impress a lender with a low number. It is to keep decisions honest when a nice window or an extra bay appears." },
            { t: "method", d: "Use a rate per square metre as a sanity check, then a quantity surveyor for anything you intend to build. This website’s calculator is the sanity check only." }
          ]
        },
        articleDesign: {
          title: "design process",
          date: "CRvS, 2026/06/21",
          intro: "Process is how a studio refuses chaos. Each SACAP stage has tasks, deliverables, and a fee share so the client can stop without a mystery invoice.",
          sections: [
            { t: "gates", d: "Do not tender a concept. Do not construct a sketch. Approval in writing at the end of each stage is cheaper than charm on site." },
            { t: "drawings as decisions", d: "A drawing is a record of a decision about money, light, and maintenance. If it is undecided, it should look undecided — not hatched as if it were marble." }
          ]
        },
        articlePricing: {
          title: "construction pricing",
          date: "CRvS, 2026/06/21",
          intro: "Published cost data (including AECOM-type reviews) and Stats SA CPAP indices describe a market, not your erf.",
          sections: [
            { t: "rates", d: "A luxury house and a warehouse do not share a rate. Location, access, geotech, and procurement route move cost as much as tiles do." },
            { t: "escalation", d: "CPAP exists because a price today is not a price at completion. Any multi-month project needs an escalation story, even if the contract is lump sum." }
          ]
        },
        articleProcess: {
          title: "construction process",
          date: "CRvS, 2026/06/21",
          intro: "Construction is a sequence of inspections, information, and money. Skipping the sequence is how defects and claims are born.",
          sections: [
            { t: "site", d: "Handover, setting out, and the first inspections decide whether the drawings survive contact with the ground." },
            { t: "close-out", d: "Snags, manuals, and as-builts are not paperwork for its own sake. They are how the building can be maintained ten years on." }
          ]
        }
      },
      portfolio: {
        title: "portfolio",
        docTitle: "portfolio — bos",
        lede: "Selected images for atmosphere while the live project list is edited. Replace captions in content.js as built work is released.",
        items: [
          { img: "hero-glass.jpg", cap: "envelope studies — light and return" },
          { img: "hero-cantilever.jpg", cap: "civic mass and shadow" },
          { img: "hero-brick.jpg", cap: "brick screen, texture at arm’s length" },
          { img: "about-stone.jpg", cap: "enduring fabric, dry-jointed" },
          { img: "landscape-ruins.jpg", cap: "landscape and ruin as teachers" },
          { img: "img_023.jpg", cap: "working drawings in progress" }
        ]
      },
      contact: {
        title: "contact details",
        docTitle: "contact — bos",
        lede: "Contact details are shown only after a short human check, and are drawn to the screen rather than published as copy-paste text.",
        prompt: "What is",
        show: "show details",
        wrong: "That check did not pass. Try again."
      }
    },
    af: {
      nav: [
        { id: "home", label: "tuis" },
        { id: "design", label: "ontwerp" },
        { id: "services", label: "dienste" },
        { id: "costs", label: "kostes" },
        { id: "knowledge", label: "kennis" },
        { id: "portfolio", label: "portefeulje" },
        { id: "contact", label: "kontak" }
      ],
      costSub: [
        { id: "constructionCalc", label: "boukostes" },
        { id: "feesCalc", label: "argitek dienste" },
        { id: "projectCalc", label: "projek koste" }
      ],
      ui: {
        lang: "af",
        menu: "kieslys",
        back: "<<< terug",
        readMore: "lees meer >>>",
        calculate: "bereken",
        reset: "stel terug",
        accept: "Ek het die vrywaring gelees en verstaan dat syfers slegs aanduidend is.",
        needAccept: "Aanvaar eers die vrywaring voordat jy bereken.",
        indicative: "Aanduidende beraming (uitgesluit BTW, professionele fooie tensy getoon, en erf-spesifieke onbekendes):",
        more: "lees meer >>>"
      },
      home: {
        title: "tuis",
        docTitle: "bos — argitektuurstudio",
        lede: "bos is ’n ontwerpstudio wat argitektoniese dienste lewer vir projekte in en om Suid-Afrika, onder leiding van Rudolf van Schalkwyk, Professionele Argitek.",
        aboutTitle: "oor ons",
        p1: "Ons werk vir geboue wat hou, eerlik verouder, en waarde behou. Begroting, program en statutêre proses is ontwerpgereedskap, nie naskrifte nie.",
        p2: "Die praktyk rus op gemeettekenwerk, duidelike dokumentasie, en ’n streng argitektoniese proses: van aanvang tot afsluiting, sodat die kliënt kan sien wat elke stadium kos en lewer.",
        p3: "Rudolf van Schalkwyk is ’n Professionele Argitek. Werk sluit nuwe geboue, verbouings, erfenis-sensitiewe stof, en herhaal- of opmeetwerk in, met fasilitering van stadsraad-indienings waar nodig."
      },
      design: {
        title: "ontwerp filosofie",
        docTitle: "ontwerp filosofie — bos",
        lede: "Die werk mik na geboue wat nuttig, kalm en herstelbaar bly.",
        timeless: "tydloos",
        items: [
          "Ewige, blywende ontwerp — gemaak om te verouder en te verander, met min onderhoud, en materiale so natuurlik moontlik uitgedruk.",
          "Ruimtelike gehalte en tekstuuroorgange.",
          "Passiewe ontwerp en kritiese regionalisme.",
          "Styl met getrouheid: ’n taal wat konsekwent gehou word.",
          "Die Vitruviaanse drietal — stewigheid, nut en behae — saamgelees eerder as los slagspreuke."
        ],
        p1: "’n Gebou moet nog sin maak wanneer die eerste kliënt weg is, wanneer die klimaat verskuif het, en wanneer die afwerkings ingevryf is.",
        p2: "Streeksklimaat, lig en maaktradisies kom voor ingevoerde beelde. Waar ’n klassieke of moderne taal gebruik word, word dit met dissipline gebruik."
      },
      services: {
        title: "argitektoniese dienste",
        docTitle: "dienste — bos",
        lede: "Dienste volg die SACAP-werkstadia, met bos-spesifieke klem op volgorde, lewerbares, en kostesigbaarheid by elke hek.",
        stagesTitle: "SACAP se projek fases",
        intro: "Standaard werkstadia is die ruggraat van die aanstelling. bos voeg duidelike stop/gaan-punte, ’n geskrewe taaklys (ArchiTAD), en ’n fooi wat teen daardie take gelees kan word.",
        extra: "Bykomende dienste sluit erfeniswerk, herhaal- of opmetingsopnames, omgewingsinset-koördinering, en raad-fasilitering in.",
        stages: [
          { t: "fase 1 — projek definisie / aanvang", d: "Bevestig brief, erfbeperkings, begrotingsomhulsel, en die professionele span. Lewerbaar: aanvangverslag." },
          { t: "fase 2 — konsep en lewensvatbaarheid", d: "Toets beplanningsomhulsel, bulken karakter. Lewerbaar: konseptekeninge en ’n lewensvatbaarheidsnota." },
          { t: "fase 3 — ontwerpontwikkeling", d: "Maak die gebou vas: struktuur, dop, primêre dienste. Lewerbaar: ontwikkelde ontwerpstel." },
          { t: "fase 4 — dokumentasie en verkryging", d: "Tegniese dokumentasie vir prysing en statutêre indiening." },
          { t: "fase 5 — konstruksie", d: "Inspeksie, inligting, en kontrakadministrasie tot die aangestelde omvang." },
          { t: "fase 6 — afsluiting", d: "As-gebou inligting, handleidings, en eindrekening-steun." }
        ]
      },
      costs: {
        title: "konstruksie omkostes",
        docTitle: "kostes — bos",
        lede: "Hierdie afdeling stel konstruksiekoste, begrotings, kostebeheer, en die sakrekenaars bekend. Syfers op hierdie werf is leermiddels, nie kwotasies nie.",
        vsTitle: "projek kostes teenoor boukostes",
        vs: "Boukoste is die aannemer se werke. Projekkoste sluit ook grond, finansiering, professionele fooie, munisipale heffings, meubels, en kontingensie in.",
        landTitle: "perseel aankope",
        land: "Grondprys is nie ’n konstruksiekoers nie. Serwitute, boulyne, geotekniek, en bulkregte skuif dikwels die ware syfer meer as die afwerkings.",
        box: "BEREKENAARS BLAD ALLEENLIK GEBRUIKLIK OP VOORWAARDE VAN INDEMNITEIT.",
        go: "berekenaars >>>"
      },
      calculators: {
        title: "koste berekenaars",
        docTitle: "koste berekenaars — bos",
        lede: "Drie beramers sit agter een vrywaring: konstruksie, argiteksfooie, en ’n gekombineerde projekoog.",
        box: "INDEMNITEIT: ALLE INLIGTING HIER WORD VERSAF ONDER VOORWAARDE DAT ’N GEREGISTREERDE BOUREKENAAR GENADER MOET WORD VIR WERKLIKE BOUKOSTE BERAMINGE. bos is nie verantwoordelik vir besluite uit hierdie syfers nie. Pryse is slegs aanduidend.",
        listTitle: "lys van berekenaars",
        items: [
          { id: "constructionCalc", label: "boukoste berekenaar >>>", d: "Aanduidende konstruksiekoste uit area, tipe, en ’n luuksheidsfaktor, in die gees van gepubliseerde kostedata (AECOM / Stats SA CPAP-konteks)." },
          { id: "feesCalc", label: "argitektonies dienste berekenaar >>>", d: "GEEN AFSLAE. Projekkoste-gebaseer, tyd-gebaseer, of ArchiTAD-taakgebaseer." },
          { id: "projectCalc", label: "projek koste berekenaar >>>", d: "Rol bou, fooie, grond, en toeslae in een omhulsel." }
        ]
      },
      constructionCalc: {
        title: "boukoste berekenaar",
        docTitle: "boukoste berekenaar — bos",
        guideTitle: "gebruikersgids",
        guide: "Vul erf-grootte, boulyne as ’n eenvoudige beperking, geboutipe, vloeroppervlakte, en ’n luuksheidsfaktor in. Die model se tariewe is vasgesluit. Uitset is ’n reeks, nie ’n tender nie.",
        box: "INDEMNITEIT: ALLE INLIGTING HIER WORD VERSAF ONDER VOORWAARDE DAT ’N GEREGISTREERDE BOUREKENAAR GENADER MOET WORD VIR WERKLIKE BOUKOSTE BERAMINGE."
      },
      feesCalc: {
        title: "argitektoniese dienste berekenaar",
        docTitle: "argiteksfooie — bos",
        lede: "Fooie kan op drie maniere gelees word. Geen hiervan is ’n afslag nie, en niks vervang ’n getekende kliënt–argitek ooreenkoms nie.",
        box: "INDEMNITEIT: Fooi-uitsette is opvoedkundig. SACAP-riglyne, tydrekords, en die werklike brief regeer ’n ware aanstelling."
      },
      projectCalc: {
        title: "projek koste berekenaar",
        docTitle: "projek koste berekenaar — bos",
        lede: "Kombineer ’n aanduidende boukoste met grond, professionele toeslae, munisipale en finansieringsplekhouers.",
        box: "INDEMNITEIT: ’n Totale projeksyfer op hierdie blad is ’n beplanningsomhulsel, nie ’n bankbare begroting nie."
      },
      knowledge: {
        title: "konstruksie kennis",
        docTitle: "kennis — bos",
        lede: "Aantekeninge oor begroting en die waarde van ontwerp. Hierdie indeks moet soos ’n ateljee-blog groei: gedateer, uitbrei-baar, en maklik om in content.js te wysig.",
        articles: [
          { id: "articleBudget", title: "konstruksie begroting", date: "deur CRvS, 2026/06/21", d: "Hoe ’n omhulsel gestel word voordat tekeninge voorgee om presies te wees." },
          { id: "articleDesign", title: "ontwerp proses", date: "deur CRvS, 2026/06/21", d: "Hekke, tekeninge, en hoekom volgorde gehalte én geld beskerm." },
          { id: "articlePricing", title: "konstruksie pryse", date: "deur CRvS, 2026/06/21", d: "Tariewe, indekse, en waarvoor CPAP is." },
          { id: "articleProcess", title: "konstruksie proses", date: "deur CRvS, 2026/06/21", d: "Van terrein-oorhandiging tot afsluiting, in gewone taal." }
        ]
      },
      articles: {
        articleBudget: {
          title: "konstruksie begroting",
          date: "deur CRvS, 2026/06/21",
          intro: "’n Begroting is ’n ontwerpbrief. As dit ’n wens is eerder as ’n beperking, sal die tekeninge ’n gebou uitvind wat die kliënt nie kan bewoon nie.",
          sections: [
            { t: "inleiding", d: "Stel eers die totale projek-omhulsel: grond alreeds bestee, professionele fooie, munisipale kostes, meubels, kontingensie, en eers dan wat vir die aannemer oorbly." },
            { t: "doel van ’n begroting", d: "Die doel is nie om ’n lener met ’n lae syfer te beïndruk nie. Dit is om besluite eerlik te hou wanneer ’n mooi venster verskyn." },
            { t: "metode", d: "Gebruik ’n tarief per vierkante meter as ’n verstandigheidstoets, daarna ’n bourekenaar vir enigiets wat jy wil bou." }
          ]
        },
        articleDesign: {
          title: "ontwerp proses",
          date: "deur CRvS, 2026/06/21",
          intro: "Proses is hoe ’n ateljee chaos weier. Elke SACAP-stadium het take, lewerbares, en ’n fooi-deel.",
          sections: [
            { t: "hekke", d: "Moenie ’n konsep tender nie. Moenie ’n skets bou nie. Skriftelike goedkeuring aan die einde van elke stadium is goedkoper as charme op die terrein." },
            { t: "tekeninge as besluite", d: "’n Tekening is ’n rekord van ’n besluit oor geld, lig, en onderhoud." }
          ]
        },
        articlePricing: {
          title: "konstruksie pryse",
          date: "deur CRvS, 2026/06/21",
          intro: "Gepubliseerde kostedata (insluitend AECOM-tipe oorsigte) en Stats SA CPAP-indekse beskryf ’n mark, nie jou erf nie.",
          sections: [
            { t: "tariewe", d: "’n Luukse huis en ’n pakhuis deel nie ’n tarief nie. Ligging, toegang, geotekniek, en verkrygingsroete skuif koste so veel as teëls." },
            { t: "eskalsie", d: "CPAP bestaan omdat ’n prys vandag nie ’n prys by voltooiing is nie." }
          ]
        },
        articleProcess: {
          title: "konstruksie proses",
          date: "deur CRvS, 2026/06/21",
          intro: "Konstruksie is ’n volgorde van inspeksies, inligting, en geld.",
          sections: [
            { t: "terrein", d: "Oorhandiging, uitzet, en die eerste inspeksies besluit of die tekeninge die grond oorleef." },
            { t: "afsluiting", d: "Snags, handleidings, en as-geboues is hoe die gebou oor tien jaar onderhou kan word." }
          ]
        }
      },
      portfolio: {
        title: "portefeulje",
        docTitle: "portefeulje — bos",
        lede: "Geselekteerde beelde terwyl die lewende projeklys gewysig word. Vervang byskrifte in content.js.",
        items: [
          { img: "hero-glass.jpg", cap: "dop-studies — lig en terugkeer" },
          { img: "hero-cantilever.jpg", cap: "siviele massa en skadu" },
          { img: "hero-brick.jpg", cap: "baksteen-skerm, tekstuur op armlengte" },
          { img: "about-stone.jpg", cap: "blywende stof" },
          { img: "landscape-ruins.jpg", cap: "landskap en ruïne as onderwysers" },
          { img: "img_023.jpg", cap: "werkstekeninge" }
        ]
      },
      contact: {
        title: "kontak besonderhede",
        docTitle: "kontak — bos",
        lede: "Kontakbesonderhede word eers ná ’n kort menslike toets gewys, en word op die skerm geteken eerder as as kopieerbare teks gepubliseer.",
        prompt: "Wat is",
        show: "wys besonderhede",
        wrong: "Daardie toets het nie geslaag nie. Probeer weer."
      }
    }
  },
  contact: {
    phone: [43, 50, 55, 49, 50, 32, 51, 52, 53, 32, 54, 55, 56, 57],
    email: [105, 110, 102, 111, 64, 98, 111, 115, 45, 97, 114, 99, 104, 46, 99, 111, 46, 122, 97],
    cityEn: "Bryanston, Johannesburg",
    cityAf: "Bryanston, Johannesburg",
    labels: {
      en: { phone: "number", email: "email", address: "address" },
      af: { phone: "nommer", email: "epos", address: "adres" }
    }
  },
  rates: Object.freeze({
    types: Object.freeze({
      house: 16500,
      townhouse: 14500,
      apartment: 18500,
      office: 21000,
      warehouse: 9000,
      retail: 17500
    }),
    luxury: Object.freeze({ 1: 0.85, 2: 1, 3: 1.25, 4: 1.6 }),
    feePct: Object.freeze({ house: 0.085, commercial: 0.07, industrial: 0.055 }),
    principalPerHour: 1850,
    technologistPerHour: 950,
    tasks: Object.freeze([
      { id: "inception", hours: 16, labelEn: "inception & brief", labelAf: "aanvang & brief",
        descEn: "Site visit, brief workshop, budget envelope, and a written scope of appointment.",
        descAf: "Terreinbesoek, brief-werkswinkel, begrotingsomhulsel, en ’n geskrewe omvang van aanstelling." },
      { id: "concept", hours: 40, labelEn: "concept drawings", labelAf: "konseptekeninge",
        descEn: "Sketch plans, massing and character studies tested against the planning envelope.",
        descAf: "Sketsplanne, massa- en karakterstudies, getoets teen die beplanningsomhulsel." },
      { id: "developed", hours: 64, labelEn: "design development", labelAf: "ontwerpontwikkeling",
        descEn: "Plans, sections and elevations fixed with the engineers; materials and envelope resolved.",
        descAf: "Planne, snitte en aansigte vasgestel saam met die ingenieurs; materiale en omhulsel opgelos." },
      { id: "docs", hours: 80, labelEn: "documentation", labelAf: "dokumentasie",
        descEn: "Council submission drawings, construction details and schedules for pricing.",
        descAf: "Raadsvoorleggingstekeninge, konstruksiedetails en skedules vir prysbepaling." },
      { id: "council", hours: 24, labelEn: "council facilitation", labelAf: "raad-fasilitering",
        descEn: "Submitting, tracking and answering municipal comments until approval.",
        descAf: "Indiening, opvolging en beantwoording van munisipale kommentaar tot goedkeuring." },
      { id: "inspect", hours: 48, labelEn: "construction inspections", labelAf: "konstruksie-inspeksies",
        descEn: "Scheduled site inspections, site instructions and answering contractor queries.",
        descAf: "Geskeduleerde terreininspeksies, terreininstruksies en antwoorde op kontrakteursnavrae." }
    ].map(Object.freeze))
  })
};

/* Lock the calculator model: rates and contact codes cannot be swapped from the browser console.
   Change them here in this file only. */
(function lock(B) {
  function deepFreeze(o) {
    Object.getOwnPropertyNames(o).forEach(function (k) {
      if (o[k] && typeof o[k] === "object") deepFreeze(o[k]);
    });
    return Object.freeze(o);
  }
  ["rates", "contact"].forEach(function (key) {
    var value = deepFreeze(B[key]);
    Object.defineProperty(B, key, { value: value, writable: false, configurable: false, enumerable: true });
  });
  Object.defineProperty(window, "BOS", { value: B, writable: false, configurable: false });
})(window.BOS);
