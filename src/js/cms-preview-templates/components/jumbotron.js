import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, subtitle} = this.props;
    return <div>
      <div className="pv5 pv6-l ph3 vh-75-ns vh-50 bg-center cover no-select" style={{
        backgroundImage: image && `url(${image})`
      }}>
        <div className="dib mw7 center ph3">
          <div className="bg-black o-90 br1 white pa3 mb3">
            <div className="mw7 relative bg-fix-primary">
              <h1 className="f2 f1-l di lh-title mb3 mw6">
                { title }
              </h1>
            </div>
            <div className="mw7 relative bg-fix-primary">
              {subtitle && <p className="b f4 di lh-title mb3 mw6">{ subtitle }</p>}
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
