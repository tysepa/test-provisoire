import React from "react";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { SignCard } from "../components/SignCard";
import { SocialHub } from "../components/SocialHub";
import { SIGNS_DATA } from "../data/signsData";

export function Home({ setActiveTab }) {
  const { openModal, isLoggedIn } = useAuth();
  const { t } = useLanguage();

  const handleProtectedAction = (targetTab) => {
    if (!isLoggedIn) {
      openModal("register");
    } else {
      setActiveTab(targetTab);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" style={{ padding: "1.5rem 0 2.5rem 0" }}>
        <div className="hero-grid">
          {/* Left Column: Headline, Subtitle, CTA Buttons & Metrics */}
          <div className="hero-left-col">
            <h1 className="hero-title">
              Tsinda Ikizamini cyo Gutwara Ibinyabiziga <span style={{ display: "inline-block" }}>cy&apos;Agateganyo</span> <span className="highlight" style={{ display: "inline-block" }}>Bwa Mbere!</span>
            </h1>
            
            <p className="hero-subtitle">
              {t("heroSubtitle")}
            </p>

            <div className="hero-cta-buttons">
              <button className="btn btn-primary btn-lg hero-btn" onClick={() => openModal("register")}>
                Tanga Formu y&apos;Umunyeshuri
              </button>
              <button className="btn btn-secondary btn-lg hero-btn" onClick={() => openModal("login")}>
                Koresha Konti y&apos;Igerageza
              </button>
            </div>

            <div className="hero-stats-row">
              <div>
                <div className="stat-number text-emerald">200+</div>
                <div className="stat-label">Ibibazo by&apos;Ikizamini</div>
              </div>
              <div>
                <div className="stat-number text-blue">100%</div>
                <div className="stat-label">Amategeko y&apos;u Rwanda</div>
              </div>
              <div>
                <div className="stat-number text-amber">16 / 20</div>
                <div className="stat-label">Amanota yo Gutsinda</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Exam Simulator Card Preview */}
          <div className="hero-right-card card">
            <div className="card-header-badge">
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                <span className="badge badge-emerald">EXAM SIMULATOR</span>
                <span className="badge badge-blue">Kinyarwanda</span>
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-emerald)", fontWeight: 700 }}>Live Exam</span>
            </div>

            <div className="card-question-box">
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>Ikibazo cya 1 / 20</div>
              <h4 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.85rem", color: "var(--text-main)", lineHeight: 1.4 }}>
                Ku ihuriro ry&apos;imihanda ryo mu ujyi adafite ibyapa, ni nde ufite ubusumbane (Priorité)?
              </h4>
              <div style={{ padding: "0.65rem 0.85rem", background: "rgba(16, 185, 129, 0.15)", border: "1px solid var(--accent-emerald)", borderRadius: "var(--radius-sm)", fontSize: "0.88rem", fontWeight: 600, lineHeight: 1.35 }}>
                ✓ B. Ikinyabiziga gituruka iburyo bwawe (Priorité à droite)
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text-muted)", flexWrap: "wrap", gap: "0.5rem" }}>
              <span>⏱️ Timer: 20:00</span>
              <span>🔒 Registered Students Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ margin: "2.5rem 0" }}>
        <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 2rem auto" }}>
          <h2 style={{ marginBottom: "0.5rem", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}>Kuki Ugomba Kwiha DriveRwanda?</h2>
          <p style={{ color: "var(--text-muted)" }}>Itegure ikizamini cy&apos;icyarabu wicaye mu rugo.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          <div className="card">
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🪧</div>
            <h3>{t("feature1Title")}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{t("feature1Desc")}</p>
          </div>
          <div className="card">
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⏱️</div>
            <h3>{t("feature2Title")}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{t("feature2Desc")}</p>
          </div>
          <div className="card">
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🚦</div>
            <h3>{t("feature3Title")}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{t("feature3Desc")}</p>
          </div>
        </div>
      </section>

      {/* Tuyisunge Epaphrodis Social Media Hub Banner */}
      <SocialHub />

      {/* Road Sign Preview */}
      <section style={{ margin: "3rem 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <h2>Ibyapa by&apos;Omu Handa mu Rwanda</h2>
          <button className="btn btn-outline" onClick={() => handleProtectedAction("courses")}>Reba Ibyapa Byose &rarr;</button>
        </div>

        <div className="signs-grid">
          {SIGNS_DATA.slice(0, 4).map(sign => (
            <SignCard key={sign.id} sign={sign} />
          ))}
        </div>
      </section>

      {/* Registration Callout */}
      <section style={{ margin: "3rem 0", background: "linear-gradient(135deg, rgba(0, 163, 224, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)", border: "1px solid var(--glass-border)", borderRadius: "var(--radius-lg)", padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", marginBottom: "0.75rem" }}>Witeguye Gutsindira Uruhushya Rwawe?</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 1.5rem auto", fontSize: "1rem" }}>
          Kwiyandikisha bifata amasegonda 30 gusa. Ufite uruhushya rwo kwinjira mu masomo yose.
        </p>
        <button className="btn btn-primary btn-lg" onClick={() => openModal("register")}>
          Iyandikishe Uyu Munsi Nku Umunyeshuri
        </button>
      </section>
    </div>
  );
}
