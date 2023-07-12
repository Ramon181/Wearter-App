import React from "react";
import { Link } from "react-router-dom";
import './Style/Carta.css'

export default function Carta({ name, max, min, img, onClose, id }) {
    return (
        <div className="Carta">
            <button onClick={onClose} className='Btn' >X</button>
            <Link to={`/ciudad/${name}`} className='link'>
                <div className="divuno">
                    <h2>{name}</h2>
                </div>
            </Link>
            <div className="divdos">
                <div className="otro">
                <div className="Name">
                    <p className="mane2">Max:</p>
                    <p className="mane2">{max}º</p>
                </div>
                <div className="Name">
                    <p className="mane2">Man:</p>
                    <p className="mane2">{min}º</p>
                </div>
                </div>
                    <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} alt="img" className="clima" />
            </div>
        </div>
    )
}