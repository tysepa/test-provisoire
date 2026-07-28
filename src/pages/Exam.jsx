import React, { useState, useEffect } from "react";
import { QUESTION_BANK } from "../data/questionBank";
import { saveExamResult, validateAccessCode, getPayments, getAllExamQuestions } from "../utils/storage";
import { TimerWidget } from "../components/TimerWidget";
import { PaymentModal } from "../components/PaymentModal";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";

export function Exam({ onFinishExam }) {
  const [isStarted, setIsStarted] = useState(false);
  const [examMode, setExamMode] = useState("official"); // "official" (20-Q) | "trial" (5-Q)
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [secondsRemaining, setSecondsRemaining] = useState(20 * 60);

  const [inputCode, setInputCode] = useState("");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { currentUser, showToast } = useAuth();
  const { lang, t } = useLanguage();

  // Admin Account Check for Free Unlimited Access
  const isAdminSession = sessionStorage.getItem("driverwanda_admin_auth") === "true" || currentUser?.email === "epamarayika@gmail.com";

  const userPayments = currentUser ? getPayments().filter(p => p.studentId === currentUser.id) : [];
  const approvedPayments = userPayments.filter(p => p.status === "approved");

  useEffect(() => {
    let timer = null;
    if (isStarted && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            submitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isStarted, secondsRemaining]);

  // Start Free Trial Exam (5 Questions, no code needed)
  const startTrialExam = () => {
    const allPool = getAllExamQuestions();
    const trialPool = [...allPool].slice(0, 5);
    setExamMode("trial");
    setQuestions(trialPool);
    setCurrentIndex(0);
    setAnswers({});
    setSecondsRemaining(5 * 60); // 5 minutes
    setIsStarted(true);
    showToast("Free Trial Exam (5 Questions) Gitangiye!", "info");
  };

  // Start Free Admin Official Exam (Bypasses payment & access code)
  const startAdminFreeExam = () => {
    showToast("👑 Admin Account: Direct Free Access to Official 20-Question Exam!", "success");
    setExamMode("official");
    startOfficialExam();
  };

  // Start Paid Official Exam (20 Questions, requires approved code)
  const handleValidateAndStartOfficial = (codeToUse) => {
    const code = codeToUse || inputCode;
    if (!code) {
      showToast("Shyiramo Access Code wahawe na Admin cyangwa ukoreshe Free Trial Exam.", "error");
      return;
    }

    const validPayment = validateAccessCode(code);
    if (!validPayment) {
      showToast("Access Code siko riri cyangwa ntabwo yemejwe na Admin. Kwishyura 80 RWF ubohe uhewe Access Code.", "error");
      return;
    }

    showToast(`Access Code ekejwe neza! Ikizamini nyakuri (20 Questions) gitangiye.`, "success");
    setExamMode("official");
    startOfficialExam();
  };

  const startOfficialExam = () => {
    let pool = getAllExamQuestions();
    let selected = [];
    while (selected.length < 20) {
      selected = selected.concat(pool);
    }
    setQuestions(selected.slice(0, 20));
    setCurrentIndex(0);
    setAnswers({});
    setSecondsRemaining(20 * 60);
    setIsStarted(true);
  };

  const handleOptionSelect = (optIdx) => {
    const q = questions[currentIndex];
    setAnswers(prev => ({ ...prev, [q.id]: optIdx }));
  };

  const submitExam = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctIndex) score++;
    });

    const maxTime = examMode === "trial" ? 5 * 60 : 20 * 60;
    const durationSeconds = maxTime - secondsRemaining;
    const resultData = {
      score,
      total: questions.length,
      durationSeconds,
      questions,
      studentAnswers: answers,
      category: examMode === "trial" ? "Free Trial Test (5-Q)" : "Official Simulation (20-Q)"
    };

    if (examMode === "official" && !isAdminSession) {
      saveExamResult(resultData);
    }
    setIsStarted(false);
    onFinishExam(resultData);
  };

  if (!isStarted) {
    return (
      <div style={{ maxWidth: 880, margin: "1.5rem auto" }}>
        <div className="card" style={{ padding: "3rem 2rem", textAlign: "center" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🚦</div>
          <h1 className="highlight" style={{ marginBottom: "0.75rem" }}>{t("examHeading")}</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
            Hitamo gukora <strong>Free Trial Exam (Burembure)</strong> cyangwa ikizamini nyakuri (20 Questions, 80 RWF via MoMo Pay: <strong style={{ color: "var(--accent-emerald)" }}>0782148861</strong>).
          </p>

          {/* Admin Account Free Unlimited Access Banner */}
          {isAdminSession && (
            <div style={{ background: "linear-gradient(135deg, rgba(0, 163, 224, 0.25), rgba(16, 185, 129, 0.25))", border: "1.5px solid var(--accent-emerald)", padding: "1.25rem 1.5rem", borderRadius: "var(--radius-md)", marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", textAlign: "left" }}>
              <div>
                <span className="badge badge-emerald" style={{ marginBottom: "0.3rem" }}>ADMIN FREE ACCOUNT ACTIVE</span>
                <h3 style={{ color: "var(--accent-emerald)", fontSize: "1.25rem" }}>👑 Tuyisunge Epaphrodis (Admin Access)</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                  Ufite uburenganzira bwo gukora ikizamini nyakuri cy&apos;ibibazo 20 ku busa nta kishyuwe n&apos;access code bisabwa.
                </p>
              </div>
              <button className="btn btn-primary btn-lg" onClick={startAdminFreeExam}>
                🚀 Start Official Exam (Admin Free Access)
              </button>
            </div>
          )}

          {/* Dual Options Grid: Free Trial vs Official 80 RWF Exam */}
          <div className="dual-options-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem", textAlign: "left" }}>
            
            {/* Option A: Free Trial Exam */}
            <div style={{ background: "var(--bg-dark)", border: "1.5px solid var(--accent-emerald)", padding: "1.75rem", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", justifyBetween: "space-between" }}>
              <div>
                <span className="badge badge-emerald" style={{ marginBottom: "0.5rem" }}>FREE TRIAL TEST</span>
                <h3 style={{ fontSize: "1.3rem", color: "var(--accent-emerald)", marginBottom: "0.5rem" }}>
                  🆓 Free Trial Exam (5 Questions)
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                  Gerageza ukore ikizamini cy&apos;igerageza cy&apos;ibibazo 5 cy&apos;ubusa nta kiguzi n&apos;access code bisabwa!
                </p>
              </div>

              <button className="btn btn-outline" onClick={startTrialExam} style={{ width: "100%" }}>
                ⚡ Start Free Trial Test (5 Qs)
              </button>
            </div>

            {/* Option B: Official Paid 20-Q Exam (80 RWF) */}
            <div style={{ background: "var(--bg-dark)", border: "1.5px solid var(--rw-blue)", padding: "1.75rem", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", justifyBetween: "space-between" }}>
              <div>
                <span className="badge badge-blue" style={{ marginBottom: "0.5rem" }}>OFFICIAL EXAM (80 RWF)</span>
                <h3 style={{ fontSize: "1.3rem", color: "var(--rw-blue)", marginBottom: "0.5rem" }}>
                  💳 Official Exam (20 Questions)
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                  Official 20-question 20-minute timed exam with certificate. Ohereza <strong>80 RWF</strong> kuri MoMo: <strong style={{ color: "#fff" }}>0782148861</strong>.
                </p>
              </div>

              <button className="btn btn-primary" onClick={() => setIsPaymentModalOpen(true)} style={{ width: "100%" }}>
                📲 Pay 80 RWF via MoMo (0782148861)
              </button>
            </div>

          </div>

          {/* User Approved Access Codes List */}
          {approvedPayments.length > 0 && (
            <div style={{ background: "rgba(0, 163, 224, 0.15)", border: "1px solid var(--rw-blue)", padding: "1rem", borderRadius: "var(--radius-md)", marginBottom: "2rem", textAlign: "left" }}>
              <strong style={{ color: "var(--rw-blue)", display: "block", marginBottom: "0.5rem" }}>🔑 Access Codes Zatsindijwe n&apos;Admin:</strong>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {approvedPayments.map(p => (
                  <button key={p.id} className="btn btn-sm btn-accent" onClick={() => handleValidateAndStartOfficial(p.accessCode)}>
                    Use Code: {p.accessCode}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Access Code Input Box */}
          <div style={{ maxWidth: 520, margin: "0 auto", background: "var(--bg-dark)", padding: "1.5rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
            <label className="form-label" style={{ display: "block", marginBottom: "0.5rem", textAlign: "left" }}>
              Shyiramo Access Code wahawe na Admin gufungura Official 20-Q Exam:
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. EXAM-80-7492"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                style={{ textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "bold" }}
              />
              <button className="btn btn-primary" onClick={() => handleValidateAndStartOfficial()}>
                Start Official Exam
              </button>
            </div>
          </div>
        </div>

        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          onSuccess={() => {}}
        />
      </div>
    );
  }

  const q = questions[currentIndex];
  const selectedOpt = answers[q.id];
  const options = q.options[lang] || q.options.rw;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      {/* Top Header */}
      <div className="card" style={{ marginBottom: "1.5rem", padding: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span className={`badge ${examMode === 'trial' ? 'badge-emerald' : 'badge-blue'}`} style={{ marginBottom: "0.3rem" }}>
            {examMode === 'trial' ? '🆓 FREE TRIAL TEST (5-Q)' : '💳 OFFICIAL EXAM (20-Q)'}
          </span>
          <h3 style={{ fontSize: "1.1rem" }}>Ikibazo cya {currentIndex + 1} / {questions.length}</h3>
        </div>
        <TimerWidget secondsRemaining={secondsRemaining} />
      </div>

      {/* Question Pills */}
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.5rem", background: "var(--bg-surface)", padding: "0.85rem", borderRadius: "var(--radius-md)" }}>
        {questions.map((item, idx) => {
          const isAnswered = answers[item.id] !== undefined;
          const isCurrent = idx === currentIndex;
          let btnClass = "btn-secondary";
          if (isCurrent) btnClass = "btn-accent";
          else if (isAnswered) btnClass = "btn-primary";

          return (
            <button
              key={item.id + idx}
              className={`btn btn-sm ${btnClass}`}
              onClick={() => setCurrentIndex(idx)}
              style={{ minWidth: 36, padding: "0.3rem 0.6rem" }}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Main Question Card */}
      <div className="card" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
        <span className="badge badge-blue" style={{ marginBottom: "1rem" }}>{q.category.toUpperCase()}</span>
        <h2 style={{ fontSize: "1.35rem", lineHeight: 1.4, marginBottom: "1.5rem" }}>
          {q.question[lang] || q.question.rw}
        </h2>

        <div className="quiz-options">
          {options.map((optText, optIdx) => {
            const isSelected = selectedOpt === optIdx;
            const letter = String.fromCharCode(65 + optIdx);
            return (
              <div
                key={optIdx}
                className={`option-card ${isSelected ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(optIdx)}
              >
                <div className="option-letter">{letter}</div>
                <div style={{ fontSize: "0.98rem" }}>{optText}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          className="btn btn-secondary"
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
        >
          &larr; Ikibazo Wambere
        </button>

        {currentIndex === questions.length - 1 ? (
          <button className="btn btn-primary btn-lg" onClick={submitExam}>
            🏁 Rangiza Ikizamini (Submit)
          </button>
        ) : (
          <button className="btn btn-accent" onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}>
            Ikibazo Gikurikira &rarr;
          </button>
        )}
      </div>
    </div>
  );
}
