import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const styles = {
  navStyles: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkStyles: {
    margin: '0 2rem',
    textDecoration: 'none',
  },
};

export default function Navigation() {
  return (
    <div>
      <nav style={styles.navStyles}>
        <Link style={styles.linkStyles} to='/'>
          Home
        </Link>

        <Link style={styles.linkStyles} to='/rsvp'>
          RSVP
        </Link>
        <Link style={styles.linkStyles} to='/guess'>
          Guess
        </Link>
        <Link style={styles.linkStyles} to='/donate'>
          Donate
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
