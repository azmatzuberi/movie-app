import React from 'react';
import Poster from '../components/Poster'
import Details from '../components/Details'
import Movie from '../models/movie'
import styles from '../css/styles.module.css'; 

function Home() {
    const [movie, setMovie] = React.useState<Movie>()
    return (
        <section className={styles.home}>
            <Poster onMovie={setMovie} />
            <Details movie={movie}/>
        </section>
    );
}

export default Home;