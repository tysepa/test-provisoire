import { QUESTION_BANK } from "../data/questionBank";

const KEYS = {
  CURRENT_USER: "driverwanda_current_user",
  USERS_DB: "driverwanda_registered_students",
  EXAM_HISTORY: "driverwanda_exam_history",
  PAYMENTS: "driverwanda_momo_payments",
  CUSTOM_QUESTIONS: "driverwanda_custom_questions",
  CLIENT_COMMENTS: "driverwanda_client_comments",
  LANGUAGE: "driverwanda_pref_lang"
};

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

  // Pre-seed sample payment for testing admin flow
  const payments = getPayments();
  if (!payments || payments.length === 0) {
    savePayments([
      {
        id: "pay_sample_001",
        studentId: "std_demo_001",
        studentName: "Mugisha Jean Paul",
        studentEmail: "mugisha@drive.rw",
        studentPhone: "+250 788 123 456",
        category: "Category B",
        amountRwf: 80,
        momoNumber: "0788123456",
        momoTxRef: "MoMo Ref: 982173491",
        status: "pending",
        accessCode: null,
        createdAt: new Date(Date.now() - 3600000).toISOString()
      }
    ]);
  }

  // Pre-seed sample client comment for testing admin response flow
  const comments = getComments();
  if (!comments || comments.length === 0) {
    saveComments([
      {
        id: "cmt_001",
        studentId: "std_demo_001",
        studentName: "Mugisha Jean Paul",
        studentEmail: "mugisha@drive.rw",
        commentText: "Muraho, ni ryari icyapa cya STOP gihinduka itegeko mu kizamini?",
        adminResponse: null,
        status: "pending",
        createdAt: new Date(Date.now() - 7200000).toISOString()
      }
    ]);
  }
}

export function getUsers() {
  try {
    const data = localStorage.getItem(KEYS.USERS_DB);
    return data ? JSON.parse(data) : [];
  } catch (e) { return []; }
}

export function saveUsers(users) {
  localStorage.setItem(KEYS.USERS_DB, JSON.stringify(users));
}

export function registerStudent(studentData) {
  const users = getUsers();
  const existing = users.find(u => u.email.toLowerCase() === studentData.email.toLowerCase());
  if (existing) {
    throw new Error("Email match registered user. Iyi email isanzwe ikoreshwa.");
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
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === password);
  if (!user) {
    throw new Error("Email cyangwa ijambo ry'ibanga siko riri.");
  }
  setCurrentUser(user);
  return user;
}

export function getCurrentUser() {
  try {
    const data = localStorage.getItem(KEYS.CURRENT_USER);
    return data ? JSON.parse(data) : null;
  } catch (e) { return null; }
}

export function setCurrentUser(user) {
  if (!user) localStorage.removeItem(KEYS.CURRENT_USER);
  else localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user));
}

export function logoutUser() {
  localStorage.removeItem(KEYS.CURRENT_USER);
}

// Payment Storage
export function getPayments() {
  try {
    const data = localStorage.getItem(KEYS.PAYMENTS);
    return data ? JSON.parse(data) : [];
  } catch (e) { return []; }
}

export function savePayments(payments) {
  localStorage.setItem(KEYS.PAYMENTS, JSON.stringify(payments));
}

export function createPaymentRequest({ studentId, studentName, studentEmail, studentPhone, category, momoNumber, momoTxRef }) {
  const payments = getPayments();
  const newPayment = {
    id: "pay_" + Date.now(),
    studentId,
    studentName,
    studentEmail,
    studentPhone,
    category: category || "Category B",
    amountRwf: 80,
    momoNumber,
    momoTxRef,
    status: "pending",
    accessCode: null,
    createdAt: new Date().toISOString()
  };
  payments.push(newPayment);
  savePayments(payments);
  return newPayment;
}

