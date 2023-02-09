import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/components/TodaysVaccination.module.css';

const Vacination = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.vaccine_container}>
      <Link
        to={`/dashboard/children/${data.childernId}`}
        onClick={() => navigate(`/dashboard/children/${data.childernId}`)}
      >
        <em>Reg. No. {data.childernId}</em>
        {/* <h3>{data.babyName}</h3>
      <p>
        Mother Name: <strong>{data.motherName}</strong>
      </p>
      <p>
        Contact No.: <a href={`tel:+91${data.contact}`}>{data.contact}</a>
      </p>
      <p>
        Email: <a href={`mailto:${data.email}`}>{data.email}</a>
      </p> */}
        <table>
          <tr>
            <tr>
              <td style={{ color: '#e31212' }}>
                <i class="fa-solid fa-syringe"></i> {data.name} |
              </td>
              <td>{data.date} | </td>
              <td>{data.duration} | </td>
              <td
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}
              >
                {data.status ? (
                  <div className={styles.completed}></div>
                ) : (
                  <div className={styles.incompleted}></div>
                )}
              </td>
            </tr>
          </tr>
        </table>
      </Link>
    </div>
  );
};

export default Vacination;
