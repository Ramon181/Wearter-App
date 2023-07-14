import React, { useState } from 'react';
import NavBar from './Componentes/NavBar';
import './App.css'
import SideBar from './Componentes/SideBar';
import Home from './Componentes/Home';
import Carta from './Componentes/Carta';
import Recient from './Componentes/Recient';

function App() {

  const [cities, setCities] = useState([]);
  const [geoLoading, setGeoLoading] = useState(false)
  const [openRecient, setOpenRecient] = useState(false)
  const [city, setCity] = useState({});
  const [search, setSearch] = useState('');

  const setLoading = () => {
    const timer = setTimeout(() => {
      setGeoLoading(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }

  function onClose() {
    setCity({})
  }
  const onSearch = async (e) => {
    e.preventDefault();
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4ae2636d8dfbdc3044bede63951a019b`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const data = {
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
          setCity(data);
          setCities(oldCities => [...oldCities, data]);
          setSearch("")
          setGeoLoading(false);
          setLoading()
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className="app">
      <header className="App-header">
        <div>
          <NavBar onSearch={onSearch} search={search} setSearch={setSearch} />
          <SideBar setOpenRecient={setOpenRecient} />
          <Home city={city} geoLoading={geoLoading} setLoading={setLoading} />
          <Carta onClose={onClose} city={city} />
          <Recient cities={cities} openRecient={openRecient} setOpenRecient={setOpenRecient} setCity={setCity} setGeoLoading={setGeoLoading} setLoading={setLoading}/>
        </div>
      </header>
    </div>
  );
}

export default App;
