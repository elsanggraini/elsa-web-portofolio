/* ==========================================================================
   PROJECTS DATA
   Sumber tunggal untuk semua data project.
   Dipakai oleh: index.html (3 featured) & archive.html (semua project)

   Field per project:
     id            — slug unik, tidak perlu diubah
     featured      — true = tampil di Home (max 3)
     year          — tahun project
     title         — judul lengkap (dipakai di archive table)
     shortTitle    — judul pendek (dipakai di card Home)
     category      — label kategori (teks)
     categoryClass — CSS class badge warna (cat-research, cat-mobile, dst.)
     tags          — array teknologi (maks 4 tampil di card, semua tampil di archive)
     cardDesc      — deskripsi 1–2 kalimat untuk card Home
     linkGithub    — URL repo GitHub, "" jika tidak ada
     linkDemo      — URL demo/live/figma, "" jika tidak ada
     isJournal     — true jika published journal paper
     journalName   — nama jurnal (opsional, dipakai di archive)

   ⚠️  SEBELUM PUBLISH:
     - Ganti semua "https://github.com/username/..." dengan URL GitHub asli kamu.
     - Isi linkDemo jika ada (Figma, APK, hosted demo, dsb.).
     - Ganti linkGithub: "" pada project yang tidak berbasis kode (mis. Canva).
   ========================================================================== */

