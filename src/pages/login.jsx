import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/components/Form.module.css';

// redux
import { useDispatch } from 'react-redux';
import { setHospital } from '../redux/hospital/hospitalSlice';
import { toast } from 'react-toastify';

const Login = () => {
  // redux
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    regNo: '',
    password: '',
  });

  const navigate = useNavigate();

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

  const handleLogin = async () => {
    if (data.regNo.length <= 0 || data.password.length <= 0) {
      notifyError('Fields must not be empty.');
    } else if (data.regNo.length !== 13) {
      notifyError('Registration number must be exactly 13 characters long.');
    } else if (data.password.length < 7) {
      notifyError('Password must be at least 7 characters long.');
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URI}/api/hospital/login`,
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
        notifyError(error.response.data.error);
      }
    }
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.left_container}>
        <h1>Login to your hospital dashboard</h1>
        <p>
          Enter Hospital Reg. No. and Password to login to your hospital
          dashboard
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
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <a href="/register">Click here to Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
