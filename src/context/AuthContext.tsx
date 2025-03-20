import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  username: string;
  role: "admin" | "client";
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = (username: string, password: string) => {
    let loggedInUser: User | null = null;
    
    //Call api và check authen tại đây
    if (username === "admin" && password === "admin123") {
      loggedInUser = { username, role: "admin" };
    } else if (username === "client" && password === "client123") {
      loggedInUser = { username, role: "client" };
    }

    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
