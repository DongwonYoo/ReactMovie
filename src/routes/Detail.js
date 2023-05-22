import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=ja-JP&page=1&sort_by=popularity.desc&api_key=27d409977772952380d3c511e12e7d93`
      )
    ).json();

    setMovie(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <DetailMovie
            key={movie.id}
            poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            release={movie.release_date}
            title={movie.title}
            genres={movie.genres}
            homepage={movie.homepage}
            overview={movie.overview}
          />
        </div>
      )}
    </div>
  );
};
export default Detail;
