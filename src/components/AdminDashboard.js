import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, Link } from '@mui/material';

const styles = {
  navLinks: {
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
  links: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    margin: '15px',
  },
};

function AdminDashboard() {
  return (
    <div>
      <AppBar position='static'>
        <CssBaseline />
        <Toolbar>
          <div style={styles.navLinks}>
            <Link href='#' underline='always' style={styles.links}>
              Manage RSVPs
            </Link>
            <Link href='#' style={styles.links}>
              My Dogs
            </Link>
            <Link href='#' style={styles.links}>
              Donations
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AdminDashboard;
