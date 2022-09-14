import React from 'react';
import '@fontsource/source-sans-pro';
import { Typography } from '@mui/material';

const styles = {
  headlineContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2.5rem',
    paddingBottom: '0.75rem',
  },
  headlineContent: {
    margin: '0 auto',
    padding: '1rem',
  },
  subHeadContent: {
    margin: '0 auto',
    padding: '1rem',
    fontFamily: 'Source Sans Pro',
  },
};

export default function Headline(props) {
  return (
    <div style={styles.headlineContainer}>
      <div style={styles.headlineContent}>
        <Typography variant='h3'> {props.title} </Typography>{' '}
      </div>
      <Typography variant='h6' style={styles.subHeadContent}>
        {' '}
        {props.subhead}{' '}
      </Typography>{' '}
    </div>
  );
}
