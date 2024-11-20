import React, { createContext, useState, useEffect } from 'react';

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Local state to track login status

  useEffect(() => {
    // Check if token exists in localStorage on mount
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token); // Store token in localStorage
    setIsLoggedIn(true); // Update login state
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, setIsLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
