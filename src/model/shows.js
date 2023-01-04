import axios from 'axios'

export default class ShowsModel {
	async addNewShow(showDetails) {
		const res = await axios.post('http://localhost:4000/shows/addNewShow', showDetails)
		return res
	}

	async getUpcomingShows() {
		const shows = await axios.get('http://localhost:4000/shows/getUpcomingShows')
		return shows.data
	}

	async getShows(filter = {}) {
		// console.log("🚀 ~ file: shows.js:17 ~ ShowsModel ~ getShows ~ filter", { params: { filter: filter }})
		const shows = await axios.get('http://localhost:4000/shows/getShows', { params: { filters: filter }})
		return shows.data
	}

	// async changeStatus(id, newStatus) {
	// 	const res = await axios.patch('http://localhost:4000/screens/changeStatus', { id, newStatus })
	// 	return res
	// }
} 