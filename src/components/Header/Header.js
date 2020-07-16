import React from "react";
import nasaLogo from "./NASAlogo-removebg-preview.png"
import styled from "styled-components"

const StyledDetails = styled.div`
    background-color: black;
    margin: 2%;

    h1 {
        color:white;
        letter-spacing:10px;
        padding-bottom:3%;
    }
`

export default function Header (){

return (
    <StyledDetails className="header-container">
        <img src={nasaLogo} alt="logo"/>
        <h1>IMAGE OF THE DAY</h1>
    </StyledDetails>
)
}