import React from 'react';

const TestimonialSinglePreview = ({ entry }) => {

  const data = entry.getIn(['data']);

  return (
    <div className="bg-off-white pb4">

      <div className="bg-off-white ph3 pv4">
        <div className="mw6 center">
          <h1 className='f2 lh-title mb3'>{ data.getIn(['title']) }</h1>
          <h2>{ data.getIn(['position']) }</h2>
          <h2>{ data.getIn(['company']) }</h2>
        </div>
      </div>

      <div className="bg-white ph3 pv4">
        <div className='mw6 center'>

          <p class="db mb4">“{ data.getIn(['quote']) }”</p>

          <h2 class="f3 lh-title mb3">Contact</h2>
          <p class="db lh-title">We encourage you to contact our references to hear their experience with our team.</p>

          <p class="db"><a class="link" href={`tel:${ data.getIn(['phone']) }`}>{ data.getIn(['phone']) }</a></p>
          <p class="db"><a class="link" href={`mailto:${ data.getIn(['email']) }`}>{ data.getIn(['email']) }</a></p>

        </div>
      </div>
    </div>
  );
};

export default TestimonialSinglePreview;
