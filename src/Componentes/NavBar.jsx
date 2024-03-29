import React from "react";
import Buscador from "./Buscador";
import "./Style/NavBar.css";

export default function NavBar({ onSearch,search, setSearch }) {
  return (
    <div>
      <div className="Heder">
        <div className="Nav">
          <div className="NavDos">
            <div className="bus">
              <Buscador onSearch={onSearch} search={search} setSearch={setSearch}/>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <label class="switch">
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={toggleThemeChange}
          />
          <span className="slider"></span>
        </label>
      </div> */}
    </div>
  );
}
