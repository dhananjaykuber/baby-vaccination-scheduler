import React from 'react';
import styles from '../../styles/components/TodaysVaccination.module.css';
import Vacination from './Vacination';

const data = [
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

const TodaysVaccination = () => {
  return (
    <div>
      {data.map((data) => (
        <Vacination data={data} />
      ))}
    </div>
  );
};

export default TodaysVaccination;
