// src/views/MovieItemFirstPoster.jsx

const MovieItemFirstPoster = ({ Firstposter }) => {
    return (
      <div className="movies-Poster">
        <img src={`https://image.tmdb.org/t/p/w500/${Firstposter.poster_path}`} alt="poster" />
        <div className="movie-Poster-info">
          <p>{Firstposter.title}</p>
          <p>{Firstposter.type}</p>
        </div>
      </div>
    );
  };
  
  export default MovieItemFirstPoster;
  