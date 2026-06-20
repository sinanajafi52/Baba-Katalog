/**
 * Catalog data — Sina laboratory & bioprocess equipment.
 * -------------------------------------------------------------
 * Each catalog's pages are high-resolution images rendered from the
 * original PDF, so the professional design is preserved exactly.
 *
 * Bilingual fields use { fa, en }. The catalog page images themselves
 * are the original Persian artwork.
 *
 * To add/replace a catalog:
 *   1. Put page images in assets/img/<id>/page-1.jpg, page-2.jpg, ...
 *   2. Put the source PDF in pdf/<id>.pdf
 *   3. Add an entry below. `pageImages(id, n)` builds the page list.
 */

function pageImages(id, count) {
  return Array.from(
    { length: count },
    (_, i) => `assets/img/${id}/page-${i + 1}.jpg`
  );
}

const CATALOGS = [
  {
    id: "incubator",
    name: { fa: "انکوباتور CO₂ سینا", en: "Sina CO₂ Incubator" },
    tagline: {
      fa: "یکنواختی دما و CO₂، یک سال گارانتی و ۱۰ سال خدمات پس از فروش",
      en: "Uniform temperature & CO₂ control, 1-year warranty and 10 years of after-sales service",
    },
    accent: "#1d4ed8",
    pdf: "pdf/incubator.pdf",
    pages: pageImages("incubator", 4),
  },
  {
    id: "roller-bottle-incubator",
    name: {
      fa: "انکوباتور رولینگ باتل سینا",
      en: "Sina Roller Bottle Incubator",
    },
    tagline: {
      fa: "همگام با کشت سلول، در کیفیت برتر غوطه‌ور شوید",
      en: "Keep pace with cell culture — immerse yourself in superior quality",
    },
    accent: "#ea580c",
    pdf: "pdf/roller-bottle-incubator.pdf",
    pages: pageImages("roller-bottle-incubator", 7),
  },
  {
    id: "orbital-shaker",
    name: { fa: "اوربیتال شیکر سینا", en: "Sina Orbital Shaker" },
    tagline: {
      fa: "هماهنگی کامل برای نتایج بی‌نظیر",
      en: "Perfect harmony for outstanding results",
    },
    accent: "#0891b2",
    pdf: "pdf/orbital-shaker.pdf",
    pages: pageImages("orbital-shaker", 6),
  },
  {
    id: "single-use-bioreactor",
    name: {
      fa: "بیوراکتور یکبارمصرف سینا",
      en: "Sina Single-Use Bioreactor",
    },
    tagline: {
      fa: "رشد سلول با کارآیی بالا، انجام کارهای زیست‌فناورانه با حداقل پیچیدگی",
      en: "High-efficiency cell growth and biotechnology workflows with minimal complexity",
    },
    accent: "#059669",
    pdf: "pdf/single-use-bioreactor.pdf",
    pages: pageImages("single-use-bioreactor", 8),
  },
  {
    id: "peristaltic-pump",
    name: { fa: "پمپ پریستالتیک سینا", en: "Sina Peristaltic Pump" },
    tagline: {
      fa: "جریان پایدار، دقت بالا و حفظ بهداشت در آزمایشگاه و کارخانه",
      en: "Stable flow, high precision and hygiene for lab and factory",
    },
    accent: "#7c3aed",
    pdf: "pdf/peristaltic-pump.pdf",
    pages: pageImages("peristaltic-pump", 7),
  },
];
