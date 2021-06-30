import React from "react";
import { Link } from "react-router-dom";


function Social() {
  return (
    <div className="social">
      <div className="social-heading">
        <div className="social-heading-wrapper">
          <h2>
            socialize with us<span>//</span>
          </h2>
        </div>
      </div>
      <div className="social-buttons">
        <div className="social-buttons-left">
          <button className="facebook-btn"><Link to="#" target="blank">Facebook</Link></button>
          <button className="pinterest-btn"><Link to="#" target="blank">Pinteres/</Link>t</button>
          <button className="youtube-btn"><Link to="#" target="blank">Youtube</Link></button>
        </div>
        <div className="social-buttons-right">
          <button className="twitter-btn"><Link to="#" target="blank">Twitter</Link></button>
          <button className="instagram-btn"><Link to="#" target="blank">Instagram</Link></button>
          <button className="vimeo-btn"><Link to="#" target="blank">Vimeo</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Social;
