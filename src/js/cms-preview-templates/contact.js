import React from 'react';

const ContactEntry = ({ heading, text }) =>
  <div className='md w-50-ns w-100'>
    <h4 className='f4 lh-title mb2'>{ heading }</h4>
    { text }
  </div>;

const ContactEntries = ({ data }) => {return data
  ? <div className='flex flex-row flex-wrap'>
    {data.map((entry, i) => <ContactEntry heading={entry.getIn(['widgets', 'heading'])} text={entry.getIn(['widgets', 'text'])} key={i} />)}
  </div>
  : '';
};

const ContactPreview = ({ entry, widgetFor, widgetsFor }) => {
  const contactEntries = widgetsFor('contact_entries') || {};

  return <div>
    <div className='section bg-debut header-shadow relative'>
      <div className='mw6 center'>

        <h1 className='f2 tc lh-title'>{ entry.getIn(['data', 'heading']) }</h1>

      </div>
    </div>

    <div className='section bg-white'>
      <div className='mw6 center'>

        <div className='mb4'>{ widgetFor('intro_text') }</div>

        <ContactEntries data={contactEntries} />

        <div>{ widgetFor('outro_text') }</div>

      </div>
    </div>
  </div>;
};

export default ContactPreview;
