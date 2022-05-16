import React, { useState } from 'react';
import AllBabies from '../components/dashboard/AllBabies';
import RegisterBaby from '../components/dashboard/RegisterBaby';
import TodaysVaccination from '../components/dashboard/TodaysVaccination';
import ScheduleVaccination from '../components/dashboard/ScheduleVaccination';
import styles from '../styles/pages/Dashboard.module.css';

const Dashboard = () => {
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
          <i className="fa-solid fa-angles-down"></i>
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
            <li
              className={active === 'Schedule Vaccination' && styles.active}
              onClick={() => {
                setActive('Schedule Vaccination');
                setShowNavigation(!showNavigation);
              }}
            >
              Schedule Vaccination
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
        ) : active === 'Schedule Vaccination' ? (
          <ScheduleVaccination />
        ) : (
          <AllBabies />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
