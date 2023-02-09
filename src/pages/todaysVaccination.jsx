import React from 'react';
import { Link } from 'react-router-dom';
import Vacination from '../components/dashboard/Vacination';

// redux
import { useSelector } from 'react-redux';

const TodaysVaccination = () => {
  const { vaccinations } = useSelector((store) => store.childern);

  console.log(vaccinations);

  return (
    <>
      <div>
        <Link to="/dashboard">
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
