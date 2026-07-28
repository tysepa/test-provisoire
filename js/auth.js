// DriveRwanda Authentication Manager & Registration Guard

import { getCurrentUser, loginStudent, registerStudent, logoutUser } from "./utils/storage.js";
import { t } from "./i18n.js";
import { showToast } from "./app.js";

export function initAuth() {
  renderAuthNav();
  setupAuthBanner();
}

export function isStudentLoggedIn() {
  return getCurrentUser() !== null;
}

export function renderAuthNav() {
  const container = document.getElementById("authNavContainer");
  const mobileContainer = document.getElementById("mobileAuthContainer");
  const user = getCurrentUser();

  if (!container) return;

  if (user) {
    const html = `
      <div class="user-badge-menu" style="display:flex; align-items:center; gap:0.75rem;">
        <div class="user-avatar" style="width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg, var(--rw-blue), var(--accent-emerald)); display:flex; align-items:center; justify-content:center; color:#fff; font-weight:800; font-size:0.9rem;">
          ${user.fullName.charAt(0).toUpperCase()}
        </div>
        <div class="user-info" style="display:flex; flex-direction:column;">
          <span style="font-weight:700; font-size:0.88rem; color:var(--text-main); line-height:1.2;">${user.fullName}</span>
          <span class="badge badge-emerald" style="font-size:0.65rem; padding:0.1rem 0.4rem; align-self:flex-start;">Cat. ${user.category}</span>
        </div>
        <button class="btn btn-sm btn-secondary" id="logoutBtn" style="margin-left:0.5rem;" data-i18n="logoutBtn">${t("logoutBtn")}</button>
      </div>
    `;
    container.innerHTML = html;
    if (mobileContainer) mobileContainer.innerHTML = html;

    // Attach logout event
    document.querySelectorAll("#logoutBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        logoutUser();
        showToast("Mwazimye konti neza (Logged out).", "info");
        renderAuthNav();
        setupAuthBanner();
        window.location.hash = "#home";
      });
    });
  } else {
    const html = `
      <div style="display:flex; gap:0.5rem;">
        <button class="btn btn-sm btn-secondary" id="navLoginBtn">${t("loginBtn")}</button>
        <button class="btn btn-sm btn-primary" id="navRegisterBtn">${t("registerBtn")}</button>
      </div>
    `;
    container.innerHTML = html;
    if (mobileContainer) mobileContainer.innerHTML = html;

    document.querySelectorAll("#navLoginBtn").forEach(btn => {
      btn.addEventListener("click", () => openAuthModal("login"));
    });
    document.querySelectorAll("#navRegisterBtn").forEach(btn => {
      btn.addEventListener("click", () => openAuthModal("register"));
    });
  }
}

export function setupAuthBanner() {
  const banner = document.getElementById("authAlertBanner");
  const bannerBtn = document.getElementById("bannerRegisterBtn");
  
  if (!banner) return;

  if (isStudentLoggedIn()) {
    banner.classList.add("hidden");
  } else {
    banner.classList.remove("hidden");
    if (bannerBtn) {
      bannerBtn.onclick = () => openAuthModal("register");
    }
  }
}

