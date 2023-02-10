import React, { useState } from 'react';
import Popup from '../components/Popup';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/components/Form.module.css';

// redux
import { useDispatch } from 'react-redux';
import { setHospital } from '../redux/hospital/hospitalSlice';

const Login = () => {
  // redux
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const [data, setData] = useState({
    regNo: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (data.regNo.length <= 0 || data.password.length <= 0) {
      setMessage('Registration number and Password must not be empty.');
      setOpen(true);
    } else if (data.regNo.length !== 13) {
      setMessage('Registration number must be exactly 13 characters long.');
      setOpen(true);
    } else if (data.password.length < 7) {
      setMessage('Password must be at least 7 characters long.');
      setOpen(true);
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
        setMessage(error.response.data.error);
        setOpen(true);
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

      <Popup open={open} setOpen={setOpen} message={message} />
    </div>
  );
};

export default Login;
