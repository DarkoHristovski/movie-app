import { Link } from "react-router-dom";
import { useState } from "react";
import "../Genre/genre.css"
const Genre = ({ movies }) => {
  let newArr = movies.map(x=> [...x.fields.genre]).toString().split(',');
let uniqeArr= []
  for(let i = 0; i < newArr.length; i++){
if(!uniqeArr.includes(newArr[i])){
  uniqeArr.push(newArr[i])
}
  }
  const [genreList, setGenreList] = useState(uniqeArr);

  
  
  return (
    <section className="movie-wrapper">
       <div className="movie-wrapper-title">
<h2>Popular Categories</h2>
<p>All content at our movie application is divided into several categories. It helps you to easily navigate between them and find what you like.</p>
</div>
       <div className="flex-container">
      {
      genreList.map((genre,i) => {
        return (
          <Link
            key={genre}
            to={`/genre/${genre}`}
            className = "genre-div movie-card genre-card" 
          >
            <div className={`box-${i} background-image`}>
              <p>{genre}</p>
            </div>
          </Link>
        );
      })}
    </div>
    </section>
  );
};

export default Genre;
