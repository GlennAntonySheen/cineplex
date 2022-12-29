import axios from 'axios'

export default class ShowsModel {
	async addNewShow(showDetails) {
		const res = await axios.post('http://localhost:4000/shows/addNewShow', showDetails)
		console.log("🚀 ~ file: shows.js:6 ~ ShowsModel ~ addNewShow ~ res", res)
		return res
	}

	async getUpcomingShows() {
		const shows = await axios.get('http://localhost:4000/shows/getUpcomingShows')
		// console.log("🚀 ~ file: shows.js:12 ~ ShowsModel ~ getUpcomingShows ~ shows", shows)
		return shows.data
	}

	// async changeStatus(id, newStatus) {
	// 	const res = await axios.patch('http://localhost:4000/screens/changeStatus', { id, newStatus })
	// 	return res
	// }
}