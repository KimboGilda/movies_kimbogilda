import { makeObservable, observable, action } from "mobx";
import type { Movie } from "../components/MovieCard";

class FavoritesStore {
  favorites: Movie[] = JSON.parse(localStorage.getItem("favorites") || "[]");

  constructor() {
    makeObservable(this, {
      favorites: observable,
      addFavorite: action,
      removeFavorite: action,
    });
  }

  addFavorite = (movie: Movie) => {
    this.favorites.push(movie);
    this.persist();
  };

  removeFavorite = (id: number) => {
    this.favorites = this.favorites.filter((m) => m.id !== id);
    this.persist();
  };

  isFavorite = (id: number) => {
    return this.favorites.some((m) => m.id === id);
  };

  private persist = () => {
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  };
}

export const favoritesStore = new FavoritesStore();
