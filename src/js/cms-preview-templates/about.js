import React from "react";

import MediaTile from "./components/media-tile";


export default class AboutPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    
    let image = getAsset(entry.getIn(["data", "image"]));

    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    const name = getAsset(entry.getIn(["data", "title"]));
    const position = getAsset(entry.getIn(["data", "subtitle"]));
    
    return <div>
      <div className="bg-off-white pv4">
        <div className="mw7 center ph3 pt4">
          <MediaTile title={name} subtitle={position} image={image} />
        </div>
      </div>
    </div>;
  }
}
