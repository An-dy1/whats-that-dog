import React, { useEffect, useState } from 'react';
import '@fontsource/source-sans-pro';
import { Button } from '@mui/material';
const axios = require('axios').default;

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
  const [currentGuest, setCurrentGuest] = useState(null);
  const [primaryComing, setPrimaryComing] = useState(null);
  const [secondaryComing, setSecondaryComing] = useState(null);
  const [submittedRSVP, setSubmittedRSVP] = useState(null);

  const handleNameInput = (e) => {
    let input = e.target.value;
    e.target.id === 'firstName' ? setFirstName(input) : setLastName(input);
  };

  const fetchGuestList = async () => {
    let guests = await fetch(`${api_url}/guests`)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
    setGuestList(guests);
  };

  useEffect(() => {
    fetchGuestList();
  }, [submittedRSVP]);

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

  const updateGuestRSVP = () => {
    let updateObject = {};

    if (primaryComing === true) {
      updateObject.isComing = true;
    }

    if (primaryComing === false) {
      console.log(`primaryComing is false`);
      updateObject.isComing = false;
    }

    if (secondaryComing === true) {
      updateObject.plusOneIsComing = true;
    }

    if (secondaryComing === false) {
      console.log(`secondaryComing is false `);
      updateObject.plusOneIsComing = false;
    }

    axios
      .post(`${api_url}/guests/${currentGuest._id}`, updateObject)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // todo: combine some of these into a "resetForm" method
    setFoundRsvp(null);
    setFirstName('');
    setLastName('');
    setSubmittedRSVP(true);
    setCurrentGuest(null);
  };

  const handleRsvpFormChange = (e) => {
    switch (e.target.value) {
      case 'primaryComing':
        setPrimaryComing(true);
        break;
      case 'primaryNotComing':
        setPrimaryComing(false);
        break;
      case 'secondaryComing':
        setSecondaryComing(true);
        break;
      case 'secondaryNotComing':
        setSecondaryComing(false);
        break;
      default:
        console.log('nothing to update');
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
                <label htmlFor='primaryGuestResponse'>Coming:</label>
                {/* todo: improvement - Names and values could be better, more succinct? */}
                <input
                  type='radio'
                  name='primaryComing'
                  value='primaryComing'
                  defaultChecked={currentGuest.isComing === true}
                />
                <label htmlFor='primaryGuestResponse'>Not Coming:</label>
                <input
                  type='radio'
                  name='primaryComing'
                  value='primaryNotComing'
                  // note: cannot just use `!primaryComing` because null will also cause this to be checked
                  defaultChecked={currentGuest.isComing === false}
                />
              </div>
            </span>

            {currentGuest.plusOne && (
              <span>
                <p>
                  {currentGuest.plusOneDetails.firstName}{' '}
                  {currentGuest.plusOneDetails.firstName}
                </p>
                <div id='rsvpForm' onChange={handleRsvpFormChange}>
                  <label htmlFor='secondaryGuestResponse'>Coming:</label>
                  {/* todo: improvement - Names and values could be better, more succinct? */}
                  <input
                    type='radio'
                    name='secondaryComing'
                    value='secondaryComing'
                    defaultChecked={currentGuest.plusOneIsComing === true}
                  />
                  <label htmlFor='secondaryGuestResponse'>Not Coming:</label>
                  <input
                    type='radio'
                    name='secondaryComing'
                    value='secondaryNotComing'
                    // note: cannot just use `!primaryComing` because null will also cause this to be checked
                    defaultChecked={currentGuest.plusOneIsComing === false}
                  />
                </div>
              </span>
            )}

            <div style={styles.rsvpcontent}>
              <Button
                style={styles.rsvpButton}
                variant='outlined'
                onClick={updateGuestRSVP}
              >
                Submit RSVP
              </Button>
            </div>
          </div>
        )}
        {foundRsvp === false && <p> Sorry, we can 't find you in the list</p>}
        {submittedRSVP === true && currentGuest === null && (
          <p>Thank you for submitting your RSVP!</p>
        )}
      </div>
    </div>
  );
}
