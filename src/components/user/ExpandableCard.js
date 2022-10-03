import React, { useState } from 'react';
import './ExpandableCard.css';
import userIcon from '../resources/user.png';

export default function ExpandableCard() {
  const [cardIsExpanded, setCardIsExpanded] = useState(false);

  function handleExpandClick(event) {
    setCardIsExpanded(!cardIsExpanded);
  }

  return (
    <div style={{ height: cardIsExpanded ? '12vh' : '36vh' }}>
      <div className='expandable-card'>
        <div role='button' class='expand-card-button'>
          <div className='card-icon'>
            <img src={userIcon} alt='user icon' width='80' height='80' />
          </div>
          <div className='card-content'>
            <div className='title'>View Photos</div>
            <div className='subtitle'>A collection of photos of Wesley.</div>
          </div>
          <div className='expand'>
            <button onClick={handleExpandClick}>Expand me</button>
          </div>
        </div>
      </div>
      <div
        className='expanded-content'
        style={{ visibility: cardIsExpanded ? 'visible' : 'hidden' }}
      >
        <p>Hello</p>
      </div>
    </div>
  );
}
