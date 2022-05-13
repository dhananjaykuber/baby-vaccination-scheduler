import React, { useState } from 'react';
import styles from '../styles/components/Form.module.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <div className={styles.password_field}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
            />
            {showPassword ? (
              <i
                class="fa-solid fa-eye-slash"
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            ) : (
              <i
                class="fa-solid fa-eye"
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            )}
          </div>
        </div>
        <button>Login</button>
        <p>
          Don't have an account? <a href="/register">Click here to Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
