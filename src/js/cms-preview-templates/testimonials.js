import React from 'react';
import Jumbotron from './components/jumbotron';

const { useState } = React;

const TestimonialsPreview = ({ entry, getAsset }) => {
  const [cover, setCover] = useState('');

  const blurbHeading = entry.getIn(['data', 'blurb', 'heading']);
  const blurbText = entry.getIn(['data', 'blurb', 'text']);
  const mainHeading = entry.getIn(['data', 'main', 'heading']);

  getAsset(entry.getIn(['data', 'image'])).then(path =>
    setCover(path.toString())
  );

  const testimonials = entry.getIn(['data', 'main', 'list']) || [];

  return (
    <div>
      <Jumbotron image={cover} title={entry.getIn(['data', 'title'])} />
      <div class='mw6 center ph3 pv4 mt3'>
        <h1 class='f2 lh-title mb3'>{blurbHeading}</h1>
        <p class='mb3'>{blurbText}</p>
        <h1 class='f2 lh-title mb3'>{mainHeading}</h1>
        {testimonials.map((testimonial, i) => <div className="center mb3 ph3" key={i}>
          <blockquote className="bg-white ba b--grey-1 grey-4 pa3 mb3 br1 mw6 center">
            <p className="f4 mb2">“{testimonial.get('quote')}”</p>
            <cite className="f5 tr db">{testimonial.get('author')}</cite>
            <cite className="f6 tr db">{testimonial.get('position')}</cite>
            <cite className="f6 tr db">{testimonial.get('company')}</cite>
          </blockquote>
        </div>)}
      </div>
    </div>
  );
};

export default TestimonialsPreview;
