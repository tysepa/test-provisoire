// DriveRwanda Home View (Landing & Platform Overview)

import { openAuthModal, isStudentLoggedIn } from "../auth.js";
import { renderSignSVG } from "../utils/svgIcons.js";
import { SIGNS_DATA } from "../data/signsData.js";
import { t } from "../i18n.js";

export function renderHomeView() {
  const featuredSigns = SIGNS_DATA.slice(0, 4);

  return `
    <section class="hero-section" style="padding: 2.5rem 0 3.5rem 0;">
      <div style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap:2.5rem; align-items:center;">
        
        <!-- Left Hero Column -->
        <div>
          <div style="display:inline-flex; align-items:center; gap:0.5rem; background:rgba(0, 163, 224, 0.12); border:1px solid rgba(0, 163, 224, 0.3); padding:0.35rem 0.85rem; border-radius:var(--radius-full); font-size:0.82rem; font-weight:700; color:var(--rw-blue); margin-bottom:1.25rem;">
            <span>🇷🇼</span> Rwanda Official Driving Theory Platform 2026
          </div>
          <h1 style="margin-bottom:1rem; font-size:clamp(2.2rem, 3.8vw, 3.4rem); line-height:1.15;">
            Tsinda Ikizamini cy'Icyarabu <span class="highlight">Bwa Mbere!</span>
          </h1>
          <p style="font-size:1.1rem; color:var(--text-muted); margin-bottom:2rem; line-height:1.6;" data-i18n="heroSubtitle">
            Platform ya mbere mu Rwanda ikufasha kwiga amategeko y'omu handa, ibyapa no gukora ibizamini nyabyo bya Polisi y'u Rwanda mu Kinyarwanda, Icyongereza n'Igifaransa.
          </p>

          <div style="display:flex; flex-wrap:wrap; gap:1rem; margin-bottom:2rem;">
            <button class="btn btn-primary btn-lg" id="heroRegisterBtn" data-i18n="heroCtaRegister">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
              Tanga Formu y'Umunyeshuri
            </button>
            <button class="btn btn-secondary btn-lg" id="heroDemoBtn" data-i18n="heroCtaDemo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              Koresha Konti y'Igerageza
            </button>
          </div>

          <!-- Key Metrics -->
          <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem; padding-top:1.5rem; border-top:1px solid var(--border-subtle);">
            <div>
              <div style="font-family:var(--font-heading); font-size:1.6rem; font-weight:800; color:var(--accent-emerald);">200+</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">Ibibazo by'Ikizamini</div>
            </div>
            <div>
              <div style="font-family:var(--font-heading); font-size:1.6rem; font-weight:800; color:var(--rw-blue);">100%</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">Amategeko y'u Rwanda</div>
            </div>
            <div>
              <div style="font-family:var(--font-heading); font-size:1.6rem; font-weight:800; color:var(--accent-amber);">16 / 20</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">Amanota yo Gutsinda</div>
            </div>
          </div>
        </div>

        <!-- Right Hero Preview Card -->
        <div class="card" style="background:linear-gradient(145deg, rgba(17, 25, 39, 0.9), rgba(30, 41, 59, 0.8)); border-color:var(--glass-border); padding:2rem;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem;">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span class="badge badge-emerald">POLISI Y'U RWANDA TEST</span>
              <span class="badge badge-blue">Kinyarwanda</span>
            </div>
            <span style="font-size:0.8rem; color:var(--accent-emerald); font-weight:700;">Live Simulator</span>
          </div>

          <div style="background:var(--bg-dark); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.5rem;">
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.4rem;">Ikibazo cya 1 / 20</div>
            <h4 style="font-size:1.05rem; font-weight:600; margin-bottom:1rem; color:var(--text-main);">
              Ku ihuriro ry'imihanda ryo mu ujyi adafite ibyapa, ni nde ufite ubusumbane (Priorité)?
            </h4>
            <div style="display:flex; flex-direction:column; gap:0.5rem;">
              <div style="padding:0.6rem 0.85rem; background:rgba(16, 185, 129, 0.15); border:1px solid var(--accent-emerald); border-radius:var(--radius-sm); font-size:0.88rem; color:var(--text-main); font-weight:600;">
                ✓ B. Ikinyabiziga gituruka iburyo bwawe (Priorité à droite)
              </div>
            </div>
          </div>

          <div style="display:flex; align-items:center; justify-content:space-between; font-size:0.85rem; color:var(--text-muted);">
            <span>⏱️ Iminota: 20:00</span>
            <span>🔒 Access: Registered Students Only</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Platform Feature Grid -->
    <section style="margin: 3.5rem 0;">
      <div style="text-align:center; max-width:650px; margin:0 auto 2.5rem auto;">
        <h2 style="margin-bottom:0.5rem;">Kuki Ugomba Kwiha DriveRwanda?</h2>
        <p style="font-size:1rem;">Itegure ikizamini cy'icyarabu wicaye mu rugo, ukoresheje telefone cyangwa mudasobwa.</p>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem;">
        <div class="card card-hoverable">
          <div style="width:48px; height:48px; border-radius:var(--radius-md); background:rgba(16, 185, 129, 0.15); color:var(--accent-emerald); display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin-bottom:1rem;">
            🪧
          </div>
          <h3 style="margin-bottom:0.5rem;" data-i18n="feature1Title">Ibyapa Byose by'omu Handa</h3>
          <p data-i18n="feature1Desc">Wige ibyapa by'Inkwarning, Ibibuza, n'Ibihatira ukoresheje amakarita (flashcards) zikwereka n'isobanuro.</p>
        </div>

        <div class="card card-hoverable">
          <div style="width:48px; height:48px; border-radius:var(--radius-md); background:rgba(0, 163, 224, 0.15); color:var(--rw-blue); display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin-bottom:1rem;">
            ⏱️
          </div>
          <h3 style="margin-bottom:0.5rem;" data-i18n="feature2Title">Ikizamini Simulator nyakuri</h3>
          <p data-i18n="feature2Desc">Ibibazo 20, iminota 20 y'isaha n'ibisubizo n'isobanuro rya buri kibazo hejuru ya 80% yo gutsinda.</p>
        </div>

        <div class="card card-hoverable">
          <div style="width:48px; height:48px; border-radius:var(--radius-md); background:rgba(245, 158, 11, 0.15); color:var(--accent-amber); display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin-bottom:1rem;">
            🚦
          </div>
          <h3 style="margin-bottom:0.5rem;" data-i18n="feature3Title">Impushya Zose (Cat A, B, C, D, E)</h3>
          <p data-i18n="feature3Desc">Uruzinduko rwihariye rw'amasomo rusobanura buri ngero y'urushya rw'ibinyabiziga mu Rwanda.</p>
        </div>
      </div>
    </section>

    <!-- Sample Interactive Road Signs Preview -->
    <section style="margin: 3.5rem 0;">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <h2>Ibyapa by'Omu Handa mu Rwanda</h2>
          <p>Kanda ku gychapa ufungure isobanuro ryacyo mu Kinyarwanda.</p>
        </div>
        <a href="#courses" class="btn btn-outline" id="viewAllSignsBtn">Reba Ibyapa Byose &rarr;</a>
      </div>

      <div class="signs-grid">
        ${featuredSigns.map(sign => `
          <div class="sign-card" onclick="this.classList.toggle('flipped')">
            <div class="sign-card-inner">
              <div class="sign-card-front">
                <span class="badge badge-emerald">${sign.code}</span>
                <div class="sign-svg-container">${renderSignSVG(sign.svgType)}</div>
                <div class="sign-title-front">${sign.name.rw}</div>
                <div class="flip-hint">👆 Kanda ugerageze guhindura</div>
              </div>
              <div class="sign-card-back">
                <span class="badge badge-blue">${sign.category.toUpperCase()}</span>
                <h4 style="margin:0.5rem 0; font-size:1rem;">${sign.name.rw}</h4>
                <p style="font-size:0.85rem; color:var(--text-muted);">${sign.description.rw}</p>
                <div style="margin-top:auto; font-size:0.75rem; color:var(--accent-emerald);">✓ Article Code de la Route Rwanda</div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Registration Call to Action Banner -->
    <section style="margin-top:4rem; background:linear-gradient(135deg, rgba(0, 163, 224, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%); border:1px solid var(--glass-border); border-radius:var(--radius-lg); padding:3rem 2rem; text-align:center;">
      <h2 style="font-size:2.2rem; margin-bottom:0.75rem;">Witeguye Gutsindira Uruhushya Rwawe?</h2>
      <p style="max-width:600px; margin:0 auto 1.5rem auto; font-size:1.05rem;">
        Kwiyandikisha bifata amasegonda 30 gusa. Ufite uruhushya rwo kwinjira mu masomo yose n'ibizamini simulator.
      </p>
      <button class="btn btn-primary btn-lg" id="ctaFooterRegister">
        Iyandikishe Uyu Munsi Nku Umunyeshuri
      </button>
    </section>
  `;
}

export function setupHomeEvents() {
  const heroReg = document.getElementById("heroRegisterBtn");
  const heroDemo = document.getElementById("heroDemoBtn");
  const ctaFooter = document.getElementById("ctaFooterRegister");

  if (heroReg) heroReg.onclick = () => openAuthModal("register");
  if (ctaFooter) ctaFooter.onclick = () => openAuthModal("register");
  if (heroDemo) heroDemo.onclick = () => openAuthModal("login");
}
