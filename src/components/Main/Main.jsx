import { Route, Routes, Link } from "react-router-dom";
import Movies from "./Home/Movies";
import Genre from "./Genre/Genre";
import Favorites from './Favorites/Favorites'
import GenreFilter from "./Genre/GenreFilter";
import MovieDetails from "./Home/MovieDetails";
import Home from './Home/Home'
import NotFound from "../NotFound/NotFound";



const Main = ({ movies }) => {
	return (
		<main>
			<Routes>
				{/*movies.map((x) => console.log(x.fields.genre))*/}
				<Route
					path='/'
					element={<Home movies={movies} />}
				/>
				<Route
					path='/movies'
					element={<Movies movies={movies} />}
				/>
				<Route
					path='/favorites'
					element={<Favorites movies={movies} />}
				/>
				<Route
					path='/movies/:id'
					element={<MovieDetails />}
				/>
				<Route
					path='/genre/:genre'
					element={<GenreFilter />}
				/>
         <Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	);
};

export default Main;
