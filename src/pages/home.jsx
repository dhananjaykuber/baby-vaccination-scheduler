import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Workflow from '../components/Workflow';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // if (user) {
    //   navigate('/dashboard');
    // }
  }, [navigate]);

  return (
    <div>
      <Hero />
      <Workflow />
    </div>
  );
};

export default Home;
