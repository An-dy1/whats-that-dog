import React from 'react';
import './ExpandableCard.css';
import userIcon from '../resources/user.png';

export default function ExpandableCard() {
  return (
    <div className='expandable-card'>
      <div role='button' class='expand-card-button'>
        <div className='icon'>
          <img src={userIcon} alt='user icon' width='80' height='80' />
        </div>
        <div className='card-content'>
          <div className='title'>A title</div>
          <div className='sub-title'>
            A subtitle with some extra words in it.
          </div>
        </div>
      </div>
    </div>
  );
}
