import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import Loader from '../../Loader/Loader';
import AngryIcon from "../../../ReactionIcons/angry.png";
import DislikeIcon from "../../../ReactionIcons/dislike.png";
import FireIcon from "../../../ReactionIcons/fire.png";
import LikeIcon from "../../../ReactionIcons/like.png";
import LoveIcon from "../../../ReactionIcons/love_it.png";
import PositIcon from "../../../ReactionIcons/positive.png";

const MovieDetails = () => {
	const [movieDetails, setMovieDetails] = useState(null);
	const [favMovies, setFavMovies] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const [reactionsObj, setReactionsObj] = useState({
    LoveIcon: 0,
    DislikeIcon: 0,
    AngryIcon: 0,
    FireIcon: 0,
    LikeIcon: 0,
    LoveIcon: 0,
    PositIcon: 0,
  });

  const [isClicked, setIsClicked] = useState({
    LoveIcon: false,
    DislikeIcon: false,
    AngryIcon: false,
    FireIcon: false,
    LikeIcon: false,
    LoveIcon: false,
    PositIcon: false,
  });

	const { id } = useParams();
	const client = createClient({
		space: 'srxdrtp8asux',
		environment: 'master', // defaults to 'master' if not set
		accessToken: 'OAN2Iy_jUvtzP_OmX3_kfbpIT02AG5adBg1yVVuCSgk',
	});
	useEffect(() => {
		client
			.getEntry(id)
			.then((entry) => setMovieDetails(entry))
			.catch(console.error);
	}, []);
	useEffect(() => {
		const savedMovies = JSON.parse(localStorage.getItem('favMovies')) || [];
		const movieIsFavorite = savedMovies.some((movie) => movie.sys.id === id);
		setIsFavorite(movieIsFavorite);
	}, [id]);
	const isSaved = () => {
		let savedMovies = JSON.parse(localStorage.getItem('favMovies')) || [];
		const movieId = movieDetails.sys.id;
		const movieIndex = savedMovies.findIndex(
			(movie) => movie.sys.id === movieId
		);

		if (movieIndex === -1) {
			// Add
			savedMovies = [...savedMovies, movieDetails];
			setIsFavorite(true);
		} else {
			// Remove
			savedMovies.splice(movieIndex, 1);
			setIsFavorite(false);
		}

		localStorage.setItem('favMovies', JSON.stringify(savedMovies));
		setFavMovies(savedMovies);
	};

	// return (
	// 	<>
	// 		{movieDetails ? (
	// 			<section className='movie-details'>
	// 				<div className='movie-details-image'>
	// 					<div className='movie-details-img-wrapper'>
	// 						<img
	// 							src={movieDetails?.fields?.image.fields.file.url}
	// 							alt=''
	// 						/>
	// 					</div>
	// 					<div className='favorite-icon'>
	// 						<img
	// 							src={
	// 								isFavorite
	// 									? '../../src/assets/fav.png'
	// 									: '../../src/assets/add-to-favorites.png'
	// 							}
	// 							alt={isFavorite ? 'favorite' : 'not favorite'}
	// 							onClick={isSaved}
	// 						/>
	// 					</div>
	// 				</div>
	// 				<div className='movie-details-content'>
	// 					<h2 className='movie-details-title'>
	// 						<span>Title: </span>
	// 						{movieDetails?.fields?.title}
	// 					</h2>
	// 					<p className='movie-details-year'>
	// 						<span>Year: </span>
	// 						{movieDetails?.fields?.releasing_year}
	// 					</p>
	// 					<p className='movie-details-genre'>
	// 						<span>Genre: </span>
	// 						{movieDetails?.fields?.genre.join(' / ')}
	// 					</p>
	// 					<p className='movie-details-description'>
	// 						<span>Description: </span>
	// 						{movieDetails?.fields?.description}
	// 					</p>
	// 					<ul className='movies-info-list'>
	// 						<li>
	// 							<span>Director:</span>
	// 						</li>
	// 						<li>
	// 							<span>Writers:</span>
	// 						</li>
	// 						<li>
	// 							<span>Stars: </span>
	// 							{movieDetails?.fields?.actors.join(', ')}
	// 						</li>
	// 					</ul>
	// 				</div>
	// 			</section>
	// 		) : (
	// 			<Loader />
	// 		)}
	// 	</>
  // );
  
  useEffect(() => {
    console.log("useEf");
    function randomReaction() {
      setReactionsObj((prevReactions) => {
        return {
          ...prevReactions,
          LoveIcon: Math.floor(Math.random() * 500),
          DislikeIcon: Math.floor(Math.random() * 500),
          AngryIcon: Math.floor(Math.random() * 100),
          FireIcon: Math.floor(Math.random() * 500),
          LikeIcon: Math.floor(Math.random() * 500),
          PositIcon: Math.floor(Math.random() * 500),
        };
      });
    }
    randomReaction();
  }, []);

  function addReaction(i) {
    const reactionIddiv = i.target.id;
    let statusReact = isClicked[reactionIddiv];
    console.log(reactionIddiv);
    console.log(statusReact);
    if (reactionIddiv && !statusReact) {
      setReactionsObj((prevReactions) => {
        const reactToChange = reactionIddiv;
        return {
          ...prevReactions,
          [reactToChange]: prevReactions[reactToChange] + 1,
        };
      });
      setIsClicked((prevIsClicked) => ({
        ...prevIsClicked,
        [reactionIddiv]: !prevIsClicked[reactionIddiv],
      }));
    }
    if (reactionIddiv && statusReact) {
      setReactionsObj((prevReactions) => {
        const reactToChange = reactionIddiv;
        return {
          ...prevReactions,
          [reactToChange]: prevReactions[reactToChange] - 1,
        };
      });
      setIsClicked((prevIsClicked) => ({
        ...prevIsClicked,
        [reactionIddiv]: !prevIsClicked[reactionIddiv],
      }));
    }

    const reactionIImg = i.target.className;
    statusReact = isClicked[reactionIImg];
    console.log(reactionIImg);

    if (reactionIImg && !statusReact) {
      setReactionsObj((prevReactions) => {
        const reactToChange = reactionIImg;
        return {
          ...prevReactions,
          [reactToChange]: prevReactions[reactToChange] + 1,
        };
      });
      setIsClicked((prevIsClicked) => ({
        ...prevIsClicked,
        [reactionIImg]: !prevIsClicked[reactionIImg],
      }));
    }
    if (reactionIImg && statusReact) {
      setReactionsObj((prevReactions) => {
        const reactToChange = reactionIImg;
        return {
          ...prevReactions,
          [reactToChange]: prevReactions[reactToChange] - 1,
        };
      });
      setIsClicked((prevIsClicked) => ({
        ...prevIsClicked,
        [reactionIImg]: !prevIsClicked[reactionIImg],
      }));
    }
  }

	return (
    <>
      {movieDetails ? (
        <section className="movie-details">
          <h2 className="movie-details-title">{movieDetails?.fields?.title}</h2>
          <p className="movie-details-year">
            {movieDetails?.fields?.releasing_year}
          </p>
          <div className="flex-container-movie-details">
            <div className="movie-video-details-video-part">
              <div className="movie-details-image">
                <div className="movie-details-img-wrapper">
                  <div className="favorite-icon">
                    <img
                      src={
                        isFavorite
                          ? "../../src/assets/fav.png"
                          : "../../src/assets/add-to-favorites.png"
                      }
                      alt={isFavorite ? "favorite" : "not favorite"}
                      onClick={isSaved}
                    />
                  </div>
                  <img
                    src={movieDetails?.fields?.image.fields.file.url}
                    alt=""
                  />
                </div>
              </div>
              <div className="movie-video-traier">
                <iframe
                  width="560"
                  height="315"
                  src={movieDetails?.fields?.embedLink}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="movie-video-details-text-part">
              <div className="movie-details-content">
                <p className="movie-details-genre">
                  <span>Genre: </span>
                  {movieDetails?.fields?.genre.join(" / ")}
                </p>
                <p className="movie-details-description">
                  <span>Description: </span>
                  {movieDetails?.fields?.description}
                </p>
                <ul className="movies-info-list">
                  <li>
                    <span>Director: </span>
                    {movieDetails?.fields?.director}
                  </li>
                  <li>
                    <span>Writers: </span>
                    {movieDetails?.fields?.writers.join(", ")}
                  </li>
                  <li>
                    <span>Stars: </span>
                    {movieDetails?.fields?.actors.join(", ")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ReactionsWrapper">
            <h3>Reactions</h3>
            <div className="Reactions">
              <div
                className="icons"
                id="FireIcon"
                onClick={(i) => addReaction(i)}
              >
                <img src={FireIcon} alt="" className="FireIcon" />
                <p className="FireIcon">{reactionsObj.FireIcon}</p>
              </div>
              <div
                className="icons"
                id="LoveIcon"
                onClick={(i) => addReaction(i)}
              >
                <img src={LoveIcon} alt="" className="LoveIcon" />
                <p>{reactionsObj.LoveIcon}</p>
              </div>
              <div
                className="icons"
                id="PositIcon"
                onClick={(i) => addReaction(i)}
              >
                <img src={PositIcon} alt="" className="PositIcon" />
                <p>{reactionsObj.PositIcon}</p>
              </div>
              <div
                className="icons"
                id="LikeIcon"
                onClick={(i) => addReaction(i)}
              >
                <img src={LikeIcon} alt="" className="LikeIcon" />
                <p>{reactionsObj.LikeIcon}</p>
              </div>
              <div
                className="icons"
                id="DislikeIcon"
                onClick={(i) => addReaction(i)}
              >
                <img src={DislikeIcon} alt="" className="DislikeIcon" />
                <p>{reactionsObj.DislikeIcon}</p>
              </div>
              <div
                className="icons"
                id="AngryIcon"
                onClick={(i) => addReaction(i)}
              >
                <img src={AngryIcon} alt="" className="AngryIcon" />
                <p>{reactionsObj.AngryIcon}</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MovieDetails;
