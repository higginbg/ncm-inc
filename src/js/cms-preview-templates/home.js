  
import React from 'react';
import format from 'date-fns/format';

import Jumbotron from './components/jumbotron';

const classes = 'section bb b--grey-2';


const section = data => {
  const text = data.get('text');
  const btnText = data.get('button');

  return <div className={classes}>
    <div className='ph3 mw7 center'>
      <h2 className='f2 lh-title mb2'>{data.get('heading')}</h2>
      {text && <p className='mw6'>{text}</p>}

      {btnText && <div className='center tc mt4 mw5'>
        <a href='#' className='btn w-100'>{btnText}</a>
      </div>}
    </div>
  </div>;
};

const projects = projects => <div className={classes}>
  <div className='ph3 mw7 center'>
    <h2 className='f2 lh-title mb2'>{projects.get('heading')}</h2>
    <p className='mw6'>{projects.get('text')}</p>
    {(projects.get('featured') || []).map((project, i) => <div key={i}>
      <p>{project.get('image')}</p>
    </div>)}

    <div className='center tc mt4 mw5'>
      <a href='#' className='btn w-100'>{projects.get('button')}</a>
    </div>
  </div>
</div>;


const HomePreview = ({ entry }) => {

  const data = entry.get('data');
  const intro = data.get('intro');

  return <div className='bg-white'>
    <Jumbotron image={data.get('image')} title={data.get('title')} subtitle={data.get('subtitle')}/>

    <div className={classes}>
      <div className='flex-l mhn1-l ph3 center mw7'>
        <h2 className='f2 lh-title mb2 w-40-l'>{intro.get('heading')}</h2>
        <p className='w-60-l mb0'>{intro.get('text')}</p>
      </div>
    </div>

    { section(data.get('about')) }

    { projects(data.get('projects')) }

    { section(data.get('testimonials')) }

  </div>;
};

export default HomePreview;
