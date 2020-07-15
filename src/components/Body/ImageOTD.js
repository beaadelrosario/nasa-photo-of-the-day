import React from "react";

export default function ImageOTD ({imageOTD}){

return (
    <div className="imageContainer">
        <img src={imageOTD} alt="Random Picto"/>
        <p>
        Image infor goes here <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
)
}