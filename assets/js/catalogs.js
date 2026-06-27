/**
 * Catalog data — Sina (Faralab) laboratory & bioprocess equipment.
 * -------------------------------------------------------------
 * Each product's catalog is a bilingual "datasheet" rebuilt in HTML/CSS.
 * Persian content follows the customer's revised copy; English mirrors it.
 *
 * A catalog has one or more `sheets`. Bilingual fields use { fa, en }.
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
    { fa: "محفظه از جنس استیل ضدزنگ (ASTM304)", en: "Stainless steel chamber (ASTM304)" },
    { fa: "مجهز به کنترلر هوشمند سری ARM", en: "ARM series smart controller" },
    { fa: "مجهز به فیلتر داخلی جهت فیلتراسیون گاز CO₂ ورودی", en: "Internal filter for incoming CO₂ gas" },
    { fa: "گردش مؤثر هوای محفظه و گرمایش یکنواخت در تمام جهات", en: "Effective air circulation and uniform heating in all directions" },
    { fa: "دارای درب شیشه‌ای داخلی", en: "Internal glass door" },
    { fa: "دارای واشر سیلیکونی هوابند، بدون نشتی و اتلاف دما، رطوبت و گاز CO₂", en: "Airtight silicone gasket — no leakage or loss of temperature, humidity and CO₂" },
    { fa: "قابل کالیبراسیون توسط کاربر", en: "User-accessible calibration" },
    { fa: "مجهز به نمایشگر رنگی TFT لمسی با کاربری آسان", en: "Easy-to-use TFT color touchscreen" },
    { fa: "مجهز به سیستم هشدار بروز انواع خطاها", en: "Alarm system for all fault types" },
    { fa: "مجهز به سیستم ثبت وقایع (دیتالاگر)", en: "Event logging system (data logger)" },
    { fa: "بازیابی و جبران سریع پارامترها (دما، CO₂ و رطوبت)", en: "Fast recovery and compensation of parameters (temperature, CO₂ and humidity)" },
    { fa: "یکنواختی محفظه", en: "Chamber uniformity" },
    { fa: "بازدهی و کارایی بالا", en: "High efficiency and performance" },
    { fa: "۲ سال گارانتی", en: "2-year warranty" },
    { fa: "۱۰ سال خدمات پس از فروش", en: "10 years of after-sales service" },
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
      { fa: "نوع سنسور و محدوده دما", en: "Temp sensor & range" },
      { fa: "محدوده رطوبت", en: "Humidity range" },
      { fa: "شیکر", en: "Shaker" },
    ],
    rows: [
      [{ fa: "SCI-60", en: "SCI-60" }, { fa: "۶۰ لیتر", en: "60 L" }, { fa: "NDIR (0-20%)", en: "NDIR (0-20%)" }, { fa: "PID (30-50%)", en: "PID (30-50%)" }, { fa: "۰-۹۹٪", en: "0-99%" }, { fa: "اختیاری", en: "Optional" }],
      [{ fa: "SCI-120", en: "SCI-120" }, { fa: "۱۲۰ لیتر", en: "120 L" }, { fa: "NDIR (0-20%)", en: "NDIR (0-20%)" }, { fa: "PID (30-50%)", en: "PID (30-50%)" }, { fa: "۰-۹۹٪", en: "0-99%" }, { fa: "اختیاری", en: "Optional" }],
      [{ fa: "SCI-172", en: "SCI-172" }, { fa: "۱۷۲ لیتر", en: "172 L" }, { fa: "NDIR (0-20%)", en: "NDIR (0-20%)" }, { fa: "PID (30-50%)", en: "PID (30-50%)" }, { fa: "۰-۹۹٪", en: "0-99%" }, { fa: "اختیاری", en: "Optional" }],
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
    { fa: "محفظه استیل ضدزنگ (ASTM304)", en: "Stainless steel chamber (ASTM304)" },
    { fa: "کنترلر هوشمند سری ARM", en: "ARM series smart controller" },
    { fa: "مناسب برای کشت انواع سلول‌های چسبنده", en: "Suitable for culturing all adherent cell types" },
    { fa: "گرمایش همه‌جانبه از تمام طرف‌ها", en: "Comprehensive heating on all sides" },
    { fa: "چرخش نرم، بدون صدا و بدون تنش غلتک‌ها", en: "Smooth, quiet and tension-free rotation of the rolls" },
    { fa: "کالیبراسیون در دسترس کاربر", en: "User-accessible calibration" },
    { fa: "واشر سیلیکونی بدون نشتی", en: "Leak-free silicone gasket" },
    { fa: "نمایشگر رنگی TFT لمسی", en: "TFT color touchscreen" },
    { fa: "هشدار برای خطاها و عیوب", en: "Alarms for faults and errors" },
    { fa: "بازیابی سریع شرایط", en: "Fast recovery of conditions" },
    { fa: "مجهز به سیستم ثبت وقایع (دیتالاگر)", en: "Event logging system (data logger)" },
    { fa: "یکنواختی دما، رطوبت و گاز CO₂ در محفظه با استفاده از توربوفن", en: "Uniform temperature, humidity and CO₂ in the chamber via turbo-fan" },
    { fa: "قابلیت نصب دو دستگاه روی هم و استفاده بهینه از فضای آزمایشگاه", en: "Stackable (two units) for optimal lab-space use" },
    { fa: "بازدهی و کارایی بالا", en: "High efficiency and performance" },
    { fa: "۲ سال گارانتی", en: "2-year warranty" },
  ],
  applications: [
    { fa: "تحقیقات و تولید انواع آنتی‌بادی‌های مونوکلونال", en: "Research and production of monoclonal antibodies" },
    { fa: "تحقیقات و تولید انواع واکسن‌های مبتنی بر کشت سلول", en: "Research and production of cell-culture-based vaccines" },
    { fa: "کشت و تکثیر انواع سلول با کارایی و راندمان بالا", en: "High-efficiency culturing and proliferation of all cell types" },
  ],
  specs: {
    columns: [
      { fa: "مدل", en: "Model" },
      { fa: "ظرفیت", en: "Capacity" },
      { fa: "سنسور CO₂", en: "CO₂ sensor" },
      { fa: "سنسور دما", en: "Temp sensor" },
      { fa: "سنسور رطوبت", en: "RH sensor" },
      { fa: "محدوده سرعت چرخش", en: "Rotation speed range" },
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
  title: { fa: "بیوراکتور با کیسه یکبارمصرف", en: "Bioreactor with Disposable bag" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/bioreactor.jpg",
  features: [
    { fa: "حرکت گهواره‌ای، ایده‌آل برای کشت انواع سلول با کمترین تنش", en: "Rocking motion, ideal for culturing all cell types with minimal stress" },
    { fa: "مناسب برای کشت انواع سلول‌های چسبنده با استفاده از میکروکریر", en: "Suitable for culturing adherent cells using micro-carriers" },
    { fa: "سیستم کاملاً بسته جهت پیشگیری از آلودگی", en: "Completely closed system to prevent contamination" },
    { fa: "افزایش راندمان در نتیجه استفاده از کیسه یکبارمصرف و از پیش استریل‌شده (SinaBag)", en: "Higher efficiency thanks to the disposable, pre-sterilized bag (SinaBag)" },
    { fa: "نصب آسان کیسه", en: "Easy bag installation" },
    { fa: "کنترل ایمنی فشار جهت جلوگیری از تحمیل فشار اضافی به کیسه", en: "Pressure safety control to avoid excess pressure on the bag" },
    { fa: "بهره‌مندی از سنسورهای یکبارمصرف قابل‌اعتماد برای اندازه‌گیری pH و DO (در مدل‌های اپتیک)", en: "Reliable single-use sensors for pH and DO measurement (Optical models)" },
    { fa: "مجهز به رابط لمسی با کاربری آسان", en: "Easy-to-use touch interface" },
    { fa: "مجهز به سیستم هشدار پیشرفته و تعبیه ویژگی‌های ایمنی برای کارکرد ایمن", en: "Advanced alarm system and built-in safety features for safe operation" },
    { fa: "مجهز به سیستم پایش لحظه‌ای فیلتر گاز، حرکت گهواره و پارامترهای اصلی", en: "Real-time monitoring of gas filter, rocking motion and main parameters" },
    { fa: "قابلیت نصب فیلترهای پرفیوژن، لودسل و کنترلر (اختیاری)", en: "Optional perfusion filters, load cell and controller" },
    { fa: "۲ سال گارانتی", en: "2-year warranty" },
  ],
  applications: [
    { fa: "تحقیقات و تولید انواع آنتی‌بادی‌های مونوکلونال", en: "Research and production of monoclonal antibodies" },
    { fa: "کشت انواع سلول‌های چسبنده", en: "Culturing adherent cells" },
    { fa: "کاربردهای متنوع در صنعت واکسن", en: "Diverse applications in the vaccine industry" },
    { fa: "کشت انواع سلول حشره و تکثیر باکولوویروس", en: "Insect cell culture and baculovirus propagation" },
  ],
  benefits: [
    { fa: "کاهش قابل توجه هزینه‌های نگهداری و سربار", en: "Significant reduction of maintenance and overhead costs" },
    { fa: "کاهش چشمگیر میزان مصرف آب تزریقی (WFI)", en: "Dramatic reduction of WFI (water for injection) usage" },
    { fa: "کاهش الزامات اعتبارسنجی (ولیدیشن) فرآیند", en: "Reduced process validation requirements" },
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
    { fa: "بدنه استیل ضدزنگ (ASTM304)", en: "Stainless steel case (ASTM304)" },
    { fa: "میکروکنترلر سری ARM", en: "ARM series micro-controller" },
    { fa: "قابلیت نصب یک یا دو کانال شیلنگ سیلیکونی", en: "One or two channels of silicon tubing" },
    { fa: "طراحی ویژه بدون نیاز به نگهداری", en: "Special maintenance-free design" },
    { fa: "غلتک‌های استیل ضدزنگ با بلبرینگ نرم", en: "Stainless steel rollers with smooth bearings" },
    { fa: "قابلیت کالیبراسیون شیلنگ توسط کاربر", en: "User-accessible tube calibration" },
    { fa: "موتور سروو با گشتاور بالا، ۱-۵۰۰ RPM", en: "High torque servo motor, 1-500 RPM" },
    { fa: "نمایشگر هفت‌قطعه‌ای (7-Segment)", en: "7-Segment display" },
    { fa: "قابلیت استفاده دوگانه (دارای حالت دیسپنسینگ)", en: "Dual-use capability (dispensing mode)" },
    { fa: "بازدهی بالا و صدای بسیار کم", en: "High efficiency and very low noise" },
    { fa: "قابلیت کارکرد بی‌وقفه مطمئن", en: "Reliable non-stop operation" },
    { fa: "راه‌اندازی خارجی با سیگنال ۰-۱۰ ولت و دیجیتال", en: "External driving by 0-10 V and digital signals" },
    { fa: "دبی ۱۰۰ تا ۱۰۰۰۰ میلی‌لیتر بر دقیقه", en: "100 - 10000 ml/min flowrate" },
    { fa: "۲ سال گارانتی", en: "2-year warranty" },
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
    { fa: "میکروکنترلر سری ARM", en: "ARM series micro-controller" },
    { fa: "قابلیت نصب یک یا دو کانال شیلنگ سیلیکونی", en: "One or two channels of silicon tubing" },
    { fa: "طراحی ویژه بدون نیاز به نگهداری", en: "Special maintenance-free design" },
    { fa: "غلتک‌های استیل ضدزنگ با بلبرینگ نرم", en: "Stainless steel rollers with smooth bearings" },
    { fa: "قابلیت کالیبراسیون شیلنگ توسط کاربر", en: "User-accessible tube calibration" },
    { fa: "موتور استپر با گشتاور بالا، ۱-۳۰۰ RPM", en: "High torque stepper motor, 1-300 RPM" },
    { fa: "نمایشگر رنگی TFT", en: "TFT color display" },
    { fa: "قابلیت استفاده دوگانه (دارای حالت دیسپنسینگ)", en: "Dual-use capability (dispensing mode)" },
    { fa: "تنظیم بازگشت ویژه (تقسیم مایعات بدون چکه)", en: "Special retraction setting (drip-free dispensing)" },
    { fa: "منبع تغذیه از نوع DC خارجی", en: "External DC power supply" },
    { fa: "بازدهی بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "قابلیت کارکرد بی‌وقفه مطمئن", en: "Reliable non-stop operation" },
    { fa: "راه‌اندازی خارجی با سیگنال ۰-۱۰ ولت و دیجیتال", en: "External driving by 0-10 V and digital signals" },
    { fa: "دبی ۰٫۲ تا ۱۳۰۰ میلی‌لیتر بر دقیقه", en: "0.2 - 1300 ml/min flowrate" },
    { fa: "۲ سال گارانتی", en: "2-year warranty" },
  ],
  applications: [
    { fa: "پمپ تک‌کاناله با کاربرد متنوع در مقیاس آزمایشگاهی", en: "Versatile lab-scale single-channel pump" },
    { fa: "انتقال امن محیط‌های کشت، محلول‌ها و بافرها در سیستم بسته", en: "Safe transfer of media, solutions and buffers in a closed system" },
    { fa: "دیسپنسینگ انواع فراورده‌های بیولوژیک", en: "Dispensing of various biological products" },
    { fa: "انتقال امن مواد شیمیایی مایع در سیستم بسته", en: "Safe transfer of liquid chemicals in a closed system" },
    { fa: "انتقال امن مایعات خطرناک در سیستم بسته", en: "Safe transfer of hazardous liquids in a closed system" },
  ],
};

const SHEET_DG6 = {
  title: { fa: "پمپ پریستالتیک DG6", en: "Peristaltic pump DG6" },
  subtitle: SUBTITLE,
  photo: "assets/img/products/dg6.jpg",
  features: [
    { fa: "بدنه استیل ضدزنگ (ASTM304)", en: "Stainless steel case (ASTM304)" },
    { fa: "میکروکنترلر سری ARM", en: "ARM series micro-controller" },
    { fa: "پمپ کارآمد شش کاناله", en: "Efficient six-channel pump" },
    { fa: "مکانیزم بدون نیاز به نگهداری", en: "Maintenance-free mechanism" },
    { fa: "غلتک‌های استیل ضدزنگ با بلبرینگ", en: "Stainless steel rollers with bearing" },
    { fa: "کالیبراسیون شیلنگ در دسترس کاربر", en: "User-accessible tube calibration" },
    { fa: "موتور استپر گشتاور بالا، ۱-۲۰۰ RPM", en: "High torque stepper motor, 1-200 RPM" },
    { fa: "نمایشگر رنگی TFT", en: "TFT color display" },
    { fa: "دارای حالت دیسپنسینگ", en: "Dispensing mode available" },
    { fa: "تنظیم بازگشت ضدچکه", en: "Anti-drip retraction setting" },
    { fa: "تغذیه DC خارجی", en: "External DC power supply" },
    { fa: "بازده بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "قابلیت اطمینان کارکرد بی‌وقفه", en: "Reliable non-stop operation" },
    { fa: "راه‌اندازی خارجی با سیگنال ۰-۱۰ ولت و دیجیتال", en: "External driving by 0-10 V and digital signals" },
    { fa: "دبی ۰٫۰۳ تا ۳۰ میلی‌لیتر بر دقیقه", en: "0.03 - 30 ml/min flowrate" },
    { fa: "۲ سال گارانتی", en: "2-year warranty" },
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
    { fa: "میکروکنترلر سری ARM", en: "ARM series micro-controller" },
    { fa: "تک‌کانال شیلنگ سیلیکونی", en: "Single-channel of silicon tubing" },
    { fa: "مکانیزم بدون نیاز به نگهداری", en: "Maintenance-free mechanism" },
    { fa: "کالیبراسیون شیلنگ در دسترس کاربر", en: "User-accessible tube calibration" },
    { fa: "مجهز به موتور استپر، ۱-۱۵۰ RPM", en: "Stepper motor, 1-150 RPM" },
    { fa: "مجهز به نمایشگر OLED", en: "OLED display" },
    { fa: "دارای حالت دیسپنسینگ", en: "Dispensing mode available" },
    { fa: "تنظیم بازگشت ضدچکه", en: "Anti-drip retraction setting" },
    { fa: "تغذیه DC خارجی", en: "External DC power supply" },
    { fa: "بازده بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "قابلیت اطمینان کارکرد بی‌وقفه", en: "Reliable non-stop operation" },
    { fa: "راه‌اندازی خارجی با سیگنال ۰-۱۰ ولت و دیجیتال", en: "External driving by 0-10 V and digital signals" },
    { fa: "دبی ۰٫۰۳ تا ۱۲۰ میلی‌لیتر بر دقیقه", en: "0.03 - 120 ml/min flowrate" },
  ],
  applications: [
    { fa: "پمپ تک‌کاناله در مقیاس آزمایشگاهی", en: "Lab-scale single-channel pump" },
    { fa: "کاربرد میکروفلوئیدیک", en: "Microfluidic applications" },
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
    { fa: "تک‌کانال شیلنگ سیلیکونی", en: "Single-channel of silicon tubing" },
    { fa: "مکانیزم بدون نیاز به نگهداری", en: "Maintenance-free mechanism" },
    { fa: "کالیبراسیون شیلنگ در دسترس کاربر", en: "User-accessible tube calibration" },
    { fa: "موتور استپر گشتاور بالا، ۱-۲۰۰ RPM", en: "High torque stepper motor, 1-200 RPM" },
    { fa: "نمایشگر رنگی TFT", en: "TFT color display" },
    { fa: "دارای حالت دیسپنسینگ", en: "Dispensing mode available" },
    { fa: "تنظیم بازگشت ضدچکه", en: "Anti-drip retraction setting" },
    { fa: "تغذیهٔ DC خارجی", en: "External DC power supply" },
    { fa: "بازده بالا و صدای کم", en: "High efficiency and low noise" },
    { fa: "قابلیت اطمینان کارکرد بی‌وقفه", en: "Reliable non-stop operation" },
    { fa: "راه‌اندازی خارجی با سیگنال ۰-۱۰ ولت و دیجیتال", en: "External driving by 0-10 V and digital signals" },
    { fa: "دبی ۰٫۱ تا ۱۵۰ میلی‌لیتر بر دقیقه", en: "0.1 - 150 ml/min flowrate" },
    { fa: "۲ سال گارانتی", en: "2-year warranty" },
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
