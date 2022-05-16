import React, { useState } from 'react';
import { actionTypes, useStateValue } from '../utils/store';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/components/Form.module.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [regno, setRegno] = useState('');
  const [password, setPassword] = useState('');

  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await axios
      .post(
        'https://vaccination-scheduler.herokuapp.com/vaccineScheduler/api/v1/hospital/login',
        {
          hospital_registration: regno,
          hospital_password: password,
        }
      )
      .then((res) => {
        Cookies.set('HospitalAdmin', res.data.hospital_id);
        dispatch({ type: actionTypes.SET_USER, user: res.data.hospital_id });
        navigate('/dashboard');
        console.log(res.data.hospital_id);
      });
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
            value={regno}
            onChange={(e) => setRegno(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <div className={styles.password_field}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
