import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AllBabies from '../components/dashboard/AllBabies';
import RegisterBaby from '../components/dashboard/RegisterBaby';
import TodaysVaccination from '../components/dashboard/TodaysVaccination';
import styles from '../styles/pages/Dashboard.module.css';
import { useStateValue } from '../utils/store';

const Dashboard = () => {
  const [active, setActive] = useState('All Childrens');
  const [showNavigation, setShowNavigation] = useState(false);
  const [{ user }, dispatch] = useStateValue();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.navigation_container}>
        <div
          className={styles.navigation_icon}
          onClick={() => setShowNavigation(!showNavigation)}
        >
          Click to {showNavigation ? 'close' : 'open'}
          <i
            className={`fa-solid ${
              showNavigation ? `fa-angles-up` : `fa-angles-down`
            }`}
          ></i>
        </div>
        <div className={styles.navigation}>
          <ul className={showNavigation && styles.show}>
            <li
              className={active === 'All Childrens' && styles.active}
              onClick={() => {
                setActive('All Childrens');
                setShowNavigation(!showNavigation);
              }}
            >
              All Childrens
            </li>
            <li
              className={active === 'Add new children' && styles.active}
              onClick={() => {
                setActive('Add new children');
                setShowNavigation(!showNavigation);
              }}
            >
              Add new children
            </li>
            <li
              className={active === 'Todays Vaccination' && styles.active}
              onClick={() => {
                setActive('Todays Vaccination');
                setShowNavigation(!showNavigation);
              }}
            >
              Todays Vaccination
            </li>
          </ul>
        </div>
      </div>
      <div>
        {active === 'All Childrens' ? (
          <AllBabies />
        ) : active === 'Add new children' ? (
          <RegisterBaby />
        ) : active === 'Todays Vaccination' ? (
          <TodaysVaccination />
        ) : (
          <AllBabies />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
