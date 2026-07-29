import React from "react";
import { TUYISUNGE_CONTACTS } from "./SocialHub";

export function Footer({ setActiveTab }) {
  return (
    <footer style={{ background: "rgba(9, 14, 23, 0.95)", borderTop: "1px solid var(--border-subtle)", padding: "3rem 1.5rem 1.5rem 1.5rem", marginTop: "auto" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem", marginBottom: "2.5rem" }}>
          {/* Column 1: Brand */}
          <div>
            <h3 className="brand-title" style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Drive<span className="highlight">Rwanda</span></h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Platform numero 1 mu Rwanda yo kwigiraho amategeko yo&apos;mu muhanda n&apos;ibyapa no gutsindira ikizamini cy&apos;agateganyo (Provisoire).
            </p>
            <span className="badge badge-emerald">MoMo Pay: 0782148861</span>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h4 style={{ marginBottom: "0.75rem" }}>Ibyiciro by&apos;Impushya</h4>
            <ul style={{ listStyle: "none", fontSize: "0.88rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Category A (Motorcycles)</li>
              <li>Category B (Light Vehicles)</li>
              <li>Category C &amp; D (Trucks &amp; Buses)</li>
              <li>Category E (Trailers)</li>
            </ul>
          </div>

          {/* Column 3: Tuyisunge Epaphrodis Social Hub */}
          <div>
            <h4 style={{ marginBottom: "0.75rem" }}>Connect with Tuyisunge Epaphrodis</h4>
            <div style={{ fontSize: "0.88rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div>👤 <strong>Tuyisunge Epaphrodis</strong></div>
              <div>📱 <strong>WhatsApp / Call:</strong> +250 782 148 861</div>
              <div>📧 <strong>Email:</strong> epamarayika@gmail.com</div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                <a href={TUYISUNGE_CONTACTS.whatsapp} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary" style={{ background: "#25D366", borderColor: "#25D366" }}>
                  💬 WhatsApp
                </a>
                <a href={TUYISUNGE_CONTACTS.youtube} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary" style={{ color: "#FF0000" }}>
                  📺 YouTube
                </a>
                <a href={TUYISUNGE_CONTACTS.facebook} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary" style={{ color: "#1877F2" }}>
                  📘 Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Small Subtle Admin Lock Icon Entrance */}
        <div style={{ textAlign: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.25rem", fontSize: "0.8rem", color: "var(--text-muted)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            &copy; 2026 DriveRwanda - Directed by <strong>Tuyisunge Epaphrodis</strong> (+250782148861 | epamarayika@gmail.com). All rights reserved.
          </div>

          {/* Small Discreet Admin Entrance Sign */}
          <button 
            onClick={() => setActiveTab("admin")} 
            title="Admin Login & MoMo Verification"
            style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.82rem", display: "inline-flex", alignItems: "center", gap: "0.3rem", opacity: 0.7 }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
          >
            <span>🔐</span>
            <span>Admin</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
