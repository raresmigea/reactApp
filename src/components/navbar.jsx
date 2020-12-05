import React from 'react';

// we get all data via props now
// conver the component into -> stateles functional component
// instead of using a class -> use a function

const NavBar = ({ totalCounters }) => {
  console.log('Navbar: rendered');
  // can not use life cycle hooks in stateless function components
  // because we have a single function that returns the output of the component
  // need to use classes

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
