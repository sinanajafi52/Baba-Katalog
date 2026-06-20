# Baba-Katalog — کاتالوگ محصولات سینا / Sina Product Catalogs

یک سایت ساده، سریع و دوزبانه (فارسی/انگلیسی) برای نمایش کاتالوگ محصولات.
مشتری با اسکن QR Code وارد صفحه اصلی می‌شود، محصول دلخواهش را انتخاب می‌کند
و کاتالوگ آن محصول به‌صورت تحت وب (HTML/CSS) نمایش داده می‌شود.

A simple, fast, bilingual (Persian/English) site for showing product catalogs.
A customer scans a QR code, lands on the home page, picks a product, and views
that product's catalog in the browser.

> صفحات هر کاتالوگ از روی فایل PDF اصلی با کیفیت بالا به تصویر تبدیل شده‌اند تا
> طراحی حرفه‌ای کاتالوگ‌ها دقیقاً حفظ شود. فایل PDF اصلی هم برای دانلود در دسترس است.
>
> Each catalog's pages are rendered as high-resolution images from the original
> PDF so the design is preserved exactly; the original PDF is also downloadable.

---

## محصولات / Products

| id | فارسی | English |
|----|-------|---------|
| `incubator` | انکوباتور CO₂ سینا | Sina CO₂ Incubator |
| `roller-bottle-incubator` | انکوباتور رولینگ باتل سینا | Sina Roller Bottle Incubator |
| `orbital-shaker` | اوربیتال شیکر سینا | Sina Orbital Shaker |
| `single-use-bioreactor` | بیوراکتور یکبارمصرف سینا | Sina Single-Use Bioreactor |
| `peristaltic-pump` | پمپ پریستالتیک سینا | Sina Peristaltic Pump |

---

## ساختار پروژه / Project structure

```
index.html              # صفحه اصلی (مقصد QR Code) — لیست محصولات
product.html            # صفحه نمایش کاتالوگ یک محصول (product.html?id=...)
assets/
  css/styles.css        # استایل‌ها (موبایل‌فرست، RTL/LTR، دارک‌مود)
  js/i18n.js            # متن‌های دوزبانه و مدیریت زبان
  js/catalogs.js        # ★ داده کاتالوگ‌ها — اینجا را ویرایش کنید
  js/main.js           # منطق رندر صفحات
  img/<id>/            # تصاویر صفحات هر کاتالوگ (page-1.jpg ...)
pdf/<id>.pdf            # فایل PDF اصلی هر کاتالوگ
```

---

## افزودن یا تغییر کاتالوگ / Add or update a catalog

۱. تصاویر صفحات را در `assets/img/<id>/page-1.jpg`، `page-2.jpg` ... قرار دهید.
۲. فایل PDF را در `pdf/<id>.pdf` بگذارید.
۳. در `assets/js/catalogs.js` یک آیتم اضافه کنید:

```js
{
  id: "my-product",
  name: { fa: "نام محصول", en: "Product name" },
  tagline: { fa: "توضیح کوتاه", en: "Short description" },
  accent: "#1d4ed8",
  pdf: "pdf/my-product.pdf",
  pages: pageImages("my-product", 5) // تعداد صفحات
}
```

### تبدیل PDF به تصویر / Render a PDF to images

```bash
pip install pymupdf
python3 - <<'PY'
import fitz
doc = fitz.open("pdf/my-product.pdf")
for i, page in enumerate(doc):
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))   # 2x = کیفیت خوب
    with open(f"assets/img/my-product/page-{i+1}.jpg", "wb") as f:
        f.write(pix.tobytes("jpeg", jpg_quality=82))
PY
```

---

## اجرای محلی / Run locally

```bash
python3 -m http.server 8000
# سپس باز کنید: http://localhost:8000
```

---

## انتشار و QR Code / Publishing & QR Code

ساده‌ترین راه انتشار رایگان، **GitHub Pages** است:
`Settings → Pages → Branch` را انتخاب و ذخیره کنید. سپس یک QR Code بسازید که به
آدرس منتشرشده (`index.html`) اشاره کند.
