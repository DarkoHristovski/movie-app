import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import Loader from "../../Loader/Loader";

const GenreFilter = () => {
  const [movies, setMovies] = useState([]);
  const { genre } = useParams();

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
        const filteredMoviesList = moviesList.filter((item) =>
          item.fields.genre.includes(genre)
        );
        setMovies(filteredMoviesList);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {movies.length > 0 ? (
        <>
          <div className="topSectMovies">
            <p className="animate-charcter">{genre}</p>
          </div>
          <section className="movie-wrapper">
            <div className="flex-container">
              {movies.map((x) => (
                <Link
                  to={`/movies/${x.sys.id}`}
                  className="movie-card"
                  key={x.sys.id}
                >
                  <img src={x.fields.image.fields.file.url} alt="" />
                </Link>
              ))}
            </div>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default GenreFilter;
