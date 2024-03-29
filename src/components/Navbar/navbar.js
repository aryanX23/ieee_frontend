import React from "react";
import './navbar.css';
import { useNavigate } from "react-router-dom";
export default function Navbar(){
    const navigate = useNavigate();
    function handleNav(event){
        event === "home"
            ? navigate("/ieee_frontend/")
            : event === "events"
            ? navigate("/ieee_frontend/events/")
            : navigate("/ieee_frontend/events/");
    }
    return(
        <div className="navBody">
            <div className="navLeft">
                <img src={process.env.PUBLIC_URL+"/images/IEEE_logo.png"} alt="logo" className="ieeeLogo" />
                <span className="pageTitle">IEEE</span>
                <span className="pageSubTitle">Advancing Technology<br/>For Humanity</span>
            </div>
            <div className="navRight">
                <span onClick={()=>handleNav(("home"))} >HOME</span>
                <span onClick={()=>handleNav(("events"))} >EVENTS</span>
            </div>
        </div>
    );
}