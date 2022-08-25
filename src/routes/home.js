import React from 'react';
import Headline from '../components/Headline';
import Navigation from '../components/Navigation';

export default function Home() {
  const title = "Wesley's Breed Reveal Party";
  const subHeadline = `The results are in and Wesley is a mix of [REDACTED BREEDS]. We're having a party to celebrate!`;

  return (
    <div>
      <Headline title={title} subhead={subHeadline}></Headline>
      <Navigation />
    </div>
  );
}
