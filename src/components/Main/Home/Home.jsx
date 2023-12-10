import Genre from "../../Main/Genre/Genre"
import  LatestMovies from "../LatestMovies";
import PopularMovies from "./PopularMovie";


const Home = ({movies}) =>{
    return(
        <>
        <LatestMovies movies={movies} />
        <PopularMovies movies={movies} />
        <Genre movies={movies} />
        </>
    )
}

export default Home