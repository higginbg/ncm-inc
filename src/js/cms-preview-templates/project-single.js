import React from "react";

const ProjectsPreview = ({ entry, widgetFor }) => {

  const intro = {
    title: entry.getIn(['data', 'title']),
    subtitle: entry.getIn(['data', 'subtitle']),
    text: widgetFor("body")
  };

  return <div>
    <div className="bg-off-white pv4 ph3">
      <div className="mw7 center">
        <h2 className="f2 lh-title mb2">{ intro.title }</h2>
        <h3 className="f4 lh-title">{ intro.subtitle }</h3>
      </div>
    </div>

    <div className="bg-white pv4 ph3">
      <div className="mw7 center">
        <p className="mb3">{ intro.text }</p>
        <div className="flex-ns flex-wrap mhn2-ns mb3">
          {(entry.getIn(["data", "gallery"]) || []).map((slide, i) => <div className="ph2-ns w-33-ns" key={i}>
            <img src={ slide.get("image") } alt={ slide.get("text") } className="center db mb3"/>
            <p className="tc">{slide.get("text")}</p>
          </div>)}
        </div>
      </div>
    </div>
  </div>;
};

export default ProjectsPreview;
