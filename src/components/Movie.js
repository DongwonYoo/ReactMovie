import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styles from "./Movie.module.css";
const Movie = ({ id, poster, title, release, overview }) => {
  return (
    <div className={styles.movie_data}>
      <img src={poster} alt={title} style={{ width: "200px" }} />
      <h2 className={styles.movie_title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p className={styles.movie_release}>{release}</p>
      <p className={styles.movie_overview}>
        {/* overviewのlengthが２３５を超えた場合２３５まで表示する */}

        {overview.length > 60 ? `${overview.slice(0, 60)}...` : overview}
      </p>
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
