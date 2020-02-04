import React from 'react';

const BioPreview = ({ entry }) => {

  const name = entry.getIn(['data', 'title']);
  const position = entry.getIn(['data', 'subtitle']);
  const portrait = entry.getIn(['data', 'image'])
  const body = entry.getIn(['data', 'body']);

  return (
    <div class='mw6 center ph3 pv4'>
      <h1 class='f2 lh-title mb2'>{ name }</h1>
      <h2 class='f4 lh-title mb3'>{ position }</h2>
      <img class='h5 object-cover mb3' src={ portrait } />
      <div class='cms'>{ body }</div>
    </div>
  );
};

export default BioPreview;
