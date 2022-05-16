import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/TodaysVaccination.module.css';

const Vacination = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.vaccine_container}
      onClick={() => navigate(`/dashboard/${data.regno}`)}
    >
      <em>Reg. No.{data.regno}</em>
      <h3>{data.babyName}</h3>
      <p>
        Mother Name: <strong>{data.motherName}</strong>
      </p>
      <p>
        Contact No.: <a href={`tel:+91${data.contact}`}>{data.contact}</a>
      </p>
      <p>
        Email: <a href={`mailto:${data.email}`}>{data.email}</a>
      </p>
      <table>
        <tr>
          <tr>
            <td style={{ color: '#e31212' }}>
              <i class="fa-solid fa-syringe"></i> Oral Polio Vaccine |
            </td>
            <td>25th May 2022 | </td>
            <td>3 Months | </td>
            <td
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <div className={styles.completed}></div>
            </td>
          </tr>
        </tr>
      </table>
    </div>
  );
};

export default Vacination;
