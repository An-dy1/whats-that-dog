import React, { useEffect, useState } from 'react';
import data from '../../static/guests.json';

const api_url = 'http://localhost:5001';

export default function RsvpComponent(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [foundRsvp, setFoundRsvp] = useState(null);
  const [guestList, setGuestList] = useState([]);

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
      }
    }
    isInGuestList ? setFoundRsvp(true) : setFoundRsvp(false);
  };

  // todo next: add styling to this component
  // todo after that: maybe break RSVP Info into a separate component
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

      <div>
        {foundRsvp && <p>Found your RSVP!</p>}
        {foundRsvp === false && <p>Sorry, we can't find you in the list</p>}
      </div>
    </div>
  );
}
