import { createContext, useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const refreshInProgress = useRef(false);
  
  const checkAuth = async () => {
    if (refreshInProgress.current) {
      console.log('Refresh already in progress, skipping...');
      return;
    }

    try {
      refreshInProgress.current = true;
      console.log('Refreshing token in background...');
      const response = await fetch('http://localhost:8080/api/refresh-token', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        console.log('Token refresh successful');
        setIsAuthenticated(true);
      } else {
        console.log('Token refresh failed');
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
    } finally {
      refreshInProgress.current = false;
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const timeoutId = setTimeout(() => {
        checkAuth();
        const intervalId = setInterval(() => {
          checkAuth();
        }, 14 * 60 * 1000);
        
        return () => {
          clearInterval(intervalId);
        };
      }, 14 * 60 * 1000);
      
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isAuthenticated]);
  
  const login = () => {
    setIsAuthenticated(true);
  };
  
  const logout = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        setIsAuthenticated(false);
        navigate('/login');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  
  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      isLoading, 
      login, 
      logout,
      checkAuth
    }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};