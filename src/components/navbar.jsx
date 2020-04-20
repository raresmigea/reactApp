import React, { Component } from 'react';

//we get all the data via props now
//conver the component into -> Stateles functional component
//instead of using a class -> use a function

const NavBar = (props) => {
  return (
    <nav className='navbar navbar-light nbg-light'>
      <a className='navbar-brand' href='#'>
        Navbar{' '}
        <span className='badge badge-pill badge-secondary'>
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
