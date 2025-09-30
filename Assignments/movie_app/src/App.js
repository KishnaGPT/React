import React, { useState } from 'react';
import {SearchBar} from './SearchBar';
import './Styles.css';

const API_KEY = "d063c207"; // Replace with your OMDb API key

export function App() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  const searchMovie = async (title) => {
    setError('');
    setMovie(null);
      
      const res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);

      const data = await res.json();

      if (data.Response === 'True') {
        setMovie(data);
      } else {
        setError('Movie not found.');
      }
  };

  return (
    <div className="app-container">
      <h1>🎬 Movie Search</h1>
      <SearchBar onSearch={searchMovie} />
      {error && <p className="error">{error}</p>}

      {movie && (
        <div className="movie-card">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-info">
            <h2>{movie.Title} ({movie.Year})</h2>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Rating:</strong> ⭐ {movie.imdbRating}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
          </div>
        </div>
      )}
    </div>
  );
}

