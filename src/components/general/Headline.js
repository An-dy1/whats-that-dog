import React from 'react';
import '@fontsource/source-sans-pro';
import { Typography } from '@mui/material';
import './Headline.css';

// maintaining MUI style overrides as inline styles
const styles = {
  subHeadContentMui: {
    margin: '0 auto',
    padding: '1rem',
    fontFamily: 'Source Sans Pro',
  },
};

export default function Headline(props) {
  return (
    <div className='HeadlineContainer'>
      <div className='HeadlineContent'>
        <Typography variant='h3'> {props.title} </Typography>
      </div>
      <Typography variant='h6' style={styles.subHeadContentMui}>
        {props.subhead}
      </Typography>
    </div>
  );
}
