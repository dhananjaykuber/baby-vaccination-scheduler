import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from '../styles/pages/Profile.module.css';
import axios from 'axios';

// redux
import { useSelector } from 'react-redux';

const Profile = () => {
  const { hospital } = useSelector((store) => store.hospital);

  const { regno } = useParams();

  const [data, setData] = useState();
  const [vaccination, setVaccination] = useState([]);

  useEffect(() => {
    const getChildren = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/children/${regno}`,
          {
            headers: {
              Authorization: `Bearer ${hospital.token}`,
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getChildren();

    const getVaccination = async () => {
      try {
        const response = await axios(
          `http://localhost:4000/api/vaccination/${regno}`
        );

        setVaccination(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getVaccination();
  }, [regno, hospital]);

  const handleUpdateStatus = async (_id, status) => {
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/vaccination/${_id}`,
        { status: !status, childernId: data._id },
        {
          headers: {
            Authorization: `Bearer ${hospital.token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const tempVaccination = vaccination.map((vaccine) => {
        if (vaccine._id === _id) {
          vaccine.status = !status;
        }
        return vaccine;
      });
      setVaccination(tempVaccination);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.profile_container}>
      {data && (
        <>
          <div className={styles.information_container}>
            <div className={styles.back_button}>
              <Link to="/dashboard/all-childrens">
                <i className="fa-solid fa-arrow-left-long"></i> &nbsp;Back To
                Dashboard
              </Link>
            </div>
            <div className={styles.information_innercontainer}>
              <div className={styles.image_container}>
                <img src="/images/child.png" alt={data.babyName} />
              </div>
              <h3>
                {data.babyName}
                {/* <i className="fa-solid fa-pen-to-square"></i> */}
              </h3>
              <span>Age: 6</span>
              <em>Reg. No. {data._id}</em>
            </div>
            <div className={styles.information}>
              <h4>Information:</h4>
              <p>
                <span>Mother Name:</span>
                <div>
                  <strong> {data.motherName}</strong>
                  {/* <i className="fa-solid fa-pen-to-square"></i> */}
                </div>
              </p>
              <p>
                <span>Father Name:</span>
                <div>
                  <strong> {data.fatherName}</strong>
                  {/* <i className="fa-solid fa-pen-to-square"></i> */}
                </div>
              </p>
              <p>
                <span>Weight:</span>
                <div>
                  <strong> {data.weight}</strong>
                  {/* <i className="fa-solid fa-pen-to-square"></i> */}
                </div>
              </p>
              <p>
                <span>Gender:</span>
                <div>
                  <strong> {data.gender}</strong>
                  {/* <i className="fa-solid fa-pen-to-square"></i> */}
                </div>
              </p>
              <p>
                <span>Blood Group:</span>
                <div>
                  <strong> {data.motherName}</strong>
                  {/* <i className="fa-solid fa-pen-to-square"></i> */}
                </div>
              </p>
              <p>
                <span> Phone Number:</span>
                <div>
                  <a href={`tel:+91${data.phone}`}>{data.phone}</a>
                  {/* <i className="fa-solid fa-pen-to-square"></i> */}
                </div>
              </p>
              <p>
                <span> Email</span>
                <div>
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                  {/* <i className="fa-solid fa-pen-to-square"></i> */}
                </div>
              </p>
            </div>
          </div>

          <div className={styles.vaccination}>
            <h4>Vaccinations</h4>
            <table>
              <tr>
                <th>Vaccine</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
              {vaccination.map((vaccine) => (
                <tr key={vaccine._id}>
                  <td>
                    <i className="fa-solid fa-syringe"></i> {vaccine.name}
                  </td>
                  <td>{vaccine.date}</td>
                  <td>{vaccine.duration}</td>
                  <td
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}
                  >
                    {vaccine.status ? (
                      <div className={styles.completed}></div>
                    ) : (
                      <div className={styles.incompleted}></div>
                    )}
                    {vaccine.status ? (
                      <i
                        className={`fa-solid fa-xmark ${styles.vaccineEdit}`}
                        onClick={() =>
                          handleUpdateStatus(vaccine._id, vaccine.status)
                        }
                      ></i>
                    ) : (
                      <i
                        className={`fa-solid fa-check ${styles.vaccineEdit}`}
                        onClick={() =>
                          handleUpdateStatus(vaccine._id, vaccine.status)
                        }
                      ></i>
                    )}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
