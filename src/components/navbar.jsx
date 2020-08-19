import React from 'react';

const NavBar = ({ totalCounters }) => {
  console.log('navbar rendered');
  //cannot use life cycle hooks in stateless funct components
  //because we have a single function that returns the output of the component
  //need to use classes
  return (
    <nav className='navbar navbar-light nbg-light'>
      <a className='navbar-brand' href='#'>
        Navbar{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
