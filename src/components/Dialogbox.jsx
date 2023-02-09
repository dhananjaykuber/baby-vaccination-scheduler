import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Dialogbox.module.css';

const Dialogbox = ({ open, setOpen, data }) => {
  const [regno, setRegno] = useState(data.regno);
  const [babyName, setBabyName] = useState(data.babyName);
  const [motherName, setMotherName] = useState(data.motherName);
  const [fatherName, setFatherName] = useState(data.fatherName);
  const [weight, setWeight] = useState(data.weight);
  const [gender, setGender] = useState(data.gender);
  const [bloodGroup, setBloodGroup] = useState(data.bloodGroup);
  const [dob, setDob] = useState(data.dob);
  const [contact, setContact] = useState(data.contact);
  const [email, setEmail] = useState(data.email);

  const handleOpenCloseDialog = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setBabyName(data.babyName);
    setMotherName(data.motherName);
    setFatherName(data.fatherName);
    setWeight(data.weight);
    setBloodGroup(data.bloodGroup);
    setGender(data.gender);
    setDob(data.dob);
    setContact(data.contact);
    setEmail(data.email);
  }, [open]);

  return (
    <>
      <div
        className={open ? `${styles.dialog} ${styles.opened}` : styles.dialog}
      >
        <div className={styles.dialog_content}>
          <i className="fa-solid fa-xmark" onClick={handleOpenCloseDialog}></i>
          <h3>Edit</h3>
          <strong>Reg. No. {regno}</strong>
          <div className={styles.field}>
            <label htmlFor="babyName">Baby Name</label>
            <input
              type="text"
              id="babyName"
              value={babyName}
              onChange={(e) => setBabyName(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="motherName">Mother Name</label>
            <input
              type="text"
              id="motherName"
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="fatherName">Father Name</label>
            <input
              type="text"
              id="fatherName"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="bloodGroup">Blood Group</label>
            <input
              type="text"
              id="bloodGroup"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact">Contact No.</label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.button_container}>
            <button>Save</button>
            <button onClick={handleOpenCloseDialog}>Close</button>
          </div>
        </div>
        <div
          className={styles.dialog_mask}
          onClick={handleOpenCloseDialog}
        ></div>
      </div>
    </>
  );
};

export default Dialogbox;
