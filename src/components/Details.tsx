import React from 'react';
import Movie from '../models/movie'
import MovieDetails from '../models/movieDetails'
import styles from '../css/styles.module.css'; 
import movieService from '../services/movie'

interface DetailsProps {
    movie: Movie | undefined
}

function Details({ movie }: DetailsProps) {
    const [movieDetails, setMovieDetails] = React.useState<MovieDetails>()
    React.useEffect(() => {
        const fetchData = async () => {
           return await movieService.getMovieDetails(movie ? movie.id : "")
        }
        const movieDetails = fetchData().then((movieDetails) => setMovieDetails(movieDetails))
    }, [movie])

    return (
        <aside className={styles.aside}>
            <h2>{movie?.title}</h2>
            {movieDetails && <p>Release date: {movieDetails?.release_date}</p>}
            <p>{movie?.overview}</p>
            {movieDetails && movieDetails &&<span>Genres:</span>}
            <ul>
                {movieDetails?.genres.map((genre) =>  <li key={movieDetails.id}>{genre.name}</li> )}
            </ul>
            {movieDetails && <p>Budget: ${movieDetails?.budget.toLocaleString()}</p>}
            {movieDetails && <span>Production companies:</span>}
            <ul>
                {movieDetails?.production_companies.map(company => <li key={movieDetails.id}>{company.name}</li>)}
            </ul>
            <p>{movieDetails && <span>Revenue:</span> && <span>${movieDetails?.revenue.toLocaleString()}</span>}</p>


        </aside>
    );
}

export default Details;