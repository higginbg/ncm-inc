import React from 'react';

const JoinPreview = ({ entry }) => <div class="bg-off-white ph3 pv4">
  <div class='mw6 center'>
    <h1 class='f2 lh-title mb3'>{ entry.getIn(['data', 'heading']) }</h1>
    <div class='cms'>{ entry.getIn(['data', 'body']) }</div>
  </div>
</div>;

export default JoinPreview;
