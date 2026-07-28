// DriveRwanda Student Dashboard & Performance Analytics View

import { getCurrentUser, getExamHistory } from "../utils/storage.js";
import { getLang, t } from "../i18n.js";
import { openAuthModal } from "../auth.js";

export function renderDashboardView() {
  const user = getCurrentUser();
  if (!user) {
    return `
      <div style="max-width:600px; margin:3rem auto; text-align:center;">
        <div class="card" style="padding:3rem 2rem;">
          <div style="font-size:3rem; margin-bottom:1rem;">🔒</div>
          <h2>Ugomba Kwiyandikisha Cyangwa Kwinjira</h2>
          <p style="margin-bottom:1.5rem; color:var(--text-muted);">
            Reba ibyarangiye byawe, amanota y'ibizamini no gutegura ikizamini cy'icyarabu nyuma yo kwinjira.
          </p>
          <button class="btn btn-primary btn-lg" onclick="window.location.hash='#home';">Iyandikishe Nku Umunyeshuri</button>
        </div>
      </div>
    `;
  }

  const history = getExamHistory();
  const totalAttempts = history.length;
  const passedAttempts = history.filter(h => h.passed).length;
  
  let avgPercentage = 0;
  let highestScore = 0;

  if (totalAttempts > 0) {
    const totalScorePct = history.reduce((acc, curr) => acc + curr.percentage, 0);
    avgPercentage = Math.round(totalScorePct / totalAttempts);
    highestScore = Math.max(...history.map(h => h.percentage));
  }

  // Calculate official readiness meter score (weighted average of attempts + completion bonus)
  let readiness = 0;
  if (totalAttempts > 0) {
    readiness = Math.min(100, Math.round((avgPercentage * 0.7) + (Math.min(totalAttempts, 5) * 6)));
  }

  return `
    <section class="dashboard-header" style="margin-bottom:2rem;">
      <h1 data-i18n="dashboardHeading">${t("dashboardHeading")}</h1>
      <p style="font-size:1.05rem;" data-i18n="dashboardSubheading">${t("dashboardSubheading")}</p>
    </section>

    <!-- Top Grid: Student Profile + Readiness Gauge -->
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem; margin-bottom:2.5rem;">
      
      <!-- Student Profile Card -->
      <div class="card" style="display:flex; align-items:center; gap:1.5rem;">
        <div style="width:72px; height:72px; border-radius:50%; background:linear-gradient(135deg, var(--rw-blue), var(--accent-emerald)); display:flex; align-items:center; justify-content:center; color:#fff; font-size:2rem; font-weight:800; flex-shrink:0;">
          ${user.fullName.charAt(0).toUpperCase()}
        </div>
        <div>
          <span class="badge badge-emerald" style="margin-bottom:0.3rem;">Category ${user.category} Student</span>
          <h2 style="font-size:1.4rem; margin-bottom:0.25rem;">${user.fullName}</h2>
          <div style="font-size:0.85rem; color:var(--text-muted); line-height:1.4;">
            <div>📧 ${user.email}</div>
            <div>📱 ${user.phone}</div>
            <div>📅 Student Since: ${new Date(user.createdAt).toLocaleDateString()}</div>
          </div>
        </div>
      </div>

      <!-- Readiness Gauge Card -->
      <div class="card" style="display:flex; align-items:center; justify-content:space-between; padding:1.5rem 2rem;">
        <div>
          <span style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em; font-weight:700;">
            Igipimo cy'Ubutegetse (Readiness)
          </span>
          <h2 style="font-size:2.2rem; margin:0.3rem 0; color: ${readiness >= 80 ? 'var(--accent-emerald)' : 'var(--accent-amber)'};">
            ${readiness}% Ready
          </h2>
          <p style="font-size:0.85rem; color:var(--text-muted);">
            ${readiness >= 80 ? '✓ Witeguye neza ikizamini cya Polisi!' : 'Gukora ibizamini bijyanye 5+ bizakwongerera amahirwe.'}
          </p>
        </div>

        <!-- Progress Gauge Ring -->
        <div style="position:relative; width:90px; height:90px; display:flex; align-items:center; justify-content:center;">
          <svg width="90" height="90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg-dark)" stroke-width="12"/>
            <circle cx="50" cy="50" r="40" fill="none" stroke="${readiness >= 80 ? 'var(--accent-emerald)' : 'var(--accent-amber)'}" stroke-width="12" stroke-dasharray="251" stroke-dashoffset="${251 - (251 * readiness) / 100}" stroke-linecap="round" transform="rotate(-90 50 50)"/>
          </svg>
          <span style="position:absolute; font-family:var(--font-heading); font-weight:800; font-size:1.1rem; color:var(--text-main);">
            ${readiness}%
          </span>
        </div>
      </div>

    </div>

    <!-- Quick Stats Metric Grid -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1.25rem; margin-bottom:2.5rem;">
      <div class="card" style="padding:1.25rem;">
        <div style="font-size:0.8rem; color:var(--text-muted);">Ibizamini Byose (Total Tests)</div>
        <div style="font-size:1.8rem; font-weight:800; color:var(--rw-blue);">${totalAttempts}</div>
      </div>
      <div class="card" style="padding:1.25rem;">
        <div style="font-size:0.8rem; color:var(--text-muted);">Amanota y'Umusogongero (Avg Score)</div>
        <div style="font-size:1.8rem; font-weight:800; color:var(--accent-emerald);">${avgPercentage}%</div>
      </div>
      <div class="card" style="padding:1.25rem;">
        <div style="font-size:0.8rem; color:var(--text-muted);">Ibyatsinzwe (Passed Tests)</div>
        <div style="font-size:1.8rem; font-weight:800; color:var(--accent-emerald);">${passedAttempts}</div>
      </div>
      <div class="card" style="padding:1.25rem;">
        <div style="font-size:0.8rem; color:var(--text-muted);">Amanota ya Mbere (Highest)</div>
        <div style="font-size:1.8rem; font-weight:800; color:var(--accent-amber);">${highestScore}%</div>
      </div>
    </div>

    <!-- Exam History Table Section -->
    <section class="card" style="padding:2rem;">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <h2 data-i18n="pastAttempts">${t("pastAttempts")}</h2>
          <p style="font-size:0.9rem; color:var(--text-muted);">Urutonde rw'ibizamini vyose wakoze kuri DriveRwanda.</p>
        </div>
        <a href="#exam" class="btn btn-primary btn-sm">+ Kora Ikizamini Gishyashya</a>
      </div>

      ${totalAttempts === 0 ? `
        <div style="text-align:center; padding:3rem; color:var(--text-muted);" data-i18n="noHistoryYet">
          ${t("noHistoryYet")}
        </div>
      ` : `
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.92rem;">
            <thead>
              <tr style="border-bottom:1px solid var(--glass-border); color:var(--text-muted);">
                <th style="padding:0.75rem 1rem;">Itariki (Date)</th>
                <th style="padding:0.75rem 1rem;">Ikizamini</th>
                <th style="padding:0.75rem 1rem;">Amanota (Score)</th>
                <th style="padding:0.75rem 1rem;">Percentage</th>
                <th style="padding:0.75rem 1rem;">Igihe</th>
                <th style="padding:0.75rem 1rem;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${history.slice().reverse().map(h => `
                <tr style="border-bottom:1px solid var(--border-subtle); transition:var(--transition-fast);">
                  <td style="padding:1rem;">${new Date(h.date).toLocaleString()}</td>
                  <td style="padding:1rem; font-weight:600;">${h.category}</td>
                  <td style="padding:1rem; font-weight:700; color:var(--text-main);">${h.score} / ${h.total}</td>
                  <td style="padding:1rem; font-weight:700; color:var(--rw-blue);">${h.percentage}%</td>
                  <td style="padding:1rem; color:var(--text-muted);">${Math.floor(h.durationSeconds / 60)}m ${h.durationSeconds % 60}s</td>
                  <td style="padding:1rem;">
                    <span class="badge ${h.passed ? 'badge-emerald' : 'badge-rose'}">
                      ${h.passed ? '✓ PASSED (80%+)' : '✕ FAILED'}
                    </span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `}
    </section>
  `;
}
