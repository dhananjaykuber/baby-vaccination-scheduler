import React, { useState } from 'react';
import Popup from '../components/Popup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import formStyles from '../styles/components/Form.module.css';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setChildrens } from '../redux/childern/childernSlice';

const RegisterChildrens = () => {
  const dispatch = useDispatch();
  const { hospital } = useSelector((store) => store.hospital);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const [data, setData] = useState({
    motherName: '',
    fatherName: '',
    childernName: '',
    dateOfBirth: '',
    weight: '',
    gender: 'Female',
    phone: '',
    email: '',
  });

  const handleOnRegister = async () => {
    if (
      data.motherName.length <= 0 ||
      data.fatherName.length <= 0 ||
      data.dateOfBirth.length <= 0 ||
      data.weight.length <= 0 ||
      data.gender.length <= 0 ||
      data.phone.length <= 0 ||
      data.email.length <= 0
    ) {
      setMessage('Fields must not be empty.');
      setOpen(true);
    } else if (isNaN(data.weight)) {
      setMessage('Children weight must be digit.');
      setOpen(true);
    } else if (data.phone.length !== 10) {
      setMessage('Contact number must be 10 digits long.');
      setOpen(true);
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URI}/api/children/register`,
          data,
          {
            headers: {
              Authorization: `Bearer ${hospital.token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        getChildrens();

        setData({
          motherName: '',
          fatherName: '',
          childernName: '',
          dateOfBirth: '',
          weight: '',
          gender: '',
          phone: '',
          email: '',
        });
        setMessage('Children registered.');
        setOpen(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getChildrens = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URI}/api/children/`,
        {
          headers: {
            Authorization: `Bearer ${hospital.token}`,
          },
        }
      );

      dispatch(setChildrens(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Link to="/dashboard">
          <i className="fa-solid fa-arrow-left-long"></i> &nbsp;Back To
          Dashboard
        </Link>
      </div>
      <div className={formStyles.page}>
        <div className={formStyles.form}>
          <h1>Register new baby</h1>
          <div className={formStyles.field}>
            <label htmlFor="mother_name">Mother's Name</label>
            <input
              type="text"
              id="mother_name"
              placeholder="Mother's Name"
              value={data.motherName}
              onChange={(e) => setData({ ...data, motherName: e.target.value })}
            />
          </div>
          <div className={formStyles.field}>
            <label htmlFor="father_name">Father's Name</label>
            <input
              type="text"
              id="father_name"
              placeholder="Father's Name"
              value={data.fatherName}
              onChange={(e) => setData({ ...data, fatherName: e.target.value })}
            />
          </div>
          <div className={formStyles.field}>
            <label htmlFor="baby_name">Child Name</label>
            <input
              type="text"
              id="baby_name"
              placeholder="Baby's Name"
              value={data.childernName}
              onChange={(e) =>
                setData({ ...data, childernName: e.target.value })
              }
            />
          </div>
          <div className={formStyles.field}>
            <label htmlFor="date">Date Of Birth</label>
            <input
              type="date"
              id="date"
              value={data.dateOfBirth}
              onChange={(e) =>
                setData({ ...data, dateOfBirth: e.target.value })
              }
            />
          </div>
          <div className={formStyles.field}>
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              id="weight"
              placeholder="Baby's Weight"
              value={data.weight}
              onChange={(e) => setData({ ...data, weight: e.target.value })}
            />
          </div>
          <div className={formStyles.field}>
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={data.gender}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div className={formStyles.field}>
            <label htmlFor="contact_no">Contact No.</label>
            <input
              type="text"
              id="contact_no"
              placeholder="Contact No."
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
          <div className={formStyles.field}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <button onClick={handleOnRegister}>Register</button>
        </div>

        <Popup open={open} setOpen={setOpen} message={message} />
      </div>
    </>
  );
};

export default RegisterChildrens;
