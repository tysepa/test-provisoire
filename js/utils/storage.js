// DriveRwanda - LocalStorage Persistence Wrapper

const KEYS = {
  CURRENT_USER: "driverwanda_current_user",
  USERS_DB: "driverwanda_registered_students",
  EXAM_HISTORY: "driverwanda_exam_history",
  LESSON_PROGRESS: "driverwanda_lesson_progress",
  LANGUAGE: "driverwanda_pref_lang"
};

// Seed default sample student account if empty
export function initStorage() {
  const users = getUsers();
  if (!users || users.length === 0) {
    const demoUser = {
      id: "std_demo_001",
      fullName: "Mugisha Jean Paul",
      email: "mugisha@drive.rw",
      phone: "+250 788 123 456",
      category: "B",
      passwordHash: "password123",
      createdAt: new Date().toISOString()
    };
    saveUsers([demoUser]);
  }
}

export function getUsers() {
  try {
    const data = localStorage.getItem(KEYS.USERS_DB);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Storage error:", e);
    return [];
  }
}

export function saveUsers(users) {
  localStorage.setItem(KEYS.USERS_DB, JSON.stringify(users));
}

export function registerStudent(studentData) {
  const users = getUsers();
  const existing = users.find(u => u.email.toLowerCase() === studentData.email.toLowerCase());
  if (existing) {
    throw new Error("Email match registered user. Mwatsinzwe kwiyandikisha kuko iyi email isanzwe ikoreshwa.");
  }
  const newUser = {
    id: "std_" + Date.now(),
    fullName: studentData.fullName,
    email: studentData.email.toLowerCase(),
    phone: studentData.phone,
    category: studentData.category || "B",
    passwordHash: studentData.password,
    createdAt: new Date().toISOString()
  };
  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);
  return newUser;
}

export function loginStudent(email, password) {
  const users = getUsers();
  const user = users.find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === password
  );
  if (!user) {
    throw new Error("Email cyangwa ijambo ry'ibanga siko riri (Invalid email or password).");
  }
  setCurrentUser(user);
  return user;
}

export function getCurrentUser() {
  try {
    const data = localStorage.getItem(KEYS.CURRENT_USER);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

export function setCurrentUser(user) {
  if (!user) {
    localStorage.removeItem(KEYS.CURRENT_USER);
  } else {
    localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user));
  }
}

export function logoutUser() {
  localStorage.removeItem(KEYS.CURRENT_USER);
}

// Exam History Tracking
export function saveExamResult(result) {
  const currentUser = getCurrentUser();
  if (!currentUser) return;

  const history = getExamHistory();
  const entry = {
    id: "exam_" + Date.now(),
    userId: currentUser.id,
    date: new Date().toISOString(),
    score: result.score,
    total: result.total,
    percentage: Math.round((result.score / result.total) * 100),
    passed: result.score >= Math.ceil(result.total * 0.8), // 80% pass mark
    durationSeconds: result.durationSeconds,
    category: result.category || "Official Simulation"
  };

  history.push(entry);
  localStorage.setItem(KEYS.EXAM_HISTORY, JSON.stringify(history));
  return entry;
}

export function getExamHistory() {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser) return [];
    const data = localStorage.getItem(KEYS.EXAM_HISTORY);
    const all = data ? JSON.parse(data) : [];
    return all.filter(item => item.userId === currentUser.id);
  } catch (e) {
    return [];
  }
}

// Preferred Language
export function getStoredLang() {
  return localStorage.getItem(KEYS.LANGUAGE) || "rw";
}

export function setStoredLang(lang) {
  localStorage.setItem(KEYS.LANGUAGE, lang);
}
