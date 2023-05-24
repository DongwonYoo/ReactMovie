import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import prevArrowImage from "../icon/prev.png";
import nextArrowImage from "../icon/next.png";
import Navigation from "../components/Navigation";
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
    return () => {};
  }, []);

  const PrevArrow = (props) => (
    <div className={styles.customArrow_prev} onClick={props.onClick}>
      <img src={prevArrowImage} alt="이전" />
    </div>
  );

  const NextArrow = (props) => (
    <div className={styles.customArrow_next} onClick={props.onClick}>
      <img src={nextArrowImage} alt="다음" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    draggable: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const responsiveSettings = [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Navigation />
        {loading ? (
          <h1>loading..</h1>
        ) : (
          <div className={styles.movie}>
            <p>Popular</p>
            <div className={styles.movieList}>
              <Slider {...settings} responsive={responsiveSettings}>
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
              </Slider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
