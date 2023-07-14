import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { blackIcon } from "./assets/icono";
import "./Style/home.css";
import { useEffect } from "react";

const Home = ({ city, geoLoading, setLoading }) => {
  useEffect(() => {
    setLoading()
  }, []);
  return !geoLoading ? (
    <div className="home-body">
      <span class="loader"></span>
    </div>
  ) : (
    <div className="home-body">
      {city.longitud && city.latitud ? (
        <div>
          <MapContainer
            center={[city.latitud, city.longitud]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[city.latitud, city.longitud]} icon={blackIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <div>
          <MapContainer center={[20.9881, -77.4297]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default Home;
