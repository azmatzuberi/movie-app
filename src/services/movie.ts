import axios from 'axios'
import Movie from '../models/movie'
import MovieDetails from '../models/movieDetails'

class MovieService {
    http = axios.create({
        baseURL: 'https://api.themoviedb.org/3/'
    })

    key = ''

    async getMovie(title: string) {
        const response = await this.http.get<Movie>(`/search/movie?api_key=${this.key}&query=${encodeURIComponent(title)}`)
        return response.data.results[0]
    }

    async getMovieDetails(id: string) {
        const response = await this.http.get<MovieDetails>(`/movie/${id}?api_key=${this.key}`)
        return response.data
    }

    async removeReminder(id: number) {
        const response = await this.http.delete('/' + id)
        return response.data
    }
}

export default new MovieService()