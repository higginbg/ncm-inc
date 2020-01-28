import React from "react";

import MediaTile from "./components/media-tile";


export default class AboutPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    const name = entry.getIn(["data", "title"]);
    const position = entry.getIn(["data", "subtitle"]);
    const body = entry.getIn(["data", "body"]);
    
    let image = getAsset(entry.getIn(["data", "image"]));

    console.log(image);

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    console.log(image);
    
    return <div class="mw6 center ph3 pv4">
    <div class="flex flex-row flex-wrap">

      <div class="w-50-ns">
        <h1 class="f2 lh-title mb2">{name}</h1>
        <h2 class="f4 lh-title mb3">{position}</h2>
        <div class="cms">{body}}</div>
      </div>
      
      <div class="w-50-ns w-100 pl3-ns">
        <img src={image} class="w-100 h5 br1 object-cover"/>
      </div>      

    </div>
  </div>;
  }
}
