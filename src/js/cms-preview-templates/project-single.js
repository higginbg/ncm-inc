import React from 'react';

const ProjectsPreview = ({ entry, getAsset, widgetFor }) => {

  const data = entry.get('data');
  const gallery = data.get('resources') || [];

  return <div>
    <div className='section bg-debut relative header-shadow'>
      <div className='mw7 center'>
        <h2 className='f2 lh-title mb2'>{ data.get('title') }</h2>
        <h3 className='f4 lh-title'>{ data.get('subtitle') }</h3>
      </div>
    </div>

    <div className='section bg-white'>
      <div className='mw7 center'>

        <h2 className='f3 lh-title mb3'>Overview</h2>
        <p className='mb3'>{ widgetFor('body') }</p>

        <h2 className='f3 lh-title mb3'>Gallery</h2>
        <div className='flex-ns flex-wrap mhn2-ns mb3'>
          {gallery.map((image, i) => <div className='ph2-ns pv2 w-33-m w-50-ns' key={i}>
            <img src={ getAsset(image.get('src')) } alt={ image.get('title') } className='center db mb2 tile-shadow' />
            <p className='tc'>{ image.get('title') }</p>
          </div>)}
        </div>

      </div>
    </div>
  </div>;
};

export default ProjectsPreview;
