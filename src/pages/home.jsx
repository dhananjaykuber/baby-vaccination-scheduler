import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../utils/store';
import Hero from '../components/Hero';
import Workflow from '../components/Workflow';

const Home = () => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div>
      <Hero />
      <Workflow />
    </div>
  );
};

export default Home;
