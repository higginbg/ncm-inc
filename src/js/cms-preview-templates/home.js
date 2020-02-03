  
import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

const { useState } = React;


const section = (entry, section, background) => {
  const heading = entry.getIn(["data", section, "heading"]);
  const text = entry.getIn(["data", section, "text"]);
  const btnText = entry.getIn(["data", section, "button"]);

  return <div className={`${background} pv4`}>
    <div className="ph3 mw7 center">
      <h2 className="f2 lh-title mb2">{heading}</h2>
      {text && <p className="mw6">{text}</p>}

      {btnText && <div className="tc mt4">
        <a href="#" className="btn">{btnText}</a>
      </div>}
    </div>
  </div>;
};


const HomePreview = ({ entry, getAsset }) => {

  const [cover, setCover] = useState('');

  getAsset(entry.getIn(['data', 'image'])).then(path => setCover(path.toString()));

  return <div>
    <Jumbotron image={cover} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

    <div className="bg-off-white pv4">
      <div className="flex-l mhn1-l ph3 center mw7">
        <h2 className="f2 lh-title mb2 w-40-l">{entry.getIn(["data", "blurb", "heading"])}</h2>
        <p className="w-60-l mb0">{entry.getIn(["data", "blurb", "text"])}</p>
      </div>
    </div>

    { section(entry, 'about', 'bg-white') }

    { section(entry, 'projects', 'bg-off-white') }

    { section(entry, 'testimonials', 'bg-white') }

  </div>;
};

export default HomePreview;
