import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navigation.css';

const styles = {
  linkStyles: {
    margin: '0 2rem',
    textDecoration: 'none',
  },
};

export default function Navigation() {
  return (
    <div>
      <nav className='Navigation'>
        <div className='NavLink'>
          <Link style={styles.linkStyles} to='/'>
            Home
          </Link>
        </div>
        <div className='NavLink'>
          <Link style={styles.linkStyles} to='/rsvp'>
            RSVP
          </Link>
        </div>
        <div className='NavLink'>
          <Link style={styles.linkStyles} to='/guess'>
            Guess
          </Link>
        </div>
        <div className='NavLink'>
          <Link style={styles.linkStyles} to='/donate'>
            Donate
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
