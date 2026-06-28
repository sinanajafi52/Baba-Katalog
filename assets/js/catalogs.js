/**
 * Catalog data — Sina (Faralab) laboratory & bioprocess equipment.
 * -------------------------------------------------------------
 * Persian content follows the customer's final reviewed document, with
 * English mirrored. A catalog has one or more `sheets`.
 * Bilingual fields use { fa, en }.
 */

const SUBTITLE = { fa: "دقتی که می‌توانید به آن اعتماد کنید", en: "Precision you can trust" };
const WARRANTY = { fa: "۲ سال گارانتی و ۱۰ سال خدمات پس از فروش", en: "2-year warranty and 10 years of after-sales service" };

/* ------------------------------ Incubator --------------------------- */
const SHEET_INCUBATOR = {
  title: { fa: "انکوباتور CO₂", en: "CO₂ Incubators" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/incubator.jpg",
  features: [
    { fa: "محفظه داخلی از جنس استیل ضدزنگ (ASTM304)", en: "Internal chamber in stainless steel (ASTM304)" },
    { fa: "مجهز به کنترلر هوشمند سری STM32", en: "STM32 series smart controller" },
    { fa: "مجهز به فیلتر داخلی جهت فیلتراسیون گاز CO₂ ورودی", en: "Internal filter for incoming CO₂ gas" },
    { fa: "گردش موثر هوای محفظه و گرمایش یکنواخت", en: "Effective air circulation and uniform heating" },
    { fa: "دارای درب شیشه‌ای داخلی", en: "Internal glass door" },
    { fa: "دارای نوار سیلیکونی هوابند، بدون اتلاف دما، رطوبت و گاز CO₂", en: "Airtight silicone strip — no loss of temperature, humidity and CO₂" },
    { fa: "قابل کالیبراسیون توسط کاربر", en: "User-accessible calibration" },
    { fa: "مجهز به نمایشگر رنگی TFT لمسی با کاربری آسان", en: "Easy-to-use TFT color touchscreen" },
    { fa: "مجهز به سیستم هشدار بروز خطا", en: "Fault alarm system" },
    { fa: "مجهز به سیستم ثبت وقایع (دیتا لاگر) - در مدل‌های سفارشی", en: "Event logging system (data logger) — in custom models" },
    { fa: "بازیابی و جبران سریع پارامترها (دما، CO₂ و رطوبت)", en: "Fast recovery and compensation of parameters (temperature, CO₂ and humidity)" },
    { fa: "بازدهی و کارایی بالا", en: "High efficiency and performance" },
    WARRANTY,
  ],
  applications: [
    { fa: "کشت انواع سلول", en: "Culturing all cell types" },
    { fa: "قابلیت استفاده جهت کشت انواع میکروارگانیسم‌ها در شیکینگ فلاسک", en: "Culturing microorganisms in shaking flasks" },
  ],
  specs: {
    columns: [
      { fa: "مدل", en: "Model" },
      { fa: "حجم", en: "Volume" },
      { fa: "نوع سنسور و محدوده CO₂", en: "CO₂ sensor & range" },
      { fa: "روش کنترل و محدوده دما", en: "Control method & temp range" },
      { fa: "محدوده رطوبت", en: "Humidity range" },
      { fa: "شیکر", en: "Shaker" },
    ],
    rows: [
      [{ fa: "SCI-60", en: "SCI-60" }, { fa: "۶۰ لیتر", en: "60 L" }, { fa: "NDIR (0-20%)", en: "NDIR (0-20%)" }, { fa: "PID (30-50)", en: "PID (30-50)" }, { fa: "0-99%", en: "0-99%" }, { fa: "—", en: "—" }],
      [{ fa: "SCI-120", en: "SCI-120" }, { fa: "۱۲۰ لیتر", en: "120 L" }, { fa: "NDIR (0-20%)", en: "NDIR (0-20%)" }, { fa: "PID (30-50)", en: "PID (30-50)" }, { fa: "0-99%", en: "0-99%" }, { fa: "قابل سفارش", en: "On request" }],
      [{ fa: "SCI-172", en: "SCI-172" }, { fa: "۱۷۲ لیتر", en: "172 L" }, { fa: "NDIR (0-20%)", en: "NDIR (0-20%)" }, { fa: "PID (30-50)", en: "PID (30-50)" }, { fa: "0-99%", en: "0-99%" }, { fa: "قابل سفارش", en: "On request" }],
    ],
  },
};

/* -------------------------- Rolling bottle -------------------------- */
const SHEET_ROLLER = {
  title: { fa: "انکوباتور رولینگ باتل CO₂", en: "Rolling bottle CO₂ Incubator" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/roller.jpg",
  features: [
    { fa: "بدنه و چمبر از جنس استیل ضدزنگ (ASTM304)", en: "Body and chamber in stainless steel (ASTM304)" },
    { fa: "مجهز به کنترلر هوشمند سری STM32", en: "STM32 series smart controller" },
    { fa: "مجهز به فیلتر داخلی جهت فیلتراسیون گاز CO₂ ورودی", en: "Internal filter for incoming CO₂ gas" },
    { fa: "گردش موثر هوای محفظه و گرمایش یکنواخت", en: "Effective air circulation and uniform heating" },
    { fa: "مناسب برای کشت انواع سلول‌های چسبنده", en: "Suitable for culturing all adherent cell types" },
    { fa: "دارای درب دو جداره شیشه‌ای", en: "Double-glazed glass door" },
    { fa: "دارای نوار سیلیکونی هوابند، بدون اتلاف دما، رطوبت و گاز CO₂", en: "Airtight silicone strip — no loss of temperature, humidity and CO₂" },
    { fa: "چرخش نرم، بدون صدا و بدون تنش غلتک‌ها (Soft Rolling)", en: "Smooth, quiet and tension-free roll rotation (Soft Rolling)" },
    { fa: "مجهز به نمایشگر رنگی TFT لمسی با کاربری آسان", en: "Easy-to-use TFT color touchscreen" },
    { fa: "مجهز به سیستم هشدار بروز خطا", en: "Fault alarm system" },
    { fa: "مجهز به سیستم ثبت وقایع (دیتا لاگر)", en: "Event logging system (data logger)" },
    { fa: "بازیابی و جبران سریع پارامترها (دما، CO₂ و رطوبت)", en: "Fast recovery and compensation of parameters (temperature, CO₂ and humidity)" },
    { fa: "یکنواختی دما، رطوبت و گاز CO₂ در محفظه با استفاده از توربوفن", en: "Uniform temperature, humidity and CO₂ in the chamber via turbo-fan" },
    { fa: "قابلیت نصب دو دستگاه روی هم و استفاده بهینه از فضای آزمایشگاه", en: "Stackable (two units) for optimal lab-space use" },
    { fa: "بازدهی و کارایی بالا", en: "High efficiency and performance" },
    WARRANTY,
  ],
  applications: [
    { fa: "تحقیقات و تولید انواع آنتی‌بادی‌های مونوکلونال", en: "Research and production of monoclonal antibodies" },
    { fa: "تحقیقات و تولید انواع واکسن‌های مبتنی بر کشت سلول", en: "Research and production of cell-culture-based vaccines" },
    { fa: "کشت و تکثیر انواع سلول با کارایی و راندمان بالا", en: "High-efficiency culturing and proliferation of all cell types" },
  ],
  specs: {
    columns: [
      { fa: "مدل", en: "Model" },
      { fa: "ظرفیت باتل", en: "Bottle capacity" },
      { fa: "محدوده و سنسور CO₂", en: "CO₂ sensor & range" },
      { fa: "روش کنترل و محدوده دما", en: "Control method & temp range" },
      { fa: "محدوده رطوبت", en: "Humidity range" },
      { fa: "محدوده سرعت چرخش", en: "Rotation speed range" },
    ],
    rows: [
      [{ fa: "SRBC-48", en: "SRBC-48" }, { fa: "۴۸", en: "48" }, { fa: "NDIR ۰-۲۰٪", en: "NDIR 0-20%" }, { fa: "PID ۳۰-۵۰", en: "PID 30-50" }, { fa: "۰-۹۹٪", en: "0-99%" }, { fa: "۰٫۵-۵ RPM", en: "0.5-5 RPM" }],
      [{ fa: "SRBC-96", en: "SRBC-96" }, { fa: "۹۶", en: "96" }, { fa: "NDIR ۰-۲۰٪", en: "NDIR 0-20%" }, { fa: "PID ۳۰-۵۰", en: "PID 30-50" }, { fa: "۰-۹۹٪", en: "0-99%" }, { fa: "۰٫۵-۵ RPM", en: "0.5-5 RPM" }],
    ],
  },
};

/* ----------------------------- Bioreactor -------------------------- */
const SHEET_BIOREACTOR = {
  title: { fa: "بیوراکتور با کیسه یکبارمصرف", en: "Bioreactor with Disposable bag" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/bioreactor.jpg",
  features: [
    { fa: "حرکت گهواره‌ای، ایده‌آل برای کشت انواع سلول با کمترین تنش", en: "Rocking motion, ideal for culturing all cell types with minimal stress" },
    { fa: "مناسب برای کشت انواع سلول‌های چسبنده با استفاده از میکروکریر", en: "Suitable for culturing adherent cells using micro-carriers" },
    { fa: "سیستم کاملاً بسته جهت پیشگیری از آلودگی", en: "Completely closed system to prevent contamination" },
    { fa: "افزایش راندمان در نتیجه استفاده از کیسه یکبارمصرف و از پیش استریل‌شده (SinaBag)", en: "Higher efficiency thanks to the disposable, pre-sterilized bag (SinaBag)" },
    { fa: "نصب آسان کیسه", en: "Easy bag installation" },
    { fa: "کنترل الکترونیکی فشار جهت جلوگیری از تحمیل فشار اضافی به کیسه", en: "Electronic pressure control to avoid excess pressure on the bag" },
    { fa: "بهره‌مندی از سنسورهای یکبارمصرف قابل‌اعتماد برای اندازه‌گیری pH و DO (در مدل‌های اپتیک)", en: "Reliable single-use sensors for pH and DO measurement (Optical models)" },
    { fa: "مجهز به رابط لمسی با کاربری آسان (HMI)", en: "Easy-to-use touch interface (HMI)" },
    { fa: "مجهز به سیستم هشدار پیشرفته و تعبیه ویژگی‌های ایمنی برای کارکرد ایمن", en: "Advanced alarm system and built-in safety features for safe operation" },
    { fa: "مجهز به سیستم پایش لحظه‌ای فیلتر گاز، حرکت گهواره و پارامترهای اصلی", en: "Real-time monitoring of gas filter, rocking motion and main parameters" },
    { fa: "قابلیت نصب فیلترهای پرفیوژن، لودسل و آنالایزر گاز (قابل سفارش)", en: "Optional perfusion filters, load cell and gas analyzer (on request)" },
    WARRANTY,
  ],
  applications: [
    { fa: "تحقیقات و تولید انواع آنتی‌بادی‌های مونوکلونال", en: "Research and production of monoclonal antibodies" },
    { fa: "کشت انواع سلول‌های شناور و چسبنده", en: "Culturing suspension and adherent cells" },
    { fa: "کاربردهای متنوع در صنعت تولید واکسن", en: "Diverse applications in vaccine manufacturing" },
    { fa: "کشت انواع سلول حشره و تکثیر باکولوویروس", en: "Insect cell culture and baculovirus propagation" },
  ],
  benefits: [
    { fa: "کاهش قابل توجه سرمایه‌گذاری‌های ثابت و نیز هزینه‌های نگهداری", en: "Significant reduction of fixed investment and maintenance costs" },
    { fa: "کاهش چشمگیر میزان مصرف آب تزریقی (WFI)", en: "Dramatic reduction of WFI (water for injection) usage" },
    { fa: "کاهش الزامات اعتبارسنجی (Validation)", en: "Reduced validation requirements" },
    { fa: "افزایش بازدهی فرآیند", en: "Increased process efficiency" },
    { fa: "حذف فرآیندهای SIP و CIP", en: "Elimination of SIP and CIP processes" },
    { fa: "راه‌اندازی سریع", en: "Quick set-up" },
    { fa: "ایجاد انعطاف و سرعت عمل در فرآیندهای بالادستی و پایین‌دستی", en: "Flexibility and speed in upstream and downstream processes" },
  ],
};

/* -------------------------- Peristaltic pumps ----------------------- */
const SHEET_VP600 = {
  title: { fa: "پمپ پریستالتیک VP600", en: "Peristaltic pump VP600" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/vp600.jpg",
  features: [
    { fa: "بدنه از جنس استیل ضد زنگ (ASTM304)", en: "Stainless steel body (ASTM304)" },
    { fa: "میکروکنترلر سری STM32", en: "STM32 series microcontroller" },
    { fa: "قابلیت نصب یک یا دو هد", en: "One or two pump heads" },
    { fa: "طراحی ویژه بدون نیاز به نگهداری", en: "Special maintenance-free design" },
    { fa: "غلتک‌های استیل ضدزنگ با بلبرینگ", en: "Stainless steel rollers with bearing" },
    { fa: "موتور سروو با گشتاور بالا، ۱-۵۰۰ RPM", en: "High torque servo motor, 1-500 RPM" },
    { fa: "نمایشگر هفت‌قطعه‌ای (7-Segment)", en: "7-Segment display" },
    { fa: "بازدهی بالا و صدای بسیار کم", en: "High efficiency and very low noise" },
    { fa: "قابلیت کارکرد بی‌وقفه و شبانه‌روزی", en: "Continuous, around-the-clock operation" },
    { fa: "دبی ۱۰۰ تا ۱۰۰۰۰ میلی‌لیتر بر دقیقه", en: "100 - 10000 ml/min flowrate" },
    WARRANTY,
  ],
  applications: [
    { fa: "پمپ حجم‌بالا و فشارقوی با کاربرد متنوع", en: "Versatile large-volume, high-pressure pump" },
    { fa: "صنایع دارویی", en: "Pharmaceutical industries" },
    { fa: "فعالیت‌های شیمیایی", en: "Chemical activities" },
    { fa: "انتقال امن مایعات خطرناک در سیستم بسته", en: "Safe transfer of hazardous liquids in a closed system" },
  ],
};

const SHEET_VP200 = {
  title: { fa: "پمپ پریستالتیک VP200", en: "Peristaltic pump VP200" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/vp200.jpg",
  features: [
    { fa: "بدنه از جنس استیل ضد زنگ (ASTM304)", en: "Stainless steel body (ASTM304)" },
    { fa: "میکروکنترلر سری STM32", en: "STM32 series microcontroller" },
    { fa: "قابلیت نصب یک یا دو هد", en: "One or two pump heads" },
    { fa: "طراحی ویژه بدون نیاز به نگهداری", en: "Special maintenance-free design" },
    { fa: "غلتک‌های استیل ضدزنگ با بلبرینگ", en: "Stainless steel rollers with bearing" },
    { fa: "قابلیت کالیبراسیون شیلنگ توسط کاربر", en: "User-accessible tube calibration" },
    { fa: "موتور استپر با گشتاور بالا، ۱-۳۰۰ RPM", en: "High torque stepper motor, 1-300 RPM" },
    { fa: "نمایشگر رنگی TFT", en: "TFT color display" },
    { fa: "قابلیت استفاده دوگانه (دارای حالت دیسپنسینگ)", en: "Dual-use capability (dispensing mode)" },
    { fa: "قابلیت تنظیم Back suction (تقسیم مایعات بدون چکه)", en: "Adjustable back suction (drip-free dispensing)" },
    { fa: "منبع تغذیه DC اکسترنال", en: "External DC power supply" },
    { fa: "بازدهی بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "قابلیت کارکرد بی‌وقفه و شبانه‌روزی", en: "Continuous, around-the-clock operation" },
    { fa: "راه‌اندازی خارجی با سیگنال آنالوگ ۰-۱۰ ولت و سیگنال‌های کنترل دیجیتال", en: "External control via 0-10 V analog and digital control signals" },
    { fa: "دبی ۰٫۲ تا ۱۳۰۰ میلی‌لیتر بر دقیقه", en: "0.2 - 1300 ml/min flowrate" },
    WARRANTY,
  ],
  applications: [
    { fa: "پمپ تک‌کاناله با کاربرد متنوع در مقیاس آزمایشگاهی", en: "Versatile lab-scale single-channel pump" },
    { fa: "انتقال امن محیط‌های کشت، محلول‌ها و بافرها در سیستم بسته", en: "Safe transfer of media, solutions and buffers in a closed system" },
    { fa: "دیسپنسینگ انواع فراورده‌های بیولوژیک", en: "Dispensing of various biological products" },
    { fa: "انتقال امن مواد شیمیایی یا مایعات خطرناک در سیستم بسته", en: "Safe transfer of chemicals or hazardous liquids in a closed system" },
  ],
};

const SHEET_DG6 = {
  title: { fa: "پمپ پریستالتیک DG6", en: "Peristaltic pump DG6" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/dg6.jpg",
  features: [
    { fa: "بدنه از جنس استیل ضدزنگ (ASTM304)", en: "Stainless steel body (ASTM304)" },
    { fa: "میکروکنترلر سری STM32", en: "STM32 series microcontroller" },
    { fa: "پمپ کارآمد شش کاناله – قابل سفارش تا ۱۰ کانال", en: "Efficient six-channel pump — up to 10 channels on request" },
    { fa: "مکانیزم بدون نیاز به نگهداری", en: "Maintenance-free mechanism" },
    { fa: "غلتک‌های استیل ضدزنگ با بلبرینگ", en: "Stainless steel rollers with bearing" },
    { fa: "قابلیت کالیبراسیون شیلنگ توسط کاربر", en: "User-accessible tube calibration" },
    { fa: "موتور استپر گشتاور بالا، ۱-۲۰۰ RPM", en: "High torque stepper motor, 1-200 RPM" },
    { fa: "نمایشگر رنگی TFT", en: "TFT color display" },
    { fa: "دارای مد دیسپنسینگ", en: "Dispensing mode available" },
    { fa: "تنظیم بازگشت ضدچکه", en: "Anti-drip retraction setting" },
    { fa: "منبع تغذیه DC اکسترنال", en: "External DC power supply" },
    { fa: "بازده بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "قابلیت کارکرد بی‌وقفه و شبانه‌روزی", en: "Continuous, around-the-clock operation" },
    { fa: "راه‌اندازی خارجی با سیگنال آنالوگ ۰-۱۰ ولت و سیگنال‌های کنترل دیجیتال", en: "External control via 0-10 V analog and digital control signals" },
    { fa: "دبی ۰٫۰۳ تا ۳۰ میلی‌لیتر بر دقیقه از هر کانال", en: "0.03 - 30 ml/min flowrate per channel" },
    WARRANTY,
  ],
  applications: [
    { fa: "پمپ چندکاناله با کاربرد متنوع در مقیاس آزمایشگاهی", en: "Versatile lab-scale multi-channel pump" },
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
    { fa: "بدنه از جنس PETG", en: "PETG body" },
    { fa: "میکرو کنترلر سری STM32", en: "STM32 series microcontroller" },
    { fa: "تک‌کانال شیلنگ سیلیکونی", en: "Single-channel of silicon tubing" },
    { fa: "مکانیزم بدون نیاز به نگهداری", en: "Maintenance-free mechanism" },
    { fa: "مجهز به موتور استپر، ۱-۱۵۰ RPM", en: "Stepper motor, 1-150 RPM" },
    { fa: "مجهز به نمایشگر OLED و یا TFT رنگی", en: "OLED or color TFT display" },
    { fa: "دارای حالت دیسپنسینگ", en: "Dispensing mode available" },
    { fa: "تنظیم پارامتر Back suction (ضدچکه)", en: "Adjustable back suction parameter (anti-drip)" },
    { fa: "تغذیه DC اکسترنال", en: "External DC power supply" },
    { fa: "بازده بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "عملکرد بی‌وقفه و شبانه‌روزی", en: "Continuous, around-the-clock operation" },
    { fa: "راه‌اندازی خارجی با سیگنال ۰-۱۰ ولت و دیجیتال", en: "External driving by 0-10 V and digital signals" },
    { fa: "دبی ۰٫۰۳ تا ۱۲۰ میلی‌لیتر بر دقیقه", en: "0.03 - 120 ml/min flowrate" },
    WARRANTY,
  ],
  applications: [
    { fa: "پمپ تک‌کاناله در مقیاس آزمایشگاهی", en: "Lab-scale single-channel pump" },
    { fa: "کاربرد میکروفلوئیدیک", en: "Microfluidic applications" },
    { fa: "آزمایشگاه‌های تحقیقاتی", en: "Research laboratories" },
    { fa: "فعالیت‌های تحقیقاتی شیمیایی", en: "Chemical research activities" },
  ],
};

const SHEET_SP15 = {
  title: { fa: "پمپ پریستالتیک SP15", en: "Peristaltic pump SP15" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/sp15.jpg",
  features: [
    { fa: "بدنه از جنس استیل ضد زنگ (ASTM304)", en: "Stainless steel body (ASTM304)" },
    { fa: "میکروکنترلر سری STM32", en: "STM32 series microcontroller" },
    { fa: "تک کانال شیلنگ سیلیکونی", en: "Single-channel of silicon tubing" },
    { fa: "طراحی ویژه بدون نیاز به نگهداری", en: "Special maintenance-free design" },
    { fa: "غلتک‌های استیل ضدزنگ با بلبرینگ", en: "Stainless steel rollers with bearing" },
    { fa: "قابلیت کالیبراسیون شیلنگ توسط کاربر", en: "User-accessible tube calibration" },
    { fa: "موتور استپر با گشتاور بالا، ۱-۲۰۰ RPM", en: "High torque stepper motor, 1-200 RPM" },
    { fa: "نمایشگر رنگی TFT", en: "TFT color display" },
    { fa: "قابلیت استفاده دوگانه (دارای حالت دیسپنسینگ)", en: "Dual-use capability (dispensing mode)" },
    { fa: "قابلیت تنظیم Back suction (تقسیم مایعات بدون چکه)", en: "Adjustable back suction (drip-free dispensing)" },
    { fa: "منبع تغذیه DC اکسترنال", en: "External DC power supply" },
    { fa: "بازدهی بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "قابلیت کارکرد بی‌وقفه و شبانه‌روزی", en: "Continuous, around-the-clock operation" },
    { fa: "راه‌اندازی خارجی با سیگنال آنالوگ ۰-۱۰ ولت و سیگنال‌های کنترل دیجیتال", en: "External control via 0-10 V analog and digital control signals" },
    { fa: "دبی ۰٫۱ تا ۱۵۰ میلی‌لیتر بر دقیقه", en: "0.1 - 150 ml/min flowrate" },
    WARRANTY,
  ],
  applications: [
    { fa: "پمپ تک‌کاناله در مقیاس آزمایشگاهی", en: "Lab-scale single-channel pump" },
    { fa: "مراکز تحقیقاتی", en: "Research centers" },
    { fa: "دیسپنس واکسن یا محیط کشت", en: "Vaccine or media dispensing" },
    { fa: "فعالیت‌های شیمیایی", en: "Chemical activities" },
    { fa: "پمپاژ مایعات خطرناک", en: "Pumping hazardous liquids" },
  ],
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
    tagline: { fa: "یک یا دو هد، دبی تا ۱۳۰۰ میلی‌لیتر بر دقیقه", en: "One or two heads, up to 1300 ml/min" },
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
    tagline: { fa: "بدنهٔ PETG، تک‌کانال و مناسب میکروفلوئیدیک", en: "PETG body, single channel, microfluidic-ready" },
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
