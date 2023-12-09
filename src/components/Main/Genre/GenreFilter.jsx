import { useParams, useNavigate, Link } from "react-router-dom";
const GenreFilter = () => {
  const { genre } = useParams();
  return <div>Filterng Genre</div>;
};

export default GenreFilter;
