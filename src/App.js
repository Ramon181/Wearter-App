import React, { useState, useEffect } from 'react';
import Cartas from './Componentes/Cartas';
import NavBar from './Componentes/NavBar';
import { Route, Routes } from 'react-router-dom';
import NavAbout from './Componentes/NavAbout';
import Ciudad from './Componentes/Ciudad';
import './App.css'
import AboutMe from './Componentes/AboutMe';
import SideBar from './Componentes/SideBar';
import Home from './Componentes/Home';
// import { Icon } from '@iconify/react';


const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
function App() {

  const [cities, setCities] = useState([]);

  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);


  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"))
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  return (
    <div className="app">
      <header className="App-header">
        <div>
          <NavBar onSearch={onSearch} cities={cities} checked={checked} toggleThemeChange={toggleThemeChange} />
          <SideBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/ciudad/:name" element={<Ciudad/>} />
            <Route path={'/about-me'} element={<AboutMe />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
