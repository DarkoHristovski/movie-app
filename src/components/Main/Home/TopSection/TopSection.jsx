import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./TopSectionStyle.css";
import { useState } from "react";

const TopSection = ({ movies }) => {
  const latestMovies = movies.slice().sort((itemA, itemB) => {
    return itemB.fields.releasing_year - itemA.fields.releasing_year;
  });
  const last_3_movies = latestMovies.slice(0, 3);
  console.log(latestMovies);
  console.log(last_3_movies);
  return (
    <>
      <div className="carouselWrapper">
        <Carousel>
          {last_3_movies.map((item) => (
            <Carousel.Item key={item.fields.title}>
              <div
                className="carouselItem"
                style={{ backgroundImage: `url(${item?.fields?.trailerImg?.fields?.file.url})` }}
              >
                <div className="carouselText">
                  <h2 className="carTitle">{item.fields.title}</h2>
                  <p>{item.fields.genre.map((genre) => genre).join(" / ")}</p>
                  <p>Rating {item.fields.rating}</p>
                  <div className="carButton">
                    <a
                      href={item.fields.linkTrailer}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Watch trailer
                    </a>
                  </div>
                  <p className="carDescript">{item.fields.description} </p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default TopSection;
