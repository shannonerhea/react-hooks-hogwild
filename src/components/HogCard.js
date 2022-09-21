import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard() {


  return (
    <div className="ui card eight wide column pigTile">
      <div className="image">
        <img src="" alt="hogPic" />
      </div>
      <div className="content">
        <h3 className="header">Name</h3>
        <div className="description">Specialty</div>
      </div>
      <div className="extra content">
        <HogDetails /> 

        <button className="ui button">
         "More Info"
        </button>
        {/*<button className="ui button" onClick={() => setIsHidden(true)}>
          Hide Me{" "}
          <span role="img" aria-label="snout">
            🐽
          </span>
  </button> */}
      </div>
    </div>
  );
}

export default HogCard;
