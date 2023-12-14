import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
	const [favMovies, setFavMovies] = useState([]);

	useEffect(() => {
		const savedMovies = JSON.parse(localStorage.getItem('favMovies')) || [];
		setFavMovies(savedMovies);
	}, []);

	return (
		<div className='movie-wrapper'>
			<div className='flex-container'>
				{favMovies.map((movie) => (
					<Link
						to={`/movies/${movie.sys.id}`}
						className='movie-card'
						key={movie.sys.id}
					>
						<img
							src={movie.fields.image.fields.file.url}
							alt={movie.fields.title}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Favorites;
