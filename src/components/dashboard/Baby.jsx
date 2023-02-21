import axios from 'axios';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  deleteChildren,
  deleteVaccinations,
} from '../../redux/childern/childernSlice';
import styles from '../../styles/components/Baby.module.css';

const Baby = ({ data }) => {
  const { hospital } = useSelector((store) => store.hospital);
  const dispatch = useDispatch();

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

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URI}/api/children/${data._id}`,
        {
          headers: {
            Authorization: `Bearer ${hospital.token}`,
          },
        }
      );
      dispatch(deleteChildren(data._id));
      dispatch(deleteVaccinations(data._id));
      notifySuccess(response.data.message);
    } catch (error) {
      notifyError('Cannot delete children. Try again leter.');
    }
  };

  return (
    <div className={styles.baby}>
      <b className={styles.regno}>Reg. No. {data._id}</b>
      <Link to={`/dashboard/children/edit/${data._id}`}>
        <i className={`fa-solid fa-pen-to-square ${styles.edit_icon}`}></i>
      </Link>
      <div className={styles.image_container}>
        <b>Reg. No. {data._id}</b>
        <img src="/images/child.png" alt={data.babyName} />
      </div>
      <div className={styles.information}>
        <h2>{data.babyName}</h2>
        <p>
          <span>Mother Name</span> <strong> {data.motherName}</strong>
        </p>
        <p>
          <span>Father Name</span> <strong> {data.fatherName}</strong>
        </p>
        <p>
          <span>Weight</span> <strong> {data.weight}</strong>
        </p>
        <p>
          <span>Gender</span> <strong> {data.gender}</strong>
        </p>
        <p>
          <span>Blood Group</span> <strong> {data.bloodGroup}</strong>
        </p>
        <p>
          <div>
            <i className="fa-solid fa-calendar-day"></i>
            <span> Date Of Birth</span>
          </div>
          <strong> {data.dateOfBirth}</strong>
        </p>
        <a href={`tel:+91${data.phone}`}>
          <div>
            <i className="fa-solid fa-phone"></i>
            <span> Phone Number</span>
          </div>
          <strong>{data.phone}</strong>
        </a>
        <a href={`mailto:${data.email}`}>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <span> Email</span>
          </div>
          <strong>{data.email}</strong>
        </a>
      </div>
      <div className={styles.button_container}>
        <button>
          <Link to={`/dashboard/children/${data._id}`} target="_blank">
            View Profile
          </Link>
        </button>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Delete Profile
        </button>
      </div>
    </div>
  );
};

export default Baby;
