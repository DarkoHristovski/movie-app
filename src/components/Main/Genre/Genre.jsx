import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
const Genre = ({ movies }) => {
  const [genreList, setGenreList] = useState([]);
  const { genre } = useParams();

  return (
    <div className="all-movie-wrapper">
      {movies.map((x) => {
        {
          let newGenreArr = [...x.fields.genre].toString();

          console.log(newGenreArr);
        }
        return (
          <Link
            key={x.sys.id}
            to={`/genre/${[...x.fields.genre].toString()}`}
            className="genre-div movie-card"
          >
            <p>{[...x.fields.genre]}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Genre;
