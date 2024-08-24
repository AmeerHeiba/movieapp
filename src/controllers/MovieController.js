import axios from "axios";
import MovieModel from "../models/MovieModel";

class MovieController {
  static async fetchMovies() {
    try {
      const response = await axios.get(
        "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      );
      return response.data.results.map((movie) => new MovieModel(movie));
    } catch (err) {
      console.error("Error fetching movies:", err);
      throw new Error("Failed to fetch movies");
    }
  }
}

export default MovieController;
