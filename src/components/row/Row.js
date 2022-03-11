import { useEffect, useState } from "react";
import axios from "../../axios"; //this name can change. change it in the export of axios file as well
import "./row.css";

const base_url = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        <p> {movies.title}</p>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
      //posters
    </div>
  );
}