import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import TopSection from "../Main/"


const TopSection = ({ movies }) => {
  const latestMovies = movies.slice(0, 3);
  console.log(latestMovies)
  return (
    <div className="carouselWrapper">
      <Carousel>
        <Carousel.Item>
          <img
            src="https://www.sky.de/static/img/filmhighlights/John-Wick-Kapitel-4-Sky-23-12-Teaser2-16-9.jpg?impolicy=p_cm05"
            alt="text"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.sky.de/static/img/filmhighlights/John-Wick-Kapitel-4-Sky-23-12-Teaser2-16-9.jpg?impolicy=p_cm05"
            alt="text"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.sky.de/static/img/filmhighlights/John-Wick-Kapitel-4-Sky-23-12-Teaser2-16-9.jpg?impolicy=p_cm05"
            alt="text"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopSection;
