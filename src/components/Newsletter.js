import React, { useContext } from "react";
import { StoreContext } from "../context";

function Newsletter() {
  return (
    <div className="newsletter">
      <div class="newsletter_top">
        <h2>Subscribe to Updates</h2>
        <p>Get the latest creative news about tech & digital.</p>
      </div>
      <div class="newsletter_bot">
        <form>
          <input
            type="email"
            class="input_email"
            placeholder="Email address"
          ></input>
          <button class="input_button">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
