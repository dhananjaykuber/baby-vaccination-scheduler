import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { actionTypes, useStateValue } from '../utils/store';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from '../styles/components/Form.module.css';

const Register = () => {
  const navigate = useNavigate();

  const [{ user }, dispatch] = useStateValue();

  const [regno, setRegno] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleOnRegister = async () => {
    setLoading(true);
    await axios
      .post(
        'https://vaccination-scheduler.herokuapp.com/vaccineScheduler/api/v1/hospital/register',
        {
          hospital_registration: regno,
          hospital_name: name,
          hospital_address: address,
          hospital_contact: contact,
          hospital_email: email,
          hospital_password: password,
        }
      )
      .then((res) => {
        Cookies.set('HospitalAdmin', res.data.hospital_id);
        dispatch({ type: actionTypes.SET_USER, user: res.data.hospital_id });
        setLoading(false);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data.error);
        console.log(err);
        setLoading(false);
      });
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
            value={regno}
            onChange={(e) => setRegno(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="hospital_name">Hosptial Name</label>
          <input
            type="text"
            id="hospital_name"
            placeholder="Hosptial Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="hospital_address">Hosptial Address</label>
          <input
            type="text"
            id="hospital_address"
            placeholder="Hosptial Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="hospital_contact">Hosptial Contact No.</label>
          <input
            type="text"
            id="hospital_contact"
            placeholder="Hosptial Contact No."
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="hospital_email">Hosptial Email</label>
          <input
            type="email"
            id="hospital_email"
            placeholder="Hosptial Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button onClick={handleOnRegister} disabled={loading}>
          Register
        </button>
        <p>
          Already have an account? <a href="/login">Click here to Login</a>
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
