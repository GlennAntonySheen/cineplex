import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from './components/sidebar'
import Movies from './components/movies'
import Screens from './components/screens'
import Shows from './components/shows'
import Bookings from './components/bookings'

const ContentWrapper = styled.div`
	padding: 1rem;
	display: flex;
	box-sizing: border-box;
	/* background-color: #151D3B; */
	/* background-color: #d80e0e; */
`;

function App() {
	const [currentPage, setCurrentPage] = useState('Screens')

	return <ContentWrapper>
		<Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
		{ currentPage === 'Movies' && <Movies /> }
		{ currentPage === 'Screens' && <Screens /> }
		{ currentPage === 'Shows' && <Shows /> }
		{ currentPage === 'Booking' && <Bookings /> }
	</ContentWrapper>
}

export default App;