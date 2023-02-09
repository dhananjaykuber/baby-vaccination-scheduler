import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/pages/Dashboard.module.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState('All Childrens');
  const [showNavigation, setShowNavigation] = useState(false);

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
                navigate('/dashboard/all-childrens');
              }}
            >
              All Childrens
            </li>
            <li
              className={active === 'Add new children' && styles.active}
              onClick={() => {
                setActive('Add new children');
                setShowNavigation(!showNavigation);
                navigate('/dashboard/register-children');
              }}
            >
              Add new children
            </li>
            <li
              className={active === 'Todays Vaccination' && styles.active}
              onClick={() => {
                setActive('Todays Vaccination');
                setShowNavigation(!showNavigation);
                navigate('/dashboard/todays-vaccination');
              }}
            >
              Todays Vaccination
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
