import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const styles = {
  navStyles: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
        <div class='navLink'>
          <Link style={styles.linkStyles} to='/'>
            Home
          </Link>
        </div>

        <div class='navLink'>
          <Link style={styles.linkStyles} to='/rsvp'>
            RSVP
          </Link>
        </div>

        <div class='navLink'>
          <Link style={styles.linkStyles} to='/guess'>
            Guess
          </Link>
        </div>

        <div class='navLink'>
          <Link style={styles.linkStyles} to='/donate'>
            Donate
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
