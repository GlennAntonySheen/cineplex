import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from './components/sidebar'
import Movies from './components/movies'
import Screens from './components/screens'
import Bookings from './components/bookings'

const ContentWrapper = styled.div`
	padding: 1rem;
	display: grid;
	grid-template: 1fr / auto 1fr;
	grid-gap: 1rem;
	box-sizing: border-box;
	/* background-color: #151D3B; */
	background-color: #fff;
`;

function App() {
	const [currentPage, setCurrentPage] = useState('Screens')

	return <ContentWrapper>
		<Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
		{ currentPage === 'Movies' && <Movies /> }
		{ currentPage === 'Screens' && <Screens /> }
		{ currentPage === 'Booking' && <Bookings /> }
	</ContentWrapper>
}

export default App;