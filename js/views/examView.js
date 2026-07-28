// DriveRwanda Live Exam Simulator Engine (Ikizamini Simulator)

import { QUESTION_BANK } from "../data/questionBank.js";
import { saveExamResult } from "../utils/storage.js";
import { getLang, t } from "../i18n.js";
import { renderResultsView } from "./resultsView.js";

let examQuestions = [];
let currentQuestionIndex = 0;
let studentAnswers = {};
let timerInterval = null;
let secondsRemaining = 20 * 60; // 20 minutes countdown
let isExamActive = false;

export function renderExamView() {
  if (!isExamActive) {
    return renderExamStartScreen();
  }

  const q = examQuestions[currentQuestionIndex];
  const lang = getLang();
  const selectedOptIndex = studentAnswers[q.id];

  return `
    <div class="exam-container" style="max-width:900px; margin:0 auto;">
      
      <!-- Top Exam Header (Progress & Live Timer) -->
      <div class="card" style="margin-bottom:1.5rem; padding:1.25rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
        <div>
          <span class="badge badge-emerald" style="margin-bottom:0.3rem;">Ikizamini cy'Icyarabu (Official Simulation)</span>
          <h3 style="font-size:1.1rem;">Ikibazo cya ${currentQuestionIndex + 1} / ${examQuestions.length}</h3>
        </div>

        <div class="timer-widget" id="examTimerWidget">
          ⏱️ <span id="timerDisplay">20:00</span>
        </div>
      </div>

      <!-- Question Number Navigator Pills -->
      <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:1.5rem; background:var(--bg-surface); padding:0.85rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        ${examQuestions.map((item, idx) => {
          const isAnswered = studentAnswers[item.id] !== undefined;
          const isCurrent = idx === currentQuestionIndex;
          let btnClass = "btn-secondary";
          if (isCurrent) btnClass = "btn-accent";
          else if (isAnswered) btnClass = "btn-primary";
          
          return `
            <button 
              class="btn btn-sm ${btnClass} nav-pill-btn" 
              data-idx="${idx}"
              style="min-width:36px; padding:0.3rem 0.6rem; font-weight:700;">
              ${idx + 1}
            </button>
          `;
        }).join("")}
      </div>

      <!-- Main Question Card -->
      <div class="card" style="padding:2rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem;">
          <span class="badge badge-blue">${q.category.toUpperCase()}</span>
          <span style="font-size:0.8rem; color:var(--text-muted);">Points: 1.0</span>
        </div>

        <h2 style="font-size:1.35rem; line-height:1.4; margin-bottom:1.5rem; color:var(--text-main);">
          ${q.question[lang] || q.question.rw}
        </h2>

        <!-- Interactive Answer Options -->
        <div class="quiz-options">
          ${(q.options[lang] || q.options.rw).map((optText, optIdx) => {
            const isSelected = selectedOptIndex === optIdx;
            const letter = String.fromCharCode(65 + optIdx);

            return `
              <div class="option-card ${isSelected ? 'selected' : ''}" data-opt-idx="${optIdx}">
                <div class="option-letter">${letter}</div>
                <div class="option-text">${optText}</div>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <!-- Bottom Action Buttons -->
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <button class="btn btn-secondary" id="prevQuestionBtn" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
          &larr; Ikibazo Wambere (Previous)
        </button>

        ${currentQuestionIndex === examQuestions.length - 1 ? `
          <button class="btn btn-primary btn-lg" id="finishExamBtn">
            🏁 Rangiza Ikizamini (Submit Test)
          </button>
        ` : `
          <button class="btn btn-accent" id="nextQuestionBtn">
            Ikibazo Gikurikira (Next) &rarr;
          </button>
        `}
      </div>

    </div>
  `;
}

function renderExamStartScreen() {
  return `
    <div style="max-width:760px; margin:2rem auto; text-align:center;">
      <div class="card" style="padding:3rem 2rem;">
        <div style="font-size:3.5rem; margin-bottom:1rem;">🚦</div>
        <h1 class="highlight" style="margin-bottom:0.75rem;">Ikizamini cy'Igerageza (Official Simulator)</h1>
        <p style="font-size:1.05rem; color:var(--text-muted); margin-bottom:2rem; line-height:1.6;">
          Ugiye gukora ikizamini kirimo ibibazo 20 bijyanye n'amategeko y'omu handa mu Rwanda. 
          Igipimo cyo gutsinda ni <strong>16/20 (80%)</strong> mu gihe cy'<strong>iminota 20</strong>.
        </p>

        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem; margin-bottom:2.5rem; background:var(--bg-dark); padding:1.25rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted);">Ibibazo (Questions)</div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--accent-emerald);">20</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted);">Iminota (Time limit)</div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--rw-blue);">20 Min</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted);">Amanota yo Gutsinda</div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--accent-amber);">16 / 20</div>
          </div>
        </div>

        <button class="btn btn-primary btn-lg" id="startExamNowBtn" style="padding:1rem 2.5rem; font-size:1.15rem;">
          🚀 Tangiye Ikizamini Sasa (Start Test)
        </button>
      </div>
    </div>
  `;
}

export function setupExamEvents() {
  const startBtn = document.getElementById("startExamNowBtn");
  if (startBtn) {
    startBtn.onclick = () => {
      startNewExam();
    };
    return;
  }

  // Option selection
  document.querySelectorAll(".option-card").forEach(card => {
    card.addEventListener("click", () => {
      const optIdx = parseInt(card.getAttribute("data-opt-idx"), 10);
      const q = examQuestions[currentQuestionIndex];
      studentAnswers[q.id] = optIdx;

      // Re-render to show active selection
      const mainContent = document.getElementById("mainContent");
      if (mainContent) {
        mainContent.innerHTML = renderExamView();
        setupExamEvents();
      }
    });
  });

  // Nav pills
  document.querySelectorAll(".nav-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentQuestionIndex = parseInt(btn.getAttribute("data-idx"), 10);
      refreshExamView();
    });
  });

  // Prev / Next
  const prevBtn = document.getElementById("prevQuestionBtn");
  const nextBtn = document.getElementById("nextQuestionBtn");
  const finishBtn = document.getElementById("finishExamBtn");

  if (prevBtn) {
    prevBtn.onclick = () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        refreshExamView();
      }
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      if (currentQuestionIndex < examQuestions.length - 1) {
        currentQuestionIndex++;
        refreshExamView();
      }
    };
  }

  if (finishBtn) {
    finishBtn.onclick = () => {
      if (confirm("Wizera ko utanze ibisubizo byose? Ugiye gusoza ikizamini.")) {
        finishExam();
      }
    };
  }
}

function startNewExam() {
  // Select 20 questions (or all available if question pool is slightly smaller)
  const pool = [...QUESTION_BANK];
  // duplicate or cycle if needed to form 20 items
  let selected = [];
  while (selected.length < 20) {
    selected = selected.concat(pool);
  }
  examQuestions = selected.slice(0, 20);

  currentQuestionIndex = 0;
  studentAnswers = {};
  secondsRemaining = 20 * 60;
  isExamActive = true;

  refreshExamView();
  startTimer();
}

function refreshExamView() {
  const mainContent = document.getElementById("mainContent");
  if (mainContent) {
    mainContent.innerHTML = renderExamView();
    setupExamEvents();
    updateTimerDisplay();
  }
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    secondsRemaining--;
    updateTimerDisplay();

    if (secondsRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Iminota 20 y'ikizamini irarangiye! Ugiye kubona amanota yawe.");
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const display = document.getElementById("timerDisplay");
  const widget = document.getElementById("examTimerWidget");
  if (!display || !widget) return;

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  if (secondsRemaining <= 180) { // last 3 mins
    widget.className = "timer-widget danger";
  } else if (secondsRemaining <= 300) { // last 5 mins
    widget.className = "timer-widget warning";
  } else {
    widget.className = "timer-widget";
  }
}

function finishExam() {
  if (timerInterval) clearInterval(timerInterval);
  isExamActive = false;

  // Calculate score
  let score = 0;
  examQuestions.forEach(q => {
    if (studentAnswers[q.id] === q.correctIndex) {
      score++;
    }
  });

  const durationSeconds = (20 * 60) - secondsRemaining;
  const resultData = {
    score,
    total: examQuestions.length,
    durationSeconds,
    questions: examQuestions,
    studentAnswers
  };

  saveExamResult(resultData);

  // Render results view directly
  const mainContent = document.getElementById("mainContent");
  if (mainContent) {
    mainContent.innerHTML = renderResultsView(resultData);
  }
}