export function approvePayment(paymentId) {
  const payments = getPayments();
  const index = payments.findIndex(p => p.id === paymentId);
  if (index === -1) throw new Error("Payment request not found.");

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const code = `EXAM-80-${randomNum}`;

  payments[index].status = "approved";
  payments[index].accessCode = code;
  payments[index].approvedAt = new Date().toISOString();

  savePayments(payments);
  return payments[index];
}

export function rejectPayment(paymentId) {
  const payments = getPayments();
  const index = payments.findIndex(p => p.id === paymentId);
  if (index === -1) throw new Error("Payment request not found.");

  payments[index].status = "rejected";
  savePayments(payments);
  return payments[index];
}

export function validateAccessCode(inputCode) {
  const payments = getPayments();
  const codeClean = inputCode.trim().toUpperCase();

  // Admin Master Code Bypass
  if (codeClean === "ADMIN-EPA-MASTER" || codeClean === "EPA123") {
    return { status: "approved", accessCode: codeClean, studentName: "Admin (Tuyisunge Epaphrodis)" };
  }

  const match = payments.find(p => p.status === "approved" && p.accessCode && p.accessCode.toUpperCase() === codeClean);
  return match || null;
}

// Question Management
export function getCustomQuestions() {
  try {
    const data = localStorage.getItem(KEYS.CUSTOM_QUESTIONS);
    return data ? JSON.parse(data) : [];
  } catch (e) { return []; }
}

export function getAllExamQuestions() {
  const custom = getCustomQuestions();
  return [...QUESTION_BANK, ...custom];
}

export function addCustomQuestion(questionData) {
  const questions = getCustomQuestions();
  const newQ = {
    id: "q_custom_" + Date.now(),
    category: questionData.category || "rules",
    question: {
      rw: questionData.questionRw,
      en: questionData.questionEn || questionData.questionRw,
      fr: questionData.questionFr || questionData.questionRw
    },
    options: {
      rw: [questionData.optA, questionData.optB, questionData.optC, questionData.optD],
      en: [questionData.optA, questionData.optB, questionData.optC, questionData.optD],
      fr: [questionData.optA, questionData.optB, questionData.optC, questionData.optD]
    },
    correctIndex: parseInt(questionData.correctIndex, 10),
    explanation: {
      rw: questionData.explanationRw,
      en: questionData.explanationRw,
      fr: questionData.explanationRw
    },
    uploadedAt: new Date().toISOString()
  };
  questions.push(newQ);
  localStorage.setItem(KEYS.CUSTOM_QUESTIONS, JSON.stringify(questions));
  return newQ;
}

export function deleteCustomQuestion(questionId) {
  const questions = getCustomQuestions();
  const filtered = questions.filter(q => q.id !== questionId);
  localStorage.setItem(KEYS.CUSTOM_QUESTIONS, JSON.stringify(filtered));
  return true;
}

// Client Comments & Q&A Storage
export function getComments() {
  try {
    const data = localStorage.getItem(KEYS.CLIENT_COMMENTS);
    return data ? JSON.parse(data) : [];
  } catch (e) { return []; }
}

export function saveComments(comments) {
  localStorage.setItem(KEYS.CLIENT_COMMENTS, JSON.stringify(comments));
}

export function postClientComment({ studentId, studentName, studentEmail, commentText }) {
  const comments = getComments();
  const newCmt = {
    id: "cmt_" + Date.now(),
    studentId,
    studentName,
    studentEmail,
    commentText,
    adminResponse: null,
    status: "pending",
    createdAt: new Date().toISOString()
  };
  comments.push(newCmt);
  saveComments(comments);
  return newCmt;
}

export function respondToComment(commentId, responseText) {
  const comments = getComments();
  const index = comments.findIndex(c => c.id === commentId);
  if (index === -1) throw new Error("Comment not found.");

  comments[index].adminResponse = responseText;
  comments[index].status = "answered";
  comments[index].respondedAt = new Date().toISOString();

  saveComments(comments);
  return comments[index];
}

// Exam History
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
    passed: result.score >= Math.ceil(result.total * 0.8),
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
  } catch (e) { return []; }
}
