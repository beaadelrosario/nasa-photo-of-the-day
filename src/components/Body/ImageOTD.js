import React from "react";

export default function ImageOTD ({imageOTD,date,title,description}){

return (
    <div className="imageContainer">
        <img src={imageOTD} alt="Random Picto"/>
        <div className="description-block">
            <p>DATE: {date}</p>
            <p>TITLE: {title}</p>
            <p>ABOUT: {description}</p>
        </div>
    </div>
)
}