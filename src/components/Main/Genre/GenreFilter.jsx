import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "contentful";

const GenreFilter = () => {
  const [movies, setMovies] = useState([]);
  const { name: genres } = useParams();

  const SPACE_ID = "srxdrtp8asux";
  const ACCESS_TOKEN = "OAN2Iy_jUvtzP_OmX3_kfbpIT02AG5adBg1yVVuCSgk";
  const ENVIROMENT_NAME = "master";
  const client = createClient({
    space: SPACE_ID,
    environment: ENVIROMENT_NAME, // defaults to 'master' if not set
    accessToken: ACCESS_TOKEN,
  });
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        const moviesList = response.items;
        const filteredMoviesList = moviesList.filter((item) => item.fields.genre.includes(genres));
        setMovies(filteredMoviesList)
      })
      .catch(console.error);
  }, []);

  return (
  <div className="all-movie-wrapper">
    {movies.map((x) => (
      <Link to={`/movies/${x.sys.id}`} className="movie-card" key={x.sys.id}>
        <img src={x.fields.image.fields.file.url} alt="" />
      </Link>
    ))}
  </div>
  )
};

export default GenreFilter;
