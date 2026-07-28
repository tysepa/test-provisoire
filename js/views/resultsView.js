// DriveRwanda Exam Results & Certificate Generator View

import { getCurrentUser } from "../utils/storage.js";
import { getLang } from "../i18n.js";

export function renderResultsView(result) {
  const { score, total, durationSeconds, questions, studentAnswers } = result;
  const percentage = Math.round((score / total) * 100);
  const passed = score >= 16; // 80% pass threshold
  const user = getCurrentUser();
  const lang = getLang();

  const minutesTaken = Math.floor(durationSeconds / 60);
  const secondsTaken = durationSeconds % 60;

  return `
    <div style="max-width:900px; margin:0 auto;">
      
      <!-- Top Result Header Banner -->
      <div class="card" style="padding:2.5rem; text-align:center; margin-bottom:2rem; background: ${passed ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2))' : 'linear-gradient(135deg, rgba(244, 63, 94, 0.2), rgba(245, 158, 11, 0.2))'}; border-color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">
        <div style="font-size:3.5rem; margin-bottom:0.5rem;">${passed ? '🎉' : '❌'}</div>
        <h1 style="margin-bottom:0.5rem;" class="${passed ? 'text-emerald' : 'text-rose'}">
          ${passed ? 'Watsindije Ikizamini! (CONGRATULATIONS)' : 'Ntabwo Watsinze (TEST NOT PASSED)'}
        </h1>
        <p style="font-size:1.1rem; color:var(--text-main); margin-bottom:1.5rem;">
          ${passed ? 'Urashimwa! Watsinze ikizamini cy\'igerageza ry\'amategeko y\'omu handa mu Rwanda.' : 'Wakoreye amanota atagufasha gutsinda. Gutsinda bisaba 16/20 (80%). Subira mu masomo ugerageze gukora tena.'}
        </p>

        <!-- Score Breakdown Cards -->
        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem; max-width:600px; margin:0 auto 1.5rem auto;">
          <div style="background:var(--bg-dark); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
            <div style="font-size:0.8rem; color:var(--text-muted);">Amanota (Score)</div>
            <div style="font-size:1.8rem; font-weight:800; color:${passed ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">
              ${score} / ${total}
            </div>
          </div>
          <div style="background:var(--bg-dark); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
            <div style="font-size:0.8rem; color:var(--text-muted);">Percentage</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--rw-blue);">${percentage}%</div>
          </div>
          <div style="background:var(--bg-dark); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
            <div style="font-size:0.8rem; color:var(--text-muted);">Igihe Gikoreshejwe</div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--accent-amber);">${minutesTaken}m ${secondsTaken}s</div>
          </div>
        </div>

        <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
          <a href="#exam" class="btn btn-primary" onclick="window.location.reload();">Subira Gukora Ikizamini (Retake Test)</a>
          <a href="#dashboard" class="btn btn-secondary">Reba Ibyarangiye (Dashboard)</a>
          ${passed ? `<button class="btn btn-accent" onclick="window.print();">🖨️ Print Official Certificate</button>` : ''}
        </div>
      </div>

      <!-- Official Pass Certificate Frame (Generated if passed) -->
      ${passed ? `
        <div class="certificate-frame" id="printableCertificate">
          <div style="display:flex; align-items:center; justify-content:center; gap:0.5rem; margin-bottom:1rem;">
            <div class="logo-badge" style="width:20px; height:24px;"><span class="flag-stripe rw-blue"></span><span class="flag-stripe rw-yellow"></span><span class="flag-stripe rw-green"></span></div>
            <span style="font-weight:800; font-size:1.1rem; color:#0369a1; text-transform:uppercase; letter-spacing:0.05em;">Repubulika y'u Rwanda - DriveRwanda</span>
          </div>

          <h2>ICYEMEZO CYO GWETSUNDA IKIZAMINI CY'ICYARABU</h2>
          <p style="font-size:0.95rem; color:#475569;">OFFICIAL PROVISIONAL DRIVING LICENSE THEORY COMPLETION CERTIFICATE</p>

          <div style="margin:1.5rem 0;">
            <span style="font-size:0.9rem; color:#64748b; display:block;">Iki cyemezo gihabwa umunyeshuri:</span>
            <div class="student-name">${user ? user.fullName : 'Umunyeshuri w\'u Rwanda'}</div>
            <p style="font-size:0.95rem; color:#334155;">
              Watsinze neza ikizamini cy'igerageza ry'amategeko y'omu handa (Category ${user ? user.category : 'B'}) ku manota <strong>${score}/${total} (${percentage}%)</strong>.
            </p>
          </div>

          <div style="display:flex; align-items:center; justify-content:space-around; margin-top:2rem;">
            <div>
              <div style="font-size:0.75rem; color:#64748b;">Itariki (Date Issued)</div>
              <strong style="font-size:0.9rem; color:#0f172a;">${new Date().toLocaleDateString()}</strong>
            </div>
            <div class="certificate-badge-stamp">
              PASSED<br>80%+
            </div>
            <div>
              <div style="font-size:0.75rem; color:#64748b;">Code de la Route</div>
              <strong style="font-size:0.9rem; color:#0f172a;">Rwanda Police Standard</strong>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Question-by-Question Detailed Review -->
      <div style="margin-top:3rem;">
        <h2 style="margin-bottom:1rem;">Isubiramo ry'Ibibazo (Detailed Question Review)</h2>
        <div style="display:flex; flex-direction:column; gap:1.25rem;">
          ${questions.map((q, idx) => {
            const userAns = studentAnswers[q.id];
            const isCorrect = userAns === q.correctIndex;
            const opts = q.options[lang] || q.options.rw;

            return `
              <div class="card" style="border-left: 5px solid ${isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.75rem;">
                  <span class="badge ${isCorrect ? 'badge-emerald' : 'badge-rose'}">
                    Ikibazo cya ${idx + 1} - ${isCorrect ? '✓ Watsinze' : '✕ Mwatsinzwe'}
                  </span>
                  <span class="badge badge-blue">${q.category.toUpperCase()}</span>
                </div>

                <h3 style="font-size:1.1rem; margin-bottom:1rem; color:var(--text-main);">
                  ${q.question[lang] || q.question.rw}
                </h3>

                <div style="display:flex; flex-direction:column; gap:0.5rem; margin-bottom:1rem;">
                  ${opts.map((optText, optIdx) => {
                    let styleClass = "background:var(--bg-dark); border:1px solid var(--border-subtle);";
                    if (optIdx === q.correctIndex) {
                      styleClass = "background:rgba(16, 185, 129, 0.18); border:1px solid var(--accent-emerald); color:#fff; font-weight:700;";
                    } else if (optIdx === userAns && !isCorrect) {
                      styleClass = "background:rgba(244, 63, 94, 0.18); border:1px solid var(--accent-rose); color:#fff;";
                    }

                    return `
                      <div style="padding:0.75rem 1rem; border-radius:var(--radius-md); font-size:0.9rem; ${styleClass}">
                        ${optText} ${optIdx === q.correctIndex ? '✓ (Igisubizo cy\'Ukuri)' : ''} ${optIdx === userAns && !isCorrect ? '✕ (Ibyo Wahisemo)' : ''}
                      </div>
                    `;
                  }).join("")}
                </div>

                <div style="background:rgba(0, 163, 224, 0.1); border-radius:var(--radius-sm); padding:0.85rem; font-size:0.85rem; color:var(--text-muted); line-height:1.5;">
                  <strong style="color:var(--rw-blue);">💡 Isobanuro rya Polisi y'u Rwanda:</strong> ${q.explanation[lang] || q.explanation.rw}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>

    </div>
  `;
}
