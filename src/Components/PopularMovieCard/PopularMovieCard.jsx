const PopularMovieCard = ({ movie }) => {
  return (
    <>
      <li>
        {movie.title}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={150}
        />
        <p>Rating: {movie.vote_average}</p>
      </li>
    </>
  );
};
export default PopularMovieCard;
