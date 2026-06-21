/**
 * Shared logic for both pages.
 * - index.html   -> renderHome()
 * - product.html -> renderProduct()
 *
 * Product catalogs are bilingual datasheets rebuilt in HTML/CSS to match
 * the original printed design. Tapping a product photo opens a lightbox.
 */

const LOGO = "assets/img/products/sina-logo.jpg";

applyLangToDocument(getLang());

document.addEventListener("DOMContentLoaded", () => {
  setupLangToggle();
  setupLightbox();
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

function renderFooter() {
  const f = document.getElementById("site-footer");
  if (!f) return;
  f.innerHTML = `
    <strong class="footer-company">${escapeHtml(t("company"))}</strong>
    <span class="footer-sub">${escapeHtml(t("companySub"))}</span>
    <a class="footer-link" href="https://www.faralab.com" target="_blank" rel="noopener">www.faralab.com</a>
    <span class="footer-copy">© ${new Date().getFullYear()} — ${escapeHtml(t("footer"))}</span>
  `;
}

/* ------------------------------- HOME ------------------------------- */

function renderHome() {
  document.title = t("siteTitle");
  setText("brand-title", t("siteTitle"));
  setText("site-title", t("siteTitle"));
  setText("site-subtitle", t("siteSubtitle"));
  renderFooter();

  const grid = document.getElementById("catalog-grid");
  grid.innerHTML = "";

  CATALOGS.forEach((c) => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `product.html?id=${encodeURIComponent(c.id)}`;
    card.style.setProperty("--accent", c.accent || "#2563eb");

    const cover = c.cover || (c.sheets && c.sheets[0] && c.sheets[0].photo) || "";
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
    const count =
      c.sheets && c.sheets.length > 1
        ? `<span class="card-badge">${c.sheets.length} ${escapeHtml(t("models"))}</span>`
        : "";
    body.innerHTML = `
      <h2 class="card-title">${escapeHtml(tx(c.name))}</h2>
      <p class="card-tagline">${escapeHtml(tx(c.tagline))}</p>
      <span class="card-cta">${escapeHtml(t("viewCatalog"))} ${count}<span class="arrow">→</span></span>
    `;

    card.append(media, body);
    grid.appendChild(card);
  });
}

/* ------------------------------ PRODUCT ----------------------------- */

function renderProduct() {
  renderFooter();
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

  const reader = document.createElement("div");
  reader.className = "reader";
  (catalog.sheets || []).forEach((sheet) => {
    reader.insertAdjacentHTML("beforeend", renderSheet(sheet));
  });
  root.appendChild(reader);

  // Wire up lightbox on the rendered photos.
  reader.querySelectorAll(".sheet-photo img").forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });
}

/* ----------------------------- DATASHEET ---------------------------- */

function renderSheet(sheet) {
  const features = (sheet.features || [])
    .map((f) => `<li>${escapeHtml(tx(f))}</li>`)
    .join("");

  const apps = (sheet.applications || [])
    .map((a) => `<li>${escapeHtml(tx(a))}</li>`)
    .join("");

  let extra = "";
  if (sheet.specs) extra = renderSpecs(sheet.specs);
  else if (sheet.benefits) {
    const items = sheet.benefits.map((b) => `<li>${escapeHtml(tx(b))}</li>`).join("");
    extra = `
      <div class="sheet-benefits">
        <h3 class="sheet-h">${escapeHtml(t("benefits"))}</h3>
        <ul class="bullets">${items}</ul>
      </div>`;
  }

  const banner = sheet.banner
    ? `<div class="sheet-banner">${escapeHtml(tx(sheet.banner))}</div>`
    : "";

  return `
  <article class="sheet">
    <div class="sheet-head">
      <img class="sheet-logo" src="${LOGO}" alt="SINA" />
      <div class="sheet-band">
        <h2 class="sheet-title">${escapeHtml(tx(sheet.title))}</h2>
        <p class="sheet-subtitle">${escapeHtml(tx(sheet.subtitle))}</p>
      </div>
    </div>

    <div class="sheet-body">
      <div class="sheet-features">
        <h3 class="sheet-h">${escapeHtml(t("keyFeatures"))}</h3>
        <ul class="bullets">${features}</ul>
      </div>
      <div class="sheet-photo">
        <img src="${sheet.photo}" alt="${escapeHtml(tx(sheet.title))}" loading="lazy" />
        <div class="seal">
          <span class="seal-top">${escapeHtml(t("warrantyTop"))}</span>
          <span class="seal-bottom">${escapeHtml(t("warrantyBottom"))}</span>
        </div>
      </div>
    </div>

    <div class="sheet-apps">
      <h3 class="sheet-h">${escapeHtml(t("applications"))}</h3>
      <ul class="apps-list">${apps}</ul>
    </div>

    ${extra}
    ${banner}

    <div class="sheet-foot">
      <a href="https://www.faralab.com" target="_blank" rel="noopener">www.faralab.com</a>
    </div>
  </article>`;
}

function renderSpecs(specs) {
  const head = specs.columns
    .map((c) => `<th>${escapeHtml(tx(c))}</th>`)
    .join("");
  const body = specs.rows
    .map(
      (row) =>
        `<tr>${row.map((v) => `<td>${escapeHtml(tx(v))}</td>`).join("")}</tr>`
    )
    .join("");
  return `
    <div class="sheet-specs">
      <h3 class="sheet-h">${escapeHtml(t("technicalSpecs"))}</h3>
      <div class="spec-scroll">
        <table class="spec-table">
          <thead><tr>${head}</tr></thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    </div>`;
}

/* ----------------------------- LIGHTBOX ----------------------------- */

function setupLightbox() {
  if (document.getElementById("lightbox")) return;
  const lb = document.createElement("div");
  lb.id = "lightbox";
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="lightbox-close" aria-label="close">×</button>
    <img class="lightbox-img" alt="" />`;
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.classList.contains("lightbox-close")) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
  document.body.appendChild(lb);
}

function openLightbox(src, alt) {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.querySelector(".lightbox-img").src = src;
  lb.querySelector(".lightbox-img").alt = alt || "";
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.remove("open");
  document.body.style.overflow = "";
}

/* ------------------------------ HELPERS ----------------------------- */

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
