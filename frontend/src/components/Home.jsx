import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('userId'));

    if (!userId?.token) {
      navigate('/login');
    }
  }, [navigate]);

  return <h2>Home</h2>;
};

export default Home;
