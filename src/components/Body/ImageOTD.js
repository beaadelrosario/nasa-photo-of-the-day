import React from "react";
import styled from "styled-components"

const StyledDetails = styled.div`
    letter-spacing: 1.5px;
    line-height: 30px;
    font-size: 20px;
    font-family: Helvetica;
    text-align: left;
    display:flex;
    justify-content: center;
    border:1px solid red;

    #image-description{
        margin: 1%;
    }

`

export default function ImageOTD ({imageOTD}){

return (
    <StyledDetails id="mainBodyContainer"className="imageContainer">
        <div>
            <img src={imageOTD.url} alt="Random Picto"/>
        </div>
        <div id="image-description"className="description-block">
            <p>TODAY'S DATE: {imageOTD.date}</p>
            <p>TITLE: {imageOTD.title}</p>
            <p>ABOUT: {imageOTD.explanation}</p>
        </div>
    </StyledDetails>
)
}