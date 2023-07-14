import React, { useEffect, useState } from "react";
import "./Style/Bucador.css";

export default function Buscador({ onSearch, search, setSearch }) {
  const [countries, setCountries] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const onClick = s => {
    setSearch(s);
    setSuggestions([]);
  };
  const onchange = e => {
    let matches = [];
    if (e.length > 0) {
      matches = countries.filter(country => {
        const regex = new RegExp(`${e}`, "gi");
        return country.name.match(regex);
      });
    }
    setSuggestions(matches);
    setSearch(e);
  };

  const sugg = suggestions.slice(0, 5);

  return (
    <form onSubmit={e => onSearch(e)} role="search">
      <label for="search">Search for stuff</label>
      <input
        value={search}
        onChange={e => onchange(e.target.value)}
        id="search"
        type="search"
        placeholder="Buscar..."
        autofocus
        required
      />
      <button className="button_search" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
          />
        </svg>
      </button>
      <div className="suggestions">
        {sugg &&
          sugg.map((e, i) => (
            <div onClick={() => onClick(e.name)} className="suger" key={i}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g transform="rotate(90 12 12)"><path fill="currentColor" d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19zm9-12.243L19.092 17H4.908L12 6.757z"/></g></svg>
              <h4>{e.name}</h4>
            </div>
          ))}
      </div>
    </form>
  );
}
