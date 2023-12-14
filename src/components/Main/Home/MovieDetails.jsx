import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import Loader from '../../Loader/Loader';
const MovieDetails = () => {
	const [movieDetails, setMovieDetails] = useState(null);
	const [favMovies, setFavMovies] = useState([]);
	const [isFavorite, setIsFavorite] = useState(false);

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

	return (
		<>
			{movieDetails ? (
				<section className='movie-details'>
					<div className='movie-details-image'>
						<div className='movie-details-img-wrapper'>
							<img
								src={movieDetails?.fields?.image.fields.file.url}
								alt=''
							/>
						</div>
						<div className='favorite-icon'>
							<img
								src={
									isFavorite
										? '../../src/assets/fav.png'
										: '../../src/assets/add-to-favorites.png'
								}
								alt={isFavorite ? 'favorite' : 'not favorite'}
								onClick={isSaved}
							/>
						</div>
					</div>
					<div className='movie-details-content'>
						<h2 className='movie-details-title'>
							<span>Title: </span>
							{movieDetails?.fields?.title}
						</h2>
						<p className='movie-details-year'>
							<span>Year: </span>
							{movieDetails?.fields?.releasing_year}
						</p>
						<p className='movie-details-genre'>
							<span>Genre: </span>
							{movieDetails?.fields?.genre.join(' / ')}
						</p>
						<p className='movie-details-description'>
							<span>Description: </span>
							{movieDetails?.fields?.description}
						</p>
						<ul className='movies-info-list'>
							<li>
								<span>Director:</span>
							</li>
							<li>
								<span>Writers:</span>
							</li>
							<li>
								<span>Stars: </span>
								{movieDetails?.fields?.actors.join(', ')}
							</li>
						</ul>
					</div>
				</section>
			) : (
				<Loader />
			)}
		</>
	);
};

export default MovieDetails;
