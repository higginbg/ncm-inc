import React from 'react';
import Jumbotron from './components/jumbotron';

const AboutPreview = ({ entry, getAsset }) => {

  const data = entry.get('data');
  const intro = data.get('intro');
  const main = data.get('main');
  const bios = data.get('people') || [];
  const portraits = data.get('resources') || [];

  return <div className='bg-white'>

    <Jumbotron image={ data.get('image') } title={ data.get('title') } />

    <div className='section bg-debut relative header-shadow'>
      <div className='mw7 center'>
        <h1 className='f2 lh-title mb3'>{ intro.get('heading') }</h1>
        <p>{ intro.get('text') }</p>
      </div>
    </div>

    <div className='section bg-white'>
      <div className='mw7 center'>
        <h1 className='f2 lh-title mb3'>{ main.get('heading') }</h1>
        <p>{ main.get('text') }</p>

        <div className='flex-ns flex-wrap mhn2-ns mb3'>
          {bios.map((bio, i) => <div className='ph2-ns pv2 w-33-m w-50-ns' key={i}>
            {portraits.map((portrait, i) => {
              if (portrait.get('src') === bio.get('image')) {
                return <img key={i} src={ getAsset(portrait.get('src')) } alt={ bio.get('name') } className='center db mb2 h4 object-cover' />;
              }
            })}
            <p className='h5 overflow-auto'>{ bio.get('text') }</p>
          </div>)}
        </div>
      </div>
    </div>
  </div>;
};

export default AboutPreview;
