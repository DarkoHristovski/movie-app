import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import Loader from "../../Loader/Loader";
const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const client = createClient({
    space: "srxdrtp8asux",
    environment: "master", // defaults to 'master' if not set
    accessToken: "OAN2Iy_jUvtzP_OmX3_kfbpIT02AG5adBg1yVVuCSgk",
  });
  useEffect(() => {
    client
      .getEntry(id)
      .then((entry) => setMovieDetails(entry))
      .catch(console.error);
  }, []);
  return (
    <>
      {movieDetails ? (
        <section className="movie-details">
          <div className="movie-details-image">
          <div className="movie-details-img-wrapper">
            <img src={movieDetails?.fields?.image.fields.file.url} alt="" />
          </div>
          </div>
          <div className="movie-details-content">
            <h2 className="movie-details-title">
             <span>Title: </span>{movieDetails?.fields?.title}
            </h2>
            <p className="movie-details-year">
            <span>Year: </span>{movieDetails?.fields?.releasing_year}
            </p>
            <p className="movie-details-genre">
            <span>Genre: </span>{movieDetails?.fields?.genre.join(" / ")}
            </p>
            <p className="movie-details-description">
            <span>Description: </span>{movieDetails?.fields?.description}
            </p>
            <ul className="movies-info-list">
              <li>
                <span>Director:</span>
              </li>
              <li>
                <span>Writers:</span>
              </li>
              <li>
                <span>Stars: </span>
                {movieDetails?.fields?.actors.join(', ')}
              </li>
            </ul>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MovieDetails;
