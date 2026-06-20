/**
 * Shared logic for both pages.
 * - index.html  -> renderHome()
 * - product.html -> renderProduct()
 */

// Apply the saved language as early as possible.
applyLangToDocument(getLang());

document.addEventListener("DOMContentLoaded", () => {
  setupLangToggle();
  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "product") renderProduct();
});

/** Build a colored placeholder when no real image is provided. */
function placeholder(label, accent) {
  const el = document.createElement("div");
  el.className = "placeholder";
  el.style.background = `linear-gradient(135deg, ${accent || "#4b5563"}, ${shade(
    accent || "#4b5563",
    -25
  )})`;
  el.textContent = (label || "?").trim().charAt(0).toUpperCase();
  return el;
}

/** Lighten/darken a hex color by percent. */
function shade(hex, percent) {
  const n = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const r = Math.max(0, Math.min(255, (n >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + amt));
  const b = Math.max(0, Math.min(255, (n & 0xff) + amt));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function setupLangToggle() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  btn.textContent = t("langButton");
  btn.addEventListener("click", () => {
    setLang(getLang() === "fa" ? "en" : "fa");
    // Re-render in place instead of a full reload.
    const page = document.body.dataset.page;
    if (page === "home") renderHome();
    if (page === "product") renderProduct();
    btn.textContent = t("langButton");
  });
}

/* ------------------------------- HOME ------------------------------- */

function renderHome() {
  document.title = t("siteTitle");
  setText("brand-title", t("siteTitle"));
  setText("site-title", t("siteTitle"));
  setText("site-subtitle", t("siteSubtitle"));
  setText("footer-text", t("footer"));

  const grid = document.getElementById("catalog-grid");
  grid.innerHTML = "";

  CATALOGS.forEach((c) => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `product.html?id=${encodeURIComponent(c.id)}`;
    card.style.setProperty("--accent", c.accent || "#2563eb");

    const media = document.createElement("div");
    media.className = "card-media";
    if (c.cover) {
      const img = document.createElement("img");
      img.src = c.cover;
      img.alt = tx(c.name);
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      media.appendChild(placeholder(tx(c.name), c.accent));
    }

    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = `
      <h2 class="card-title">${escapeHtml(tx(c.name))}</h2>
      <p class="card-tagline">${escapeHtml(tx(c.tagline))}</p>
      <span class="card-cta">${escapeHtml(t("viewCatalog"))} <span class="arrow">→</span></span>
    `;

    card.append(media, body);
    grid.appendChild(card);
  });
}

/* ------------------------------ PRODUCT ----------------------------- */

function renderProduct() {
  setText("footer-text", t("footer"));
  const id = new URLSearchParams(location.search).get("id");
  const catalog = CATALOGS.find((c) => c.id === id);

  const root = document.getElementById("product-root");
  root.innerHTML = "";

  // Back link + language are in the header; wire the back label.
  setText("back-link", t("back"));
  const backLink = document.getElementById("back-link");
  if (backLink) backLink.setAttribute("href", "index.html");

  if (!catalog) {
    document.title = t("notFound");
    root.innerHTML = `
      <div class="empty-state">
        <h1>${escapeHtml(t("notFound"))}</h1>
        <a class="btn" href="index.html">${escapeHtml(t("backHome"))}</a>
      </div>`;
    return;
  }

  document.title = tx(catalog.name);
  root.style.setProperty("--accent", catalog.accent || "#2563eb");

  // Hero
  const hero = document.createElement("header");
  hero.className = "product-hero";
  hero.innerHTML = `
    <h1 class="product-title">${escapeHtml(tx(catalog.name))}</h1>
    <p class="product-tagline">${escapeHtml(tx(catalog.tagline))}</p>
  `;
  root.appendChild(hero);

  // Pages
  const pagesWrap = document.createElement("div");
  pagesWrap.className = "pages";

  catalog.pages.forEach((p, i) => {
    const section = document.createElement("section");
    section.className = "catalog-page";

    const media = document.createElement("div");
    media.className = "page-media";
    if (p.image) {
      const img = document.createElement("img");
      img.src = p.image;
      img.alt = tx(p.title);
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      media.appendChild(placeholder(tx(catalog.name), catalog.accent));
    }

    const content = document.createElement("div");
    content.className = "page-content";

    let featuresHtml = "";
    const feats = p.features ? tx(p.features) : [];
    if (Array.isArray(feats) && feats.length) {
      featuresHtml =
        '<ul class="features">' +
        feats.map((f) => `<li>${escapeHtml(f)}</li>`).join("") +
        "</ul>";
    }

    content.innerHTML = `
      <span class="page-counter">${escapeHtml(t("page"))} ${i + 1} ${escapeHtml(
      t("of")
    )} ${catalog.pages.length}</span>
      <h2 class="page-title">${escapeHtml(tx(p.title))}</h2>
      <p class="page-description">${escapeHtml(tx(p.description))}</p>
      ${featuresHtml}
    `;

    section.append(media, content);
    pagesWrap.appendChild(section);
  });

  root.appendChild(pagesWrap);
}

/* ------------------------------ HELPERS ----------------------------- */

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
