import React from 'react';
import Jumbotron from './components/jumbotron';

const TestimonialsPreview = ({ entry }) => {

  const intro = {
    heading: entry.getIn(['data', 'intro', 'heading']),
    text: entry.getIn(['data', 'intro', 'text'])
  };

  const main = {
    heading: entry.getIn(['data', 'list', 'heading']),
    list: entry.getIn(['data', 'list', 'entries']) || []
  };

  return (
    <div>
      <Jumbotron image={entry.getIn(['data', 'image'])} title={entry.getIn(['data', 'title'])} />
      <div class='mw6 center ph3 pv4 mt3'>
        <h1 class='f2 lh-title mb3'>{ intro.heading }</h1>
        <p class='mb3'>{ intro.text }</p>
        <h1 class='f2 lh-title mb3'>{ main.heading }</h1>
        {main.list.map((testimonial, i) => <div className="center mb3 ph3" key={i}>
          <blockquote className="bg-white ba b--grey-1 grey-4 pa3 mb3 br1 mw6 center">
            <p className="f4 mb2">“{ testimonial.get('quote') }”</p>
            <cite className="f5 tr db">{ testimonial.get('author') }</cite>
            <cite className="f6 tr db">{ testimonial.get('position') }</cite>
            <cite className="f6 tr db">{ testimonial.get('company') }</cite>
          </blockquote>
        </div>)}
      </div>
    </div>
  );
};

export default TestimonialsPreview;
