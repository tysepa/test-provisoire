import React, { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser, loginStudent, registerStudent, logoutUser, initStorage } from "../utils/storage";
import { sendAdminNotification, ADMIN_EMAIL } from "../utils/emailService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("register");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    initStorage();
    const user = getCurrentUser();
    if (user) setCurrentUser(user);
  }, []);

  const showToast = (message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleRegister = (data) => {
    const user = registerStudent(data);
    setCurrentUser(user);
    setIsAuthModalOpen(false);

    // Send Admin Email Notification to epamarayika@gmail.com
    sendAdminNotification("subscription", user);

    showToast(`Mwariyingire neza! Ubusabe bwawe bwotwojwe kuri admin (${ADMIN_EMAIL}).`, "success");
  };

  const handleLogin = (email, password) => {
    const user = loginStudent(email, password);
    setCurrentUser(user);
    setIsAuthModalOpen(false);
    showToast("Mwariyingire neza!", "success");
  };

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    showToast("Mwazimye konti neza.", "info");
  };

  const openModal = (mode = "register") => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      isLoggedIn: !!currentUser,
      isAuthModalOpen,
      authModalMode,
      openModal,
      closeModal,
      register: handleRegister,
      login: handleLogin,
      logout: handleLogout,
      showToast,
      toast
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
