import React, { useState } from 'react';
import formStyles from '../../styles/components/Form.module.css';

const ScheduleVaccination = () => {
  const [showInformation, setShowInformation] = useState(false);

  return (
    <div>
      <div className={formStyles.form}>
        <h1>Schedule Vaccination</h1>
        <div className={formStyles.field}>
          <label htmlFor="reg_no">Reg. No.</label>
          <input type="text" id="reg_no" placeholder="Reg. No." />
        </div>
        <button onClick={() => setShowInformation(true)}>
          Get information
        </button>

        {showInformation && (
          <>
            <div className={formStyles.field}>
              <label htmlFor="mother_name">Mother's Name</label>
              <input type="text" id="mother_name" placeholder="Mother's Name" />
            </div>
            <div className={formStyles.field}>
              <label htmlFor="father_name">Father's Name</label>
              <input type="text" id="father_name" placeholder="Father's Name" />
            </div>
            <div className={formStyles.field}>
              <label htmlFor="baby_name">Baby's Name</label>
              <input type="text" id="baby_name" placeholder="Baby's Name" />
            </div>
            <div className={formStyles.field}>
              <label htmlFor="birth_date">Date Of Birth</label>
              <input type="text" id="birth_date" placeholder="Date Of Birth" />
            </div>
            <div className={formStyles.field}>
              <label htmlFor="contact_no">Contact No.</label>
              <input type="text" id="contact_no" placeholder="Contact No." />
            </div>
            <div className={formStyles.field}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className={formStyles.field}>
              <label htmlFor="current_date">Today's Date</label>
              <input type="date" id="current_date" placeholder="Current Date" />
            </div>
            <button>Schedule Vaccination</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ScheduleVaccination;
