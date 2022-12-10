import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className='d-flex justify-content-between mt-4'>
        <p>Total calories: </p>
        <Link to='/new-meal' className='btn btn-primary'>Add new meal</Link>
      </div>
    </>
  );
};

export default Home;