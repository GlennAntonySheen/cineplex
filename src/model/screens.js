import axios from 'axios'
// require('dotenv').config()
// import dotenv from 'dotenv' 
// dotenv.config()
// require('dotenv').config({ path: '../../.env' })
export default class ScreensModel {
	async addNewScreen(screenDetails) {
		const res = await axios.post('/screens/addNewScreen', screenDetails)
		return res
	}

	// async getAllMovie() {
	// 	const allMovies = await axios.get('http://localhost:4000/movies/')
	// 	return allMovies.data
	// }

	// async changeStatus(id, newStatus) {
	// 	console.log("🚀 ~ file: movies.js:22 ~ MoviesModel ~ changeStatus ~ id, newStatus", id, newStatus)
	// 	const res = await axios.patch('http://localhost:4000/movies/changeStatus', { id, newStatus })
	// 	return res
	// }
}