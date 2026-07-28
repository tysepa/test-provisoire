// DriveRwanda Driving Theory Course & Sign Catalog View

import { SIGNS_DATA } from "../data/signsData.js";
import { COURSE_MODULES } from "../data/courseData.js";
import { renderSignSVG } from "../utils/svgIcons.js";
import { getLang, t } from "../i18n.js";
import { isStudentLoggedIn, openAuthModal } from "../auth.js";

let activeSignFilter = "all";
let activeModuleId = "module_signs";

export function renderCourseView() {
  const lang = getLang();
  const currentModule = COURSE_MODULES.find(m => m.id === activeModuleId) || COURSE_MODULES[0];

  return `
    <section class="courses-header" style="margin-bottom:2rem;">
      <h1 data-i18n="coursesHeading">${t("coursesHeading")}</h1>
      <p style="font-size:1.05rem;" data-i18n="coursesSubheading">${t("coursesSubheading")}</p>
    </section>

    <!-- Module Selector Tabs -->
    <div style="display:flex; gap:0.75rem; overflow-x:auto; padding-bottom:0.75rem; margin-bottom:2rem; border-bottom:1px solid var(--border-subtle);">
      ${COURSE_MODULES.map(mod => `
        <button 
          class="btn ${mod.id === activeModuleId ? 'btn-primary' : 'btn-secondary'} module-tab-btn" 
          data-module-id="${mod.id}">
          <span>${mod.icon}</span>
          <span>${mod.title[lang] || mod.title.rw}</span>
        </button>
      `).join("")}
    </div>

    <!-- Active Module Reader -->
    <div class="card" style="margin-bottom:3rem; padding:2rem;">
      <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
        <span style="font-size:2rem;">${currentModule.icon}</span>
        <h2>${currentModule.title[lang] || currentModule.title.rw}</h2>
      </div>
      <p style="font-size:1rem; color:var(--text-muted); margin-bottom:1.5rem;">
        ${currentModule.summary[lang] || currentModule.summary.rw}
      </p>

      <div style="display:flex; flex-direction:column; gap:1.5rem;">
        ${currentModule.lessons.map(lesson => `
          <div style="background:var(--bg-dark); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem;">
            <h3 style="color:var(--accent-emerald); font-size:1.2rem; margin-bottom:1rem;">
              ${lesson.title[lang] || lesson.title.rw}
            </h3>
            <div style="line-height:1.7; color:var(--text-main); font-size:0.95rem;">
              ${lesson.content[lang] || lesson.content.rw}
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Interactive Road Signs Catalog Section -->
    <section class="signs-catalog-section">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <h2>Amakarita y'Ibyapa (Road Signs Flashcard Catalog)</h2>
          <p>Kanda kuri buri cyapa ufungure isobanuro n'itegeko ryacyo.</p>
        </div>
        
        <!-- Search Input -->
        <input 
          type="text" 
          id="signSearchInput" 
          class="form-input" 
          placeholder="Shakisha icyapa (e.g. STOP, Speed 50)..." 
          style="max-width:280px;"
        >
      </div>

      <!-- Filter Bar -->
      <div class="sign-filter-bar" id="signFilterBar">
        <button class="filter-chip ${activeSignFilter === 'all' ? 'active' : ''}" data-filter="all">Ibyapa Byose</button>
        <button class="filter-chip ${activeSignFilter === 'danger' ? 'active' : ''}" data-filter="danger">⚠️ Inkwarning (Danger)</button>
        <button class="filter-chip ${activeSignFilter === 'prohibition' ? 'active' : ''}" data-filter="prohibition">🚫 Ibibuza (Prohibition)</button>
        <button class="filter-chip ${activeSignFilter === 'mandatory' ? 'active' : ''}" data-filter="mandatory">🔵 Ibihatira (Mandatory)</button>
        <button class="filter-chip ${activeSignFilter === 'priority' ? 'active' : ''}" data-filter="priority">🛑 Ubusumbane (Priority)</button>
      </div>

      <!-- Signs Grid -->
      <div class="signs-grid" id="signsGridContainer">
        ${renderFilteredSigns(activeSignFilter, "", lang)}
      </div>
    </section>
  `;
}

function renderFilteredSigns(filter, query, lang) {
  let signs = SIGNS_DATA;

  if (filter !== "all") {
    signs = signs.filter(s => s.category === filter);
  }

  if (query) {
    const q = query.toLowerCase();
    signs = signs.filter(s => 
      s.name.rw.toLowerCase().includes(q) || 
      s.name.en.toLowerCase().includes(q) || 
      s.code.toLowerCase().includes(q)
    );
  }

  if (signs.length === 0) {
    return `<div style="grid-column: 1 / -1; text-align:center; padding:3rem; color:var(--text-muted);">Nta cyapa cyabonetse ku kigezo watsinze.</div>`;
  }

  return signs.map(sign => `
    <div class="sign-card" onclick="this.classList.toggle('flipped')">
      <div class="sign-card-inner">
        <div class="sign-card-front">
          <span class="badge badge-emerald">${sign.code}</span>
          <div class="sign-svg-container">${renderSignSVG(sign.svgType)}</div>
          <div class="sign-title-front">${sign.name[lang] || sign.name.rw}</div>
          <div class="flip-hint">👆 Kanda uhindure amakarita</div>
        </div>
        <div class="sign-card-back">
          <span class="badge badge-blue">${sign.category.toUpperCase()}</span>
          <h4 style="margin:0.5rem 0; font-size:1rem;">${sign.name[lang] || sign.name.rw}</h4>
          <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5;">
            ${sign.description[lang] || sign.description.rw}
          </p>
          <div style="margin-top:auto; font-size:0.75rem; color:var(--accent-emerald);">✓ Official Rwanda Code</div>
        </div>
      </div>
    </div>
  `).join("");
}

export function setupCourseEvents() {
  // Module Tab buttons
  document.querySelectorAll(".module-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeModuleId = btn.getAttribute("data-module-id");
      const mainContent = document.getElementById("mainContent");
      if (mainContent) {
        mainContent.innerHTML = renderCourseView();
        setupCourseEvents();
      }
    });
  });

  // Filter chips
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      activeSignFilter = chip.getAttribute("data-filter");
      const container = document.getElementById("signsGridContainer");
      const query = document.getElementById("signSearchInput")?.value || "";
      if (container) {
        container.innerHTML = renderFilteredSigns(activeSignFilter, query, getLang());
      }
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    });
  });

  // Search input
  const searchInput = document.getElementById("signSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const container = document.getElementById("signsGridContainer");
      if (container) {
        container.innerHTML = renderFilteredSigns(activeSignFilter, e.target.value, getLang());
      }
    });
  }
}
