import { observer } from "mobx-react-lite";
import "../css/MovieCard.css";
import { favoritesStore } from "../stores/favoritesStore";

export interface Movie {
  id?: number;
  title: string;
  poster_path?: string;
  release_date: string;
}

const MovieCard = observer(
  ({ id, title, poster_path, release_date }: Movie) => {
    const favorited = favoritesStore.isFavorite(id!);

    const handleFavorite = () => {
      if (favorited) {
        favoritesStore.removeFavorite(id!);
      } else {
        favoritesStore.addFavorite({ id, title, poster_path, release_date });
      }
    };

    return (
      <div className="movie-card">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
          <div className="movie-overlay">
            <button className="favorite-btn" onClick={handleFavorite}>
              {favorited ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{title}</h3>
          <p>{release_date?.split("-")[0]}</p>
        </div>
      </div>
    );
  },
);

export default MovieCard;
