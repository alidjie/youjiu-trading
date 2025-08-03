import { createContext } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  company?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  currentUser: null,
  login: () => {},
  logout: () => {},
});