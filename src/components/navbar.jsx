import React from 'react';

const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-light nbg-light'>
      <a className='navbar-brand' href='#a'>
        Navbar
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
