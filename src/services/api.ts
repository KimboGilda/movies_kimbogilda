const API_KEY = "53eff14b73bc258c93c00bb96ed3d67e";
const BASE_URL = "https://api.themoviedb.org/3/";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  const data = await response.json();

  return data.results;
};

export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURI(query)}`,
  );

  const data = await response.json();

  return data.results;
};
