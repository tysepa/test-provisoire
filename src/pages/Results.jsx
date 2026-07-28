import React from "react";
import { Certificate } from "../components/Certificate";
import { useLanguage } from "../context/LanguageContext";

export function Results({ resultData, onRetake }) {
  const { score, total, durationSeconds, questions, studentAnswers } = resultData;
  const percentage = Math.round((score / total) * 100);
  const passed = score >= 16;
  const { lang } = useLanguage();

  const minutesTaken = Math.floor(durationSeconds / 60);
  const secondsTaken = durationSeconds % 60;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      {/* Top Banner */}
      <div className="card" style={{ padding: "2.5rem", textAlign: "center", marginBottom: "2rem", background: passed ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2))' : 'linear-gradient(135deg, rgba(244, 63, 94, 0.2), rgba(245, 158, 11, 0.2))', borderColor: passed ? 'var(--accent-emerald)' : 'var(--accent-rose)' }}>
        <div style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}>{passed ? '🎉' : '❌'}</div>
        <h1 className={passed ? 'text-emerald' : 'text-rose'}>
          {passed ? 'Watsindije Ikizamini! (CONGRATULATIONS)' : 'Ntabwo Watsinze (TEST NOT PASSED)'}
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          {passed ? 'Urashimwa! Watsinze ikizamini cy\'igerageza ry\'amategeko y\'omu handa.' : 'Gutsinda bisaba 16/20 (80%). Subira mu masomo ugerageze gukora tena.'}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", maxWidth: 600, margin: "0 auto 1.5rem auto" }}>
          <div style={{ background: "var(--bg-dark)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Amanota (Score)</div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: passed ? 'var(--accent-emerald)' : 'var(--accent-rose)' }}>
              {score} / {total}
            </div>
          </div>
          <div style={{ background: "var(--bg-dark)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Percentage</div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--rw-blue)" }}>{percentage}%</div>
          </div>
          <div style={{ background: "var(--bg-dark)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Time Taken</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--accent-amber)" }}>{minutesTaken}m {secondsTaken}s</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={onRetake}>Subira Gukora Ikizamini (Retake Test)</button>
          {passed && <button className="btn btn-accent" onClick={() => window.print()}>🖨️ Print Certificate</button>}
        </div>
      </div>

      {/* Certificate view if passed */}
      {passed && <Certificate score={score} total={total} percentage={percentage} />}

      {/* Review list */}
      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Isubiramo ry&apos;Ibibazo (Detailed Question Review)</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {questions.map((q, idx) => {
            const userAns = studentAnswers[q.id];
            const isCorrect = userAns === q.correctIndex;
            const opts = q.options[lang] || q.options.rw;

            return (
              <div key={idx} className="card" style={{ borderLeft: `5px solid ${isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span className={`badge ${isCorrect ? 'badge-emerald' : 'badge-rose'}`}>
                    Ikibazo cya {idx + 1} - {isCorrect ? '✓ Watsinze' : '✕ Mwatsinzwe'}
                  </span>
                  <span className="badge badge-blue">{q.category.toUpperCase()}</span>
                </div>

                <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>{q.question[lang] || q.question.rw}</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                  {opts.map((optText, optIdx) => {
                    let style = { background: "var(--bg-dark)", border: "1px solid var(--border-subtle)", padding: "0.75rem 1rem", borderRadius: "var(--radius-md)", fontSize: "0.9rem" };
                    if (optIdx === q.correctIndex) {
                      style = { ...style, background: "rgba(16, 185, 129, 0.18)", borderColor: "var(--accent-emerald)", fontWeight: 700 };
                    } else if (optIdx === userAns && !isCorrect) {
                      style = { ...style, background: "rgba(244, 63, 94, 0.18)", borderColor: "var(--accent-rose)" };
                    }
                    return (
                      <div key={optIdx} style={style}>
                        {optText} {optIdx === q.correctIndex ? '✓ (Igisubizo)' : ''} {optIdx === userAns && !isCorrect ? '✕ (Wahisemo)' : ''}
                      </div>
                    );
                  })}
                </div>

                <div style={{ background: "rgba(0, 163, 224, 0.1)", padding: "0.85rem", borderRadius: "var(--radius-sm)", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  <strong style={{ color: "var(--rw-blue)" }}>💡 Isobanuro:</strong> {q.explanation[lang] || q.explanation.rw}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
