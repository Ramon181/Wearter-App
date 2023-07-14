import "./Style/sideBar.css";
const SideBar = ({setOpenRecient}) => {
  return (
    <nav className="side_bar">
      <div className="main_side">
        <button className="button" onClick={() => {
          setOpenRecient(true)
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.5 8H12v5l4.28 2.54l.72-1.21l-3.5-2.08V8M13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.896 8.896 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9"
            />
          </svg>
          <h4>Recientes</h4>
        </button>
      </div>
    </nav>
  );
};

export default SideBar;
