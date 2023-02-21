import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/components/TodaysVaccination.module.css';
import { updateVaccination } from '../../redux/childern/childernSlice';
import { toast } from 'react-toastify';

const Vacination = ({ data }) => {
  const { hospital } = useSelector((store) => store.hospital);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [disable, setDisable] = useState(false);

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

  const handleSendEmail = async () => {
    setDisable(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URI}/api/send-mail`,
        data,
        {
          headers: {
            Authorization: `Bearer ${hospital.token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      dispatch(updateVaccination(data._id));
      notifySuccess('Mail send successfully.');
    } catch (error) {
      notifyError('Cannot send mail. Try after sometime.');
      console.log(error);
    }
    setDisable(false);
  };

  return (
    <div className={styles.vaccine_container}>
      <Link
        to={`/dashboard/children/${data._id}`}
        onClick={() => navigate(`/dashboard/children/${data.childernId}`)}
      >
        <em>Reg. No. {data._id}</em>
      </Link>
      <h3>{data.childernName}</h3>
      <p>
        Mother Name: <strong>{data.motherName}</strong>
      </p>
      <p>
        Phone No.: <a href={`tel:+91${data.phone}`}>{data.phone}</a>
      </p>
      <p>
        Email: <a href={`mailto:${data.email}`}>{data.email}</a>
      </p>
      <p>
        Vaccinated:{' '}
        <strong
          style={{
            color: data.vaccinationStatus ? '#068943' : 'red',
            fontWeight: 500,
          }}
        >
          {data.vaccinationStatus ? 'true' : 'false'}
        </strong>
      </p>
      <div className={styles.buttons}>
        {!data.mailed && (
          <button onClick={handleSendEmail}>
            {disable ? 'Sending...' : 'Send Email'}
          </button>
        )}
        {data.mailed && <button className={styles.mailed}>Mail Sended</button>}
        <Link to={`/dashboard/children/${data._id}`} target="_blank">
          View Profile
        </Link>
      </div>
      {/* <table>
        <tr>
          <tr>
            <td style={{ color: '#e31212' }}>
              <i class="fa-solid fa-syringe"></i> {data.name} |
            </td>
            <td>{data.vaccinationDate} | </td>
            <td
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              {data.vaccinationStatus ? (
                <div className={styles.completed}></div>
              ) : (
                <div className={styles.incompleted}></div>
              )}
            </td>
          </tr>
        </tr>
      </table> */}
    </div>
  );
};

export default Vacination;
