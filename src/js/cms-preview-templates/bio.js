import React from 'react';

const BioPreview = ({ entry, widgetFor }) => {

  const name = entry.getIn(['data', 'title']);
  const position = entry.getIn(['data', 'subtitle']);
  const portrait = entry.getIn(['data', 'image'])
  const body = widgetFor('body');

  return <div className="bg-off-white pb4">

    <div className="section-off-white">
      <div className='mw6 center'>
        <h1 className='f2 lh-title mb2'>{ name }</h1>
        <h2 className='f4 lh-title'>{ position }</h2>
      </div>
    </div>

    <div className="section-white">
      <div className='mw6 center'>
        <img className='db center h5 object-cover mb3 box-shadow' src={ portrait } />
        <div className='cms'>{ body }</div>
      </div>
    </div>

  </div>;
};

export default BioPreview;
