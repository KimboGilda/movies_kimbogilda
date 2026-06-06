import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

const movies = [
  { id: 1, title: "The Matrix", release_date: "1998" },
  { id: 2, title: "John Wick", release_date: "2020" },
  { id: 3, title: "Malena", release_date: "1999" },
];

function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
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
      </form>
      <div className="movies">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard
                key={movie.id}
                title={movie.title}
                release_date={movie.release_date}
              />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
