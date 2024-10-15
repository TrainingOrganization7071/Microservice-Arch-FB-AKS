import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MoviesList = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the books data from the Node.js server
    const fetchBooks = async () => {
      try {
        const api = process.env.REACT_APP_MOVIES_API;
        console.log(api)
        const response = await axios.get(api);
        setMovies(response.data.results); // Set the books data
        setLoading(false); // Stop the loading spinner
      } catch (error) {
        console.log(error)
        setError('Error Fetching Books Data !');        
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading Data ...</div>; // Show loading while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error if any
  }

  return (
    <div>
      <h1>Movies List</h1>
      <div className="movies-container">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              alt={movie.title} 
              className="movie-poster"
            />
            <h2>{movie.title}</h2>
            <p><strong>Release Date:</strong> {new Date(movie.release_date).toLocaleDateString()}</p>
            <p><strong>Rating:</strong> {movie.vote_average} / 10 ({movie.vote_count} votes)</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesList




