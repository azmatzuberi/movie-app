import React from 'react';
import Movie from '../models/movie'
import movieService from '../services/movie'
import styles from '../css/styles.module.css'; 

interface PosterProps {
    onMovie: () => {}
}

function Poster({ onMovie } : any) {
    const [title , setTitle] = React.useState<string>("")
    const [movie , setMovie] = React.useState<Movie>()
    const [search , setSearch] = React.useState<boolean>()

    const getMovie = async () => {
       const movie = await movieService.getMovie(title)
       console.log(movie)
       setMovie(movie as Movie)
       onMovie(movie)
    }

    React.useEffect(() => {

        setMovie(movie)
      
      },[movie])

    return (
        <div className={styles.mainPosterPanel}>
            <div className={styles.formPanel}>
                <input className={styles.input} type='text' onChange={(e) => setTitle(e.target.value)} />
                <button className={styles.button} onClick={() => { getMovie(); setSearch(true)}}>Search</button>
            </div>
            { movie === undefined && search && <h2 className={styles.noMovie}>Movie not found</h2> }
            { movie && <img src={`https://image.tmdb.org/t/p/original` + movie.poster_path} alt={movie.title} className={styles.poster} /> }
        </div>
    );
}

export default Poster;