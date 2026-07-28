// DriveRwanda Main Application SPA Router & Controller

import { initStorage } from "./utils/storage.js";
import { initAuth, isStudentLoggedIn, openAuthModal, renderAuthNav, setupAuthBanner } from "./auth.js";
import { setLanguage, updateDOMTranslations, getLang } from "./i18n.js";
import { renderHomeView, setupHomeEvents } from "./views/homeView.js";
import { renderCourseView, setupCourseEvents } from "./views/courseView.js";
import { renderExamView, setupExamEvents } from "./views/examView.js";
import { renderDashboardView } from "./views/dashboardView.js";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  initAuth();
  setupLanguagePicker();
  setupMobileMenu();
  setupModalOverlayClose();

  // Handle Hash Routing
  window.addEventListener("hashchange", handleRouting);
  handleRouting();
});

// Single Page App Hash Router
function handleRouting() {
  const hash = window.location.hash || "#home";
  const viewName = hash.replace("#", "").split("?")[0] || "home";

  // Access Guard check for student registration
  const protectedViews = ["courses", "exam", "dashboard"];
  if (protectedViews.includes(viewName) && !isStudentLoggedIn()) {
    showToast("Ugomba kwiyandikisha cyangwa kwinjira nka umunyeshuri (Registration Required).", "error");
    openAuthModal("register");
    window.location.hash = "#home";
    renderView("home");
    return;
  }

  renderView(viewName);
}

function renderView(viewName) {
  const mainContent = document.getElementById("mainContent");
  if (!mainContent) return;

  // Update active nav links
  document.querySelectorAll(".nav-item, .mobile-nav-item").forEach(link => {
    const target = link.getAttribute("data-view");
    if (target === viewName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  switch (viewName) {
    case "courses":
      mainContent.innerHTML = renderCourseView();
      setupCourseEvents();
      break;
    case "exam":
      mainContent.innerHTML = renderExamView();
      setupExamEvents();
      break;
    case "dashboard":
      mainContent.innerHTML = renderDashboardView();
      break;
    case "home":
    default:
      mainContent.innerHTML = renderHomeView();
      setupHomeEvents();
      break;
  }

  updateDOMTranslations();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Global Toast Notification Helper
export function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "ℹ️";
  if (type === "success") icon = "✓";
  if (type === "error") icon = "⚠️";

  toast.innerHTML = `
    <span style="font-weight:800; font-size:1.1rem;">${icon}</span>
    <span style="font-size:0.9rem;">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Language Picker Dropdown Handler
function setupLanguagePicker() {
  const langBtn = document.getElementById("langBtn");
  const picker = document.querySelector(".lang-picker");

  if (langBtn && picker) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      picker.classList.toggle("open");
    });

    document.addEventListener("click", () => {
      picker.classList.remove("open");
    });

    document.querySelectorAll(".lang-opt").forEach(opt => {
      opt.addEventListener("click", () => {
        const selectedLang = opt.getAttribute("data-lang");
        setLanguage(selectedLang);
        picker.classList.remove("open");
        showToast(`Ururimi rwahinduwe mu ${selectedLang === 'rw' ? 'Kinyarwanda' : selectedLang === 'en' ? 'English' : 'Français'}.`, "success");
        // Re-render active view
        handleRouting();
      });
    });
  }
}

// Mobile Menu Handler
function setupMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const menu = document.getElementById("mobileMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });

    document.querySelectorAll(".mobile-nav-item").forEach(item => {
      item.addEventListener("click", () => {
        menu.classList.remove("open");
      });
    });
  }
}

// Modal Close Overlay Handler
function setupModalOverlayClose() {
  const modalContainer = document.getElementById("modalContainer");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (modalContainer) {
    modalContainer.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        modalContainer.classList.add("hidden");
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (modalContainer) modalContainer.classList.add("hidden");
    });
  }
}
