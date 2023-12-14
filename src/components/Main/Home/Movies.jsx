import { Link } from 'react-router-dom';
const Movies = ({ movies }) => {
	console.log(movies);
	return (
		<div className='movie-wrapper'>
			<div className='flex-container'>
				{movies.map((x) => (
					<Link
						to={`/movies/${x.sys.id}`}
						className='movie-card'
						key={x.sys.id}
					>
						<img
							src={x.fields.image.fields.file.url}
							alt=''
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Movies;
