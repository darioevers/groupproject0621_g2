import React from "react";

function Cta() {
  return (
    <div className="cta">
      <div className="cta-wrapper">
        <div className="side-color"></div>
        <div className="cta-banner">
          <div className="cta-banner-smaller-text">
            <h4>stay up to date</h4>
          </div>
          <div className="cta-banner-heading">
            <h2>Subscribe today and never miss out!</h2>
          </div>
          <div className="cta-btn">
            <div class="field">
            <input type="text" placeholder="Email Address"></input>
            <label class="btn-2">Subscribe</label>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
