import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const PrivateRoute = ({ children }) => {
    const { isAuthenticated, login, logout } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login');
      }
    }, [isAuthenticated, navigate]);
    
    return isAuthenticated ? children : null;
  };