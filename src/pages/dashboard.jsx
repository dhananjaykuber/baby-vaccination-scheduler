import React from 'react';
import styles from '../styles/pages/Dashboard.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { hospital } = useSelector((store) => store.hospital);

  return (
    <div className={styles.dashboard}>
      <h1>Welcome back! {hospital.name}</h1>
      <h2>Admin Dashboard</h2>
      <ul>
        <li>
          <Link to="/dashboard/all-childrens">
            <i class="fa-sharp fa-solid fa-child-reaching"></i>
            All Childrens
          </Link>
        </li>
        <li>
          <Link to="/dashboard/register-children">
            <i class="fa-solid fa-user-plus"></i>
            Register Children
          </Link>
        </li>
        <li>
          <Link to="/dashboard/todays-vaccination">
            <i class="fa-sharp fa-solid fa-syringe"></i>
            Todays Vaccination
          </Link>
        </li>
        <li>
          <Link to="/dashboard/update-hospital-information">
            <i class="fa-solid fa-file-pen"></i>
            Update Information
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
