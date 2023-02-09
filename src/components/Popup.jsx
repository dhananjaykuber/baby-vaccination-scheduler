import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Dialogbox.module.css';

const Popup = ({ open, setOpen, message }) => {
  const handleOpenCloseDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={open ? `${styles.dialog} ${styles.opened}` : styles.dialog}
      >
        <div className={styles.dialog_content}>
          <i className="fa-solid fa-xmark" onClick={handleOpenCloseDialog}></i>

          <p>{message}</p>

          <div className={styles.button_container}>
            <button onClick={handleOpenCloseDialog}>OK</button>
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

export default Popup;
