import React from 'react';
import Jumbotron from './components/jumbotron';

const TestimonialsPreview = ({ entry }) => {

  const data = entry.get('data');
  const intro = data.get('intro');
  const main = data.get('main');
  const testimonials = main.get('list') || [];

  return (
    <div className='bg-debut pb4'>
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

          <p className='mb3'>{ main.get('text') }</p>

          {testimonials.map((testimonial, i) => <div className='center mb3 ph3' key={i}>
            <blockquote className='bg-debut ba b--grey-1 pa3 mb3 br1 mw6 center tile-shadow'>
              <p className='mb2'>“{ testimonial.get('quote') }”</p>
              <cite className='f5 tr db'>{ testimonial.get('name') }</cite>
              <cite className='f6 tr db'>{ testimonial.get('position') }</cite>
              <cite className='f6 tr db'>{ testimonial.get('company') }</cite>
            </blockquote>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPreview;
