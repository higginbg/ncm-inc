import React from "react";

import MediaTile from "./components/media-tile";


export default class AboutPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    
    const title = getAsset(entry.getIn(["data", "title"]));
    const subtitle = getAsset(entry.getIn(["data", "subtitle"]));
    const image = getAsset(entry.getIn(["data", "image"]));
    
    return <div>
      <div className="bg-off-white pv4">
        <div className="mw7 center ph3 pt4">
          <MediaTile title={title} subtitle={subtitle} image={image} />
        </div>
      </div>
    </div>;
  }
}
