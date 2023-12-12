import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./TopSectionStyle.css";
import Slider from "react-slick";
import TopCarousel from "./TopCarousel"

const TopSection = ({ movies }) => {
  const latestMovies = movies.slice(0, 3);
  console.log(latestMovies)
  return (
    <>
      <TopCarousel/>
    </>
  );
};

export default TopSection;
