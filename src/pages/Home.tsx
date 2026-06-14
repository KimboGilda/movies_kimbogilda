import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

const Home = observer(() => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movies, setMovies] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("failed to load movies..");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    setIsSearching(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Failed to search movies ...");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  const handleClearSearch = async () => {
    setIsSearching(false);
    setSearchQuery("");
    setLoading(true);
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (err) {
      setError("failed to load movies..");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies.."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="border px-0.5">
          Search
        </button>
        {isSearching && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="border px-0.5"
          >
            Clear
          </button>
        )}
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading... </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default Home;
