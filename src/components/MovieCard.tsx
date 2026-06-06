import "../css/MovieCard.css";

export interface Movie {
  id?: number;
  title: string;
  poster?: string;
  release_date: string;
}

function MovieCard({ title, poster, release_date }: Movie) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={poster} />
        <div className="overlay">
          <button onClick={() => alert("clicked")}>🤍</button>
        </div>
      </div>
      <div className="movie-info">
        <p>{title}</p>
        <p>{release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
