import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from './components/sidebar'
import Menu from './components/movies'
import Screens from './components/screens'
import Bookings from './components/bookings'

const ContentWrapper = styled.div`
	padding: 1rem;
	display: grid;
	/* grid-template: 1fr / auto 1fr; */
	grid-gap: 1rem;
	box-sizing: border-box;
	background-color: blue;
`;

function App() {
	const [currentPage, setCurrentPage] = useState('movies')

	return <ContentWrapper>
		{/* <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
		{ currentPage === 'movies' && <Menu /> }
		{ currentPage === 'screens' && <Screens /> }
		{ currentPage === 'booking' && <Bookings /> }
	</ContentWrapper>
}

export default App;