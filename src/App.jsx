import { useState } from "react";
import moovies from "../data/array.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-center">Moovies</h1>
        <div className="container my-3">
          <ul className="list-group">
            {moovies.map((curMoovie, index) => (
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
