import React from 'react';

export default function Headline(props) {
  return (
    <div id='headline'>
      <h1>{props.title}</h1>
      <h3>{props.subhead}</h3>
    </div>
  );
}
