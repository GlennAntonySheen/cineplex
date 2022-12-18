import axios from 'axios'

export default class MoviesModel {
	async addNewMovie(movieDetails) {
		const res = await axios.post('http://localhost:4000/movies/addNewMovie', movieDetails)
		return res
	}
	
	async getAllMovie() {
		const allMovies = await axios.get('http://localhost:4000/movies/')
		console.log("🚀 ~ file: movies.js:8 ~ MoviesModel ~ addNewMovie ~ res", allMovies)
		return allMovies.data
	}

	async changeStatus(id, newStatus) {
		console.log("🚀 ~ file: movies.js:22 ~ MoviesModel ~ changeStatus ~ id, newStatus", id, newStatus)
		const res = await axios.patch('http://localhost:4000/movies/changeStatus', { id, newStatus })
		return res
	}
}