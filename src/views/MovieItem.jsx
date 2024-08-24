const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="poster"
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Vote: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieItem;
