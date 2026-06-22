/**
 * Catalog data — Sina (Faralab) laboratory & bioprocess equipment.
 * -------------------------------------------------------------
 * Each product's catalog is a "datasheet" rebuilt natively in HTML/CSS,
 * faithfully matching the original printed design but fully bilingual
 * (Persian shown by default, English via the language toggle).
 *
 * A catalog has one or more `sheets`. Most products have a single sheet;
 * the peristaltic pump has one sheet per model variant.
 *
 * Bilingual fields use { fa, en }.
 */

const SUBTITLE = { fa: "دقتی که می‌توانید به آن اعتماد کنید", en: "Precision you can trust" };
const GAS_BANNER = {
  fa: "سنسور گاز آلمانی بادوام با فناوری پیشرفتهٔ تشخیص",
  en: "Long-lasting German gas sensor featuring advanced detection technology",
};

/* ------------------------------ Incubator --------------------------- */
const SHEET_INCUBATOR = {
  title: { fa: "انکوباتور CO₂", en: "CO₂ Incubators" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/incubator.jpg",
  features: [
    { fa: "محفظهٔ استیل ضدزنگ (ASTM304)", en: "Stainless steel chamber (ASTM304)" },
    { fa: "کنترلر هوشمند سری ARM", en: "ARM series smart controller" },
    { fa: "فیلتر داخلی برای ورودی گاز", en: "Internal filter for gas port" },
    { fa: "گرمایش همه‌جانبه از تمام طرف‌ها", en: "Comprehensive heating on all sides" },
    { fa: "درب شیشه‌ای", en: "Glass door" },
    { fa: "کالیبراسیون در دسترس کاربر", en: "User accessible calibration" },
    { fa: "واشر سیلیکونی بدون نشتی", en: "Leak-free silicone gasket" },
    { fa: "نمایشگر رنگی TFT لمسی", en: "TFT color LCD with touchscreen" },
    { fa: "هشدار برای خطاها و عیوب", en: "Alarms for faults and errors" },
    { fa: "بازیابی سریع شرایط", en: "Fast recovery functions" },
    { fa: "یکنواختی محفظه", en: "Chamber uniformity" },
    { fa: "بازده بالا", en: "High efficiency" },
  ],
  applications: [
    { fa: "کشت سلول", en: "Cell cultivation" },
    { fa: "تکان دادن فلاسک‌ها با شیکر", en: "Shaking flasks by shaker" },
    { fa: "مطالعهٔ رده‌های سلولی", en: "Cell-line study" },
  ],
  specs: {
    columns: [
      { fa: "مدل", en: "Model" },
      { fa: "حجم", en: "Volume" },
      { fa: "سنسور CO₂", en: "CO2 sensor" },
      { fa: "سنسور دما", en: "Temp sensor" },
      { fa: "سنسور رطوبت", en: "RH sensor" },
      { fa: "شیکر", en: "Shaker" },
    ],
    rows: [
      [{ fa: "SCI-60", en: "SCI-60" }, { fa: "۶۰ لیتر", en: "60 L" }, { fa: "NDIR ۰-۲۰٪", en: "NDIR 0-20%" }, { fa: "PID ۳۰-۵۰", en: "PID 30-50" }, { fa: "۰-۹۹٪", en: "0-99%" }, { fa: "اختیاری", en: "optional" }],
      [{ fa: "SCI-120", en: "SCI-120" }, { fa: "۱۲۰ لیتر", en: "120 L" }, { fa: "NDIR ۰-۲۰٪", en: "NDIR 0-20%" }, { fa: "PID ۳۰-۵۰", en: "PID 30-50" }, { fa: "۰-۹۹٪", en: "0-99%" }, { fa: "اختیاری", en: "optional" }],
      [{ fa: "SCI-172", en: "SCI-172" }, { fa: "۱۷۲ لیتر", en: "172 L" }, { fa: "NDIR ۰-۲۰٪", en: "NDIR 0-20%" }, { fa: "PID ۳۰-۵۰", en: "PID 30-50" }, { fa: "۰-۹۹٪", en: "0-99%" }, { fa: "اختیاری", en: "optional" }],
    ],
  },
  banner: GAS_BANNER,
};

/* -------------------------- Rolling bottle -------------------------- */
const SHEET_ROLLER = {
  title: { fa: "انکوباتور رولینگ باتل CO₂", en: "Rolling bottle CO₂ Incubator" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/roller.jpg",
  features: [
    { fa: "محفظهٔ استیل ضدزنگ (ASTM304)", en: "Stainless steel chamber (ASTM304)" },
    { fa: "کنترلر هوشمند سری ARM", en: "ARM series smart controller" },
    { fa: "مناسب برای سلول‌های چسبنده", en: "Suitable for adherent cells" },
    { fa: "گرمایش همه‌جانبه از تمام طرف‌ها", en: "Comprehensive heating on all sides" },
    { fa: "چرخش نرم و بدون تنش غلتک‌ها", en: "Smooth and tension-free rotation of rolls" },
    { fa: "کالیبراسیون در دسترس کاربر", en: "User accessible calibration" },
    { fa: "واشر سیلیکونی بدون نشتی", en: "Leak-free silicone gasket" },
    { fa: "نمایشگر رنگی TFT لمسی", en: "TFT color LCD with touchscreen" },
    { fa: "هشدار برای خطاها و عیوب", en: "Alarms for faults and errors" },
    { fa: "بازیابی سریع شرایط", en: "Fast recovery functions" },
    { fa: "یکنواختی محفظه با توربوفن", en: "Chamber uniformity by turbo-fan" },
    { fa: "بازده بالا", en: "High efficiency" },
  ],
  applications: [
    { fa: "تولید آنتی‌بادی‌های مونوکلونال", en: "Monoclonal antibodies production" },
    { fa: "تولید واکسن", en: "Vaccine production" },
    { fa: "فرآیند کشت سلول", en: "Cell cultivation process" },
  ],
  specs: {
    columns: [
      { fa: "مدل", en: "Model" },
      { fa: "ظرفیت", en: "Capacity" },
      { fa: "سنسور CO₂", en: "CO2 sensor" },
      { fa: "سنسور دما", en: "Temp sensor" },
      { fa: "سنسور رطوبت", en: "RH sensor" },
      { fa: "سرعت", en: "Speed" },
    ],
    rows: [
      [{ fa: "SRBC-48", en: "SRBC-48" }, { fa: "۴۸", en: "48" }, { fa: "NDIR ۰-۲۰٪", en: "NDIR 0-20%" }, { fa: "PID ۳۰-۵۰", en: "PID 30-50" }, { fa: "۰-۹۹٪", en: "0-99%" }, { fa: "۰٫۵-۵ RPM", en: "0.5-5 RPM" }],
      [{ fa: "SRBC-96", en: "SRBC-96" }, { fa: "۹۶", en: "96" }, { fa: "NDIR ۰-۲۰٪", en: "NDIR 0-20%" }, { fa: "PID ۳۰-۵۰", en: "PID 30-50" }, { fa: "۰-۹۹٪", en: "0-99%" }, { fa: "۰٫۵-۵ RPM", en: "0.5-5 RPM" }],
    ],
  },
  banner: GAS_BANNER,
};

/* ----------------------------- Bioreactor -------------------------- */
const SHEET_BIOREACTOR = {
  title: { fa: "بیوراکتور با کیسهٔ یکبارمصرف", en: "Bioreactor with Disposable bag" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/bioreactor.jpg",
  features: [
    { fa: "حرکت گهواره‌ای، ایده‌آل برای کشت سلول با تنش برشی پایین", en: "Rocking motion, ideal for cell cultivation with low shear stress" },
    { fa: "مناسب برای میکروکریرها", en: "Suitable for micro-carriers" },
    { fa: "سیستم کاملاً بسته", en: "Completely closed system" },
    { fa: "کیسهٔ SinaBag یکبارمصرف و از پیش استریل‌شده", en: "Disposable pre-sterilized SinaBag" },
    { fa: "نصب آسان کیسه", en: "Easy bag installation" },
    { fa: "کنترل ایمنی فشار برای جلوگیری از اضافه‌فشار کیسه", en: "Pressure safety control to avoid over pressure in bag" },
    { fa: "سنسورهای یکبارمصرف قابل‌اعتماد برای اندازه‌گیری pH و DO (مدل‌های نوری)", en: "Reliable single-use sensors for pH and DO (Optical models)" },
    { fa: "رابط لمسی برای کارکرد آسان", en: "Touch-screen interface for easy operation" },
    { fa: "هشدار پیشرفته و ویژگی‌های ایمنی برای کارکرد ایمن", en: "Advanced alarming and safety features for safe operation" },
    { fa: "پایش لحظه‌ای فیلتر گاز، حرکت گهواره و پارامترهای اصلی", en: "Instant monitoring of gas filter, rocker motion and main parameters" },
    { fa: "فیلترهای پرفیوژن، لودسل و کنترلر اختیاری", en: "Optional perfusion filters, load cell and controller" },
  ],
  applications: [
    { fa: "تولید آنتی‌بادی‌های مونوکلونال", en: "Monoclonal antibodies production" },
    { fa: "کشت سلول‌های چسبنده", en: "Adherent cells cultivation" },
    { fa: "صنعت واکسن", en: "Vaccine industry" },
    { fa: "کشت سلول حشره / باکولوویروس", en: "Insect cell / Baculovirus cultivation" },
  ],
  benefits: [
    { fa: "کاهش هزینه‌های نگهداری و سربار", en: "Reduction of maintenance and overhead expenses" },
    { fa: "کاهش مصرف آب تزریقی (WFI)", en: "Reduction of use of WFI" },
    { fa: "کاهش الزامات اعتبارسنجی", en: "Reduction of validation requirements" },
    { fa: "افزایش بازده فرآیند", en: "Increasing efficiency of process" },
    { fa: "حذف استریلیزاسیون درجا (SIP) و شست‌وشوی درجا (CIP)", en: "Elimination of Sterilization in Place (SIP) and Cleaning in Place (CIP)" },
    { fa: "مراحل راه‌اندازی سریع", en: "Quick set-up steps" },
    { fa: "انعطاف و سرعت در فرآیندهای بالادستی و پایین‌دستی", en: "Flexibility and quickness in upstream and downstream processes" },
  ],
};

/* -------------------------- Peristaltic pumps ----------------------- */
const PUMP_COMMON_APPS = [
  { fa: "پمپ تک‌کاناله در مقیاس آزمایشگاهی", en: "Lab-scale single channel pump" },
  { fa: "مراکز تحقیقاتی", en: "Research centers" },
  { fa: "دیسپنس واکسن یا محیط کشت", en: "Vaccine or media dispensing" },
  { fa: "فعالیت‌های شیمیایی", en: "Chemical activities" },
  { fa: "پمپاژ مایعات خطرناک", en: "Pumping hazardous liquids" },
];

const SHEET_VP200 = {
  title: { fa: "پمپ پریستالتیک VP200", en: "Peristaltic pump VP200" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/vp200.jpg",
  features: [
    { fa: "میکروکنترلر سری ARM", en: "ARM series micro-controller" },
    { fa: "یک یا دو کانال شیلنگ سیلیکونی", en: "One or two channel of silicon tubes" },
    { fa: "مکانیزم بدون نیاز به نگهداری", en: "Maintenance-free mechanism" },
    { fa: "غلتک‌های استیل ضدزنگ با بلبرینگ", en: "Stainless steel rollers with bearing" },
    { fa: "کالیبراسیون شیلنگ در دسترس کاربر", en: "User accessible tube calibration" },
    { fa: "موتور استپر گشتاور بالا، ۱-۳۰۰ RPM", en: "High torque stepper motor, 1-300 RPM" },
    { fa: "نمایشگر رنگی TFT", en: "TFT color LCD" },
    { fa: "دارای حالت دیسپنسینگ", en: "Dispensing mode available" },
    { fa: "تنظیم بازگشت ضدچکه", en: "Anti-drip retraction setting" },
    { fa: "تغذیهٔ DC خارجی", en: "External DC power supply" },
    { fa: "بازده بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "قابلیت اطمینان کارکرد بی‌وقفه", en: "Non-stop operational reliability" },
    { fa: "راه‌اندازی خارجی با سیگنال ۰-۱۰ ولت و دیجیتال", en: "External driving by 0-10 V and digital signals" },
    { fa: "دبی ۰٫۲ تا ۱۳۰۰ میلی‌لیتر بر دقیقه", en: "0.2 - 1300 ml/min flowrate" },
  ],
  applications: PUMP_COMMON_APPS,
};

const SHEET_VP600 = {
  title: { fa: "پمپ پریستالتیک VP600", en: "Peristaltic pump VP600" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/vp600.jpg",
  features: [
    { fa: "بدنهٔ استیل ضدزنگ (ASTM304)", en: "Stainless steel case (ASTM304)" },
    { fa: "میکروکنترلر سری ARM", en: "ARM series micro-controller" },
    { fa: "یک یا دو کانال شیلنگ سیلیکونی", en: "One or two channel of silicon tubes" },
    { fa: "مکانیزم بدون نیاز به نگهداری", en: "Maintenance-free mechanism" },
    { fa: "غلتک‌های استیل ضدزنگ با بلبرینگ", en: "Stainless steel rollers with bearing" },
    { fa: "موتور سروو گشتاور بالا، ۱-۵۰۰ RPM", en: "High torque servo motor, 1-500 RPM" },
    { fa: "نمایشگر هفت‌قطعه‌ای", en: "7-Segment display" },
    { fa: "دارای حالت دیسپنسینگ", en: "Dispensing mode available" },
    { fa: "بازده بالا و صدای بسیار کم", en: "High efficiency and very low noise" },
    { fa: "قابلیت اطمینان کارکرد بی‌وقفه", en: "Non-stop operational reliability" },
    { fa: "راه‌اندازی خارجی با سیگنال ۰-۱۰ ولت و دیجیتال", en: "External driving by 0-10 V and digital signals" },
    { fa: "دبی ۱۰۰ تا ۱۰۰۰۰ میلی‌لیتر بر دقیقه", en: "100 - 10000 ml/min flowrate" },
  ],
  applications: [
    { fa: "پمپ حجم‌بالا و فشارقوی", en: "Large volume, high pressure pump" },
    { fa: "صنایع دارویی", en: "Pharmaceutical industries" },
    { fa: "فعالیت‌های شیمیایی", en: "Chemical activities" },
    { fa: "پمپاژ مایعات خطرناک", en: "Pumping hazardous liquids" },
  ],
};

const SHEET_DG6 = {
  title: { fa: "پمپ پریستالتیک DG6", en: "Peristaltic pump DG6" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/dg6.jpg",
  features: [
    { fa: "بدنهٔ استیل ضدزنگ (ASTM304)", en: "Stainless steel case (ASTM304)" },
    { fa: "میکروکنترلر سری ARM", en: "ARM series micro-controller" },
    { fa: "شش کانال شیلنگ سیلیکونی", en: "Six channel of silicon tubes" },
    { fa: "مکانیزم بدون نیاز به نگهداری", en: "Maintenance-free mechanism" },
    { fa: "غلتک‌های استیل ضدزنگ با بلبرینگ", en: "Stainless steel rollers with bearing" },
    { fa: "کالیبراسیون شیلنگ در دسترس کاربر", en: "User accessible tube calibration" },
    { fa: "موتور استپر گشتاور بالا، ۱-۲۰۰ RPM", en: "High torque stepper motor, 1-200 RPM" },
    { fa: "نمایشگر رنگی TFT", en: "TFT color LCD" },
    { fa: "دارای حالت دیسپنسینگ", en: "Dispensing mode available" },
    { fa: "تنظیم بازگشت ضدچکه", en: "Anti-drip retraction setting" },
    { fa: "تغذیهٔ DC خارجی", en: "External DC power supply" },
    { fa: "بازده بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "قابلیت اطمینان کارکرد بی‌وقفه", en: "Non-stop operational reliability" },
    { fa: "راه‌اندازی خارجی با سیگنال ۰-۱۰ ولت و دیجیتال", en: "External driving by 0-10 V and digital signals" },
    { fa: "دبی ۰٫۰۳ تا ۳۰ میلی‌لیتر بر دقیقه", en: "0.03 - 30 ml/min flowrate" },
  ],
  applications: [
    { fa: "پمپ چندکاناله در مقیاس آزمایشگاهی", en: "Lab-scale multi-channel pump" },
    { fa: "مراکز تحقیقاتی", en: "Research centers" },
    { fa: "فعالیت‌های شیمیایی", en: "Chemical activities" },
    { fa: "دستگاه‌های پرکن مایعات", en: "Liquid filling machines" },
  ],
};

const SHEET_SF15 = {
  title: { fa: "پمپ پریستالتیک SF15", en: "Peristaltic pump SF15" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/sf15.jpg",
  features: [
    { fa: "میکروکنترلر سری ARM", en: "ARM series micro-controller" },
    { fa: "تک‌کانال شیلنگ سیلیکونی", en: "Single-channel of silicon tubes" },
    { fa: "مکانیزم بدون نیاز به نگهداری", en: "Maintenance-free mechanism" },
    { fa: "کالیبراسیون شیلنگ در دسترس کاربر", en: "User accessible tube calibration" },
    { fa: "موتور استپر، ۱-۱۵۰ RPM", en: "Stepper motor, 1-150 RPM" },
    { fa: "نمایشگر OLED", en: "OLED display" },
    { fa: "دارای حالت دیسپنسینگ", en: "Dispensing mode available" },
    { fa: "تنظیم بازگشت ضدچکه", en: "Anti-drip retraction setting" },
    { fa: "تغذیهٔ DC خارجی", en: "External DC power supply" },
    { fa: "بازده بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "قابلیت اطمینان کارکرد بی‌وقفه", en: "Non-stop operational reliability" },
    { fa: "راه‌اندازی خارجی با سیگنال ۰-۱۰ ولت و دیجیتال", en: "External driving by 0-10 V and digital signals" },
    { fa: "دبی ۰٫۰۳ تا ۱۲۰ میلی‌لیتر بر دقیقه", en: "0.03 - 120 ml/min flowrate" },
  ],
  applications: [
    { fa: "پمپ تک‌کاناله در مقیاس آزمایشگاهی", en: "Lab-scale single channel pump" },
    { fa: "کاربرد میکروفلوئیدیک", en: "Microfluidic target" },
    { fa: "آزمایشگاه‌های دانشگاهی", en: "University laboratories" },
    { fa: "فعالیت‌های شیمیایی", en: "Chemical activities" },
  ],
};

const SHEET_SP15 = {
  title: { fa: "پمپ پریستالتیک SP15", en: "Peristaltic pump SP15" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/sp15.jpg",
  features: [
    { fa: "میکروکنترلر سری ARM", en: "ARM series micro-controller" },
    { fa: "تک‌کانال شیلنگ سیلیکونی", en: "Single-channel of silicon tubes" },
    { fa: "مکانیزم بدون نیاز به نگهداری", en: "Maintenance-free mechanism" },
    { fa: "کالیبراسیون شیلنگ در دسترس کاربر", en: "User accessible tube calibration" },
    { fa: "موتور استپر گشتاور بالا، ۱-۲۰۰ RPM", en: "High torque stepper motor, 1-200 RPM" },
    { fa: "نمایشگر رنگی TFT", en: "TFT color LCD" },
    { fa: "دارای حالت دیسپنسینگ", en: "Dispensing mode available" },
    { fa: "تنظیم بازگشت ضدچکه", en: "Anti-drip retraction setting" },
    { fa: "تغذیهٔ DC خارجی", en: "External DC power supply" },
    { fa: "بازده بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "قابلیت اطمینان کارکرد بی‌وقفه", en: "Non-stop operational reliability" },
    { fa: "راه‌اندازی خارجی با سیگنال ۰-۱۰ ولت و دیجیتال", en: "External driving by 0-10 V and digital signals" },
    { fa: "دبی ۰٫۱ تا ۱۵۰ میلی‌لیتر بر دقیقه", en: "0.1 - 150 ml/min flowrate" },
  ],
  applications: PUMP_COMMON_APPS,
};

const CATALOGS = [
  {
    id: "incubator",
    name: { fa: "انکوباتور CO₂ سینا", en: "Sina CO₂ Incubator" },
    tagline: { fa: "دقت بالا برای کشت سلول و مطالعات سلولی", en: "High precision for cell culture and cell-line studies" },
    accent: "#1d4ed8",
    cover: "assets/img/products/incubator.jpg",
    sheets: [SHEET_INCUBATOR],
  },
  {
    id: "roller-bottle-incubator",
    name: { fa: "انکوباتور رولینگ باتل سینا", en: "Sina Rolling Bottle Incubator" },
    tagline: { fa: "ویژهٔ تولید آنتی‌بادی و واکسن", en: "Built for antibody and vaccine production" },
    accent: "#1d4ed8",
    cover: "assets/img/products/roller.jpg",
    sheets: [SHEET_ROLLER],
  },
  {
    id: "bioreactor",
    name: { fa: "بیوراکتور یکبارمصرف سینا", en: "Sina Single-Use Bioreactor" },
    tagline: { fa: "سیستم کاملاً بسته با کیسهٔ از پیش استریل", en: "Fully closed system with a pre-sterilized bag" },
    accent: "#1d4ed8",
    cover: "assets/img/products/bioreactor.jpg",
    sheets: [SHEET_BIOREACTOR],
  },
  {
    id: "pump-vp600",
    name: { fa: "پمپ پریستالتیک VP600", en: "Peristaltic Pump VP600" },
    tagline: { fa: "حجم بالا و فشار قوی، دبی تا ۱۰۰۰۰ میلی‌لیتر بر دقیقه", en: "High volume & pressure, up to 10000 ml/min" },
    accent: "#1d4ed8",
    cover: "assets/img/products/vp600.jpg",
    sheets: [SHEET_VP600],
  },
  {
    id: "pump-vp200",
    name: { fa: "پمپ پریستالتیک VP200", en: "Peristaltic Pump VP200" },
    tagline: { fa: "یک یا دو کانال، دبی تا ۱۳۰۰ میلی‌لیتر بر دقیقه", en: "One or two channels, up to 1300 ml/min" },
    accent: "#1d4ed8",
    cover: "assets/img/products/vp200.jpg",
    sheets: [SHEET_VP200],
  },
  {
    id: "pump-dg6",
    name: { fa: "پمپ پریستالتیک DG6", en: "Peristaltic Pump DG6" },
    tagline: { fa: "شش کانال برای پرکن و دیسپنس مایعات", en: "Six channels for dispensing and filling" },
    accent: "#1d4ed8",
    cover: "assets/img/products/dg6.jpg",
    sheets: [SHEET_DG6],
  },
  {
    id: "pump-sf15",
    name: { fa: "پمپ پریستالتیک SF15", en: "Peristaltic Pump SF15" },
    tagline: { fa: "تک‌کانال جمع‌وجور، مناسب میکروفلوئیدیک", en: "Compact single channel, microfluidic-ready" },
    accent: "#1d4ed8",
    cover: "assets/img/products/sf15.jpg",
    sheets: [SHEET_SF15],
  },
  {
    id: "pump-sp15",
    name: { fa: "پمپ پریستالتیک SP15", en: "Peristaltic Pump SP15" },
    tagline: { fa: "تک‌کانال آزمایشگاهی، دبی تا ۱۵۰ میلی‌لیتر بر دقیقه", en: "Lab single channel, up to 150 ml/min" },
    accent: "#1d4ed8",
    cover: "assets/img/products/sp15.jpg",
    sheets: [SHEET_SP15],
  },
];
