import React from 'react';
import { Link } from 'react-router-dom';
import Vacination from '../components/dashboard/Vacination';

// redux
import { useSelector } from 'react-redux';

const TodaysVaccination = () => {
  const { vaccinations } = useSelector((store) => store.childern);

  return (
    <>
      <div
        style={{
          display: 'flex',
          margin: 30,
          marginLeft: 20,
        }}
      >
        <Link
          to="/dashboard"
          style={{
            color: '#333333',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: 14,
            borderBottom: '1px solid #333333',
          }}
        >
          <i className="fa-solid fa-arrow-left-long"></i> &nbsp;Back To
          Dashboard
        </Link>
      </div>
      <div>
        {vaccinations.map((data) => (
          <Vacination data={data} key={data._id} />
        ))}
      </div>
    </>
  );
};

export default TodaysVaccination;
