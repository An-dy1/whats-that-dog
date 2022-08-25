import React, { useEffect, useState } from 'react';
import '@fontsource/source-sans-pro';
import { Button } from '@mui/material';

const api_url = 'http://localhost:5001';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    color: '#fff',
    backgroundColor: '#422d69',
  },
  rsvpcontent: {
    margin: '0 auto',
    padding: '1rem',
    maxWidth: '40rem',
    fontFamily: 'Source Sans Pro',
  },
  rsvpButton: {
    color: '#fff',
    borderColor: '#fff',
  },
};

export default function RsvpComponent(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [foundRsvp, setFoundRsvp] = useState(null);
  const [guestList, setGuestList] = useState([]);
  const [currentGuest, setCurrentGuest] = useState({});

  const handleNameInput = (e) => {
    let input = e.target.value;
    e.target.id === 'firstName' ? setFirstName(input) : setLastName(input);
  };

  const fetchGuestList = async () => {
    let guests = await fetch(`${api_url}/guests`).then((response) =>
      response.json()
    );
    setGuestList(guests);
  };

  useEffect(() => {
    fetchGuestList();
  }, []);

  const handleFindRSVPClick = (e) => {
    e.preventDefault();
    let isInGuestList;

    for (const guest of guestList.data) {
      if (
        guest.firstName.toLowerCase() === firstName.toLowerCase() &&
        guest.lastName.toLowerCase() === lastName.toLowerCase()
      ) {
        isInGuestList = true;
        setCurrentGuest(guest);
      }
    }
    isInGuestList ? setFoundRsvp(true) : setFoundRsvp(false);
  };

  // todo after that: maybe break RSVP Info into a separate component
  return (
    <div style={styles.container}>
      <h3 style={styles.rsvpcontent}>Find your RSVP</h3>

      <div style={styles.rsvpcontent}>
        <label htmlFor='firstName'>First name: </label>
        <input
          onChange={handleNameInput}
          id='firstName'
          type='text'
          value={firstName || ''}
        ></input>
      </div>

      <div style={styles.rsvpcontent}>
        <label htmlFor='lastName'>Last name: </label>
        <input
          onChange={handleNameInput}
          id='lastName'
          type='text'
          value={lastName || ''}
        ></input>
      </div>

      <div style={styles.rsvpcontent}>
        <Button
          style={styles.rsvpButton}
          variant='outlined'
          onClick={handleFindRSVPClick}
        >
          Find RSVP
        </Button>
      </div>

      <div style={styles.rsvpcontent}>
        {foundRsvp && (
          <div>
            <p>Found your RSVP! Guests:</p>
            <p>
              {currentGuest.firstName} {currentGuest.lastName}
            </p>
            {currentGuest.plusOne && <p>Plus One Placeholder</p>}
          </div>
        )}
        {foundRsvp === false && <p>Sorry, we can't find you in the list</p>}
      </div>
    </div>
  );
}
