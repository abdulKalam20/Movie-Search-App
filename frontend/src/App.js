import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await fetch(
      `http://localhost:5000/api/movies?search=${search}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter movie name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {/* Movies Display */}
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
