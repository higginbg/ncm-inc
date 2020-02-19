import React from 'react';

const ProjectsPreview = ({ entry, getAsset, widgetFor }) => {

  const intro = {
    title: entry.getIn(['data', 'title']),
    subtitle: entry.getIn(['data', 'subtitle']),
    text: widgetFor('body')
  };

  return <div>
    <div className='section bg-debut relative header-shadow'>
      <div className='mw7 center'>
        <h2 className='f2 lh-title mb2'>{ intro.title }</h2>
        <h3 className='f4 lh-title'>{ intro.subtitle }</h3>
      </div>
    </div>

    <div className='section bg-white'>
      <div className='mw7 center'>

        <h2 class='f3 lh-title mb3'>Overview</h2>
        <p className='mb3'>{ intro.text }</p>

        <h2 class='f3 lh-title mb3'>Gallery</h2>
        <div className='flex-ns flex-wrap mhn2-ns mb3'>
          {(entry.getIn(['data', 'resources']) || []).map((slide, i) => <div className='ph2-ns pv2 w-33-m w-50-ns' key={i}>
            <img src={ getAsset(slide.get('src')) } alt={ slide.get('title') } className='center db mb2'/>
            <p className='tc'>{slide.get('title')}</p>
          </div>)}
        </div>

      </div>
    </div>
  </div>;
};

export default ProjectsPreview;
