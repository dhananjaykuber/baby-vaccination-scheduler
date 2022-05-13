import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/pages/Profile.module.css';

const childrensData = [
  {
    regno: '250801',
    motherName: 'Yogita Kuber',
    fatherName: 'Narayan Kuber',
    babyName: 'Dhananjay Kuber',
    weight: '7Kg',
    gender: 'Male',
    bloodGroup: 'A+',
    dob: '15/09/2002',
    contact: '9856325410',
    email: 'narayankuber@gmail.com',
  },
  {
    regno: '250802',
    motherName: 'Bharti Suryawanshi',
    fatherName: 'Manoj Suryawanshi',
    babyName: 'Karan Suryawanshi',
    weight: '7Kg',
    gender: 'Male',
    bloodGroup: 'A+',
    dob: '18/04/2022',
    contact: '9356497470',
    email: 'manojmunde23@gmail.com',
  },
  {
    regno: '250803',
    motherName: 'Savita Kulkarni',
    fatherName: 'Prathmesh Patil',
    babyName: 'Samaira Patil',
    weight: '3.5Kg',
    gender: 'Female',
    bloodGroup: 'A+',
    dob: '19/04/2022',
    contact: '6585859696',
    email: 'savitakulkarni@gmail.com',
  },
  {
    regno: '250804',
    motherName: 'Gita More',
    fatherName: 'Appasaheb More',
    babyName: 'Om More',
    weight: '7Kg',
    gender: 'Male',
    bloodGroup: 'A+',
    dob: '11/04/2022',
    contact: '9856565656',
    email: 'appasahebmorepatil12@gmail.com',
  },
  {
    regno: '250805',
    motherName: 'Kshitija Funde',
    fatherName: 'Sambhaji Funde',
    babyName: 'Pratyush Funde',
    weight: '7Kg',
    gender: 'Male',
    bloodGroup: 'A+',
    dob: '11/04/2022',
    contact: '9856565656',
    email: 'pratyush@gmail.com',
  },
  {
    regno: '250806',
    motherName: 'Mira Japkar',
    fatherName: 'Sanjay Japkar',
    babyName: 'Samarth Japkar',
    weight: '2Kg',
    gender: 'Male',
    bloodGroup: 'A+',
    dob: '23/09/2003',
    contact: '9856325410',
    email: 'sanjayjapkar@gmail.com',
  },
];

const Profile = () => {
  const { regno } = useParams();

  const data = childrensData.find((dt) => dt.regno === regno.toString());

  return (
    <div className={styles.profile_container}>
      <div className={styles.information_container}>
        <div className={styles.back_button}>
          <a href="/dashboard">
            <i class="fa-solid fa-arrow-left-long"></i> &nbsp;Back To Dashboard
          </a>
        </div>
        <div className={styles.information_innercontainer}>
          <div className={styles.image_container}>
            <img src="/images/child.png" alt={data.babyName} />
          </div>
          <h3>
            {data.babyName} <i className="fa-solid fa-pen-to-square"></i>
          </h3>
          <span>Age: 6</span>
          <em>Reg. No. {data.regno}</em>
        </div>
        <div className={styles.information}>
          <h4>Information:</h4>
          <p>
            <span>Mother Name:</span>
            <div>
              <strong> {data.motherName}</strong>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          </p>
          <p>
            <span>Father Name:</span>
            <div>
              <strong> {data.fatherName}</strong>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          </p>
          <p>
            <span>Weight:</span>
            <div>
              <strong> {data.weight}</strong>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          </p>
          <p>
            <span>Gender:</span>
            <div>
              <strong> {data.gender}</strong>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          </p>
          <p>
            <span>Blood Group:</span>
            <div>
              <strong> {data.motherName}</strong>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          </p>
          <p>
            <span> Phone Number:</span>
            <div>
              <a href={`tel:+91${data.contact}`}>{data.contact}</a>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          </p>
          <p>
            <span> Email</span>
            <div>
              <a href={`mailto:${data.email}`}>{data.email}</a>
              <i className="fa-solid fa-pen-to-square"></i>
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
          <tr>
            <td>
              <i class="fa-solid fa-syringe"></i> Oral Polio Vaccine
            </td>
            <td>25th May 2022</td>
            <td>3 Months</td>
            <td
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <div className={styles.completed}></div>
              <i
                className={`fa-solid fa-pen-to-square ${styles.vaccineEdit}`}
              ></i>
            </td>
          </tr>
          <tr>
            <td>
              <i class="fa-solid fa-syringe"></i> Oral Polio Vaccine
            </td>
            <td>25th May 2022</td>
            <td>3 Months</td>
            <td
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <div className={styles.incompleted}></div>
              <i
                className={`fa-solid fa-pen-to-square ${styles.vaccineEdit}`}
              ></i>
            </td>
          </tr>
          <tr>
            <td>
              <i class="fa-solid fa-syringe"></i> Oral Polio Vaccine
            </td>
            <td>25th May 2022</td>
            <td>3 Months</td>
            <td
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <div className={styles.incompleted}></div>
              <i
                className={`fa-solid fa-pen-to-square ${styles.vaccineEdit}`}
              ></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Profile;
