import React, { useState } from 'react';
import formStyle from '../styles/components/Form.module.css';
import { toast } from 'react-toastify';

// redux
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { updateHospital } from '../redux/hospital/hospitalSlice';

const UpdateHospitalInfo = () => {
  // redux
  const { hospital } = useSelector((store) => store.hospital);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: hospital.name,
    address: hospital.address,
    phone: hospital.phone,
    email: hospital.email,
  });

  const [password, setPassword] = useState('');

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

  const handleUpdateInformation = async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URI}/api/hospital/`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${hospital.token}`,
          },
        }
      );
      dispatch(updateHospital(data));
      notifySuccess(response.data.message);
    } catch (error) {
      notifyError('Cannot update data. Try after sometime.');
    }
  };

  const handleUpdatePassword = async () => {
    if (password.length < 7) {
      return notifyError('Password must be 7 character long.');
    }
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URI}/api/hospital/`,
        { password },
        {
          headers: {
            Authorization: `Bearer ${hospital.token}`,
          },
        }
      );

      setPassword('');
      notifySuccess(response.data.message);
    } catch (error) {
      notifyError('Cannot update data. Try after sometime.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'column',
      }}
    >
      <div className={formStyle.form}>
        <h2
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: '#333333',
            borderBottom: '1px solid #333',
            width: 225,
            textTransform: 'uppercase',
          }}
        >
          Update Information
        </h2>
        <div className={formStyle.field}>
          <label htmlFor="">Hospital Name</label>
          <input
            type="text"
            id=""
            placeholder="Hospital Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className={formStyle.field}>
          <label htmlFor="">Hospital Address</label>
          <input
            type="text"
            id=""
            placeholder="Hospital Address"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <div className={formStyle.field}>
          <label htmlFor="">Hosptial Contact No.</label>
          <input
            type="text"
            id=""
            placeholder="Hosptial Contact No."
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <div className={formStyle.field}>
          <label htmlFor="">Hosptial Email</label>
          <input
            type="text"
            id=""
            placeholder="Hosptial Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <button onClick={handleUpdateInformation}>Update Information</button>
      </div>

      <div className={formStyle.form} style={{ marginTop: 30 }}>
        <h2
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: '#333333',
            borderBottom: '1px solid #333',
            width: 204,
            textTransform: 'uppercase',
          }}
        >
          Change Password
        </h2>
        <div className={formStyle.field}>
          <label htmlFor="">Password</label>
          <input
            type="text"
            id=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleUpdatePassword}>Change Password</button>
      </div>
    </div>
  );
};

export default UpdateHospitalInfo;
