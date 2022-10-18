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

// todo next with this component:
// responsiveness: change breakpoints - especially the cutoff to just show one image
// style 'expand me' button and pin it to the right hand side of the card somehow
// make image clickable - when clicked, a larger image pops up on the screen
// save images in the database and make an API call for them

const responsive = {
  superLargeDesktop: {
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
        <div class='expandable-card-collapsed'>
          <div className='card-icon'>
            <img src={userIcon} alt='user icon' width='80' height='80' />
          </div>
          <div className='card-content'>
            <div className='title'>View Photos</div>
            <div className='subtitle'>A collection of photos of Wesley.</div>
          </div>
          <div className='expand'>
            <button onClick={handleExpandClick}>
              {cardIsExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
        </div>
        {cardIsExpanded && (
          <div>
            <Carousel
              responsive={responsive}
              itemClass='carousel-image-container'
            >
              <div>
                <img
                  class='carousel-image'
                  src={wesley1}
                  alt='Wesley hanging out'
                />
              </div>
              <div>
                <img
                  class='carousel-image'
                  src={wesley2}
                  alt='Wesley hanging out'
                />
              </div>
              <div>
                <img
                  class='carousel-image'
                  src={wesley3}
                  alt='Wesley hanging out'
                />
              </div>
              <div>
                <img
                  class='carousel-image'
                  src={wesley1}
                  alt='Wesley hanging out'
                />
              </div>
              <div>
                <img
                  class='carousel-image'
                  src={wesley4}
                  alt='Wesley hanging out'
                />
              </div>
              <div>
                <img
                  class='carousel-image'
                  src={wesley5}
                  alt='Wesley hanging out'
                />
              </div>
              <div>
                <img
                  class='carousel-image'
                  src={wesley6}
                  alt='Wesley hanging out'
                />
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
