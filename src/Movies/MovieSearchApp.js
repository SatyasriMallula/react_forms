import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const MovieSearchApp = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const searchMovies = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}`);
            setMovies(response.data);
            setError('');
        } catch (error) {
            setError('Error fetching movie data');
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        if (query.trim() !== '') {
            searchMovies();
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    console.log(movies)
    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div>
            <h1>Movie Search</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for a movie..."
            />
            <button onClick={handleSearch}>Search</button>

            {/* Display movie search results */}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id} onClick={() => handleSelectMovie(movie)}>
                        {movie.title}
                    </li>
                ))}
            </ul>

            {/* Display selected movie details */}
            {selectedMovie && (
                <div>
                    <h2>{selectedMovie.title}</h2>
                    <p>{selectedMovie.overview}</p>
                    {/* Add more details here */}
                </div>
            )}
        </div>
    );
};

export default MovieSearchApp;
