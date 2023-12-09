import { Route, Routes, Link } from "react-router-dom";
import Movies from "./Home/Movies";
import Genre from "./Genre/Genre";
import GenreFilter from "./Genre/GenreFilter";
import MovieDetails from "./Home/MovieDetails";

const Main = ({ movies }) => {
  const latestThreeMovies = movies.slice(0, 3);
  return (
    <main>
      <Routes>
        {/*movies.map((x) => console.log(x.fields.genre))*/}
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/genre" element={<Genre movies={movies} />} />
        <Route path="/genre/:name" element={<GenreFilter />} />
      </Routes>
    </main>
  );
};

export default Main;
