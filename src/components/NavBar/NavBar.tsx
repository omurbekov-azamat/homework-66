import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary bg-opacity-50">
      <div className="container p-2">
        <NavLink to='/' className='navbar-brand m-0 me-5'>Calories tracker</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;