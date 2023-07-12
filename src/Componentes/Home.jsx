import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { blackIcon } from "./assets/icono";
import "./Style/home.css";
const Home = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const generateRandomLocation = () => {
    const minLat = -90;
    const maxLat = 90;
    const minLng = -180;
    const maxLng = 180;

    const randomLat = Math.random() * (maxLat - minLat) + minLat;
    const randomLng = Math.random() * (maxLng - minLng) + minLng;

    setLatitude(randomLat);
    setLongitude(randomLng);
  };
  useEffect(() => {
    generateRandomLocation();
  }, []);

  console.log(latitude);

  return (
    <div className="home-body">
      {latitude && longitude ? (
        <div>
          <MapContainer center={{ lon: -77.4297, lat: 20.9881 }} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker
              position={{ lon: -77.4297, lat: 20.9881 }}
              icon={blackIcon}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker> */}
          </MapContainer>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
