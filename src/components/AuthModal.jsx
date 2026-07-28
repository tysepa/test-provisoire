import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export function AuthModal() {
  const { isAuthModalOpen, authModalMode, closeModal, openModal, register, login, showToast } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("mugisha@drive.rw");
  const [phone, setPhone] = useState("+250 788 123 456");
  const [category, setCategory] = useState("B");
  const [password, setPassword] = useState("password123");

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (authModalMode === "register") {
        register({ fullName, email, phone, category, password });
      } else {
        login(email, password);
      }
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const handleDemoClick = () => {
    try {
      login("mugisha@drive.rw", "password123");
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>&times;</button>

        {authModalMode === "register" ? (
          <div>
            <h2 className="highlight" style={{ fontSize: "1.6rem", marginBottom: "0.4rem" }}>Iyandikishe Nku Umunyeshuri</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              Wuzuze formu uziyingire amasomo n&apos;ibizamini byo gutwara ibinyabiziga (Driving License Student Registration).
            </p>

            <div style={{ background: "rgba(0, 163, 224, 0.12)", border: "1px dashed var(--rw-blue)", padding: "0.85rem", borderRadius: "var(--radius-md)", marginBottom: "1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <strong style={{ fontSize: "0.88rem", color: "var(--rw-blue)", display: "block" }}>Demo Account Shortcut:</strong>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>mugisha@drive.rw / password123</span>
              </div>
              <button className="btn btn-sm btn-accent" onClick={handleDemoClick}>Try Demo</button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Amazina Yombi (Full Name)</label>
                <input type="text" className="form-input" placeholder="e.g. Mugisha Jean Paul" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="e.g. mugisha@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div className="form-group">
                  <label className="form-label">Telefone (Rwanda)</label>
                  <input type="tel" className="form-input" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="B">Category B (Car)</option>
                    <option value="A">Category A (Motorcycle)</option>
                    <option value="C">Category C (Truck)</option>
                    <option value="D">Category D (Bus)</option>
                    <option value="E">Category E (Trailer)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: "0.5rem" }}>
                Iyandikishe Sasa &amp; Ufungure Amasomo
              </button>
            </form>

            <div style={{ textAlign: "center", marginTop: "1.25rem", fontSize: "0.88rem" }}>
              <span>Usanganywe konti? </span>
              <button style={{ background: "none", border: "none", color: "var(--accent-emerald)", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }} onClick={() => openModal("login")}>
                Injira Hano (Sign In)
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="highlight" style={{ fontSize: "1.6rem", marginBottom: "0.4rem" }}>Injira mu Konti y&apos;Umunyeshuri</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              Shyiramo email n&apos;ijambo ry&apos;ibanga wiyandikishijeho.
            </p>

            <div style={{ background: "rgba(0, 163, 224, 0.12)", border: "1px dashed var(--rw-blue)", padding: "0.85rem", borderRadius: "var(--radius-md)", marginBottom: "1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <strong style={{ fontSize: "0.88rem", color: "var(--rw-blue)", display: "block" }}>Instant Demo Login:</strong>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>mugisha@drive.rw / password123</span>
              </div>
              <button className="btn btn-sm btn-accent" onClick={handleDemoClick}>One-Click Login</button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: "0.5rem" }}>
                Kwinjira mu Konti
              </button>
            </form>

            <div style={{ textAlign: "center", marginTop: "1.25rem", fontSize: "0.88rem" }}>
              <span>Ntabwo uriyandikisha? </span>
              <button style={{ background: "none", border: "none", color: "var(--accent-emerald)", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }} onClick={() => openModal("register")}>
                Kora Konti Nshya (Register)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
