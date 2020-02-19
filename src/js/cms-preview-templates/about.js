import React from 'react';
import Jumbotron from './components/jumbotron';

const AboutPreview = ({ entry, getAsset }) => {

  const data = entry.getIn(['data']);
  const intro = data.getIn(['intro']);
  const main = data.getIn(['main']);

  return <div className='bg-debut pb4'>

    <Jumbotron image={ data.getIn(['image']) } title={ data.getIn(['title']) } />

    <div className='section bg-debut header-shadow relative'>
      <div className='mw7 center'>
        <h1 className='f2 lh-title mb3'>{ intro.getIn(['heading']) }</h1>
        <p>{ intro.getIn(['text']) }</p>
      </div>
    </div>

    <div className='section bg-white'>
      <div className='mw7 center'>
        <h1 className='f2 lh-title mb3'>{ main.getIn(['heading']) }</h1>
        <p>{ main.getIn(['text']) }</p>

        <div className='flex-ns flex-wrap mhn2-ns mb3'>
          {(main.getIn(['list']) || []).map((slide, i) => <div className='ph2-ns pv2 w-33-m w-50-ns' key={i}>
            <img src={ slide.get('image') } alt={ slide.get('text') } className='center db mb2 h4 object-cover'/>
            <p className='h5 overflow-auto'>{slide.get('text')}</p>
          </div>)}
        </div>
      </div>
    </div>

  </div>;
};

export default AboutPreview;
