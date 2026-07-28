import React from "react";
import { useAuth } from "../context/AuthContext";

export function Certificate({ score, total, percentage }) {
  const { currentUser } = useAuth();

  return (
    <div className="certificate-frame">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "1rem" }}>
        <div className="logo-badge" style={{ width: 20, height: 24 }}>
          <span className="flag-stripe rw-blue"></span>
          <span className="flag-stripe rw-yellow"></span>
          <span className="flag-stripe rw-green"></span>
        </div>
        <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#0369a1", textTransform: "uppercase" }}>
          Repubulika y&apos;u Rwanda - DriveRwanda Platform
        </span>
      </div>

      <h2>ICYEMEZO CYO GUTSINDA IKIZAMINI CYO GUTWARA IBINYABIZIGA</h2>
      <p style={{ fontSize: "0.95rem", color: "#475569" }}>
        OFFICIAL PROVISIONAL DRIVING LICENSE THEORY COMPLETION CERTIFICATE
      </p>

      <div style={{ margin: "1.5rem 0" }}>
        <span style={{ fontSize: "0.9rem", color: "#64748b", display: "block" }}>Iki cyemezo gihabwa umunyeshuri:</span>
        <div className="student-name">{currentUser ? currentUser.fullName : 'Umunyeshuri w\'u Rwanda'}</div>
        <p style={{ fontSize: "0.95rem", color: "#334155" }}>
          Watsinze neza ikizamini cy&apos;igerageza ry&apos;amategeko y&apos;omu handa (Category {currentUser ? currentUser.category : 'B'}) ku manota <strong>{score}/{total} ({percentage}%)</strong>.
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginTop: "2rem" }}>
        <div>
          <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Itariki (Date Issued)</div>
          <strong style={{ fontSize: "0.9rem", color: "#0f172a" }}>{new Date().toLocaleDateString()}</strong>
        </div>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle, #fcd116 0%, #d97706 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: "0.9rem" }}>
          PASSED<br />80%+
        </div>
        <div>
          <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Code de la Route</div>
          <strong style={{ fontSize: "0.9rem", color: "#0f172a" }}>Rwanda Police Standard</strong>
        </div>
      </div>
    </div>
  );
}
