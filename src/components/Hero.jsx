import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../src/styles/components/Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div id={styles.hero}>
      <div>
        <h1>
          Plan your baby's vaccination with
          <strong> Baby Vaccination Scheduler</strong>
        </h1>
        <p>
          Serving the community with the vaccination planner. Register your
          hospital and schedule vaccination of newborn babies.
        </p>
        <button onClick={() => navigate('/register')}>
          Register Now <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <img src="/images/hero.svg" alt="hero_background" />
    </div>
  );
};

export default Hero;
