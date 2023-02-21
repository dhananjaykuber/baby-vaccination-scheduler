import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';
import styles from '../../src/styles/components/Layout.module.css';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { setHospital } from '../redux/hospital/hospitalSlice';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  // redux
  const dispatch = useDispatch();
  const { hospital } = useSelector((store) => store.hospital);

  const [open, setOpen] = useState(false);

  const logoutHandle = async () => {
    Cookies.remove('HospitalAdmin');
    dispatch(setHospital(null));
    setOpen(false);
    navigate('/');
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.header}>
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
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
          {hospital ? (
            <div className={styles.button_container}>
              <button
                className={styles.symbol_button}
                onClick={() => {
                  setOpen(false);
                  navigate('/dashboard');
                }}
              >
                <i className={`fa-solid fa-user ${styles.button_icon} `}></i>
                <Link to="/dashboard">Dashboard</Link>
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
              <button
                onClick={() => {
                  setOpen(false);
                  navigate('/login');
                }}
              >
                <Link to="/login">Login</Link>
              </button>
              <button
                className={styles.button_filled}
                onClick={() => navigate('/register')}
              >
                <Link to="/register" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className={styles.container}>
        {children}
        <ToastContainer />
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2023 | Baby Vaccination Scheduler</p>
      </footer>
    </div>
  );
};

export default Layout;
