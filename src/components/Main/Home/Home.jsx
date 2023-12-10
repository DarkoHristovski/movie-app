import Genre from "../../Main/Genre/Genre"
import  LatestMovies from "../LatestMovies";


const Home = ({movies}) =>{
    return(
        <>
        <LatestMovies movies={movies} />
        <Genre movies={movies} />
        </>
    )
}

export default Home