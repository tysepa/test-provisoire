import React, { useState } from "react";
import { SignSVG } from "../utils/svgIcons";
import { useLanguage } from "../context/LanguageContext";

export function SignCard({ sign }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { lang } = useLanguage();

  return (
    <div className={`sign-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="sign-card-inner">
        <div className="sign-card-front">
          <span className="badge badge-emerald">{sign.code}</span>
          <div style={{ width: 120, height: 120, margin: "0.5rem 0" }}>
            <SignSVG type={sign.svgType} />
          </div>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.05rem" }}>
            {sign.name[lang] || sign.name.rw}
          </div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>👆 Kanda uhindure amakarita</div>
        </div>

        <div className="sign-card-back">
          <span className="badge badge-blue">{sign.category.toUpperCase()}</span>
          <h4 style={{ margin: "0.5rem 0", fontSize: "1rem" }}>{sign.name[lang] || sign.name.rw}</h4>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            {sign.description[lang] || sign.description.rw}
          </p>
          <div style={{ marginTop: "auto", fontSize: "0.75rem", color: "var(--accent-emerald)" }}>
            ✓ Article Code de la Route Rwanda
          </div>
        </div>
      </div>
    </div>
  );
}
