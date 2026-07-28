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
      <section style={{ padding: "2.5rem 0 3.5rem 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "2.5rem", alignItems: "center" }}>
          <div>

            <h1 style={{ marginBottom: "1rem", fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)", lineHeight: 1.15 }}>
              Tsinda Ikizamini cyo Gutwara Ibinyabiziga cy&apos;Agateganyo <span className="highlight">Bwa Mbere!</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              {t("heroSubtitle")}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
              <button className="btn btn-primary btn-lg" onClick={() => openModal("register")}>
                Tanga Formu y&apos;Umunyeshuri
              </button>
              <button className="btn btn-secondary btn-lg" onClick={() => openModal("login")}>
                Koresha Konti y&apos;Igerageza
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)" }}>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 800, color: "var(--accent-emerald)" }}>200+</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Ibibazo by&apos;Ikizamini</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 800, color: "var(--rw-blue)" }}>100%</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Amategeko y&apos;u Rwanda</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 800, color: "var(--accent-amber)" }}>16 / 20</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Amanota yo Gutsinda</div>
              </div>
            </div>
          </div>

          <div className="card" style={{ background: "linear-gradient(145deg, rgba(17, 25, 39, 0.9), rgba(30, 41, 59, 0.8))", padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span className="badge badge-emerald">EXAM SIMULATOR</span>
                <span className="badge badge-blue">Kinyarwanda</span>
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-emerald)", fontWeight: 700 }}>Live Exam</span>
            </div>

            <div style={{ background: "var(--bg-dark)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "1.25rem", marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>Ikibazo cya 1 / 20</div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-main)" }}>
                Ku ihuriro ry&apos;imihanda ryo mu ujyi adafite ibyapa, ni nde ufite ubusumbane (Priorité)?
              </h4>
              <div style={{ padding: "0.6rem 0.85rem", background: "rgba(16, 185, 129, 0.15)", border: "1px solid var(--accent-emerald)", borderRadius: "var(--radius-sm)", fontSize: "0.88rem", fontWeight: 600 }}>
                ✓ B. Ikinyabiziga gituruka iburyo bwawe (Priorité à droite)
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text-muted)" }}>
              <span>⏱️ Timer: 20:00</span>
              <span>🔒 Registered Students Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ margin: "3.5rem 0" }}>
        <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 2.5rem auto" }}>
          <h2 style={{ marginBottom: "0.5rem" }}>Kuki Ugomba Kwiha DriveRwanda?</h2>
          <p>Itegure ikizamini cy&apos;icyarabu wicaye mu rugo.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
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
      <section style={{ margin: "3.5rem 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
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
      <section style={{ margin: "4rem 0", background: "linear-gradient(135deg, rgba(0, 163, 224, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)", border: "1px solid var(--glass-border)", borderRadius: "var(--radius-lg)", padding: "3rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>Witeguye Gutsindira Uruhushya Rwawe?</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 1.5rem auto", fontSize: "1.05rem" }}>
          Kwiyandikisha bifata amasegonda 30 gusa. Ufite uruhushya rwo kwinjira mu masomo yose.
        </p>
        <button className="btn btn-primary btn-lg" onClick={() => openModal("register")}>
          Iyandikishe Uyu Munsi Nku Umunyeshuri
        </button>
      </section>
    </div>
  );
}
