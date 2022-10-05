import React, { useState } from 'react';
import './ExpandableCard.css';
import userIcon from '../resources/user.png';
import wesley1 from '../resources/wesley/Wesley.jpg';
import wesley2 from '../resources/wesley/Wesley2.jpg';
import wesley3 from '../resources/wesley/Wesley3.jpg';
import wesley4 from '../resources/wesley/Wesley4.jpg';
import wesley5 from '../resources/wesley/Wesley5.jpg';
import wesley6 from '../resources/wesley/Wesley6.jpg';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function ExpandableCard() {
  const [cardIsExpanded, setCardIsExpanded] = useState(false);

  function handleExpandClick(event) {
    setCardIsExpanded(!cardIsExpanded);
  }

  return (
    <div className='expandable-card-container'>
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
        <div
          style={{
            height: cardIsExpanded ? 'auto' : 0,
            visibility: cardIsExpanded ? 'visible' : 'hidden',
            margin: cardIsExpanded ? '30px' : 0,
          }}
        >
          <Carousel responsive={responsive}>
            <div class='carousel-image-container'>
              <img
                class='carousel-image'
                src={wesley1}
                alt='Wesley hanging out'
              />
            </div>
            <div class='carousel-image-container'>
              <img
                class='carousel-image'
                src={wesley2}
                alt='Wesley hanging out'
              />
            </div>
            <div class='carousel-image-container'>
              <img
                class='carousel-image'
                src={wesley3}
                alt='Wesley hanging out'
              />
            </div>
            <div class='carousel-image-container'>
              <img
                class='carousel-image'
                src={wesley1}
                alt='Wesley hanging out'
              />
            </div>
            <div class='carousel-image-container'>
              <img
                class='carousel-image'
                src={wesley4}
                alt='Wesley hanging out'
              />
            </div>
            <div class='carousel-image-container'>
              <img
                class='carousel-image'
                src={wesley5}
                alt='Wesley hanging out'
              />
            </div>
            <div class='carousel-image-container'>
              <img
                class='carousel-image'
                src={wesley6}
                alt='Wesley hanging out'
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
