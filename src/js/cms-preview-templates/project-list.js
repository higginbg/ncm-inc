import React from 'react';
import Jumbotron from './components/jumbotron';

const ProjectsLandingPreview = ({ entry }) => {

  const data = entry.getIn(['data']);
  const intro = data.getIn(['intro']);
  const main = data.getIn(['main']);

  return <div className="bg-off-white pb4">
    <Jumbotron image={ data.getIn(['image']) } title={ data.getIn(['title']) } />

    <div className="bg-off-white ph3 pv4">
      <div className='mw6 center'>
        <h1 className='f2 lh-title mb3'>{ intro.getIn(['heading']) }</h1>
        <p>{ intro.getIn(['text']) }</p>
      </div>
    </div>

    <div className="bg-white ph3 pv4">
      <div className='mw6 center'>
        <h1 className='f2 lh-title mb3'>{ main.getIn(['heading']) }</h1>
        <p>{ main.getIn(['text']) }</p>
      </div>
    </div>

  </div>;
};

export default ProjectsLandingPreview;
