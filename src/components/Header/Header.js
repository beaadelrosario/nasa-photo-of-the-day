import React from "react";
import nasaLogo from "./NASAlogo-removebg-preview.png"

export default function Header (){

return (
    <div className="header-container">
        <img src={nasaLogo} alt="logo"/>
        <h1>IMAGE OF THE DAY</h1>
    </div>
)
}