// Modal Auth Form Handler
export function openAuthModal(mode = "register") {
  const modalContainer = document.getElementById("modalContainer");
  const modalBody = document.getElementById("modalBody");

  if (!modalContainer || !modalBody) return;

  modalContainer.classList.remove("hidden");

  if (mode === "register") {
    modalBody.innerHTML = `
      <div class="auth-modal-content">
        <h2 style="font-size:1.6rem; margin-bottom:0.4rem;" class="highlight">Iyandikishe Nku Mwarimu / Umunyeshuri</h2>
        <p style="font-size:0.9rem; margin-bottom:1.5rem;">Wuzuze formu ukiyingire amasomo n'ibizamini by'icyarabu (Driving License Student Registration).</p>

        <!-- Quick Demo Account Shortcut -->
        <div style="background:rgba(0, 163, 224, 0.12); border:1px dashed var(--rw-blue); padding:0.85rem; border-radius:var(--radius-md); margin-bottom:1.25rem; display:flex; align-items:center; justify-content:space-between;">
          <div>
            <strong style="font-size:0.88rem; color:var(--rw-blue); display:block;">Koresha Demo Student Account:</strong>
            <span style="font-size:0.8rem; color:var(--text-muted);">mugisha@drive.rw / password123</span>
          </div>
          <button class="btn btn-sm btn-accent" id="quickDemoBtn">Try Demo</button>
        </div>

        <form id="studentRegisterForm">
          <div class="form-group">
            <label class="form-label">Amazina Yombi (Full Name)</label>
            <input type="text" id="regFullName" class="form-input" placeholder="e.g. Mugisha Jean Paul" required>
          </div>

          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="regEmail" class="form-input" placeholder="e.g. mugisha@gmail.com" required>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.75rem;">
            <div class="form-group">
              <label class="form-label">Telefone (Rwanda)</label>
              <input type="tel" id="regPhone" class="form-input" placeholder="+250 78X XXX XXX" value="+250 788 123 456" required>
            </div>
            <div class="form-group">
              <label class="form-label">Icyiciro cy'Uruhushya (Category)</label>
              <select id="regCategory" class="form-select">
                <option value="B" selected>Category B (Car / Passenger)</option>
                <option value="A">Category A (Motorcycle)</option>
                <option value="C">Category C (Commercial Truck)</option>
                <option value="D">Category D (Bus / Transit)</option>
                <option value="E">Category E (Trailer)</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Ijambo ry'Ibanga (Password)</label>
            <input type="password" id="regPassword" class="form-input" placeholder="At least 6 characters" required>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width:100%; margin-top:0.5rem;">Iyandikishe Sasa & Ufungure Amasomo</button>
        </form>

        <div style="text-align:center; margin-top:1.25rem; font-size:0.88rem;">
          <span>Usanganywe konti? </span>
          <a href="#" id="switchToLogin" style="color:var(--accent-emerald); font-weight:700; text-decoration:underline;">Injira Hano (Sign In)</a>
        </div>
      </div>
    `;

    document.getElementById("studentRegisterForm").onsubmit = (e) => {
      e.preventDefault();
      try {
        const fullName = document.getElementById("regFullName").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const phone = document.getElementById("regPhone").value.trim();
        const category = document.getElementById("regCategory").value;
        const password = document.getElementById("regPassword").value;

        if (!fullName || !email || !password) {
          throw new Error("Uzuza amakuru yose asabwa.");
        }

        registerStudent({ fullName, email, phone, category, password });
        showToast("Mwariyingire neza! Ufite uruhushya rwo kwinjira mu masomo.", "success");
        closeAuthModal();
        renderAuthNav();
        setupAuthBanner();
        window.location.hash = "#courses";
      } catch (err) {
        showToast(err.message, "error");
      }
    };

    document.getElementById("quickDemoBtn").onclick = () => {
      try {
        loginStudent("mugisha@drive.rw", "password123");
        showToast("Mwinjiye nka Mugisha Jean Paul (Demo Account).", "success");
        closeAuthModal();
        renderAuthNav();
        setupAuthBanner();
        window.location.hash = "#courses";
      } catch (err) {
        showToast(err.message, "error");
      }
    };

    document.getElementById("switchToLogin").onclick = (e) => {
      e.preventDefault();
      openAuthModal("login");
    };

  } else {
    // Login Modal
    modalBody.innerHTML = `
      <div class="auth-modal-content">
        <h2 style="font-size:1.6rem; margin-bottom:0.4rem;" class="highlight">Injira mu Konti y'Umunyeshuri</h2>
        <p style="font-size:0.9rem; margin-bottom:1.5rem;">Shyiramo email n'ijambo ry'ibanga wiyandikishijeho.</p>

        <!-- Quick Demo Account Button -->
        <div style="background:rgba(0, 163, 224, 0.12); border:1px dashed var(--rw-blue); padding:0.85rem; border-radius:var(--radius-md); margin-bottom:1.25rem; display:flex; align-items:center; justify-content:space-between;">
          <div>
            <strong style="font-size:0.88rem; color:var(--rw-blue); display:block;">Instant Demo Login:</strong>
            <span style="font-size:0.8rem; color:var(--text-muted);">mugisha@drive.rw / password123</span>
          </div>
          <button class="btn btn-sm btn-accent" id="quickDemoBtn2">One-Click Login</button>
        </div>

        <form id="studentLoginForm">
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="loginEmail" class="form-input" placeholder="mugisha@drive.rw" value="mugisha@drive.rw" required>
          </div>

          <div class="form-group">
            <label class="form-label">Ijambo ry'Ibanga (Password)</label>
            <input type="password" id="loginPassword" class="form-input" placeholder="password123" value="password123" required>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width:100%; margin-top:0.5rem;">Kwinjira mu Konti</button>
        </form>

        <div style="text-align:center; margin-top:1.25rem; font-size:0.88rem;">
          <span>Ntabwo uriyandikisha? </span>
          <a href="#" id="switchToRegister" style="color:var(--accent-emerald); font-weight:700; text-decoration:underline;">Kora Konti Nshya (Register)</a>
        </div>
      </div>
    `;

    document.getElementById("studentLoginForm").onsubmit = (e) => {
      e.preventDefault();
      try {
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        loginStudent(email, password);
        showToast("Mwariyingire neza!", "success");
        closeAuthModal();
        renderAuthNav();
        setupAuthBanner();
      } catch (err) {
        showToast(err.message, "error");
      }
    };

    document.getElementById("quickDemoBtn2").onclick = () => {
      try {
        loginStudent("mugisha@drive.rw", "password123");
        showToast("Mwinjiye nka Mugisha Jean Paul (Demo Account).", "success");
        closeAuthModal();
        renderAuthNav();
        setupAuthBanner();
      } catch (err) {
        showToast(err.message, "error");
      }
    };

    document.getElementById("switchToRegister").onclick = (e) => {
      e.preventDefault();
      openAuthModal("register");
    };
  }
}

export function closeAuthModal() {
  const modalContainer = document.getElementById("modalContainer");
  if (modalContainer) {
    modalContainer.classList.add("hidden");
  }
}
