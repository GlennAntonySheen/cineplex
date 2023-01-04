import axios from 'axios'

export default class MoviesModel {
	async addNewMovie(movieDetails) {
		const res = await axios.post('http://localhost:4000/movies/addNewMovie', movieDetails)
		return res
	}

	async getAllMovie(filter = {}) {
		const allMovies = await axios.get('http://localhost:4000/movies/', { params: filter })
		return allMovies.data
	}

	async getMovieDetails(movieId) {
		const MovieDetails = await axios.get('http://localhost:4000/movies/getMovieDetails', { params: { movieId }})
		return MovieDetails.data
	}

	async changeStatus(id, newStatus) {
		const res = await axios.patch('http://localhost:4000/movies/changeStatus', { id, newStatus })
		return res
	}
}