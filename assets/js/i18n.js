/**
 * Bilingual UI strings + language handling.
 * Default language is Persian (fa, RTL). Toggle switches to English (en, LTR).
 * The choice is remembered in localStorage.
 */
const I18N = {
  fa: {
    siteTitle: "کاتالوگ محصولات",
    siteSubtitle: "یک محصول را انتخاب کنید تا کاتالوگ آن را ببینید",
    chooseProduct: "انتخاب محصول",
    viewCatalog: "مشاهده کاتالوگ",
    back: "بازگشت به فهرست",
    page: "صفحه",
    of: "از",
    downloadPdf: "دانلود فایل PDF",
    notFound: "کاتالوگ مورد نظر پیدا نشد",
    backHome: "بازگشت به صفحه اصلی",
    langButton: "EN",
    footer: "تمامی حقوق محفوظ است · گروه صنعتی سینا",
  },
  en: {
    siteTitle: "Product Catalogs",
    siteSubtitle: "Select a product to view its catalog",
    chooseProduct: "Choose a product",
    viewCatalog: "View catalog",
    back: "Back to list",
    page: "Page",
    of: "of",
    downloadPdf: "Download PDF",
    notFound: "Catalog not found",
    backHome: "Back to home",
    langButton: "فا",
    footer: "All rights reserved · Sina Industrial Group",
  },
};

const LANGS = ["fa", "en"];

function getLang() {
  const saved = localStorage.getItem("lang");
  return LANGS.includes(saved) ? saved : "fa";
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLangToDocument(lang);
}

function applyLangToDocument(lang) {
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
}

function t(key) {
  return I18N[getLang()][key] || key;
}

/** Pick the right side of a bilingual { fa, en } value. */
function tx(obj) {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  return obj[getLang()] ?? obj.fa ?? obj.en ?? "";
}
