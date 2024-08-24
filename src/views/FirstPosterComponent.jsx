import { Component } from "react";
import MovieItemFirstPoster from "./MovieItemFirstPoster";
import MovieController from "../controllers/MovieController";

class FirstPosterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstPoster: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchFirstPoster();
  }

  fetchFirstPoster = async () => {
    try {
      const movies = await MovieController.fetchMovies();
      // Assuming you want to take the first movie as the first poster.
      const FirstPoster = movies.length > 0 ? movies[1] : null;
      this.setState({ FirstPoster, loading: false });
    } catch (err) {
      this.setState({ error: "Failed to fetch first poster", loading: false });
    }
  };

  render() {
    const { FirstPoster, loading, error } = this.state;
    if (error) {
      return <h1>{error}</h1>;
    }
    if (loading) {
      return <h1>Loading</h1>;
    }
    if (!FirstPoster) {
      return <h1>No Poster Available</h1>;
    }
    return (
      <div className="movie-list">
        <MovieItemFirstPoster
          key={FirstPoster.id}
          Firstposter={FirstPoster}
        />
      </div>
    );
  }
}

export default FirstPosterComponent;
