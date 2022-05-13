import React from 'react';
import styles from '../styles/components/Workflow.module.css';

const Workflow = () => {
  return (
    <div id={styles.workflow}>
      <h2>How Vaccination Scheduler works?</h2>
      <div className={styles.cards_container}>
        <div className={styles.card}>
          <img src="/images/register.png" alt="register" />
          <h4>Register Hospital</h4>
          <p>Register your hospital on Vaccination Scheduler platform</p>
        </div>

        <div className={styles.card}>
          <img src="/images/baby.png" alt="register" />
          <h4>Register Baby</h4>
          <p>Register baby by entering his/ her parents information</p>
        </div>

        <div className={styles.card}>
          <img src="/images/vaccine.png" alt="register" />
          <h4>Schedule vaccination</h4>
          <p>Schedule baby's vaccination with all the necessary vaccines</p>
        </div>

        <div className={styles.card}>
          <img src="/images/bell.png" alt="register" />
          <h4>Notify Patient</h4>
          <p>Notify baby's parents on the vaccination their dates</p>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
