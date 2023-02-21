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
import UpdateHospitalInfo from './pages/updateHospitalInfo';

// react toast
import 'react-toastify/dist/ReactToastify.css';
import EditChildren from './pages/editChildren';

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
          <Route path="/" element={hospital ? <Dashboard /> : <Home />} />
          <Route
            path="/register"
            element={hospital ? <Dashboard /> : <Register />}
          />
          <Route path="/login" element={hospital ? <Dashboard /> : <Login />} />
          <Route
            path="/dashboard"
            element={hospital ? <Dashboard /> : <Home />}
          />
          <Route
            path="/dashboard/update-hospital-information"
            element={hospital ? <UpdateHospitalInfo /> : <Home />}
          />
          <Route
            path="/dashboard/all-childrens"
            element={hospital ? <AllChildrens /> : <Home />}
          />
          <Route
            path="/dashboard/children/edit/:id"
            element={hospital ? <EditChildren /> : <Home />}
          />
          <Route
            path="/dashboard/register-children"
            element={hospital ? <RegisterChildrens /> : <Home />}
          />
          <Route
            path="/dashboard/todays-vaccination"
            element={hospital ? <TodaysVaccination /> : <Home />}
          />
          <Route
            path="/dashboard/children/:regno"
            element={hospital ? <Profile /> : <Home />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
