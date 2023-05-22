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
    <div>
      <img src={poster} alt={title} style={{ width: "200px" }} />
      <h2>{title}</h2>
      <p>公開日：{release}</p>
      <ul>
        {genres.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
      <p>{overview}</p>
      <a href={homepage} target="_blank" rel="noreferrer">
        Visit Homepage
      </a>
    </div>
  );
};

export default DetailMovie;
