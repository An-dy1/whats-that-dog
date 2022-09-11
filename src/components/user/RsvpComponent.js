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
  const [primaryComing, setPrimaryComing] = useState(null);

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

    for (let i = 0; i < guestList.length; i++) {
      if (
        guestList[i].firstName.toLowerCase() === firstName.toLowerCase() &&
        guestList[i].lastName.toLowerCase() === lastName.toLowerCase()
      ) {
        isInGuestList = true;
        setCurrentGuest(guestList[i]);
      }
    }
    isInGuestList ? setFoundRsvp(true) : setFoundRsvp(false);
  };

  const handleRsvpFormChange = (e) => {
    if (e.target.value === 'primaryComing') {
      console.log('primary is coming');
      setPrimaryComing(true);
    } else if (e.target.value === 'primaryNotComing') {
      console.log('primary is not coming');
      setPrimaryComing(false);
    } else if (e.target.value === 'secondaryComing') {
      console.log('secondary is coming');
    }
  };

  // todo after that: maybe break RSVP Info into a separate component
  return (
    <div style={styles.container}>
      <h3 style={styles.rsvpcontent}> Find your RSVP </h3>
      <div style={styles.rsvpcontent}>
        <label htmlFor='firstName'> First name: </label>{' '}
        <input
          onChange={handleNameInput}
          id='firstName'
          type='text'
          value={firstName || ''}
        ></input>{' '}
      </div>
      <div style={styles.rsvpcontent}>
        <label htmlFor='lastName'> Last name: </label>{' '}
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
            <p> Found your RSVP! Guests: </p>
            <span>
              <p>
                {currentGuest.firstName} {currentGuest.lastName}
              </p>
              <div id='rsvpForm' onChange={handleRsvpFormChange}>
                <label for='primaryGuestResponse'>Coming:</label>
                {/* todo: improvement - Names and values could be better, more succinct? */}
                <input
                  type='radio'
                  name='primaryComing'
                  value='primaryComing'
                  defaultChecked={primaryComing}
                />
                <label for='primaryGuestResponse'>Not Coming:</label>
                <input
                  type='radio'
                  name='primaryComing'
                  value='primaryNotComing'
                  // note: cannot just use `!primaryComing` because null will also cause this to be checked
                  defaultChecked={primaryComing === false}
                />
              </div>
            </span>

            {currentGuest.plusOne && (
              <span>
                <p>
                  {currentGuest.plusOneDetails.firstName}
                  {currentGuest.plusOneDetails.firstName}
                </p>
                <div id='rsvpForm' onChange={handleRsvpFormChange}>
                  <label for='secondaryGuestResponse'>Coming:</label>
                  {/* todo: improvement - Names and values could be better, more succinct? */}
                  <input
                    type='radio'
                    name='secondaryComing'
                    value='secondaryComing'
                    // defaultChecked={primaryComing}
                  />
                  <label for='secondaryGuestResponse'>Not Coming:</label>
                  <input
                    type='radio'
                    name='secondaryComing'
                    value='secondaryNotComing'
                    // note: cannot just use `!primaryComing` because null will also cause this to be checked
                    // defaultChecked={primaryComing === false}
                  />
                </div>
              </span>
            )}
          </div>
        )}
        {foundRsvp === false && <p> Sorry, we can 't find you in the list</p>}
      </div>
    </div>
  );
}
