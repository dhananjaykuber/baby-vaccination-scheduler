import React, { useState } from 'react';
import Baby from '../components/dashboard/Baby';
import { Link } from 'react-router-dom';
import styles from '../styles/components/AllBabies.module.css';

// redux
import { useSelector } from 'react-redux';

const AllChildrens = () => {
  const { childerns } = useSelector((store) => store.childern);

  const [option, setOption] = useState('regno');
  const [search, setSearch] = useState('');

  const options = [
    { key: 'regno', value: 'Reg. No.' },
    { key: 'babyName', value: "Baby's Name" },
    { key: 'motherName', value: "Mother's Name" },
    { key: 'fatherName', value: "Father's Name" },
    { key: 'contact', value: 'Contact No.' },
    { key: 'email', value: 'Email' },
  ];

  return (
    <div className={styles.allBabies}>
      <div className={styles.back_button}>
        <Link to="/dashboard">
          <i className="fa-solid fa-arrow-left-long"></i> &nbsp;Back To
          Dashboard
        </Link>
      </div>
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
        {childerns
          // .filter((data) => {
          //   return option === 'regno'
          //     ? data.regNo.toLowerCase().includes(search)
          //     : option === 'babyName'
          //     ? data.babyName.toLowerCase().includes(search)
          //     : option === 'motherName'
          //     ? data.motherName.toLowerCase().includes(search)
          //     : option === 'fatherName'
          //     ? data.fatherName.toLowerCase().includes(search)
          //     : option === 'contact'
          //     ? data.phone.toLowerCase().includes(search)
          //     : option === 'email'
          //     ? data.email.toLowerCase().includes(search)
          //     : data.regNo.toLowerCase().includes(search);
          // })
          .map((data) => (
            <Baby data={data} key={data._id} />
          ))}
      </div>
    </div>
  );
};

export default AllChildrens;
