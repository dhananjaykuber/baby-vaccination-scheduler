import React from 'react';
import formStyles from '../../styles/components/Form.module.css';

const RegisterBaby = () => {
  return (
    <div>
      <div className={formStyles.form}>
        <h1>Register new baby</h1>
        <div className={formStyles.field}>
          <label htmlFor="mother_name">Mother's Name</label>
          <input type="text" id="mother_name" placeholder="Mother's Name" />
        </div>
        <div className={formStyles.field}>
          <label htmlFor="father_name">Father's Name</label>
          <input type="text" id="father_name" placeholder="Father's Name" />
        </div>
        <div className={formStyles.field}>
          <label htmlFor="baby_name">Child Name</label>
          <input type="text" id="baby_name" placeholder="Baby's Name" />
        </div>
        <div className={formStyles.field}>
          <label htmlFor="date">Date Of Birth</label>
          <input type="date" id="date" />
        </div>
        <div className={formStyles.field}>
          <label htmlFor="weight">Weight</label>
          <input type="text" id="weight" placeholder="Baby's Weight" />
        </div>
        <div className={formStyles.field}>
          <label htmlFor="gender">Gender</label>
          <select id="gender">
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        <div className={formStyles.field}>
          <label htmlFor="contact_no">Contact No.</label>
          <input type="text" id="contact_no" placeholder="Contact No." />
        </div>
        <div className={formStyles.field}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <button>Register</button>
      </div>
    </div>
  );
};

export default RegisterBaby;

/*

gender
weight

*/
