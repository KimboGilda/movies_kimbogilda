import "../css/MovieCard.css";

export interface Movie {
  id?: number;
  title: string;
  poster_path?: string;
  release_date: string;
}

function MovieCard({ title, poster_path, release_date }: Movie) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={() => alert("clicked")}>
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