const PROJECTS = [

  /* ── 1. K-Means F1 (Journal) ─────────────────────────────────────── */
  {
    id:            "kmeans-f1",
    featured:      true,
    year:          "2026",
    title:         "Implementation of K-Means Clustering: Mapping Driver Performance in the 2026 F1 New Regulation Era",
    shortTitle:    "K-Means Clustering: F1 2026 Driver Performance",
    category:      "Research Paper",
    categoryClass: "cat-research",
    tags:          ["Python", "Scikit-learn", "FastF1", "Pandas", "K-Means", "Seaborn"],
    cardDesc:      "Published K-Means clustering research categorizing Formula 1 drivers based on performance metrics and consistency under 2026 technical regulations.",
    linkGithub:    "https://github.com/elsanggraini/f1-2026-preseason-clustering",
    linkDemo:      "https://jutei.ubsi.ac.id",
    isJournal:     true,
    journalName:   "JUTEI Vol.10 No.1 · SINTA 4",
  },

  /* ── 2. Florithm ─────────────────────────────────────────────────── */
  {
    id:            "florithm",
    featured:      true,
    year:          "2026",
    title:         "Florithm – AI Powered Florist E-Commerce Mobile Application",
    shortTitle:    "Florithm – AI Powered Florist E-Commerce",
    category:      "Mobile App",
    categoryClass: "cat-mobile",
    tags:          ["Flutter", "Dart", "Laravel", "Figma"],
    cardDesc:      "Cross-platform florist e-commerce app with AI-based sentiment recommendation.",
    linkGithub:    "https://github.com/elsanggraini/florithm-e-commerce-app",
    linkDemo:      "",
    isJournal:     false,
    journalName:   "",
  },

  /* ── 3. IoT Temperature Monitoring ──────────────────────────────── */
  {
    id:            "iot-temp",
    featured:      true,
    year:          "2026",
    title:         "IoT Temperature & Humidity Monitoring System",
    shortTitle:    "IoT Temperature Monitoring System",
    category:      "IoT",
    categoryClass: "cat-iot",
    tags:          ["ESP32", "DHT11", "C++", "Arduino"],
    cardDesc:      "Real-time environmental monitoring system using ESP32 microcontrollers and DHT11 sensors with consistent data logging.",
    linkGithub:    "https://github.com/elsanggraini/iot-temperature-monitoring-esp32",
    linkDemo:      "",
    isJournal:     false,
    journalName:   "",
  },

  /* ── 4. Flutter ToDo List ────────────────────────────────────────── */
  {
    id:            "todo-flutter",
    featured:      false,
    year:          "2025",
    title:         "Cross-Platform To-Do List Application Using Flutter",
    shortTitle:    "Cross-Platform To-Do List App (Flutter)",
    category:      "Mobile App",
    categoryClass: "cat-mobile",
    tags:          ["Flutter", "Dart", "Firebase", "SQLite"],
    cardDesc:      "Minimalist cross-platform task manager with full CRUD, smart reminders, and hybrid SQLite + Firebase storage.",
    linkGithub:    "https://github.com/elsanggraini/flutter-to-do-list-app",
    linkDemo:      "",
    isJournal:     false,
    journalName:   "",
  },

  /* ── 5. F1 Grid Prediction ──────────────────────────────────────── */
  {
    id:            "f1-grid",
    featured:      false,
    year:          "2025",
    title:         "F1 Australian GP 2026 – Starting Grid Prediction",
    shortTitle:    "F1 Australian GP 2026 – Starting Grid Prediction",
    category:      "Data Science (ML)",
    categoryClass: "cat-ml",
    tags:          ["Python", "FastF1", "Scikit-learn", "Random Forest"],
    cardDesc:      "Random Forest model predicting 2026 Australian GP starting grid from 2019–2024 historical qualifying data with three-tier fallback logic.",
    linkGithub:    "https://github.com/elsanggraini/f1-starting-grid-prediction-ml",
    linkDemo:      "",
    isJournal:     false,
    journalName:   "",
  },

  /* ── 6. SVM News Classification ─────────────────────────────────── */
  {
    id:            "svm-news",
    featured:      false,
    year:          "2025",
    title:         "Classification of ChatGPT-Generated vs. Human-Written News using SVM",
    shortTitle:    "AI vs. Human News Classification (SVM)",
    category:      "Data Science (NLP)",
    categoryClass: "cat-nlp",
    tags:          ["Python", "RapidMiner", "SVM", "NLP", "Text Mining"],
    cardDesc:      "SVM classifier distinguishing ChatGPT-generated from human-written news articles. 89.29% accuracy with multi-metric evaluation.",
    linkGithub:    "https://github.com/elsanggraini/text-classification-project",
    linkDemo:      "",
    isJournal:     false,
    journalName:   "",
  },

  /* ── 7. CLAHE Image Enhancement ─────────────────────────────────── */
  {
    id:            "clahe",
    featured:      false,
    year:          "2025",
    title:         "Nighttime Vehicle Image Enhancement using Histogram Equalization & CLAHE",
    shortTitle:    "Nighttime Vehicle Image Enhancement (CLAHE)",
    category:      "Image Processing",
    categoryClass: "cat-image",
    tags:          ["Python", "OpenCV", "Scikit-image", "NumPy", "SSIM"],
    cardDesc:      "Comparative study of HE vs. CLAHE for low-light grayscale vehicle image enhancement using SSIM as quality metric.",
    linkGithub:    "https://github.com/elsanggraini/image-processing-project",
    linkDemo:      "",
    isJournal:     false,
    journalName:   "",
  },

  /* ── 8. Life Expectancy ──────────────────────────────────────────── */
  {
    id:            "life-expectancy",
    featured:      false,
    year:          "2025",
    title:         "Life Expectancy Analysis in Southeast Asia – Linear Regression Data Mining (2015)",
    shortTitle:    "Life Expectancy Analysis SE Asia (Linear Regression)",
    category:      "Data Science & Analytics",
    categoryClass: "cat-data",
    tags:          ["RapidMiner", "Linear Regression", "Excel"],
    cardDesc:      "Linear Regression data mining identifying GDP and education as primary life expectancy drivers across Southeast Asia. R²=0.860, RMSE=2.004.",
    linkGithub:    "https://github.com/elsanggraini/life-expectancy-asean",
    linkDemo:      "",
    isJournal:     false,
    journalName:   "",
  },

  /* ── 9. Social Media Campaign ───────────────────────────────────── */
  {
    id:            "social-campaign",
    featured:      false,
    year:          "2024",
    title:         "Social Media Campaign for Community Programs (Karang Taruna)",
    shortTitle:    "Social Media Campaign for Community Programs",
    category:      "UI/UX Design",
    categoryClass: "cat-uiux",
    tags:          ["Canva", "Visual Communication", "Graphic Design"],
    cardDesc:      "Ongoing strategic visual campaign as PR Officer for Karang Taruna — blending modern aesthetics with cross-generational accessibility.",
    linkGithub:    "",
    linkDemo:      "https://www.instagram.com/katar.sukut.02?igsh=MTExZ2NtajM0Y2tkcQ==",
    isJournal:     false,
    journalName:   "",
  },

  /* ── 10. PySpark ETL Pipeline ─────────────────────────────────────── */
  {
    id:            "pyspark-etl",
    featured:      false,
    year:          "2025",
    title:         "Scalable AI Job Market Data Pipeline: PySpark Cleansing & MongoDB Integration",
    shortTitle:    "Scalable AI Job Market Data Pipeline (PySpark)",
    category:      "Big Data",
    categoryClass: "cat-bigdata",
    tags:          ["Python", "PySpark", "MongoDB", "ETL"],
    cardDesc:      "End-to-end ETL pipeline using PySpark to cleanse large-scale AI job listings and integrate into MongoDB NoSQL for downstream analytics.",
    linkGithub:    "https://github.com/elsanggraini/AI-Jobs-BigData-Project",
    linkDemo:      "",
    isJournal:     false,
    journalName:   "",
  },

  /* ── 11. Florist UI/UX ───────────────────────────────────────────── */
  {
    id:            "florist-uiux",
    featured:      false,
    year:          "2024",
    title:         "UI/UX Design for Website-Based Flower Shop E-Commerce (Luxora Florist)",
    shortTitle:    "Luxora Florist – E-Commerce UI/UX Design",
    category:      "UI/UX Design",
    categoryClass: "cat-uiux",
    tags:          ["Figma", "Prototyping", "Wireframing", "UCD"],
    cardDesc:      "High-fidelity dual-interface prototype for a digital florist boutique — 9 full pages following User-Centered Design methodology.",
    linkGithub:    "https://github.com/elsanggraini/florist-website-design",
    linkDemo:      "https://www.figma.com/design/sZRPdDP1kuhMmjujNySmgY/Luxora-Team-Project?node-id=0-1&t=uj0LRxmm3GZF4Skl-1",
    isJournal:     false,
    journalName:   "",
  },

  /* ── 12. Book Store Java OOP ─────────────────────────────────────── */
  {
    id:            "bookstore-java",
    featured:      false,
    year:          "2023",
    title:         "Comprehensive Book Store Management System Using Java OOP Principles",
    shortTitle:    "Book Store Management System (Java OOP)",
    category:      "Software Engineering",
    categoryClass: "cat-software",
    tags:          ["Java JDK 17", "NetBeans", "OOP", "Encapsulation"],
    cardDesc:      "Console-based retail management system applying OOP principles: encapsulation, abstraction, and clean separation of business logic.",
    linkGithub:    "https://github.com/elsanggraini/BoookStrore-OPP-Java",
    linkDemo:      "",
    isJournal:     false,
    journalName:   "",
  },

];

/* ── Helpers ─────────────────────────────────────────────────────────────── */
const getFeaturedProjects = () => PROJECTS.filter(p => p.featured);
const getAllProjects       = () => PROJECTS;
