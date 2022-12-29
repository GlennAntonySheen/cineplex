import axios from 'axios'

export default class MoviesModel {
	async addNewMovie(movieDetails) {
		const res = await axios.post('http://localhost:4000/movies/addNewMovie', movieDetails)
		return res
	}
	
	async getAllMovie(filter = {}) {
		const allMovies = await axios.post('http://localhost:4000/movies/', filter)
		return allMovies.data
	}

	async changeStatus(id, newStatus) {
		const res = await axios.patch('http://localhost:4000/movies/changeStatus', { id, newStatus })
		return res
	}
}