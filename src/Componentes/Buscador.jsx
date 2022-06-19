import React, { useState } from "react";
import './Style/Bucador.css';
import { Icon } from "@iconify/react";

export default function Buscador({ onSearch }) {

    const [city, setCity] = useState('');
    // const [desple, setDesple] = useState(false)


    return (
            <form onSubmit={(e) => {
                e.preventDefault();
                onSearch(city)
                setCity('')

            }} className='form'>
                <div className="onSearch">
                    <input type='text' placeholder="Buscar..." value={city} onChange={e => { setCity(e.target.value) }} className='input'></input>
                    {/* <input type="submit" value="Agregar" className="btn" /> */}
                    <div className="boton">
                    <button className="btn"><Icon icon="octicon:search-16" hFlip={true} /></button>
                    </div>
                </div>
            </form>
    );
}