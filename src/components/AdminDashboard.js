import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Grid,
  Card,
  Typography,
  Link,
} from '@mui/material';

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
  cardContainer: {
    maxWidth: '95%',
    margin: '0 auto',
  },
};

function AdminDashboard() {
  return (
    <div>
      <AppBar position='static'>
        <CssBaseline />
        <Toolbar>
          <div style={styles.navLinks}>
            <Link href='#' style={styles.links}>
              Home
            </Link>
            <Link href='#' style={styles.links}>
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
      <Grid container spacing={3} style={styles.cardContainer}>
        <Grid item xs={4}>
          <Card>xs=8</Card>
        </Grid>
        <Grid item xs={4}>
          <Card>xs=4</Card>
        </Grid>
        <Grid item xs={4}>
          <Card>xs=4</Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminDashboard;
