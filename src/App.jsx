import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AuthModal } from "./components/AuthModal";
import { Home } from "./pages/Home";
import { Course } from "./pages/Course";
import { Exam } from "./pages/Exam";
import { Results } from "./pages/Results";
import { Dashboard } from "./pages/Dashboard";
import { Admin } from "./pages/Admin";
import { useAuth } from "./context/AuthContext";
import { useLanguage } from "./context/LanguageContext";

export function AppContent() {
  const [activeTab, setActiveTab] = useState("home");
  const [examResultData, setExamResultData] = useState(null);
  const { isLoggedIn, openModal, toast } = useAuth();
  const { t } = useLanguage();

  const handleFinishExam = (resultData) => {
    setExamResultData(resultData);
    setActiveTab("results");
  };

  const handleRetakeExam = () => {
    setExamResultData(null);
    setActiveTab("exam");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Global Auth Alert Banner for Unauthenticated visitors */}
      {!isLoggedIn && (
        <div style={{ background: "linear-gradient(90deg, #1e1b4b 0%, #064e3b 100%)", borderBottom: "1px solid var(--glass-border)", padding: "0.65rem 1.5rem" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", fontSize: "0.9rem" }}>
            <span>🔒 Mwalimu: Ugomba kwiyandikisha cyangwa kwinjira kugirango ufungure amasomo n&apos;ibizamini byose.</span>
            <button className="btn btn-sm btn-primary" onClick={() => openModal("register")}>
              Iyandikishe Sasa
            </button>
          </div>
        </div>
      )}

      {/* Main View Router */}
      <main style={{ maxWidth: 1280, width: "100%", margin: "0 auto", padding: "2rem 1.5rem 4rem 1.5rem", flex: 1 }}>
        {activeTab === "home" && <Home setActiveTab={setActiveTab} />}
        {activeTab === "courses" && <Course />}
        {activeTab === "exam" && <Exam onFinishExam={handleFinishExam} />}
        {activeTab === "results" && examResultData && <Results resultData={examResultData} onRetake={handleRetakeExam} />}
        {activeTab === "dashboard" && <Dashboard setActiveTab={setActiveTab} />}
        {activeTab === "admin" && <Admin />}
      </main>

      {/* Toast Popup Notification */}
      {toast && (
        <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 2000, background: "var(--bg-surface-elevated)", borderLeft: `4px solid ${toast.type === 'error' ? 'var(--accent-rose)' : 'var(--accent-emerald)'}`, padding: "0.85rem 1.25rem", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", color: "var(--text-main)", fontWeight: 600 }}>
          {toast.type === 'error' ? '⚠️ ' : '✓ '} {toast.message}
        </div>
      )}

      <AuthModal />
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
