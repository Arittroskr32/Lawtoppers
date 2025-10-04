import React, { useEffect, useState, createContext, useContext } from 'react';
type User = {
  email: string;
  name: string;
  avatar?: string;
};
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);
  // Simple login function that accepts test credentials
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    if (email === 'test@gmail.com' && password === 'test') {
      const user = {
        email: 'test@gmail.com',
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      };
      // Store user in localStorage for persistence
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };
  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // In a real app, this would be an API call to register
    // For this demo, we'll just simulate a successful signup and auto-login
    const user = {
      email,
      name,
      avatar: 'https://randomuser.me/api/portraits/lego/1.jpg' // Default avatar for new users
    };
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    setIsAuthenticated(true);
    return true;
  };
  return <AuthContext.Provider value={{
    user,
    isAuthenticated,
    login,
    logout,
    signup
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};