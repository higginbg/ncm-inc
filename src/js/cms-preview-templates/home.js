  
import React from 'react';
import format from 'date-fns/format';

import Jumbotron from './components/jumbotron';

const section = (data, classes) => <div className={`section ${classes}`}>
  <div className='ph3 mw7 center'>
    <h2 className='f2 lh-title mb2'>{ data.get('heading') }</h2>
    <p className='mw6'>{ data.get('text') }</p>

    <div className='center tc mt4 mw5'>
      <a href='#' className='btn w-100'>{data.get('button')}</a>
    </div>
  </div>
</div>;

const intro = data => <div className='section bg-debut relative header-shadow'>
  <div className='flex-l mhn1-l ph3 center mw7'>
    <h2 className='f2 lh-title mb2 w-40-l'>{ data.get('heading') }</h2>
    <p className='w-60-l mb0'>{ data.get('text') }</p>
  </div>
</div>;

const about = (data, getAsset) => <div className='section bg-white'>
  <div className='ph3 mw7 center'>
    <h2 className='f2 lh-title mb2'>{ data.get('heading') }</h2>
    <p className='mw6'>{ data.get('text') }</p>

    <img src={ data.get('image1') } alt={ data.get('image1') } className='h4 w-100' />

    <div className='center tc mt4 mw5'>
      <a href='#' className='btn w-100'>{data.get('button')}</a>
    </div>
  </div>
</div>;

const projects = projects => <div className='section bg-debut relative footer-shadow-light'>
  <div className='ph3 mw7 center'>
    <h2 className='f2 lh-title mb2'>{projects.get('heading')}</h2>
    <p className='mw6'>{ projects.get('text') }</p>
    {(projects.get('featured') || []).map((project, i) => <div key={i}>
      <p>{ project.get('image') }</p>
    </div>)}

    <div className='center tc mt4 mw5'>
      <a href='#' className='btn w-100'>{ projects.get('button') }</a>
    </div>
  </div>
</div>;


const HomePreview = ({ entry, getAsset }) => {

  const data = entry.get('data');

  return <div className='bg-white'>
    <Jumbotron image={ data.get('image') } title={ data.get('title') } subtitle={ data.get('subtitle') } />

    { intro(data.get('intro')) }

    { about(data.get('about'), getAsset) }

    { projects(data.get('projects')) }

    { section(data.get('testimonials'), 'bg-white') }
  </div>;
};

export default HomePreview;
