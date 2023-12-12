import { Link } from "react-router-dom";

const LatestMovies = ({movies}) =>{

    const latestMovies = movies.slice(0, 4);
    return (
        <>
        <section className="movie-wrapper">
          <div className="movie-wrapper-title">
        <h2>Latest Movies</h2>
        <p>Check out the latest movies, available at our movie application.</p>
        </div>
<div className="flex-container">
        {latestMovies.map((x) => (
          <Link to={`/movies/${x.sys.id}`} className="movie-card" key={x.sys.id}>
            <img src={x.fields.image.fields.file.url} alt="" />
            <p className="movie-title">{x.fields.title}</p>
          </Link>
        ))}
      </div>
      </section>
      </>
    )
}


export default LatestMovies