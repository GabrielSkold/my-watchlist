const PopularMovieCard = ({ movie, handleAddMovie, isInWatchlist }) => {
  return (
    <li>
      {movie.title}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={150}
      />
      <p>Rating: {movie.vote_average}</p>
      <button onClick={() => handleAddMovie(movie)} disabled={isInWatchlist}>
        {isInWatchlist ? "In watchlist" : "Add to watchlist"}
      </button>
    </li>
  );
};
export default PopularMovieCard;
