import { useEffect, useState } from "react";
import moovies from "../data/array.js";
import "./App.css";

function App() {
  const [selectedGenre, setselectedGenre] = useState("No Filter");
  const genres = ["No Filter", "Fantascienza", "Thriller", "Romantico", "Azione"];
  const [mooviesFiltered, setmooviesFiltered] = useState(moovies);

  useEffect(() => {
    if (selectedGenre === "No Filter") {
      setmooviesFiltered(moovies);
    } else {
      const newMooviesFilter = moovies.filter((curMoovie) => selectedGenre === curMoovie.genre);
      setmooviesFiltered(newMooviesFilter);
    }
  }, [selectedGenre]);

  return (
    <>
      <div>
        <h1 className="text-center">Moovies</h1>
        <div className="container my-3">
          <select value={selectedGenre} onChange={(event) => setselectedGenre(event.target.value)}>
            {genres.map((curGenre, index) => (
              <option key={index} value={curGenre}>
                {curGenre}
              </option>
            ))}
          </select>
          <ul className="list-group">
            {mooviesFiltered.map((curMoovie, index) => (
              <li key={index} className="list-group-item">
                {curMoovie.title} - {curMoovie.genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
