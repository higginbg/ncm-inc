import React from 'react';

const { useState } = React;

const AboutPreview = ({ entry, getAsset }) => {
  const [image, setImage] = useState('');

  const name = entry.getIn(['data', 'title']);
  const position = entry.getIn(['data', 'subtitle']);
  const body = entry.getIn(['data', 'body']);

  getAsset(entry.getIn(['data', 'image'])).then(path =>
    setImage(path.toString())
  );

  return (
    <div class='mw6 center ph3 pv4'>
      <h1 class='f2 lh-title mb2'>{name}</h1>
      <h2 class='f4 lh-title mb3'>{position}</h2>
      <img src={image} class='h5 object-cover' />
      <div class='cms'>{body}</div>
    </div>
  );
};

export default AboutPreview;
