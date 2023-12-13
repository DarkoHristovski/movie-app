import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./TopSectionStyle.css";

const TopSection = ({ movies }) => {
  const latestMovies = movies.slice(0, 3);
  console.log(latestMovies);
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="img"
              src="https://www.sky.de/static/img/filmhighlights/John-Wick-Kapitel-4-Sky-23-12-Teaser2-16-9.jpg?impolicy=p_cm05"
              alt="img"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default TopSection;
