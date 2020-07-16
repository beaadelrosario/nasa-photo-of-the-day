import React from "react";

export default function ImageOTD ({imageOTD}){

return (
    <div className="imageContainer">
        <img src={imageOTD.url} alt="Random Picto"/>
        <div className="description-block">
            <p>DATE: {imageOTD.date}</p>
            <p>TITLE: {imageOTD.title}</p>
            <p>ABOUT: {imageOTD.explanation}</p>
        </div>
    </div>
)
}