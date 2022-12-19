import axios from 'axios'

export default class ScreensModel {
	async addNewScreen(screenDetails) {
		const res = await axios.post('http://localhost:4000/screens/addNewScreen', screenDetails)
		return res
	}

	async getAllScreens(filter = {}) {
		const screens = await axios.post('http://localhost:4000/screens/getScreens', filter)
		return screens.data
	}

	async changeStatus(id, newStatus) {
		const res = await axios.patch('http://localhost:4000/screens/changeStatus', { id, newStatus })
		return res
	}
}