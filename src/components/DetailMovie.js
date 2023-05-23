import React from "react";
import styles from "./DetailMovie.module.css";

const DetailMovie = ({
  id,
  release,
  title,
  poster,
  genres,
  homepage,
  overview,
}) => {
  return (
    <div className={styles.detail_movie}>
      <img src={poster} alt={title} style={{ width: "200px" }} />
      <h2 className={styles.detail_movie_title}>{title}</h2>
      <p className={styles.detail_movie_release}>公開日：{release}</p>
      <ul className={styles.detail_movie_ul}>
        {genres.map((g) => (
          <li className={styles.detail_movie_li} key={g.id}>
            {g.name}
          </li>
        ))}
      </ul>
      <p className={styles.detail_movie_overview}>
        {overview.length > 235 ? `${overview.slice(0, 235)}` : overview}
      </p>
      <a
        className={styles.detail_movie_link}
        href={homepage}
        target="_blank"
        rel="noreferrer"
      >
        {homepage === "" ? <p></p> : <p>公式ホームページ</p>}
      </a>
    </div>
  );
};

export default DetailMovie;
