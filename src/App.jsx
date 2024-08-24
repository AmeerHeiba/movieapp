import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./views/MovieList";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="app">
      <button className="theme-toggle-button" onClick={toggleTheme}>
        <div className="toggle-circle"></div>
      </button>
      <MovieList />
    </div>
  );
}

export default App;
