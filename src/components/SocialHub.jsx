import React from "react";

export const TUYISUNGE_CONTACTS = {
  name: "Tuyisunge Epaphrodis",
  phone: "+250 782 148 861",
  whatsapp: "https://wa.me/250782148861?text=Muraho%20Tuyisunge%20Epaphrodis,%20nsabye%20ubufasha%20kuri%20DriveRwanda",
  email: "epamarayika@gmail.com",
  youtube: "https://youtube.com/@DriveRwanda",
  facebook: "https://facebook.com/TuyisungeEpaphrodisDriveRwanda",
  instagram: "https://instagram.com/tuyisunge_epaphrodis",
  twitter: "https://twitter.com/TuyisungeEpa",
  linkedin: "https://linkedin.com/in/tuyisunge-epaphrodis"
};

export function SocialHub() {
  return (
    <div className="card" style={{ background: "linear-gradient(135deg, rgba(0, 163, 224, 0.15), rgba(16, 185, 129, 0.15))", border: "1px solid var(--rw-blue)", padding: "2rem", borderRadius: "var(--radius-lg)", margin: "2rem 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
        
        {/* Founder Bio */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, var(--rw-blue), var(--accent-emerald))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1.8rem", fontWeight: 800, flexShrink: 0 }}>
            TE
          </div>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: "0.3rem" }}>FOUNDER &amp; INSTRUCTOR</span>
            <h3 style={{ fontSize: "1.4rem" }}>Tuyisunge Epaphrodis</h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
              Guma ku murongo mu kiganiro n&apos;amategeko y&apos;omu handa kuri Social Media zose.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href={TUYISUNGE_CONTACTS.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: "#25D366", borderColor: "#25D366" }}>
            💬 WhatsApp Tuyisunge (+250782148861)
          </a>
          <a href={`mailto:${TUYISUNGE_CONTACTS.email}`} className="btn btn-secondary">
            📧 Email Us (epamarayika@gmail.com)
          </a>
        </div>

      </div>

      {/* Social Media Links Bar */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border-subtle)" }}>
        <a href={TUYISUNGE_CONTACTS.youtube} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary" style={{ color: "#FF0000" }}>
          📺 YouTube (DriveRwanda)
        </a>
        <a href={TUYISUNGE_CONTACTS.facebook} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary" style={{ color: "#1877F2" }}>
          📘 Facebook
        </a>
        <a href={TUYISUNGE_CONTACTS.instagram} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary" style={{ color: "#E4405F" }}>
          📸 Instagram
        </a>
        <a href={TUYISUNGE_CONTACTS.twitter} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary" style={{ color: "#1DA1F2" }}>
          🐦 X (Twitter)
        </a>
        <a href={TUYISUNGE_CONTACTS.linkedin} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary" style={{ color: "#0A66C2" }}>
          💼 LinkedIn
        </a>
      </div>
    </div>
  );
}
