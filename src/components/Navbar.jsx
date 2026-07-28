import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export function Navbar({ activeTab, setActiveTab }) {
  const { currentUser, isLoggedIn, logout, openModal, showToast } = useAuth();
  const { lang, changeLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleProtectedTab = (tabName) => {
    if (!isLoggedIn) {
      showToast("Ugomba kwiyandikisha cyangwa kwinjira nka umunyeshuri (Registration Required).", "error");
      openModal("register");
      return;
    }
    setActiveTab(tabName);
  };

  const flagMap = { rw: "🇷🇼", en: "🇬🇧", fr: "🇫🇷" };
  const codeMap = { rw: "RW", en: "EN", fr: "FR" };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <div className="nav-brand" onClick={() => setActiveTab("home")}>
          <div className="logo-badge">
            <span className="flag-stripe rw-blue"></span>
            <span className="flag-stripe rw-yellow"></span>
            <span className="flag-stripe rw-green"></span>
          </div>
          <div>
            <span className="brand-title">Drive<span className="highlight">Rwanda</span></span>
            <span style={{ display: "block", fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase" }}>MoMo Pay: 0782148861</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          <button className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
            {t("navHome")}
          </button>
          <button className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => handleProtectedTab('courses')}>
            {t("navCourses")} (Trial)
          </button>
          <button className={`nav-item ${activeTab === 'exam' ? 'active' : ''}`} onClick={() => handleProtectedTab('exam')}>
            {t("navExam")} (80 RWF)
          </button>
          <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleProtectedTab('dashboard')}>
            {t("navDashboard")}
          </button>
        </nav>

        {/* Header Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
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
              <div style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, background: "var(--bg-surface-elevated)", border: "1px solid var(--glass-border)", borderRadius: "var(--radius-md)", padding: "0.35rem", display: "flex", flexDirection: "column", gap: "0.2rem", minWidth: "140px", zIndex: 120 }}>
                <button className="btn btn-sm btn-secondary" style={{ border: "none", justifyContent: "flex-start" }} onClick={() => { changeLanguage("rw"); setIsLangOpen(false); }}>🇷🇼 Kinyarwanda</button>
                <button className="btn btn-sm btn-secondary" style={{ border: "none", justifyContent: "flex-start" }} onClick={() => { changeLanguage("en"); setIsLangOpen(false); }}>🇬🇧 English</button>
                <button className="btn btn-sm btn-secondary" style={{ border: "none", justifyContent: "flex-start" }} onClick={() => { changeLanguage("fr"); setIsLangOpen(false); }}>🇫🇷 Français</button>
              </div>
            )}
          </div>

          {/* User Badge / Auth Buttons */}
          {isLoggedIn ? (
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, var(--rw-blue), var(--accent-emerald))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "0.85rem" }}>
                {currentUser.fullName.charAt(0).toUpperCase()}
              </div>
              <span className="badge badge-emerald" style={{ fontSize: "0.65rem" }}>Cat. {currentUser.category}</span>
              <button className="btn btn-sm btn-secondary" onClick={logout}>{t("logoutBtn")}</button>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "0.4rem" }}>
              <button className="btn btn-sm btn-secondary" onClick={() => openModal("login")}>{t("loginBtn")}</button>
              <button className="btn btn-sm btn-primary" onClick={() => openModal("register")}>{t("registerBtn")}</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
