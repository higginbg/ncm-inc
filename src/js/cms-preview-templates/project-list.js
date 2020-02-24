import React from 'react';
import Jumbotron from './components/jumbotron';

const ProjectsLandingPreview = ({ entry }) => {

  const data = entry.get('data');
  const intro = data.get('intro');
  const main = data.get('main');

  return <div className='bg-debut pb4'>
    <Jumbotron image={ data.get('image') } title={ data.get('title') } />

    <div className='section bg-debut header-shadow relative'>
      <div className='mw6 center'>
        <h1 className='f2 lh-title mb3'>{ intro.get('heading') }</h1>
        <p>{ intro.get('text') }</p>
      </div>
    </div>

    <div className='section bg-white'>
      <div className='mw6 center'>
        <h1 className='f2 lh-title mb3'>{ main.get('heading') }</h1>
        <p>{ main.get('text') }</p>
      </div>
    </div>

  </div>;
};

export default ProjectsLandingPreview;
