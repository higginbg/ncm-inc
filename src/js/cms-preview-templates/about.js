import React from 'react';
import Jumbotron from './components/jumbotron';

const wrapperClass = 'section bb b--grey-2';
const containerClass = 'mw7 center';

const AboutPreview = ({ entry, getAsset }) => {

  const data = entry.get('data');
  const intro = data.get('intro');
  const main = data.get('main');
  const bios = data.get('people') || [];

  return <div className='bg-white'>

    <Jumbotron image={ data.get('image') } title={ data.get('title') } />

    <div className={wrapperClass}>
      <div className={containerClass}>
        <h1 className='f2 lh-title mb3'>{ intro.get('heading') }</h1>
        <p>{ intro.get('text') }</p>
      </div>
    </div>

    <div className={wrapperClass}>
      <div className={containerClass}>
        <h1 className='f2 lh-title mb3'>{ main.get('heading') }</h1>
        <p>{ main.get('text') }</p>

        <div className='flex-ns flex-wrap mhn2-ns mb3'>
          {bios.map((bio, i) => <div className='ph2-ns pv2 w-33-m w-50-ns' key={i}>
            <img src={ getAsset(bio.get('image')) } alt={ bio.getIn(['params', 'text']) } className='center db mb2 h4 object-cover'/>
            <p className='h5 overflow-auto'>{ bio.getIn(['params', 'text']) }</p>
          </div>)}
        </div>
      </div>
    </div>

  </div>;
};

export default AboutPreview;
