import "./Style/recient.css";
const Recient = ({
  cities,
  openRecient,
  setOpenRecient,
  setCity,
  setGeoLoading,
  setLoading,
}) => {
  return openRecient ? (
    <div className="leaderboard">
      <header>
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          className="leaderboard__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13.5 8H12v5l4.28 2.54l.72-1.21l-3.5-2.08V8M13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.896 8.896 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9"
          />
        </svg>
        <h1 className="leaderboard__title">
          <span className="leaderboard__title--top">Recientes</span>
        </h1>
        <button
          onClick={() => {
            setOpenRecient(false);
          }}
          className="exit_leaderboard"
        >
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
        </button>
      </header>

      <main className="leaderboard__profiles">
        {cities &&
          cities.map(e => (
            <article
              onClick={() => {
                const data = {
                  min: e.main,
                  max: e.max,
                  img: e.img,
                  id: e.id,
                  wind: e.wind,
                  temp: e.temp,
                  name: e.name,
                  weather: e.weather,
                  clouds: e.clouds,
                  latitud: e.latitud,
                  longitud: e.longitud,
                };
                setCity(data);
                setGeoLoading(false);
                setLoading();
              }}
              key={e.id}
              className="leaderboard__profile"
            >
              <img
                src={"http://openweathermap.org/img/wn/" + e.img + "@2x.png"}
                alt="Mark Zuckerberg"
                className="leaderboard__picture"
              />
              <span className="leaderboard__name">{e.name}</span>
              <span className="leaderboard__value">
                {e.temp}
                <span>°</span>
              </span>
            </article>
          ))}
      </main>
    </div>
  ) : null;
};

export default Recient;
