import React from "react";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";
import './Style/NavBar.css'
import { Icon } from "@iconify/react";


export default function NavBar({ onSearch }) {
    return (
        <div className="Heder">
            <div className="Nav">
                <Link to='/' className="nav-link">
                <Icon className="icon" icon="fa6-solid:w" />
                    <h2 className="home">Weather App</h2>
                </Link>
                <div className="NavDos">
                    <Link to='/about-me'>
                       <Icon className="about" icon="octicon:apps-16" hFlip={true} />
                    </Link>
                    <div className="bus">
                    <Buscador onSearch={onSearch} />
                    </div>    
                </div>
            </div>
        </div>
    )
}