import { Link } from "react-router-dom";
import { useState } from "react";
const Genre = ({ movies }) => {
  const [genreList, setGenreList] = useState(['Action', 'Adventure', 'Drama', 'Crime', 'Fantasy', 'Sci-Fi', 'Mystery']);

  return (
    <div className="all-movie-wrapper">
      {
      genreList.map((genre) => {
        return (
          <Link
            key={genre}
            to={`/genre/${genre}`}
            className="genre-div movie-card"
          >
            <p>{genre}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Genre;
