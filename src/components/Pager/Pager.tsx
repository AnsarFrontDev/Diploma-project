import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Pager.scss';

const Pager = () => {
  const navigate = useNavigate();
  return (
    <div className="pager">
      <button onClick={() => navigate(-1)}> &laquo; </button>
      <Link className='active' to="/"> 1 </Link>
      <Link className='active' to="/lesson-2"> 2 </Link>
      <Link className='active' to="/lesson-3"> 3 </Link>
      <Link className='active' to="/lesson-4"> 4 </Link>
      <Link className='active' to="/lesson-5"> 5 </Link>
      <Link className='active' to="/lesson-6"> 6 </Link>
      <button onClick={() => navigate(1)}> &raquo; </button>
    </div>
  );
};

export default Pager;
