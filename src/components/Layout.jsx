import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { actionTypes, useStateValue } from '../utils/store';
import Cookies from 'js-cookie';
import axios from 'axios';
import styles from '../../src/styles/components/Layout.module.css';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const [{ user }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const sampleRequest = async () => {
  //     await axios
  //       .post(
  //         'https://vaccination-scheduler.herokuapp.com/vaccineScheduler/api/v1/hospital/login',
  //         {
  //           hospital_registration: 'XC10258513211',
  //           hospital_password: 'sarvesh',
  //         }
  //       )
  //       .then((res) => console.log(res.data));
  //   };

  //   sampleRequest();
  // }, []);

  const logoutHandle = async () => {
    Cookies.remove('HospitalAdmin');
    dispatch({ type: actionTypes.SET_USER, user: null });

    navigate('/');
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.header}>
          <a href="/">
            <img src="/images/logo.svg" alt="logo" />
          </a>
          <i
            className={
              open
                ? `fa-solid fa-xmark ${styles.hamburger}`
                : `fa-solid fa-bars-staggered ${styles.hamburger}`
            }
            onClick={() => {
              setOpen(!open);
            }}
          ></i>
        </div>
        <div
          className={
            open
              ? `${styles.nav_container} ${styles.active}`
              : `${styles.nav_container}`
          }
        >
          {user ? (
            <div className={styles.button_container}>
              <button
                className={styles.symbol_button}
                onClick={() => navigate('/dashboard')}
              >
                <i className={`fa-solid fa-user ${styles.button_icon} `}></i>
                <a href="/dashboard">Dashboard</a>
              </button>
              <button className={styles.button_filled} onClick={logoutHandle}>
                <i
                  className={`fa-solid fa-arrow-right-from-bracket ${styles.button_icon} `}
                  style={{ marginRight: '10px' }}
                ></i>
                Logout
              </button>
            </div>
          ) : (
            <div className={styles.button_container}>
              <button onClick={() => navigate('/login')}>
                <a href="/login" onClick={() => setOpen(false)}>
                  Login
                </a>
              </button>
              <button
                className={styles.button_filled}
                onClick={() => navigate('/register')}
              >
                <a href="/register" onClick={() => setOpen(false)}>
                  Register
                </a>
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        <p>&copy; 2022 | Baby Vaccination Scheduler</p>
      </footer>
    </div>
  );
};

export default Layout;
