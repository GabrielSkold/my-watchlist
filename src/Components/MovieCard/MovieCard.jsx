const MovieCard = ({
  title,
  genre,
  director,
  id,
  watched,
  handleToggleWatched,
  handleDeleteMovie,
}) => {
  return (
    <ul>
      <li>
        <h2>{title}</h2>
        <p>Genre: {genre}</p>
        <p>Director: {director}</p>
        <button onClick={() => handleToggleWatched(id)}>
          {watched ? "Watched" : "Not watched"}
        </button>
        <button onClick={() => handleDeleteMovie(id)}>
          Delete from watchlist
        </button>
      </li>
    </ul>
  );
};

export default MovieCard;
