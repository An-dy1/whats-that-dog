import React, { useEffect, useState } from 'react';
import '@fontsource/source-sans-pro';
import { Button } from '@mui/material';
import './RsvpComponent.css';
const axios = require('axios').default;

const api_url = 'http://localhost:5001';

// because I'm using the MUI button element, I have to use inline styles in order
// to override the MUI stylings
const styles = {
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

  const setUserInSession = async () => {
    const user = firstName.toLowerCase() + lastName.toLowerCase();
    const payload = { currentUser: user };

    axios
      .post(`${api_url}/session`, payload, { withCredentials: true })
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const getUserInSession = async () => {
  //   axios
  //     .get(`${api_url}/session`, { withCredentials: true })
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleFindRSVPClick = async (e) => {
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

    if (isInGuestList === true) {
      setFoundRsvp(true);
      await setUserInSession();
    } else {
      setFoundRsvp(false);
    }
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

    resetRsvpForm();
  };

  const resetRsvpForm = () => {
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
    <div className='Container'>
      <h3 className='RsvpContent'> Find your RSVP </h3>
      <div className='RsvpContent'>
        <label htmlFor='firstName'> First name: </label>
        <input
          onChange={handleNameInput}
          id='firstName'
          type='text'
          value={firstName || ''}
        ></input>
      </div>
      <div className='RsvpContent'>
        <label htmlFor='lastName'> Last name: </label>
        <input
          onChange={handleNameInput}
          id='lastName'
          type='text'
          value={lastName || ''}
        ></input>
      </div>
      <div className='RsvpContent'>
        <Button
          style={styles.rsvpButton}
          variant='outlined'
          onClick={handleFindRSVPClick}
        >
          Find RSVP
        </Button>
      </div>
      <div className='RsvpContent'>
        {foundRsvp && (
          <div>
            <p> Found your RSVP!Guests: </p>
            <span>
              <p>
                {currentGuest.firstName} {currentGuest.lastName}
              </p>
              <div id='rsvpForm' onChange={handleRsvpFormChange}>
                <label htmlFor='primaryGuestResponse'> Coming: </label>
                {/* todo: improvement - Names and values could be better, more succinct? */}
                <input
                  type='radio'
                  name='primaryComing'
                  value='primaryComing'
                  defaultChecked={currentGuest.isComing === true}
                />
                <label htmlFor='primaryGuestResponse'> Not Coming: </label>
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
                  {currentGuest.plusOneDetails.firstName}
                  {currentGuest.plusOneDetails.firstName}
                </p>
                <div id='rsvpForm' onChange={handleRsvpFormChange}>
                  <label htmlFor='secondaryGuestResponse'> Coming: </label>
                  {/* todo: improvement - Names and values could be better, more succinct? */}
                  <input
                    type='radio'
                    name='secondaryComing'
                    value='secondaryComing'
                    defaultChecked={currentGuest.plusOneIsComing === true}
                  />
                  <label htmlFor='secondaryGuestResponse'> Not Coming: </label>
                  <input
                    type='radio'
                    name='secondaryComing'
                    value='secondaryNotComing'
                    // note: cannot just use `!plusOneIsComing` because null will also cause this to be checked
                    defaultChecked={currentGuest.plusOneIsComing === false}
                  />
                </div>
              </span>
            )}
            <div className='RsvpContent'>
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
          <p> Thank you for submitting your RSVP! </p>
        )}
      </div>
    </div>
  );
}
