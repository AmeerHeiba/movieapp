import { Component } from "react";
import MovieController from "../controllers/MovieController";
import MovieItem from "./MovieItem";
import FirstPosterComponent from "./FirstPosterComponent";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      const movies = await MovieController.fetchMovies();
      this.setState({ movies, loading: false });
    } catch (err) {
      this.setState({ error: "Failed to fetch movies", loading: false });
    }
  };

  render() {
    const { movies, loading, error } = this.state;
    if (error) {
      return <h1>{error}</h1>;
    }
    if (loading) {
      return <h1>Loading</h1>;
    }

    const categories = [
      { title: "Movies", start: 0, end: 6 },
      { title: "Series", start: 6, end: 12 },
      { title: "Action", start: 12, end: 18 },
      { title: "Superhero", start: 3, end: 9 },
      { title: "News", start: 3, end: 9 },
    ];

    return (
      <div>
        <FirstPosterComponent />

        {categories.map((category, index) => (
          <MovieCategory
            key={index}
            title={category.title}
            movies={movies.slice(category.start, category.end)}
          />
        ))}
      </div>
    );
  }
}

const MovieCategory = ({ title, movies }) => (
  <>
    <div className="movie-list-title">
      <span className="title">{title}</span>
      <span className="see-all">See All</span>
    </div>
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  </>
);

export default MovieList;
