// DriveRwanda Internationalization (i18n) Engine

import { getStoredLang, setStoredLang } from "./utils/storage.js";

export const TRANSLATIONS = {
  rw: {
    navHome: "Ahabanza",
    navCourses: "Amasomo & Ibyapa",
    navExam: "Ikizamini Simulator",
    navDashboard: "Ibyarangiye",
    loginBtn: "Kwinjira",
    registerBtn: "Kwigira & Kwiyandikisha",
    logoutBtn: "Sohoka",
    authBannerMsg: "Mwene wacu: Ugomba kwiyandikisha cyangwa kwinjira kugirango ufungure amasomo n'ibizamini byose.",
    registerNow: "Iyandikishe Sasa",
    heroTitle: "Tsinda Ikizamini cy'Icyarabu (Provisoire) mu Rwanda!",
    heroSubtitle: "Platform ya mbere mu Rwanda ikufasha kwiga amategeko y'omu handa, ibyapa no gukora ibizamini nyabyo bya Polisi y'u Rwanda mu Kinyarwanda, Icyongereza n'Igifaransa.",
    heroCtaRegister: "Tanga Formu y'Umunyeshuri",
    heroCtaDemo: "Koresha Konti y'Igerageza (Demo)",
    feature1Title: "Ibyapa Byose by'omu Handa",
    feature1Desc: "Wige ibyapa by'Inkwarning, Ibibuza, n'Ibihatira ukoresheje amakarita (flashcards) zikwereka n'isobanuro.",
    feature2Title: "Ikizamini Simulator nyakuri",
    feature2Desc: "Ibibazo 20, iminota 20 y'isaha n'ibisubizo n'isobanuro rya buri kibazo hejuru ya 80% yo gutsinda.",
    feature3Title: "Impushya Zose (Cat A, B, C, D, E)",
    feature3Desc: "Uruzinduko rwihariye rw'amasomo rusobanura buri ngero y'urushya rw'ibinyabiziga mu Rwanda.",
    coursesHeading: "Amasomo y'Amategeko y'Omu Handa mu Rwanda",
    coursesSubheading: "Hitamo isomo ushaka kwigaho cyangwa ukoreshe amakarita y'ibyapa kugirango witegure ikizamini.",
    examHeading: "Ikizamini cy'Igerageza (Official Exam Simulator)",
    examSubheading: "Ibibazo 20 biteguye mu buryo bw'ikizamini nyakuri rya Polisi y'u Rwanda (Pass mark: 16/20).",
    startOfficialExam: "Tangiye Ikizamini Nyakuri (20 min)",
    startCategoryExam: "Ikizamini cy'Ibyapa Gusa",
    dashboardHeading: "Ibyarangiye n'Iterambere ry'Umunyeshuri",
    dashboardSubheading: "Reba uko ugenda witegura ikizamini cy'icyarabu hamwe n'amanota y'ibizamini wakoze.",
    readinessScore: "Igipimo cy'Ubutegetse (Exam Readiness)",
    pastAttempts: "Ibizamini Wakoze Mbere",
    noHistoryYet: "Nta kizamini urakora. Kanda 'Ikizamini Simulator' uze utangire!",
    footerDesc: "Platform numero 1 yo kwigiraho amategeko y'omu handa n'ibyapa no gutsindira ikizamini cy'icyarabu (Provisoire) mu Rwanda.",
    footerCategories: "Ibyiciro by'Impushya",
    footerQuickLinks: "Iby'Ingenzi",
    footerLegal: "Amategeko y'u Rwanda"
  },
  en: {
    navHome: "Home",
    navCourses: "Courses & Signs",
    navExam: "Exam Simulator",
    navDashboard: "Progress & History",
    loginBtn: "Sign In",
    registerBtn: "Student Register",
    logoutBtn: "Log Out",
    authBannerMsg: "Notice: You must register or log in as a student to access full courses and official practice exams.",
    registerNow: "Register Now",
    heroTitle: "Pass Your Rwanda Provisional Driving License Exam!",
    heroSubtitle: "Rwanda's top e-learning platform to master road rules, signs, traffic laws, and practice official RNP timed test simulations.",
    heroCtaRegister: "Register as a Student",
    heroCtaDemo: "Try Demo Account",
    feature1Title: "Interactive Road Signs",
    feature1Desc: "Learn warning, prohibition, mandatory, and priority signs with visual vector flashcards.",
    feature2Title: "Real Timed Exam Simulator",
    feature2Desc: "20 questions, 20-minute timer, instant scoring and article reference explanations.",
    feature3Title: "All License Categories",
    feature3Desc: "Tailored practice for Motorbikes (Cat A), Light Passenger (Cat B), Heavy Transport (Cat C/D), and Trailers (Cat E).",
    coursesHeading: "Rwanda Traffic Theory Courses",
    coursesSubheading: "Select a module below or use interactive sign flashcards to revise.",
    examHeading: "Official Practice Test Simulator",
    examSubheading: "20 randomized questions designed after Rwanda National Police provisional driving tests.",
    startOfficialExam: "Start Timed Exam (20 mins)",
    startCategoryExam: "Practice Signs Only",
    dashboardHeading: "Student Progress & Performance Dashboard",
    dashboardSubheading: "Track your test attempt history, average scores, and overall exam readiness.",
    readinessScore: "Official Exam Readiness",
    pastAttempts: "Past Exam Attempts",
    noHistoryYet: "No practice exam records yet. Click 'Exam Simulator' to launch your first test!",
    footerDesc: "Rwanda's leading provisional driving license theory and practice exam simulator platform.",
    footerCategories: "License Categories",
    footerQuickLinks: "Quick Navigation",
    footerLegal: "Rwanda Traffic Code"
  },
  fr: {
    navHome: "Accueil",
    navCourses: "Cours & Panneaux",
    navExam: "Simulateur d'Examen",
    navDashboard: "Tableau de Bord",
    loginBtn: "Se Connecter",
    registerBtn: "S'inscrire",
    logoutBtn: "Déconnexion",
    authBannerMsg: "Remarque: Vous devez être inscrit pour accéder à l'ensemble des cours et examens.",
    registerNow: "S'inscrire Maintenant",
    heroTitle: "Reussissez votre Permis Provisoire au Rwanda!",
    heroSubtitle: "Plateforme d'apprentissage officielle du Code de la Route au Rwanda (Kinyarwanda, Anglais et Français).",
    heroCtaRegister: "S'inscrire comme Étudiant",
    heroCtaDemo: "Essayer Compte Démo",
    feature1Title: "Panneaux Interactifs",
    feature1Desc: "Apprenez tous les panneaux de danger, interdiction, obligation et priorité.",
    feature2Title: "Simulateur d'Examen Chronométré",
    feature2Desc: "20 questions, 20 minutes, calcul instantané du score et explications détaillées.",
    feature3Title: "Toutes Catégories (A, B, C, D, E)",
    feature3Desc: "Entraînement adapté pour motos, voitures légères et poids lourds.",
    coursesHeading: "Cours du Code de la Route au Rwanda",
    coursesSubheading: "Sélectionnez un module ci-dessous pour réviser.",
    examHeading: "Simulateur d'Examen Officiel",
    examSubheading: "20 questions tirées au sort conformes au permis provisoire de la Police Nationale du Rwanda.",
    startOfficialExam: "Démarrer l'Examen (20 min)",
    startCategoryExam: "Entraînement Panneaux Seuls",
    dashboardHeading: "Progrès et Historique des Examens",
    dashboardSubheading: "Suivez vos performances et prépa à l'examen officiel.",
    readinessScore: "Niveau de Préparation",
    pastAttempts: "Historique des Examens",
    noHistoryYet: "Aucun examen effectué. Cliquez sur 'Simulateur d'Examen' pour commencer!",
    footerDesc: "Plateforme N°1 de préparation au permis de conduire provisoire au Rwanda.",
    footerCategories: "Catégories de Permis",
    footerQuickLinks: "Liens Rapides",
    footerLegal: "Code de la Route Rwanda"
  }
};

let currentLang = getStoredLang() || "rw";

export function getLang() {
  return currentLang;
}

export function setLanguage(lang) {
  if (TRANSLATIONS[lang]) {
    currentLang = lang;
    setStoredLang(lang);
    updateDOMTranslations();
  }
}

export function t(key) {
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS["en"]?.[key] || key;
}

export function updateDOMTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key && TRANSLATIONS[currentLang]?.[key]) {
      el.textContent = TRANSLATIONS[currentLang][key];
    }
  });

  // Update dropdown labels & flag
  const flagMap = { rw: "🇷🇼", en: "🇬🇧", fr: "🇫🇷" };
  const codeMap = { rw: "RW", en: "EN", fr: "FR" };
  
  const flagEl = document.getElementById("currentLangFlag");
  const codeEl = document.getElementById("currentLangCode");
  if (flagEl) flagEl.textContent = flagMap[currentLang] || "🇷🇼";
  if (codeEl) codeEl.textContent = codeMap[currentLang] || "RW";
}
