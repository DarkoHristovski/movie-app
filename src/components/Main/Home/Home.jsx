import Genre from "../../Main/Genre/Genre"
import  LatestMovies from "../LatestMovies";
import PopularMovies from "./PopularMovie";
import TopSection from "../TopSection"

const Home = ({movies}) =>{
    return (
      <>
        <TopSection movies={movies} />
        <LatestMovies movies={movies} />
        <PopularMovies movies={movies} />
        <Genre movies={movies} />
      </>
    );
}

export default Home