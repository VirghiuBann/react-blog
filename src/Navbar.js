import React from 'react';

function Navbar() {
  return (
    <div className='navbar'>
      <h2>Blog</h2>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/create'>New Blog</a>
      </div>
    </div>
  );
}

export default Navbar;
