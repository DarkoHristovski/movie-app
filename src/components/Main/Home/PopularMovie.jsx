import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const PopularMovies = ({movies}) =>{

    let mostPopularMovies = movies.sort((a,b)=> b.fields.rating-a.fields.rating).filter(x=> x.fields.rating > 7)
    console.log(mostPopularMovies)

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:true
    };
    return (
        <>
     
  
        <section className="movie-wrapper">
        <div className="movie-wrapper-title">
        <h2>Most Popular Movies</h2>
        <p>Here are some of the most popular movies that our users &amp; viewers enjoy.</p>
</div>
<div className="">
<Slider {...settings}>
        {mostPopularMovies.map((x) => (
          <Link to={`/movies/${x.sys.id}`} className="movie-card" key={x.sys.id}>
            <img src={x.fields.image.fields.file.url} alt="" />
            <p className="movie-title">{x.fields.title}</p>
            <p className="movie-rating">Rating: {x.fields.rating}</p>
          </Link>
        ))}
        </Slider>
      </div>
      </section>
      </>
    )
}


export default PopularMovies