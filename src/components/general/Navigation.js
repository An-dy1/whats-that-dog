import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <nav className='Navigation'>
        <div className='navLink'>
          <Link className='Link' to='/'>
            Home
          </Link>
        </div>
        <div className='navLink'>
          <Link className='Link' to='/rsvp'>
            RSVP
          </Link>
        </div>
        <div className='navLink'>
          <Link className='Link' to='/guess'>
            Guess
          </Link>
        </div>
        <div className='navLink'>
          <Link className='Link' to='/donate'>
            Donate
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
