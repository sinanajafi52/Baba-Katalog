# Baba-Katalog — کاتالوگ محصولات / Product Catalogs

یک سایت ساده، سریع و دوزبانه (فارسی/انگلیسی) برای نمایش کاتالوگ محصولات.
مشتری با اسکن QR Code وارد صفحه اصلی می‌شود، محصول دلخواهش را انتخاب می‌کند
و کاتالوگ آن محصول به‌صورت کاملاً HTML/CSS نمایش داده می‌شود.

A simple, fast, bilingual (Persian/English) site for showing product catalogs.
A customer scans a QR code, lands on the home page, picks a product, and sees
that product's catalog rendered fully in HTML/CSS.

---

## ساختار پروژه / Project structure

```
index.html              # صفحه اصلی (مقصد QR Code) — لیست محصولات
product.html            # صفحه نمایش کاتالوگ یک محصول (product.html?id=...)
assets/
  css/styles.css        # استایل‌ها
  js/i18n.js            # متن‌های دوزبانه و مدیریت زبان
  js/catalogs.js        # ★ داده کاتالوگ‌ها — اینجا را ویرایش کنید
  js/main.js           # منطق رندر صفحات
  img/<id>/            # عکس‌های هر کاتالوگ
pdf/                    # فایل‌های PDF اصلی را اینجا بگذارید
```

---

## افزودن کاتالوگ جدید / Adding a new catalog

۱. فایل PDF را در پوشه `pdf/` بگذارید.
۲. عکس‌های صفحات (در صورت نیاز) را در `assets/img/<id>/` قرار دهید.
۳. در فایل `assets/js/catalogs.js` یک آیتم جدید اضافه کنید:

```js
{
  id: "my-product",                       // در URL استفاده می‌شود: product.html?id=my-product
  name: { fa: "نام محصول", en: "Product name" },
  tagline: { fa: "توضیح کوتاه", en: "Short description" },
  accent: "#2563eb",                       // رنگ اصلی کارت
  cover: "assets/img/my-product/cover.jpg",// اختیاری
  pages: [
    {
      image: "assets/img/my-product/page-1.jpg", // اختیاری
      title: { fa: "عنوان", en: "Title" },
      description: { fa: "متن...", en: "Text..." },
      features: { fa: ["ویژگی ۱"], en: ["Feature 1"] }
    }
  ]
}
```

> اگر `cover` یا `image` خالی باشد، یک placeholder رنگی خودکار نمایش داده می‌شود.

---

## اجرای محلی / Run locally

چون فقط فایل‌های استاتیک هستند، کافی است `index.html` را در مرورگر باز کنید،
یا یک سرور ساده اجرا کنید:

```bash
python3 -m http.server 8000
# سپس باز کنید: http://localhost:8000
```

---

## QR Code

پس از اینکه سایت را روی یک هاست (مثلاً GitHub Pages) منتشر کردید،
یک QR Code بسازید که به آدرس `index.html` اشاره کند.
