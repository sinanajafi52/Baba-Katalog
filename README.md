# Baba-Katalog — کاتالوگ محصولات سینا / Sina Product Catalogs

سایت دوزبانه (فارسی/انگلیسی) برای نمایش کاتالوگ محصولات شرکت دانش‌بنیان
فرآیند پردیس سینا. مشتری با اسکن QR Code وارد صفحه اصلی می‌شود، محصول
دلخواهش را انتخاب می‌کند و **دیتاشیت** آن محصول را به‌صورت تحت وب می‌بیند.

A bilingual (Persian/English) site for Sina Pardis Process product catalogs.
A customer scans a QR code, lands on the home page, picks a product and views
that product's **datasheet** in the browser.

> دیتاشیت‌ها از روی نسخهٔ انگلیسی اصلی، به‌صورت کاملاً HTML/CSS و دوزبانه
> بازسازی شده‌اند تا همان طراحی حفظ شود ولی متن فارسی و قابل انتخاب باشد.
>
> The datasheets are rebuilt from the original English version fully in
> HTML/CSS and bilingual, preserving the design while the Persian text is
> native and selectable.

---

## محصولات / Products

| id | فارسی | English |
|----|-------|---------|
| `incubator` | انکوباتور CO₂ سینا | Sina CO₂ Incubator |
| `roller-bottle-incubator` | انکوباتور رولینگ باتل سینا | Sina Rolling Bottle Incubator |
| `bioreactor` | بیوراکتور یکبارمصرف سینا | Sina Single-Use Bioreactor |
| `peristaltic-pump` | پمپ‌های پریستالتیک سینا (۴ مدل) | Sina Peristaltic Pumps (4 models) |

---

## ساختار پروژه / Project structure

```
index.html              # صفحه اصلی (مقصد QR Code) — لیست محصولات
product.html            # صفحه دیتاشیت یک محصول (product.html?id=...)
assets/
  css/styles.css        # استایل‌ها (موبایل‌فرست، RTL/LTR، دارک‌مود)
  js/i18n.js            # متن‌های دوزبانه و مدیریت زبان
  js/catalogs.js        # ★ داده دیتاشیت‌ها (دوزبانه) — اینجا را ویرایش کنید
  js/main.js           # رندر دیتاشیت + لایت‌باکس
  img/products/        # تصویر هر محصول + لوگوی SINA
pdf/                    # تصاویر اصلی انگلیسی دیتاشیت‌ها (منبع)
```

> نام پوشهٔ `pdf/` به دلایل تاریخی باقی مانده؛ داخلش تصاویر منبع است، نه PDF.

---

## افزودن یا ویرایش محصول / Add or edit a product

تمام محتوا در `assets/js/catalogs.js` تعریف شده است. هر محصول یک یا چند
`sheet` دارد. برای هر sheet می‌توان `features`، `applications` و به‌صورت
اختیاری `specs` (جدول) یا `benefits` و `banner` تعریف کرد. همهٔ متن‌ها
دوزبانه‌اند: `{ fa: "...", en: "..." }`.

تصویر محصول را در `assets/img/products/<name>.jpg` بگذارید و در `photo`
ارجاع دهید.

---

## اجرای محلی / Run locally

```bash
python3 -m http.server 8000
# سپس باز کنید: http://localhost:8000
```

---

## انتشار و QR Code / Publishing & QR Code

ساده‌ترین راه انتشار رایگان **GitHub Pages** است:
`Settings → Pages → Deploy from a branch → main → / (root)`.
سپس یک QR Code بسازید که به آدرس منتشرشده اشاره کند.
