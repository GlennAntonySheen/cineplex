import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider, Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import Sidebar from './components/sidebar'
import Movies from './components/movies'
import Screens from './components/screens'
import Shows from './components/shows'
import Bookings from './components/bookings'

const ContentWrapper = styled.div`
	min-height: 100vh;
	padding: 1rem;
	display: flex;
	box-sizing: border-box;
	background-color: #fff;
	/* background-color: #171717; */
`;

function App() {
	const [currentPage, setCurrentPage] = useState('Shows')
	
	return <ContentWrapper>
		<Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
		<Routes>
			<Route path='/' element={<div>Hello world!</div>} />
			<Route path='/movies' element={<Movies />} />
			<Route path='/screens' element={<Screens />} />
			<Route path='/shows' element={<Shows />} />
			<Route path='/booking' element={<Bookings />} />
		</Routes>
	</ContentWrapper>
}

export default App;