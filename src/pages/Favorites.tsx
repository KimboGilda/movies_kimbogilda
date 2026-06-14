import { observer } from "mobx-react-lite";
import MovieCard from "../components/MovieCard";
import "../css/Favorite.css";
import { favoritesStore } from "../stores/favoritesStore";

const Favorites = observer(() => {
  return (
    <div className="favorites">
      {favoritesStore.favorites.length === 0 ? (
        <>
          <h2>No favorite movies yet</h2>
          <p>Add here your favorite movies</p>
        </>
      ) : (
        <div className="movies-grid">
          {favoritesStore.favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default Favorites;
