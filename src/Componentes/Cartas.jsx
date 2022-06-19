import React from "react";
import Carta from "./Carta";
import './Style/Cartas.css'

export default function Cartas({ onClose, cities }) {
    return (
        <div className="Cartas">
            {
                cities.map((city) => (
                    <Carta
                        key={city.id}
                        max={city.max}
                        min={city.min}
                        name={city.name}
                        img={city.img}
                        onClose={() => onClose(city.id)}
                        id={city.id}
                    />
                ))
            }
        </div>
    )
}