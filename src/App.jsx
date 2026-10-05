import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard/MovieCard";

const initialMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    watched: false,
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Drama",
    director: "Francis Ford Coppola",
    watched: false,
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    director: "Christopher Nolan",
    watched: false,
  },
  {
    id: 4,
    title: "The Godfather Part II",
    genre: "Drama",
    director: "Francis Ford Coppola",
    watched: false,
  },
  {
    id: 5,
    title: "The Lord of the Rings: The Return of the King",
    genre: "Fantasy",
    director: "Peter Jackson",
    watched: false,
  },
  {
    id: 6,
    title: "12 Angry Men",
    genre: "Drama",
    director: "Sidney Lumet",
    watched: false,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [apiMovies, setApiMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        },
      );
      const data = await response.json();
      setApiMovies(data.results);
    };

    fetchPopularMovies();
  }, []);

  const handleToggleWatched = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          watched: !movie.watched,
        };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  const handleDeleteMovie = (id) => {
    const remainingMovies = movies.filter((movie) => movie.id !== id);
    setMovies(remainingMovies);
  };

  return (
    <main>
      <h1>My Watchlist</h1>
      <input type="text" placeholder="Search for a movie..." />
      <button>Search</button>
      <ul>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
            handleToggleWatched={handleToggleWatched}
            handleDeleteMovie={handleDeleteMovie}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
