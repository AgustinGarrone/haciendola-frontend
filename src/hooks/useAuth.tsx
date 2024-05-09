import React, { ReactNode, createContext, useContext } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { DecodeTokenData } from "@/types/auth";

interface AuthProviderProps {
  children: ReactNode;
}

const defaultAuthContext = {
  isAuthenticated: () => false,
  getToken: () => "",
  getUserInfo: () => null as JwtPayload | null,
  logout: () => {},
};

const AuthContext = createContext(defaultAuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp! > currentTime;
    }
    return false;
  };

  const getToken = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      return token;
    }
    return "";
  };

  const getUserInfo = (): DecodeTokenData | null => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const data: DecodeTokenData = {
        name: decodedToken.name || "",
        id: decodedToken.id,
        iat: decodedToken.iat!,
        exp: decodedToken.exp!,
      };
      return data;
    }
    return null;
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
  };

  const authContextValue = {
    isAuthenticated,
    getToken,
    getUserInfo,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
