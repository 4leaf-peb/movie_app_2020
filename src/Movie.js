import React from "react";
import propTyeps from "prop-types";
import "./Movie.css";

function Movie({ title, summary, poster, genres, year }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, idx) => (
            <li key={idx} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.propTyeps = {
  id: propTyeps.number.isRequired,
  year: propTyeps.number.isRequired,
  title: propTyeps.string.isRequired,
  summary: propTyeps.string.isRequired,
  poster: propTyeps.string.isRequired,
  genres: propTyeps.arrayOf(propTyeps.string).isRequired,
};

export default Movie;
