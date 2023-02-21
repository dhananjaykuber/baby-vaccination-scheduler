import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from '../styles/components/Form.module.css';

// redux
import { useDispatch } from 'react-redux';
import { setHospital } from '../redux/hospital/hospitalSlice';
import { toast } from 'react-toastify';

const Register = () => {
  // redux
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [data, setData] = useState({
    regNo: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const notifyError = (message) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const handleOnRegister = async () => {
    if (
      data.regNo.length <= 0 ||
      data.name.length <= 0 ||
      data.address.length <= 0 ||
      data.phone.length <= 0 ||
      data.email.length <= 0 ||
      data.password.length <= 0
    ) {
      notifyError('Fields must not be empty.');
    } else if (data.regNo.length !== 13) {
      notifyError('Registration number must be exactly 13 characters long.');
    } else if (data.name.length <= 5) {
      notifyError('Hospital name must be more than 6 characters long.');
    } else if (data.address.length <= 5) {
      notifyError('Hospital address must be more than 6 characters long.');
    } else if (data.password.length < 7) {
      notifyError('Password must be at least 7 characters long.');
    } else if (data.phone.length !== 10) {
      notifyError('Contact number must be 10 digits long.');
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URI}/api/hospital/register`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        Cookies.set('HospitalAdmin', JSON.stringify(response.data));
        dispatch(setHospital(response.data));
        navigate('/dashboard');
      } catch (error) {
        notifyError('Cannot create account. Try after sometime');
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.left_container}>
        <h1>Register your hospital</h1>
        <p>
          Register your hospital on Vaccination Scheduler platform which
          provides you a facility to manage vaccination of your patients.
        </p>
        <img src="/images/form.svg" alt="form_svg" />
      </div>

      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="hospital_reg_no">Hosptial Reg. No.</label>
          <input
            type="text"
            id="hospital_reg_no"
            placeholder="Hosptial Reg. No."
            value={data.regNo}
            onChange={(e) => setData({ ...data, regNo: e.target.value })}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="hospital_name">Hosptial Name</label>
          <input
            type="text"
            id="hospital_name"
            placeholder="Hosptial Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="hospital_address">Hosptial Address</label>
          <input
            type="text"
            id="hospital_address"
            placeholder="Hosptial Address"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="hospital_contact">Hosptial Contact No.</label>
          <input
            type="text"
            id="hospital_contact"
            placeholder="Hosptial Contact No."
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="hospital_email">Hosptial Email</label>
          <input
            type="email"
            id="hospital_email"
            placeholder="Hosptial Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <div className={styles.password_field}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            {showPassword ? (
              <i
                className="fa-solid fa-eye-slash"
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye"
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            )}
          </div>
        </div>
        <button onClick={handleOnRegister}>Register</button>
        <p>
          Already have an account? <Link to="/login">Click here to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

/*
Hospital Reg. No.
Name
Address
Contact No.
Email
Doctors Name
*/
