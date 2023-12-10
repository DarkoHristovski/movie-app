import { Link } from "react-router-dom";
const PopularMovies = ({movies}) =>{

    let mostPopularMovies = movies.filter(x=> x.fields.rating > 8);
    
    
    const latestMovies = movies.slice(0, 4);
    return (
        <>
        <section className="movie-wrapper">
        <div className="movie-wrapper-title">
        <h2>Most Popular Movies</h2>
        <p>Here are some of the most popular movies that our users &amp; viewers enjoy.</p>
</div>
<div className="flex-container">
        {mostPopularMovies.map((x) => (
          <Link to={`/movies/${x.sys.id}`} className="movie-card" key={x.sys.id}>
            <img src={x.fields.image.fields.file.url} alt="" />
            <p className="movie-title">{x.fields.title}</p>
            <p className="movie-rating">Rating: {x.fields.rating}</p>
          </Link>
        ))}
      </div>
      </section>
      </>
    )
}


export default PopularMovies