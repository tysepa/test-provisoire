import React, { useState } from "react";
import { COURSE_MODULES } from "../data/courseData";
import { SIGNS_DATA } from "../data/signsData";
import { SignCard } from "../components/SignCard";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { postClientComment, getComments } from "../utils/storage";

export function Course() {
  const [activeModuleId, setActiveModuleId] = useState("module_signs");
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Client Comment Submission state
  const [commentInput, setCommentInput] = useState("");
  const { currentUser, showToast } = useAuth();
  const { lang, t } = useLanguage();

  const currentModule = COURSE_MODULES.find(m => m.id === activeModuleId) || COURSE_MODULES[0];

  let signs = SIGNS_DATA;
  if (activeFilter !== "all") {
    signs = signs.filter(s => s.category === activeFilter);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    signs = signs.filter(s => s.name.rw.toLowerCase().includes(q) || s.code.toLowerCase().includes(q));
  }

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    if (!currentUser) {
      showToast("Ugomba kwiyandikisha cyangwa kwinjira ubohe wohereze ikibazo.", "error");
      return;
    }

    try {
      postClientComment({
        studentId: currentUser.id,
        studentName: currentUser.fullName,
        studentEmail: currentUser.email,
        commentText: commentInput.trim()
      });

      showToast("Ikibazo cyawe cyohererejwe neza! Admin (Tuyisunge Epaphrodis) agiye kugusubiza.", "success");
      setCommentInput("");
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const clientComments = getComments();

  return (
    <div>
      {/* Course Header Banner */}
      <section style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: "0.4rem" }}>FREE TRIAL &amp; FULL COURSE</span>
            <h1>{t("coursesHeading")}</h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)" }}>{t("coursesSubheading")}</p>
          </div>

          <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid var(--accent-emerald)", padding: "0.85rem 1.25rem", borderRadius: "var(--radius-md)" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-emerald)", fontWeight: 700, display: "block" }}>FREE TRIAL COURSE LESSONS</span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Wige ibyapa n&apos;amategeko y&apos;ubusa!</span>
          </div>
        </div>
      </section>

      {/* Module selector tabs */}
      <div style={{ display: "flex", gap: "0.75rem", overflowX: "auto", paddingBottom: "0.75rem", marginBottom: "2rem", borderBottom: "1px solid var(--border-subtle)" }}>
        {COURSE_MODULES.map(mod => (
          <button
            key={mod.id}
            className={`btn ${mod.id === activeModuleId ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveModuleId(mod.id)}
          >
            <span>{mod.icon}</span>
            <span>{mod.title[lang] || mod.title.rw}</span>
          </button>
        ))}
      </div>

      {/* Active module content */}
      <div className="card" style={{ marginBottom: "3rem", padding: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <span style={{ fontSize: "2rem" }}>{currentModule.icon}</span>
          <h2>{currentModule.title[lang] || currentModule.title.rw}</h2>
        </div>
        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>{currentModule.summary[lang] || currentModule.summary.rw}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {currentModule.lessons.map(lesson => (
            <div key={lesson.id} style={{ background: "var(--bg-dark)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "1.5rem" }}>
              <h3 style={{ color: "var(--accent-emerald)", fontSize: "1.2rem", marginBottom: "1rem" }}>
                {lesson.title[lang] || lesson.title.rw}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: lesson.content[lang] || lesson.content.rw }} style={{ lineHeight: 1.7 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Road signs catalog */}
      <section style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h2>Amakarita y&apos;Ibyapa (Interactive Sign Catalog)</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Kanda kuri buri cyapa ufungure isobanuro ryacyo.</p>
          </div>
          <input
            type="text"
            className="form-input"
            placeholder="Shakisha icyapa (e.g. STOP, 50)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ maxWidth: 280 }}
          />
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
          {["all", "danger", "prohibition", "mandatory", "priority"].map(cat => (
            <button
              key={cat}
              className={`btn btn-sm ${activeFilter === cat ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="signs-grid">
          {signs.map(sign => (
            <SignCard key={sign.id} sign={sign} />
          ))}
        </div>
      </section>

      {/* Client Q&A / Comment Submission Section */}
      <section className="card" style={{ padding: "2rem" }}>
        <h2>💬 Baza Ikibazo Cyangwa Tanga Igitekerezo (Ask Admin Q&amp;A)</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
          Baza ikibazo kijyanye n&apos;amategeko yo mumuhanda maze Admin (Tuyisunge Epaphrodis) agukorere igisubizo!
        </p>

        <form onSubmit={handlePostComment} style={{ marginBottom: "2rem" }}>
          <div className="form-group">
            <textarea
              className="form-input"
              style={{ minHeight: 90 }}
              placeholder="Andika ikibazo cyawe hano..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            📤 Boza Ikibazo Kuri Admin (Submit Question)
          </button>
        </form>

        {/* Display Client Comments & Admin Answers */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h3>Ibibazo Byaherukaga Kubazwa ({clientComments.length})</h3>
          {clientComments.slice().reverse().map(c => (
            <div key={c.id} style={{ background: "var(--bg-dark)", border: "1px solid var(--border-subtle)", padding: "1.25rem", borderRadius: "var(--radius-md)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <strong>👤 {c.studentName}</strong>
                <span className="badge badge-emerald">{new Date(c.createdAt).toLocaleDateString()}</span>
              </div>
              <p style={{ marginBottom: "0.75rem", fontSize: "0.95rem" }}>💬 &quot;{c.commentText}&quot;</p>
              
              {c.adminResponse ? (
                <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid var(--accent-emerald)", padding: "0.85rem", borderRadius: "var(--radius-sm)", fontSize: "0.88rem" }}>
                  <strong style={{ color: "var(--accent-emerald)", display: "block", marginBottom: "0.3rem" }}>✓ Admin Response (Tuyisunge Epaphrodis):</strong>
                  {c.adminResponse}
                </div>
              ) : (
                <div style={{ fontSize: "0.8rem", color: "var(--accent-amber)" }}>
                  ⌛ Ikibazo cyotwojwe gitegereje igisubizo cya Admin...
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
