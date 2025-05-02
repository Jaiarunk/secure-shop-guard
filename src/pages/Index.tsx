
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the homepage
    navigate('/');
  }, [navigate]);
  
  return null; // This won't be rendered as we immediately redirect
};

export default Index;
