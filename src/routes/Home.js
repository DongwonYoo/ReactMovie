import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ja-JP&page=1&sort_by=popularity.desc&api_key=27d409977772952380d3c511e12e7d93`
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading..</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              title={movie.title}
              release={movie.release_date}
              overview={movie.overview}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
