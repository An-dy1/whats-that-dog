import React from 'react';
import '@fontsource/oswald';
import { Typography } from '@mui/material';

const styles = {
  headlineContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2.5rem',
  },
  headlineContent: {
    margin: '0 auto',
    padding: '1rem',
  },
  subHeadContent: {
    margin: '0 auto',
    padding: '1rem',
    fontFamily: 'Oswald',
  },
};

export default function Headline(props) {
  return (
    <div style={styles.headlineContainer}>
      <h1 style={styles.headlineContent}>
        <Typography variant='h3'>{props.title}</Typography>
      </h1>

      <Typography variant='h6' style={styles.subHeadContent}>
        {props.subhead}
      </Typography>
    </div>
  );
}
