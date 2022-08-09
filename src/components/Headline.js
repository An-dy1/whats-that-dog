import React from 'react';

const styles = {
  headlineContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2.5rem',
  },
  titleContent: {
    margin: '0 auto',
    padding: '1rem',
  },
};

export default function Headline(props) {
  return (
    <div style={styles.headlineContainer}>
      <h1 style={styles.titleContent}>{props.title}</h1>
      <h3 style={styles.titleContent}>{props.subhead}</h3>
    </div>
  );
}
