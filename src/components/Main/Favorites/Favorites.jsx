import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
	const [favMovies, setFavMovies] = useState([]);

	useEffect(() => {
		const savedMovies = JSON.parse(localStorage.getItem('favMovies')) || [];
		setFavMovies(savedMovies);
	}, []);

	const removeFromFavorites = (movieId) => {
		const updatedFavMovies = favMovies.filter(
			(movie) => movie.sys.id !== movieId
		);
		localStorage.setItem('favMovies', JSON.stringify(updatedFavMovies));
		setFavMovies(updatedFavMovies);
	};

	return (
		<div className='movie-wrapper'>
			<div className='flex-container'>
				{favMovies.map((movie) => (
					// <div
					// 	key={movie.sys.id}
					// 	>
					<Link
						className='movie-card'
						to={`/movies/${movie.sys.id}`}
						key={movie.sys.id}
					>
						<div
							className='favorite-rm-icon'
							onClick={() => removeFromFavorites(movie.sys.id)}
						>
							<img
								src='../../src/assets/remove.png'
								alt='remove from favorites'
							/>
						</div>
						<img
							src={movie.fields.image.fields.file.url}
							alt={movie.fields.title}
						/>
					</Link>
					// </div>
				))}
			</div>
		</div>
	);
};

export default Favorites;
