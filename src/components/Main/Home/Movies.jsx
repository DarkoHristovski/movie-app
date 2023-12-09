import { Link } from "react-router-dom";
const Movies = ({ movies }) => {
  console.log(movies);
  return (
    <div className="all-movie-wrapper">
      {movies.map((x) => (
        <Link to={`/movies/${x.sys.id}`} className="movie-card" key={x.sys.id}>
          <img src={x.fields.image.fields.file.url} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default Movies;
