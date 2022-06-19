import React from "react";
import { MapContainer, TileLayer, Popup, Marker} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import {blackIcon} from './assets/icono'
import './Style/City.css'

export default function Ciudad({ city }) {

    if (!city) {
        alert('No Hay Ciudad')
        return (<h1>No Hay Ciudad</h1>)
    }

    // const position = [city.longitud, city.latitud]

    return (

        <div className="City">
            <div className="datos">
            <h2>{city.name}</h2>
            <div className="texto">
                <div>Temperatura: {city.temp} ºC</div>
                <div>Clima: {city.weather}</div>
                <div>Viento: {city.wind} km/h</div>
                <div>Cantidad de nubes: {city.clouds}</div>
                <div>Latitud: {city.latitud}º</div>
                <div>Longitud: {city.longitud}º</div>
            </div>
            </div>
            <MapContainer center={{ lon: city.longitud, lat: city.latitud }} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={{ lon: city.longitud, lat: city.latitud }} icon={blackIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {/* <Location lon={city.longitud} lat={city.latitud}/> */}
            </MapContainer>
        </div>
    )
}