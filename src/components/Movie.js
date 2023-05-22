import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Movie = ({ id, poster, title, release, overview }) => {
  return (
    <div>
      <img src={poster} alt={title} style={{ width: "200px" }} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{release}</p>
      <p>{overview}</p>
      {/* {
        <ul>
          {movie.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      } */}
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Movie;

//     src={`https://image.tmdb.org/t/p/original${poster_path}`}
