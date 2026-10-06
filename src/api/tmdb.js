const getPopularMovies = async () => {
  const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });
  const data = await response.json();
  return data.results;
};

export default getPopularMovies;
