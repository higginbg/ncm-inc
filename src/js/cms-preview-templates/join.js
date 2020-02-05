import React from 'react';

const JoinPreview = ({ entry, widgetFor }) => <div>
  <div class="bg-off-white ph3 pv4">
    <div class='mw6 center'>
      <h1 class='f2 tc lh-title'>{ entry.getIn(['data', 'heading']) }</h1>
    </div>
  </div>

  <div class="bg-white ph3 pv4">
    <div class='mw6 center'>
      <div class='cms'>{ widgetFor('body') }</div>
    </div>
  </div>
  
</div>;

export default JoinPreview;
