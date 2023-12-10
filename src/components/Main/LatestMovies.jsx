import { Link } from "react-router-dom";
const LatestMovies = ({movies}) =>{

    const latestMovies = movies.slice(0, 4);
    return (
        <>
         <p>Latest Movies</p>
      
        <div className="all-movie-wrapper">
        {latestMovies.map((x) => (
          <Link to={`/movies/${x.sys.id}`} className="movie-card" key={x.sys.id}>
            <img src={x.fields.image.fields.file.url} alt="" />
          </Link>
        ))}
      </div>
      </>
    )
}


export default LatestMovies