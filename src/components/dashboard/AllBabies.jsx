import React, { useState } from 'react';
import styles from '../../styles/components/AllBabies.module.css';
import Baby from './Baby';

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

const options = [
  { key: 'regno', value: 'Reg. No.' },
  { key: 'babyName', value: "Baby's Name" },
  { key: 'motherName', value: "Mother's Name" },
  { key: 'fatherName', value: "Father's Name" },
  { key: 'contact', value: 'Contact No.' },
  { key: 'email', value: 'Email' },
];

const AllBabies = () => {
  const [option, setOption] = useState('regno');
  const [search, setSearch] = useState('');

  return (
    <div>
      <div className={styles.search}>
        <div className={styles.input_container}>
          <select
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}
          >
            {options.map((option) => (
              <option value={option.key} key={option.key}>
                {option.value}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Type to search"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      <div className={styles.babies_container}>
        {data
          .filter((data) => {
            return option === 'regno'
              ? data.regno.toLowerCase().includes(search)
              : option === 'babyName'
              ? data.babyName.toLowerCase().includes(search)
              : option === 'motherName'
              ? data.motherName.toLowerCase().includes(search)
              : option === 'fatherName'
              ? data.fatherName.toLowerCase().includes(search)
              : option === 'contact'
              ? data.contact.toLowerCase().includes(search)
              : option === 'email'
              ? data.email.toLowerCase().includes(search)
              : data.regno.toLowerCase().includes(search);
          })
          .map((data) => (
            <Baby data={data} key={data.regno} />
          ))}
      </div>
    </div>
  );
};

export default AllBabies;

/* 

Mother's Name
Father's Name
Baby's Name
DOB
Contact No.
Email

*/
