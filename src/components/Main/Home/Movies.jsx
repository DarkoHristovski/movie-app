import { Link } from "react-router-dom";
import { useState } from "react";
const Movies = ({ movies }) => {
  console.log(movies);
  const[search, setSearch]= useState('')
  return (
    <>
      <div className="topSectMovies">
        <p className="animate-charcter">Choose your Movie</p>
      </div>
      <div className="movie-wrapper">
        <div className="search-movie">
        <form>
          <input type="text" placeholder="Search for a movies" onChange={(e)=> setSearch(e.target.value)} />
        </form>
        </div>
        <div className="flex-container">
          {movies.filter((movie)=>{
            return search.toLowerCase === ''
            ? movie
            :movie.fields.title.toLowerCase().includes(search)
          }).map((x) => (
            <Link
              to={`/movies/${x.sys.id}`}
              className="movie-card"
              key={x.sys.id}
            >
              <img src={x.fields.image.fields.file.url} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
