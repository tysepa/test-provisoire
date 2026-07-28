import React from "react";
import { useAuth } from "../context/AuthContext";
import { getExamHistory } from "../utils/storage";
import { useLanguage } from "../context/LanguageContext";

export function Dashboard({ setActiveTab }) {
  const { currentUser, openModal } = useAuth();
  const { t } = useLanguage();

  if (!currentUser) {
    return (
      <div style={{ maxWidth: 600, margin: "3rem auto", textAlign: "center" }}>
        <div className="card" style={{ padding: "3rem 2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
          <h2>Ugomba Kwiyandikisha Cyangwa Kwinjira</h2>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-muted)" }}>
            Reba ibyarangiye byawe, amanota y'ibizamini no gutegura ikizamini cy'icyarabu nyuma yo kwinjira.
          </p>
          <button className="btn btn-primary btn-lg" onClick={() => openModal("register")}>
            Iyandikishe Nku Umunyeshuri
          </button>
        </div>
      </div>
    );
  }

  const history = getExamHistory();
  const totalAttempts = history.length;
  const passedAttempts = history.filter(h => h.passed).length;
  
  let avgPercentage = 0;
  let highestScore = 0;

  if (totalAttempts > 0) {
    const totalScorePct = history.reduce((acc, curr) => acc + curr.percentage, 0);
    avgPercentage = Math.round(totalScorePct / totalAttempts);
    highestScore = Math.max(...history.map(h => h.percentage));
  }

  let readiness = 0;
  if (totalAttempts > 0) {
    readiness = Math.min(100, Math.round((avgPercentage * 0.7) + (Math.min(totalAttempts, 5) * 6)));
  }

  return (
    <div>
      <section style={{ marginBottom: "2rem" }}>
        <h1>{t("dashboardHeading")}</h1>
        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)" }}>{t("dashboardSubheading")}</p>
      </section>

      {/* Top Profile & Gauge */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
        <div className="card" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, var(--rw-blue), var(--accent-emerald))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "2rem", fontWeight: 800 }}>
            {currentUser.fullName.charAt(0).toUpperCase()}
          </div>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: "0.3rem" }}>Category {currentUser.category} Student</span>
            <h2 style={{ fontSize: "1.4rem" }}>{currentUser.fullName}</h2>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              <div>📧 {currentUser.email}</div>
              <div>📱 {currentUser.phone}</div>
            </div>
          </div>
        </div>

        <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2rem" }}>
          <div>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
              Igipimo cy'Ubutegetse (Readiness)
            </span>
            <h2 style={{ fontSize: "2.2rem", margin: "0.3rem 0", color: readiness >= 80 ? 'var(--accent-emerald)' : 'var(--accent-amber)' }}>
              {readiness}% Ready
            </h2>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              {readiness >= 80 ? '✓ Witeguye neza ikizamini!' : 'Gukora ibizamini 5+ bizakwongerera amahirwe.'}
            </p>
          </div>

          <div style={{ position: "relative", width: 90, height: 90, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="90" height="90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg-dark)" strokeWidth="12"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke={readiness >= 80 ? 'var(--accent-emerald)' : 'var(--accent-amber)'} strokeWidth="12" strokeDasharray="251" strokeDashoffset={251 - (251 * readiness) / 100} strokeLinecap="round" transform="rotate(-90 50 50)"/>
            </svg>
            <span style={{ position: "absolute", fontWeight: 800, fontSize: "1.1rem" }}>{readiness}%</span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
        <div className="card" style={{ padding: "1.25rem" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Ibizamini Byose</div>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--rw-blue)" }}>{totalAttempts}</div>
        </div>
        <div className="card" style={{ padding: "1.25rem" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Average Score</div>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent-emerald)" }}>{avgPercentage}%</div>
        </div>
        <div className="card" style={{ padding: "1.25rem" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Passed Tests</div>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent-emerald)" }}>{passedAttempts}</div>
        </div>
        <div className="card" style={{ padding: "1.25rem" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Highest Score</div>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent-amber)" }}>{highestScore}%</div>
        </div>
      </div>

      {/* History Table */}
      <section className="card" style={{ padding: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2>Ibizamini Wakoze Mbere</h2>
          <button className="btn btn-primary btn-sm" onClick={() => setActiveTab("exam")}>+ Kora Ikizamini Gishyashya</button>
        </div>

        {totalAttempts === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
            Nta kizamini urakora. Kanda 'Ikizamini Simulator' uze utangire!
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.92rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--glass-border)", color: "var(--text-muted)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem 1rem" }}>Itariki</th>
                  <th style={{ padding: "0.75rem 1rem" }}>Ikizamini</th>
                  <th style={{ padding: "0.75rem 1rem" }}>Amanota</th>
                  <th style={{ padding: "0.75rem 1rem" }}>Percentage</th>
                  <th style={{ padding: "0.75rem 1rem" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {history.slice().reverse().map(h => (
                  <tr key={h.id} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <td style={{ padding: "1rem" }}>{new Date(h.date).toLocaleString()}</td>
                    <td style={{ padding: "1rem", fontWeight: 600 }}>{h.category}</td>
                    <td style={{ padding: "1rem", fontWeight: 700 }}>{h.score} / {h.total}</td>
                    <td style={{ padding: "1rem", fontWeight: 700, color: "var(--rw-blue)" }}>{h.percentage}%</td>
                    <td style={{ padding: "1rem" }}>
                      <span className={`badge ${h.passed ? 'badge-emerald' : 'badge-rose'}`}>
                        {h.passed ? '✓ PASSED (80%+)' : '✕ FAILED'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
