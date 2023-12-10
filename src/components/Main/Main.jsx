import { Route, Routes, Link } from "react-router-dom";
import Movies from "./Home/Movies";
import Genre from "./Genre/Genre";
import GenreFilter from "./Genre/GenreFilter";
import MovieDetails from "./Home/MovieDetails";
import Home from './Home/Home'

const Main = ({ movies }) => {
  
  return (
    <main>
      <Routes>
        {/*movies.map((x) => console.log(x.fields.genre))*/}
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/genre/:name" element={<GenreFilter />} />
      </Routes>
    </main>
  );
};

export default Main;
