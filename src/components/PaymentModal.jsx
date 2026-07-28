import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { createPaymentRequest } from "../utils/storage";
import { sendAdminNotification, ADMIN_EMAIL } from "../utils/emailService";

export function PaymentModal({ isOpen, onClose, onSuccess }) {
  const { currentUser, showToast } = useAuth();
  const [momoNumber, setMomoNumber] = useState(currentUser?.phone || "+250 788 123 456");
  const [momoTxRef, setMomoTxRef] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!momoNumber || !momoTxRef) {
      showToast("Shyiramo numero ya MoMo n'ubutumwa bwa MoMo.", "error");
      return;
    }

    try {
      const newPay = createPaymentRequest({
        studentId: currentUser.id,
        studentName: currentUser.fullName,
        studentEmail: currentUser.email,
        studentPhone: currentUser.phone,
        category: `Category ${currentUser.category}`,
        momoNumber,
        momoTxRef
      });

      // Dispatch Email notification to epamarayika@gmail.com
      sendAdminNotification("payment", newPay);

      showToast(`Ubusabe bw'80 RWF bwotwojwe kuri admin (${ADMIN_EMAIL})! Admin naramara kwemeza ubutumwa bwa MoMo 0782148861 azaguha Access Code.`, "success");
      onSuccess(newPay);
      onClose();
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 520 }}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <span className="badge badge-emerald" style={{ marginBottom: "0.4rem" }}>MTN MoMo Pay (0782148861)</span>
        <h2 className="highlight" style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          Kwishyura 80 RWF ku Kizamini
        </h2>
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
          Buri kizamini cy&apos;icyarabu kigura <strong>80 RWF</strong> gusa. Ohereza 80 RWF kuri MoMo Pay iri ku nimero ya <strong style={{ color: "var(--accent-emerald)" }}>0782148861</strong>.
        </p>

        {/* Admin Email Notification Notice */}
        <div style={{ background: "rgba(0, 163, 224, 0.12)", border: "1px dashed var(--rw-blue)", padding: "0.75rem", borderRadius: "var(--radius-sm)", marginBottom: "1rem", fontSize: "0.82rem" }}>
          📧 Notification message will be sent to Admin: <strong style={{ color: "var(--rw-blue)" }}>{ADMIN_EMAIL}</strong>
        </div>

        {/* Step-by-Step Payment Instructions Box */}
        <div style={{ background: "rgba(16, 185, 129, 0.12)", border: "1px dashed var(--accent-emerald)", padding: "1rem", borderRadius: "var(--radius-md)", marginBottom: "1.5rem", fontSize: "0.88rem", lineHeight: "1.6" }}>
          <strong style={{ color: "var(--accent-emerald)", display: "block", marginBottom: "0.4rem" }}>📋 Amabwiriza yo Kwishyura:</strong>
          <ol style={{ paddingLeft: "1.2rem", margin: 0 }}>
            <li>Bikuze cyangwa wohereze <strong>80 RWF</strong> kuri MTN Mobile Money: <strong style={{ color: "var(--accent-emerald)", fontSize: "1rem" }}>0782148861</strong></li>
            <li>Andika numero ya telefone yakoreshejwe n&apos;ubutumwa/kodhi ya MoMo uheshejwe imbere.</li>
            <li>Kanda <strong>Emeza Kwishyura (Submit)</strong> ubohe Admin akwemerere maze aguhe Access Code.</li>
          </ol>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Telefone ya MoMo yakoreshejwe (MoMo Number)</label>
            <input type="text" className="form-input" placeholder="+250 78X XXX XXX" value={momoNumber} onChange={(e) => setMomoNumber(e.target.value)} required />
          </div>

          <div className="form-group">
            <label className="form-label">Ubutumwa bwa MoMo / Transaction Ref (TID)</label>
            <input type="text" className="form-input" placeholder="e.g. MoMo Ref: 982173491 cyangwa SMS message" value={momoTxRef} onChange={(e) => setMomoTxRef(e.target.value)} required />
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: "0.5rem" }}>
            📲 Emeza Kwishyura 80 RWF (Submit MoMo Payment)
          </button>
        </form>
      </div>
    </div>
  );
}
