import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { blackIcon } from "./assets/icono";
import "./Style/City.css";
import { useParams } from "react-router-dom";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
export default function Ciudad() {
  const { name } = useParams();
  const [ciuda, setCiuda] = useState();

  useEffect(() => {
    const getCiudadData = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setCiuda(data);
    };

    getCiudadData();
  }, [name]);

  return (
    <div className="City">
      {ciuda ? (
        <div>
          <div className="datos">
            <h2>{ciuda.name}</h2>
            <div className="texto">
              <div>Temperatura: {ciuda.main.temp} ºC</div>
              <div>Clima: {ciuda.weather[0].main}</div>
              <div>Viento: {ciuda.wind.speed} km/h</div>
              <div>Cantidad de nubes: {ciuda.clouds.all}</div>
              <div>Latitud: {ciuda.coord.lat}º</div>
              <div>Longitud: {ciuda.coord.lon}º</div>
            </div>
          </div>
          
          <MapContainer
            center={{ lon: ciuda.coord.lon, lat: ciuda.coord.lat }}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={{ lon: ciuda.coord.lon, lat: ciuda.coord.lat }}
              icon={blackIcon}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : null}
    </div>
  );
}
