import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingScreen from '../common/LoadingScreen';

const TransitionLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Don't show loading screen for register page
    if (location.pathname === '/register') {
      return;
    }

    setIsLoading(true);
    
    // Simulate page transition with a shorter minimum duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading && location.pathname !== '/register') {
    return <LoadingScreen />;
  }

  return children;
};

export default TransitionLayout;