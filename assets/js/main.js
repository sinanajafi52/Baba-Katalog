/**
 * Shared logic for both pages.
 * - index.html   -> renderHome()
 * - product.html -> renderProduct()
 *
 * Catalog pages are images rendered from the original PDFs, displayed
 * in a clean, mobile-friendly reader.
 */

// Apply the saved language as early as possible.
applyLangToDocument(getLang());

document.addEventListener("DOMContentLoaded", () => {
  setupLangToggle();
  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "product") renderProduct();
});

function rerender() {
  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "product") renderProduct();
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = t("langButton");
}

function setupLangToggle() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  btn.textContent = t("langButton");
  btn.addEventListener("click", () => {
    setLang(getLang() === "fa" ? "en" : "fa");
    rerender();
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

    const cover = c.cover || (c.pages && c.pages[0]) || "";
    const media = document.createElement("div");
    media.className = "card-media";
    if (cover) {
      const img = document.createElement("img");
      img.src = cover;
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
  setText("back-link", t("back"));
  const backLink = document.getElementById("back-link");
  if (backLink) backLink.setAttribute("href", "index.html");

  const id = new URLSearchParams(location.search).get("id");
  const catalog = CATALOGS.find((c) => c.id === id);

  const root = document.getElementById("product-root");
  root.innerHTML = "";

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

  // Hero: title, tagline, optional PDF download.
  const hero = document.createElement("header");
  hero.className = "product-hero";
  const pdfBtn = catalog.pdf
    ? `<a class="btn pdf-btn" href="${encodeURI(catalog.pdf)}" download>
         <span class="pdf-icon">⤓</span> ${escapeHtml(t("downloadPdf"))}
       </a>`
    : "";
  hero.innerHTML = `
    <h1 class="product-title">${escapeHtml(tx(catalog.name))}</h1>
    <p class="product-tagline">${escapeHtml(tx(catalog.tagline))}</p>
    ${pdfBtn}
  `;
  root.appendChild(hero);

  // Page images stacked vertically (the catalog reader).
  const reader = document.createElement("div");
  reader.className = "reader";

  (catalog.pages || []).forEach((src, i) => {
    const fig = document.createElement("figure");
    fig.className = "reader-page";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `${tx(catalog.name)} — ${t("page")} ${i + 1}`;
    img.loading = i < 2 ? "eager" : "lazy";

    const cap = document.createElement("figcaption");
    cap.className = "reader-counter";
    cap.textContent = `${t("page")} ${i + 1} ${t("of")} ${catalog.pages.length}`;

    fig.append(img, cap);
    reader.appendChild(fig);
  });

  root.appendChild(reader);
}

/* ------------------------------ HELPERS ----------------------------- */

/** Colored placeholder used only if an image is missing. */
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

function shade(hex, percent) {
  const n = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const r = Math.max(0, Math.min(255, (n >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + amt));
  const b = Math.max(0, Math.min(255, (n & 0xff) + amt));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

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
