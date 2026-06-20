/**
 * Catalog data
 * -------------------------------------------------------------
 * Each entry is one product catalog. Everything is bilingual:
 *   { fa: "...", en: "..." }
 *
 * To add a new catalog:
 *   1. Copy one of the objects below.
 *   2. Give it a unique `id` (used in the URL: product.html?id=YOUR_ID).
 *   3. Fill in the bilingual fields.
 *   4. Add as many `pages` as the product needs.
 *
 * `cover` and `image` are optional. If you leave them empty,
 * a colored placeholder is shown automatically.
 */
const CATALOGS = [
  {
    id: "sample-1",
    name: { fa: "محصول نمونه ۱", en: "Sample Product 1" },
    tagline: {
      fa: "توضیح کوتاه درباره این کاتالوگ",
      en: "A short description of this catalog",
    },
    accent: "#2563eb",
    cover: "", // e.g. "assets/img/sample-1/cover.jpg"
    pages: [
      {
        image: "", // e.g. "assets/img/sample-1/page-1.jpg"
        title: { fa: "معرفی محصول", en: "Product Overview" },
        description: {
          fa: "اینجا متن معرفی محصول قرار می‌گیرد. بعد از آپلود PDF، محتوای واقعی جایگزین می‌شود.",
          en: "Product introduction goes here. Real content replaces this after the PDF is uploaded.",
        },
        features: {
          fa: ["ویژگی اول", "ویژگی دوم", "ویژگی سوم"],
          en: ["First feature", "Second feature", "Third feature"],
        },
      },
      {
        image: "",
        title: { fa: "مشخصات فنی", en: "Specifications" },
        description: {
          fa: "جدول یا فهرست مشخصات فنی محصول در این صفحه قرار می‌گیرد.",
          en: "The technical specifications list/table goes on this page.",
        },
        features: {
          fa: ["مشخصه ۱: مقدار", "مشخصه ۲: مقدار", "مشخصه ۳: مقدار"],
          en: ["Spec 1: value", "Spec 2: value", "Spec 3: value"],
        },
      },
    ],
  },
  {
    id: "sample-2",
    name: { fa: "محصول نمونه ۲", en: "Sample Product 2" },
    tagline: {
      fa: "توضیح کوتاه درباره این کاتالوگ",
      en: "A short description of this catalog",
    },
    accent: "#059669",
    cover: "",
    pages: [
      {
        image: "",
        title: { fa: "معرفی محصول", en: "Product Overview" },
        description: {
          fa: "متن معرفی محصول دوم.",
          en: "Introduction text for the second product.",
        },
        features: {
          fa: ["ویژگی اول", "ویژگی دوم"],
          en: ["First feature", "Second feature"],
        },
      },
    ],
  },
  {
    id: "sample-3",
    name: { fa: "محصول نمونه ۳", en: "Sample Product 3" },
    tagline: {
      fa: "توضیح کوتاه درباره این کاتالوگ",
      en: "A short description of this catalog",
    },
    accent: "#d97706",
    cover: "",
    pages: [
      {
        image: "",
        title: { fa: "معرفی محصول", en: "Product Overview" },
        description: {
          fa: "متن معرفی محصول سوم.",
          en: "Introduction text for the third product.",
        },
        features: {
          fa: ["ویژگی اول", "ویژگی دوم", "ویژگی سوم", "ویژگی چهارم"],
          en: ["First feature", "Second feature", "Third feature", "Fourth feature"],
        },
      },
    ],
  },
];
