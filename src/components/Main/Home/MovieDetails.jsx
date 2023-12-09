import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
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
  console.log(movieDetails);
  return (
    <section className="movie-details">
      <img src={movieDetails?.fields?.image.fields.file.url} alt="" />
      <h2>{movieDetails?.fields?.title}</h2>
    </section>
  );
};

export default MovieDetails;
