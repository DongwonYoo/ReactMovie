import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styles from "./Movie.module.css";
import ModalBasic from "./ModalBasic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movie = ({ id, poster, title, release, onClick }) => {
  const handleClick = (id, onClick) => {
    onClick(id);
  };

  return (
    <div className={styles.movie_data}>
      <div
        className={styles.movie_link}
        onClick={() => handleClick(id, onClick)}
      >
        <img
          src={poster}
          alt={title}
          style={{ height: "310px", width: "200px" }}
        />
        <h2 className={styles.movie_title}>{title}</h2>
        <p className={styles.movie_release}>{release}</p>
      </div>
    </div>
  );
};
export default Movie;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

//  src={`https://image.tmdb.org/t/p/original${poster_path}`}
