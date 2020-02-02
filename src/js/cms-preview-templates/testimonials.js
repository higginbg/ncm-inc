import React from 'react';

const { useState } = React;

const TestimonialsPreview = ({ entry, getAsset }) => {
  const [image, setImage] = useState('');

  const heading = entry.getIn(['data', 'blurb', 'heading']);
  const text = entry.getIn(['data', 'blurb', 'text']);

  getAsset(entry.getIn(['data', 'image'])).then(path =>
    setImage(path.toString())
  );

  return (
    <div class='mw6 center ph3 pv4'>
      <img src={image} class='h5 object-cover' />
      <h1 class='f2 lh-title mb2'>{heading}</h1>
      <p class='mb3'>{text}</p>
      {(entry.getIn(['data', 'testimonials', "list"]) || []).map((testimonial, i) => <div className="center mb3 ph3" key={i}>
        	<blockquote className="bg-grey-1 grey-3 pa3 mb3 br1 mw6 center">
        		<p className="f4 mb2">“{testimonial.get('quote')}”</p>
        		<cite className="f5 tr db">{testimonial.get('author')}</cite>
            <cite className="f6 tr db">{testimonial.get('position')}</cite>
            <cite className="f6 tr db">{testimonial.get('company')}</cite>
        	</blockquote>
        </div>)}
    </div>
  );
};

export default TestimonialsPreview;
