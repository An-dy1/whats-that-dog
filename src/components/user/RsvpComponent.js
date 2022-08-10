import React, { useState } from 'react';
import data from '../../static/guests.json';

export default function RsvpComponent(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNameInput = (e) => {
    let input = e.target.value;
    e.target.id === 'firstName' ? setFirstName(input) : setLastName(input);
  };

  const handleFindRSVPClick = (e) => {
    e.preventDefault();
    let values = Object.values(data.data);
    console.log(values[0].firstName);
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
    </div>
  );
}
