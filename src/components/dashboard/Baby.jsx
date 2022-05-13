import React, { useState } from 'react';
import styles from '../../styles/components/Baby.module.css';
import Dialogbox from '../Dialogbox';

const Baby = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.baby}>
      <i
        className={`fa-solid fa-pen-to-square ${styles.edit_icon}`}
        onClick={() => {
          setOpen(true);
          console.log(open);
        }}
      ></i>
      <div className={styles.image_container}>
        <b>Reg. No. {data.regno}</b>
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
          <strong> {data.dob}</strong>
        </p>
        <a href={`tel:+91${data.contact}`}>
          <div>
            <i className="fa-solid fa-phone"></i>
            <span> Phone Number</span>
          </div>
          <strong>{data.contact}</strong>
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
          <a href={`/dashboard/${data.regno}`}>View Profile</a>
        </button>
      </div>

      <Dialogbox open={open} setOpen={setOpen} data={data} />
    </div>
  );
};

export default Baby;

/* 

Mother's Name
Father's Name
Baby's Name
DOB
Contact No.
Email

*/
