import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import AllChildrens from './pages/allChildrens';
import RegisterChildrens from './pages/registerChildrens';
import TodaysVaccination from './pages/todaysVaccination';
import Profile from './pages/profile';
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getHospitalInformation } from './redux/hospital/hospitalSlice';
import { setChildrens, setVaccinations } from './redux/childern/childernSlice';

function App() {
  const dispatch = useDispatch();
  const { hospital } = useSelector((store) => store.hospital);

  useEffect(() => {
    dispatch(getHospitalInformation());
  }, []);

  useEffect(() => {
    const getChildrens = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URI}/api/children/`,
          {
            headers: {
              Authorization: `Bearer ${hospital.token}`,
            },
          }
        );

        dispatch(setChildrens(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    getChildrens();

    const getVaccinations = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URI}/api/vaccination/get-todays-vaccination`,
          {
            headers: {
              Authorization: `Bearer ${hospital.token}`,
            },
          }
        );

        console.log(response.data);

        dispatch(setVaccinations(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    getVaccinations();
  }, [hospital]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/all-childrens" element={<AllChildrens />} />
          <Route
            path="/dashboard/register-children"
            element={<RegisterChildrens />}
          />
          <Route
            path="/dashboard/todays-vaccination"
            element={<TodaysVaccination />}
          />
          <Route path="/dashboard/children/:regno" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
