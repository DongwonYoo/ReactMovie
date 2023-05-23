import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styles from "./Movie.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Movie = ({ id, poster, title, release, overview }) => {
  return (
    <Link to={`/movie/${id}`} className="movie_link">
      <div className={styles.movie_data}>
        <img
          src={poster}
          alt={title}
          style={{ height: "310px", width: "200px" }}
        />
        <h2 className={styles.movie_title}>{title}</h2>
        <p className={styles.movie_release}>{release}</p>
      </div>
    </Link>
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
