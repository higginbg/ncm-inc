import React from 'react';

const MediaTile = ({ title, subtitle, image }) => <div>
  <div className="h5 mb3 br1 overflow-hidden cover relative box-shadow bg-center" style={{backgroundImage: `url(${image})`}}>
    <div className="banner bg-black white w-100 o-90 ph2 pv1 absolute bottom-0">
      <h2 className="f5">{title}</h2>
      <h3 className="f6">{subtitle}</h3>
    </div>
  </div>
</div>;

export default MediaTile;
