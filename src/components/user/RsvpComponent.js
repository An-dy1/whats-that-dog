import React, { useState } from 'react';
import data from '../../static/guests.json';

export default function RsvpComponent(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [foundRsvp, setFoundRsvp] = useState(null);

  const handleNameInput = (e) => {
    let input = e.target.value;
    e.target.id === 'firstName' ? setFirstName(input) : setLastName(input);
  };

  const handleFindRSVPClick = (e) => {
    e.preventDefault();
    let guestList = Object.values(data.data);
    let isInGuestList;

    for (const guest of guestList) {
      if (
        guest.firstName.toLowerCase() === firstName.toLowerCase() &&
        guest.lastName.toLowerCase() === lastName.toLowerCase()
      ) {
        isInGuestList = true;
      }
    }
    isInGuestList ? setFoundRsvp(true) : setFoundRsvp(false);
  };

  return (
    <div>
      <p>Find your RSVP</p>

      <label htmlFor='firstName'>First name:</label>
      <input
        onChange={handleNameInput}
        id='firstName'
        type='text'
        value={firstName || ''}
      ></input>

      <label htmlFor='lastName'>Last name:</label>
      <input
        onChange={handleNameInput}
        id='lastName'
        type='text'
        value={lastName || ''}
      ></input>

      <button onClick={handleFindRSVPClick}>Find RSVP</button>
      {foundRsvp && <p>Found your RSVP!</p>}
      {foundRsvp === false && <p>Sorry, we can't find you in the list</p>}
    </div>
  );
}
