import React, { useState, useEffect } from "react";
import { 
  getPayments, 
  approvePayment, 
  rejectPayment, 
  getUsers, 
  getCustomQuestions, 
  addCustomQuestion, 
  deleteCustomQuestion,
  getAllExamQuestions,
  getComments, 
  respondToComment 
} from "../utils/storage";
import { useAuth } from "../context/AuthContext";

export function Admin() {
  // Admin Login Guard state
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return sessionStorage.getItem("driverwanda_admin_auth") === "true";
  });
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [activeTab, setActiveTab] = useState("all_exams"); // "all_exams" | "payments" | "students" | "upload_exam" | "comments"
  const [payments, setPayments] = useState([]);
  const [students, setStudents] = useState([]);
  const [customQuestions, setCustomQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [comments, setComments] = useState([]);
  const [examCategoryFilter, setExamCategoryFilter] = useState("all");
  const [searchQuestionQuery, setSearchQuestionQuery] = useState("");
  const { showToast } = useAuth();

  // Upload Question Form state
  const [qRw, setQRw] = useState("");
  const [qCategory, setQCategory] = useState("rules");
  const [optA, setOptA] = useState("");
  const [optB, setOptB] = useState("");
  const [optC, setOptC] = useState("");
  const [optD, setOptD] = useState("");
  const [correctIdx, setCorrectIdx] = useState("0");
  const [expRw, setExpRw] = useState("");

  // Comment Response state map
  const [responseInputs, setResponseInputs] = useState({});

  const refreshData = () => {
    setPayments(getPayments());
    setStudents(getUsers());
    setCustomQuestions(getCustomQuestions());
    setAllQuestions(getAllExamQuestions());
    setComments(getComments());
  };

  useEffect(() => {
    if (isAdminLoggedIn) {
      refreshData();
    }
  }, [isAdminLoggedIn]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (usernameInput === "Epa" && passwordInput === "Epa123") {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem("driverwanda_admin_auth", "true");
      showToast("Mwariyingire neza nka Admin (Tuyisunge Epaphrodis)!", "success");
      setUsernameInput("");
      setPasswordInput("");
    } else {
      showToast("Username cyangwa Password y'Admin siko biri! Shaka koresha Username: Epa & Password: Epa123.", "error");
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem("driverwanda_admin_auth");
    showToast("Mwasohotse mu buyobozi (Admin Logged Out).", "info");
  };

  const handleApprove = (id) => {
    try {
      const updated = approvePayment(id);
      showToast(`Payment approved! Access Code generated: ${updated.accessCode}`, "success");
      refreshData();
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const handleReject = (id) => {
    try {
      rejectPayment(id);
      showToast("Payment request rejected.", "info");
      refreshData();
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const handleDeleteQuestion = (id) => {
    try {
      deleteCustomQuestion(id);
      showToast("Ikibazo cyasibwe mu kubika!", "info");
      refreshData();
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const handleUploadQuestion = (e) => {
    e.preventDefault();
    if (!qRw || !optA || !optB || !expRw) {
      showToast("Shyiramo amakuru yose y'ikibazo.", "error");
      return;
    }

    try {
      addCustomQuestion({
        questionRw: qRw,
        category: qCategory,
        optA,
        optB,
        optC: optC || "Nta cyo",
        optD: optD || "Nta cyo",
        correctIndex: correctIdx,
        explanationRw: expRw
      });

      showToast("Ikibazo gishyashya cyatsindijwe muri Question Bank!", "success");
      setQRw("");
      setOptA("");
      setOptB("");
      setOptC("");
      setOptD("");
      setExpRw("");
      refreshData();
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const handleSendCommentResponse = (commentId) => {
    const text = responseInputs[commentId];
    if (!text || !text.trim()) {
      showToast("Andika igisubizo cyawe mbere yo kurenga.", "error");
      return;
    }

    try {
      respondToComment(commentId, text.trim());
      showToast("Igisubizo cy'umunyeshuri cyohererejwe neza!", "success");
      setResponseInputs(prev => ({ ...prev, [commentId]: "" }));
      refreshData();
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  // Filtered Exam Questions List
  let filteredQuestions = allQuestions;
  if (examCategoryFilter !== "all") {
    filteredQuestions = filteredQuestions.filter(q => q.category === examCategoryFilter);
  }
  if (searchQuestionQuery) {
    const q = searchQuestionQuery.toLowerCase();
    filteredQuestions = filteredQuestions.filter(item => 
      item.question.rw.toLowerCase().includes(q) ||
      (item.explanation && item.explanation.rw && item.explanation.rw.toLowerCase().includes(q))
    );
  }

  // Render Admin Login Form if not authenticated
  if (!isAdminLoggedIn) {
    return (
      <div style={{ maxWidth: 480, margin: "3rem auto" }}>
        <div className="card" style={{ padding: "2.5rem 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🔐</div>
            <span className="badge badge-emerald" style={{ marginBottom: "0.5rem" }}>ADMINISTRATOR PORTAL</span>
            <h2 className="highlight" style={{ fontSize: "1.6rem" }}>Kwinjira nka Admin</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
              Shyiramo Username neza hamwe n&apos;ijambo ry&apos;ibanga rya Admin.
            </p>
          </div>

          <form onSubmit={handleAdminLogin}>
            <div className="form-group">
              <label className="form-label">Username y&apos;Admin</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Epa"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Ijambo ry&apos;ibanga (Password)</label>
              <input
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: "0.75rem" }}>
              🔑 Kwinjira (Log In to Admin Portal)
            </button>
          </form>
        </div>
      </div>
    );
  }

  const pendingPaymentsCount = payments.filter(p => p.status === "pending").length;
  const pendingCommentsCount = comments.filter(c => c.status === "pending").length;

  return (
    <div style={{ maxWidth: 1150, margin: "0 auto" }}>
      {/* Admin Dashboard Header */}
      <section style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: "0.3rem" }}>MoMo Pay Admin Panel (0782148861)</span>
            <h1 className="highlight">Admin Management Dashboard</h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Logged in as Admin: <strong>Tuyisunge Epaphrodis (Epa)</strong> • Full Exam Access Granted
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ background: "rgba(0, 163, 224, 0.15)", border: "1px solid var(--rw-blue)", padding: "0.65rem 1rem", borderRadius: "var(--radius-md)" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>Admin Master Code:</span>
              <strong style={{ fontSize: "1rem", color: "var(--rw-blue)", letterSpacing: "0.05em" }}>ADMIN-EPA-MASTER</strong>
            </div>

            <button className="btn btn-secondary btn-sm" onClick={handleAdminLogout} title="Logout Admin">
              🚪 Sohoka (Logout)
            </button>
          </div>
        </div>
      </section>

      {/* Admin Navigation Tabs */}
      <div style={{ display: "flex", gap: "0.65rem", overflowX: "auto", paddingBottom: "0.75rem", marginBottom: "2rem", borderBottom: "1px solid var(--border-subtle)" }}>
        <button className={`btn ${activeTab === 'all_exams' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('all_exams')}>
          📚 All Exam Questions ({allQuestions.length})
        </button>
        <button className={`btn ${activeTab === 'payments' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('payments')}>
          💳 Payments ({pendingPaymentsCount})
        </button>
        <button className={`btn ${activeTab === 'students' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('students')}>
          👥 Students ({students.length})
        </button>
        <button className={`btn ${activeTab === 'upload_exam' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('upload_exam')}>
          📤 Upload New Question
        </button>
        <button className={`btn ${activeTab === 'comments' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('comments')}>
          💬 Client Q&amp;A ({pendingCommentsCount})
        </button>
      </div>

      {/* TAB 1: ALL EXAM QUESTIONS ACCESS & INSPECTOR */}
      {activeTab === "all_exams" && (
        <div>
          <div className="card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <h2>📚 Full Exam Question Bank ({filteredQuestions.length} Questions)</h2>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Admin access permission to view, inspect, search, and manage all driving theory questions.
                </p>
              </div>

              <input
                type="text"
                className="form-input"
                placeholder="Shakisha ikibazo (Search exam)..."
                value={searchQuestionQuery}
                onChange={(e) => setSearchQuestionQuery(e.target.value)}
                style={{ maxWidth: 280 }}
              />
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
              {["all", "rules", "signs", "priority", "penalties"].map(cat => (
                <button
                  key={cat}
                  className={`btn btn-sm ${examCategoryFilter === cat ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setExamCategoryFilter(cat)}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {filteredQuestions.map((q, idx) => (
              <div key={q.id + idx} className="card" style={{ borderLeft: "5px solid var(--rw-blue)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <span className="badge badge-blue" style={{ marginRight: "0.5rem" }}>{q.category.toUpperCase()}</span>
                    <span className="badge badge-emerald">Question #{idx + 1}</span>
                  </div>
                  
                  {q.id.startsWith("q_custom_") && (
                    <button className="btn btn-secondary btn-sm" style={{ color: "var(--accent-rose)" }} onClick={() => handleDeleteQuestion(q.id)}>
                      🗑️ Siba (Delete)
                    </button>
                  )}
                </div>

                <h3 style={{ fontSize: "1.15rem", marginBottom: "1rem", lineHeight: 1.4 }}>
                  {q.question.rw}
                </h3>

                {/* Option Choices */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem", marginBottom: "1rem" }}>
                  {(q.options.rw || q.options.en).map((opt, optIdx) => {
                    const isCorrect = optIdx === q.correctIndex;
                    const letter = String.fromCharCode(65 + optIdx);
                    return (
                      <div 
                        key={optIdx} 
                        style={{ 
                          padding: "0.65rem 0.85rem", 
                          borderRadius: "var(--radius-sm)", 
                          background: isCorrect ? "rgba(16, 185, 129, 0.15)" : "var(--bg-dark)", 
                          border: `1.5px solid ${isCorrect ? 'var(--accent-emerald)' : 'var(--border-subtle)'}`,
                          fontSize: "0.9rem",
                          fontWeight: isCorrect ? 700 : 400
                        }}
                      >
                        {letter}. {opt} {isCorrect && "✓ (CORRECT ANSWER)"}
                      </div>
                    );
                  })}
                </div>

                {/* RNP Traffic Code Explanation */}
                {q.explanation && q.explanation.rw && (
                  <div style={{ background: "rgba(0, 163, 224, 0.12)", border: "1px solid var(--rw-blue)", padding: "0.85rem", borderRadius: "var(--radius-sm)", fontSize: "0.88rem" }}>
                    <strong style={{ color: "var(--rw-blue)", display: "block", marginBottom: "0.2rem" }}>📖 Isobanuro rya Polisi y&apos;u Rwanda (Traffic Code Explanation):</strong>
                    {q.explanation.rw}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: MOMO PAYMENTS VERIFICATION */}
      {activeTab === "payments" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
            <div className="card" style={{ padding: "1.25rem" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Pending Approvals</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent-amber)" }}>{pendingPaymentsCount}</div>
            </div>
            <div className="card" style={{ padding: "1.25rem" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Total Approved</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent-emerald)" }}>
                {payments.filter(p => p.status === "approved").length}
              </div>
            </div>
            <div className="card" style={{ padding: "1.25rem" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Total Collected (RWF)</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--rw-blue)" }}>
                {payments.filter(p => p.status === "approved").length * 80} RWF
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {payments.length === 0 ? (
              <div className="card" style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
                Nta ubusabe bw&apos;kwishyura buhari.
              </div>
            ) : (
              payments.slice().reverse().map(p => (
                <div key={p.id} className="card" style={{ borderLeft: `5px solid ${p.status === 'approved' ? 'var(--accent-emerald)' : p.status === 'pending' ? 'var(--accent-amber)' : 'var(--accent-rose)'}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                        <h3 style={{ fontSize: "1.2rem" }}>{p.studentName}</h3>
                        <span className="badge badge-emerald">80 RWF</span>
                        <span className={`badge ${p.status === 'approved' ? 'badge-emerald' : p.status === 'pending' ? 'badge-blue' : 'badge-rose'}`}>
                          {p.status.toUpperCase()}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.88rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <span>📧 {p.studentEmail}</span>
                        <span>📱 {p.studentPhone}</span>
                        <span>📅 {new Date(p.createdAt).toLocaleString()}</span>
                      </div>
                    </div>

                    {p.accessCode && (
                      <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1.5px solid var(--accent-emerald)", padding: "0.5rem 1rem", borderRadius: "var(--radius-md)", textAlign: "center" }}>
                        <span style={{ fontSize: "0.75rem", color: "var(--accent-emerald)", display: "block", fontWeight: 700 }}>GENERATED ACCESS CODE:</span>
                        <strong style={{ fontSize: "1.25rem", color: "#fff", letterSpacing: "0.05em" }}>{p.accessCode}</strong>
                      </div>
                    )}
                  </div>

                  <div style={{ background: "var(--bg-dark)", border: "1px solid var(--border-subtle)", padding: "1rem", borderRadius: "var(--radius-md)", marginBottom: "1rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", fontSize: "0.88rem" }}>
                      <div>
                        <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.78rem" }}>Target MoMo Pay:</span>
                        <strong>0782148861</strong>
                      </div>
                      <div>
                        <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.78rem" }}>Sender MoMo Phone:</span>
                        <strong style={{ color: "var(--accent-emerald)" }}>{p.momoNumber}</strong>
                      </div>
                      <div>
                        <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.78rem" }}>SMS / Tx Reference:</span>
                        <strong style={{ color: "var(--rw-blue)" }}>{p.momoTxRef}</strong>
                      </div>
                    </div>
                  </div>

                  {p.status === "pending" && (
                    <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
                      <button className="btn btn-secondary btn-sm" onClick={() => handleReject(p.id)}>
                        ✕ Renga (Reject)
                      </button>
                      <button className="btn btn-primary btn-sm" onClick={() => handleApprove(p.id)}>
                        ✓ Emeza Kwishyura (Approve 80 RWF &amp; Issue Code)
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 3: STUDENT REGISTRATIONS & SUBSCRIPTIONS */}
      {activeTab === "students" && (
        <div className="card" style={{ padding: "2rem" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>Urutonde rw&apos;Abanyeshuri Biyandikishije ({students.length})</h2>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.92rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--glass-border)", color: "var(--text-muted)" }}>
                  <th style={{ padding: "0.75rem 1rem" }}>Amazina Yombi</th>
                  <th style={{ padding: "0.75rem 1rem" }}>Email</th>
                  <th style={{ padding: "0.75rem 1rem" }}>Telefone</th>
                  <th style={{ padding: "0.75rem 1rem" }}>Category</th>
                  <th style={{ padding: "0.75rem 1rem" }}>Date Registered</th>
                </tr>
              </thead>
              <tbody>
                {students.map(s => (
                  <tr key={s.id} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <td style={{ padding: "1rem", fontWeight: 700 }}>{s.fullName}</td>
                    <td style={{ padding: "1rem" }}>{s.email}</td>
                    <td style={{ padding: "1rem", color: "var(--accent-emerald)" }}>{s.phone}</td>
                    <td style={{ padding: "1rem" }}><span className="badge badge-emerald">Category {s.category}</span></td>
                    <td style={{ padding: "1rem", color: "var(--text-muted)" }}>{new Date(s.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: UPLOAD EXAM QUESTION */}
      {activeTab === "upload_exam" && (
        <div>
          <div className="card" style={{ padding: "2rem", marginBottom: "2rem" }}>
            <h2 style={{ marginBottom: "0.5rem" }}>Shyiramo Ikibazo Gishyashya mu Kizamini (Upload Exam Question)</h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
              Uza kurushaho kwagura ibibazo by&apos;ikizamini cyo gutwara ibinyabiziga (Question Pool).
            </p>

            <form onSubmit={handleUploadQuestion}>
              <div className="form-group">
                <label className="form-label">Umutwe w&apos;Ikibazo mu Kinyarwanda (Question Text)</label>
                <input type="text" className="form-input" placeholder="e.g. Ni ryari umushoferi kumanuka mu musozi ategetswe gukoresha frein moteur?" value={qRw} onChange={(e) => setQRw(e.target.value)} required />
              </div>

              <div className="form-group">
                <label className="form-label">Icyiciro cy&apos;Ikibazo (Category)</label>
                <select className="form-select" value={qCategory} onChange={(e) => setQCategory(e.target.value)}>
                  <option value="rules">General Traffic Rules &amp; Speed Limits</option>
                  <option value="signs">Road Signs &amp; Signals</option>
                  <option value="priority">Priority &amp; Right-of-Way Intersections</option>
                  <option value="penalties">RNP Fines &amp; Penalties</option>
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">Option A</label>
                  <input type="text" className="form-input" placeholder="A. Option A text" value={optA} onChange={(e) => setOptA(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Option B</label>
                  <input type="text" className="form-input" placeholder="B. Option B text" value={optB} onChange={(e) => setOptB(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Option C</label>
                  <input type="text" className="form-input" placeholder="C. Option C text" value={optC} onChange={(e) => setOptC(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Option D</label>
                  <input type="text" className="form-input" placeholder="D. Option D text" value={optD} onChange={(e) => setOptD(e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Igisubizo cy&apos;Ukuri (Correct Answer)</label>
                <select className="form-select" value={correctIdx} onChange={(e) => setCorrectIdx(e.target.value)}>
                  <option value="0">Option A</option>
                  <option value="1">Option B</option>
                  <option value="2">Option C</option>
                  <option value="3">Option D</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Isobanuro rya Polisi y&apos;u Rwanda (Traffic Code Explanation)</label>
                <textarea className="form-input" style={{ minHeight: 80 }} placeholder="Isobanuro n'ingingo y'amategeko..." value={expRw} onChange={(e) => setExpRw(e.target.value)} required />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: "0.5rem" }}>
                📤 Upload &amp; Save Exam Question
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TAB 5: CLIENT COMMENTS & Q&A RESPONSE SYSTEM */}
      {activeTab === "comments" && (
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {comments.length === 0 ? (
              <div className="card" style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
                Nta ntekerezo cyangwa ibibazo by&apos;abakiriya bihari.
              </div>
            ) : (
              comments.slice().reverse().map(c => (
                <div key={c.id} className="card" style={{ borderLeft: `5px solid ${c.status === 'answered' ? 'var(--accent-emerald)' : 'var(--accent-amber)'}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <strong style={{ fontSize: "1.05rem" }}>{c.studentName}</strong>
                        <span className={`badge ${c.status === 'answered' ? 'badge-emerald' : 'badge-amber'}`}>
                          {c.status.toUpperCase()}
                        </span>
                      </div>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{c.studentEmail} • {new Date(c.createdAt).toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Student Comment Text */}
                  <div style={{ background: "var(--bg-dark)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", marginBottom: "1rem", fontSize: "0.95rem" }}>
                    💬 <strong>Client Question:</strong> &quot;{c.commentText}&quot;
                  </div>

                  {/* Admin Existing Response */}
                  {c.adminResponse ? (
                    <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid var(--accent-emerald)", padding: "1rem", borderRadius: "var(--radius-md)", fontSize: "0.9rem" }}>
                      <strong style={{ color: "var(--accent-emerald)", display: "block", marginBottom: "0.3rem" }}>✓ Admin Response (Tuyisunge Epaphrodis):</strong>
                      {c.adminResponse}
                    </div>
                  ) : (
                    /* Admin Response Input */
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <textarea
                        className="form-input"
                        placeholder="Andika igisubizo cyawe (Write answer to client)..."
                        value={responseInputs[c.id] || ""}
                        onChange={(e) => setResponseInputs({ ...responseInputs, [c.id]: e.target.value })}
                        style={{ minHeight: 70 }}
                      />
                      <button className="btn btn-primary btn-sm" onClick={() => handleSendCommentResponse(c.id)} style={{ alignSelf: "flex-end" }}>
                        💬 Subiza Umukiriya (Send Response to Client)
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

    </div>
  );
}
