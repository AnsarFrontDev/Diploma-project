import { NavLink, useNavigate } from 'react-router-dom';
import './Pager.scss';

const Pager = () => {
  const navigate = useNavigate();

  return (
    <div className="pager">
      <button onClick={() => navigate(-1)}> &laquo; Prev </button>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'notActive')} to="/">
        1
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'notActive')} to="/lesson-2">
        2
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'notActive')} to="/lesson-3">
        3
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'notActive')} to="/lesson-4">
        4
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'notActive')} to="/lesson-5">
        5
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'notActive')} to="/lesson-6">
        6
      </NavLink>
      <button onClick={() => navigate(1)}> Next &raquo; </button>
    </div>
  );
};

export default Pager;
