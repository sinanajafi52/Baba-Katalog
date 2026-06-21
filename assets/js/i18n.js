/**
 * Bilingual UI strings + language handling.
 * Default language is Persian (fa, RTL). Toggle switches to English (en, LTR).
 * The choice is remembered in localStorage.
 */
const I18N = {
  fa: {
    siteTitle: "کاتالوگ محصولات سینا",
    siteSubtitle: "یک محصول را انتخاب کنید تا کاتالوگ آن را ببینید",
    viewCatalog: "مشاهده کاتالوگ",
    models: "مدل",
    back: "بازگشت به فهرست",
    keyFeatures: "ویژگی‌های کلیدی",
    applications: "کاربردها",
    technicalSpecs: "مشخصات فنی",
    benefits: "مزایا",
    warrantyTop: "۲ سال",
    warrantyBottom: "گارانتی",
    notFound: "کاتالوگ مورد نظر پیدا نشد",
    backHome: "بازگشت به صفحه اصلی",
    langButton: "EN",
    company: "شرکت دانش‌بنیان فرآیند پردیس سینا",
    companySub: "تولیدکنندهٔ تجهیزات تحقیقاتی و بیوتکنولوژی",
    footer: "تمامی حقوق محفوظ است",
  },
  en: {
    siteTitle: "Sina Product Catalogs",
    siteSubtitle: "Select a product to view its catalog",
    viewCatalog: "View catalog",
    models: "models",
    back: "Back to list",
    keyFeatures: "Key Features",
    applications: "Applications",
    technicalSpecs: "Technical Specs",
    benefits: "Benefits",
    warrantyTop: "2 Year",
    warrantyBottom: "Warranty",
    notFound: "Catalog not found",
    backHome: "Back to home",
    langButton: "فا",
    company: "Sina Pardis Process Knowledge-Based Co.",
    companySub: "Manufacturer of research & biotechnology equipment",
    footer: "All rights reserved",
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
