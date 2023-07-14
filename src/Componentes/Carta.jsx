import { useState } from "react";
import "./Style/Carta.css";

export default function Carta({ city,onClose }) {
  const [position, setPosition] = useState({ x: 110, y: 65 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = event => {
    setDragging(true);
    const { clientX, clientY } = event;
    const rect = event.target.getBoundingClientRect();
    setOffset({ x: clientX - rect.left, y: clientY - rect.top });
  };

  const handleMouseMove = event => {
    if (!dragging) return;
    const { clientX, clientY } = event;
    setPosition({ x: clientX - offset.x, y: clientY - offset.y });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };
  return city.name ? (
    <div
      style={{
        left: position.x,
        top: position.y,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      class="card"
    >
      <div onClick={() => onClose()} className="backbutton ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
          />
        </svg>
      </div>
      {city.weather === "Clear" ? (
        <div class="container">
          <span class="sun sunshine"></span>
          <span class="sun"></span>
        </div>
      ) : (
        <div class="container">
          <div class="cloud front">
            <img
              src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"}
              alt="img"
              className="clima"
            />
          </div>
          <span class="sun sunshine"></span>
          <span class="sun"></span>
          <div class="cloud back">
            <img
              src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"}
              alt="img"
              className="clima"
            />
          </div>
        </div>
      )}

      <div class="card-header">
        <span>{city.name}</span>
      </div>

      <span class="temp">{city.temp}°</span>
    </div>
  ) : null;
}
