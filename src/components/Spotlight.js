import React from "react";

function Spotlight() {
  return (
    <div className="spotlight">
      <div className="spotlight-heading">
        <h2>
          SPOTLIGHT <span>//</span>
        </h2>
      </div>
      <div className="spotlight-content-container">
        <div className="spotlight-content-left"></div>
        <div className="spotlight-content-right-container">
          <div className="spotlight-content-right"></div>
          <div className="spotlight-content-right"></div>
          <div className="spotlight-content-right"></div>
          <div className="spotlight-content-right"></div>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
