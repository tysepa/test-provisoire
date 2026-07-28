import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export function Navbar({ activeTab, setActiveTab }) {
  const { currentUser, isLoggedIn, logout, openModal, showToast } = useAuth();
  const { lang, changeLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProtectedTab = (tabName) => {
    if (!isLoggedIn) {
      showToast("Ugomba kwiyandikisha cyangwa kwinjira nka umunyeshuri (Registration Required).", "error");
      openModal("register");
      return;
    }
    setActiveTab(tabName);
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false);
  };

  const flagMap = { rw: "🇷🇼", en: "🇬🇧", fr: "🇫🇷" };
  const codeMap = { rw: "RW", en: "EN", fr: "FR" };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <div className="nav-brand" onClick={() => handleNavClick("home")}>
          <div className="logo-badge">
            <span className="flag-stripe rw-blue"></span>
            <span className="flag-stripe rw-yellow"></span>
            <span className="flag-stripe rw-green"></span>
          </div>
          <div>
            <span className="brand-title">Drive<span className="highlight">Rwanda</span></span>
            <span className="nav-momo-subtitle">MoMo Pay: 0782148861</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-links desktop-only-links">
          <button className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>
            🏠 {t("navHome")}
          </button>
          <button className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => handleProtectedTab('courses')}>
            📚 {t("navCourses")} (Trial)
          </button>
          <button className={`nav-item ${activeTab === 'exam' ? 'active' : ''}`} onClick={() => handleProtectedTab('exam')}>
            ⏱️ {t("navExam")} (80 RWF)
          </button>
          <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleProtectedTab('dashboard')}>
            📊 {t("navDashboard")}
          </button>
        </nav>

        {/* Header Right Actions */}
        <div className="nav-actions-right">
          {/* Dark/Light Mode Theme Switcher */}
          <button className="theme-toggle-btn" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Language Picker */}
          <div style={{ position: "relative" }}>
            <button className="btn btn-sm btn-secondary" onClick={() => setIsLangOpen(!isLangOpen)}>
              <span>{flagMap[lang]}</span>
              <span>{codeMap[lang]}</span>
            </button>

            {isLangOpen && (
              <div className="lang-dropdown-menu">
                <button className="btn btn-sm btn-secondary lang-dropdown-item" onClick={() => { changeLanguage("rw"); setIsLangOpen(false); }}>🇷🇼 Kinyarwanda</button>
                <button className="btn btn-sm btn-secondary lang-dropdown-item" onClick={() => { changeLanguage("en"); setIsLangOpen(false); }}>🇬🇧 English</button>
                <button className="btn btn-sm btn-secondary lang-dropdown-item" onClick={() => { changeLanguage("fr"); setIsLangOpen(false); }}>🇫🇷 Français</button>
              </div>
            )}
          </div>

          {/* Desktop User Auth Buttons */}
          <div className="desktop-auth-actions">
            {isLoggedIn ? (
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div className="user-avatar-badge">
                  {currentUser.fullName.charAt(0).toUpperCase()}
                </div>
                <button className="btn btn-sm btn-secondary" onClick={logout}>{t("logoutBtn")}</button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "0.4rem" }}>
                <button className="btn btn-sm btn-secondary" onClick={() => openModal("login")}>{t("loginBtn")}</button>
                <button className="btn btn-sm btn-primary" onClick={() => openModal("register")}>{t("registerBtn")}</button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Navigation Menu">
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer-menu">
          <nav className="mobile-nav-list">
            <button className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>
              🏠 {t("navHome")}
            </button>
            <button className={`mobile-nav-item ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => handleProtectedTab('courses')}>
              📚 {t("navCourses")} (Free Trial)
            </button>
            <button className={`mobile-nav-item ${activeTab === 'exam' ? 'active' : ''}`} onClick={() => handleProtectedTab('exam')}>
              ⏱️ {t("navExam")} (80 RWF)
            </button>
            <button className={`mobile-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleProtectedTab('dashboard')}>
              📊 {t("navDashboard")}
            </button>
          </nav>

          {/* Mobile Auth Action Bar */}
          <div className="mobile-auth-bar">
            {isLoggedIn ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div className="user-avatar-badge">
                    {currentUser.fullName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.9rem", display: "block" }}>{currentUser.fullName}</strong>
                    <span className="badge badge-emerald" style={{ fontSize: "0.65rem" }}>Cat. {currentUser.category}</span>
                  </div>
                </div>
                <button className="btn btn-sm btn-secondary" onClick={() => { logout(); setIsMobileMenuOpen(false); }}>{t("logoutBtn")}</button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "0.5rem", width: "100%" }}>
                <button className="btn btn-secondary" onClick={() => { openModal("login"); setIsMobileMenuOpen(false); }} style={{ flex: 1 }}>{t("loginBtn")}</button>
                <button className="btn btn-primary" onClick={() => { openModal("register"); setIsMobileMenuOpen(false); }} style={{ flex: 1 }}>{t("registerBtn")}</button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
