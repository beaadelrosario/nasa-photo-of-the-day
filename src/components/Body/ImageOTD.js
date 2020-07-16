import React from "react";
import styled from "styled-components"

const StyledDetails = styled.div`
    letter-spacing: 1px;
    line-height: 30px;
    font-size: 20px;
    font-family: Helvetica;
    text-align: center;
    border:1px solid red;

    #image-description{
        margin: 1%;
    }

    #image-of-the-day{
        width: 556px;
        height: 600px;
        overflow: hidden;
        display: flex;
        margin: 0 auto;
        justify-content: center;
    }

    #imageTitle {
        font-style: italic;
        font-weight:900;

        &:hover {
            color: red;
        }
    }

    #aboutImage {
        font-size: 15px;
    }

`

export default function ImageOTD ({imageOTD}){

return (
    <StyledDetails id="mainBodyContainer"className="imageContainer">
        <div id="image-description"className="description-block">
            <p>{imageOTD.date}</p>
                <div id="image-of-the-day">
                    <img style={{objectFit: 'cover'}} src={imageOTD.url} alt="Random Picto"/>
                </div>
            <p id="imageTitle">{imageOTD.title}</p>
            <p id="aboutImage">{imageOTD.explanation}</p>
            <button class="previousDay">View Previous Day</button>
        </div>
    </StyledDetails>
)
}