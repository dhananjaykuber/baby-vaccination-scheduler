import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import formStyles from '../styles/components/Form.module.css';

const EditChildren = () => {
  const { hospital } = useSelector((store) => store.hospital);

  const { id } = useParams();

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

  const notifySuccess = (message) => {
    toast.success(message, {
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

  useEffect(() => {
    const getChildren = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URI}/api/children/${id}`,
          {
            headers: {
              Authorization: `Bearer ${hospital.token}`,
            },
          }
        );

        setData({
          motherName: response.data.motherName,
          fatherName: response.data.fatherName,
          childernName: response.data.childernName,
          dateOfBirth: response.data.dateOfBirth,
          weight: response.data.weight,
          gender: response.data.gender,
          phone: response.data.phone,
          email: response.data.email,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      getChildren();
    }
  }, []);

  const updateChildren = async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URI}/api/children/${id}`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${hospital.token}`,
          },
        }
      );

      console.log(response.data);

      notifySuccess(response.data.message);
    } catch (error) {
      notifyError('Cannot update data. Try again later.');
    }
  };

  return (
    <>
      <div className={formStyles.navigate}>
        <Link to="/dashboard/all-childrens">
          <i className="fa-solid fa-arrow-left-long"></i> &nbsp;Back To All
          Childrens
        </Link>
      </div>
      <div className={formStyles.page}>
        <div className={formStyles.form}>
          <h1>Update Information</h1>
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
          <button onClick={updateChildren}>Update Information</button>
        </div>
      </div>
    </>
  );
};

export default EditChildren;
