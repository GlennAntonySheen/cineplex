import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ContentWrapper, PageHeader, MiniHeader, SpeedDialButton } from '../common'

const AddMovieContainer = styled.div`
    background-color: red;
`;

const NewMovieDetais = styled.div`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
    justify-content: center;
    gap: 1rem 100px;
    background-color: red;

    input {
        height: 25px;
        padding-left: 1rem;
        border: 0px;
        border-radius: 2rem;
    }
`;

// const NewMovieDetais = styled.input`
//     background-color: red;
// `;

const AddMovieButton = styled.button`
    height: 25px;
    width: 400px;
    display: grid;
    margin: 0 auto;
    border: none;
    border-radius: 2rem;
    background-color: red;
`;

const CurrentMovieList = styled.div`
    /* max-width: 100%; */
    /* height: 600px;*/
    display: grid;
    /* gap: 1rem; 1*/
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 150px);

    /* display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; */
    
    background-color: grey;
`;

const CurrentMovie = styled.div`
    height: 200px;
    margin-bottom: 1rem;
    /* margin: 1rem auto; */
    background-color: maroon;
`;

export default function Movies(props) {
    const [addMovieContainer, setAddMovieContainer] = useState(true)
    const movies = [{ name: 'abc', },
    { name: 'abc', }, { name: 'abc', }, { name: 'abc', }, { name: 'abc', }, { name: 'abc', }, { name: 'abc', }, { name: 'abc', },
    ]


    return <ContentWrapper>
        <PageHeader>Movies</PageHeader>
        {addMovieContainer && <AddMovieContainer>
            <MiniHeader>Add a new movie</MiniHeader>
            <NewMovieDetais>
                <input type="text" placeholder="Movie Name"></input>
                <input type="text" placeholder="Movie Description"></input>
                <input type="text" placeholder="Movie cast"></input>
                <input type="text" placeholder="Cover Image URL"></input>
            </NewMovieDetais>
            <AddMovieButton>Add Movie</AddMovieButton>
        </AddMovieContainer>}
            <MiniHeader>Current Movies</MiniHeader>
        <CurrentMovieList>
            <CurrentMovie>{'movie.name'}</CurrentMovie>
            <CurrentMovie>{'movie.name'}</CurrentMovie>
            <CurrentMovie>{'movie.name'}</CurrentMovie>
            <CurrentMovie>{'movie.name'}</CurrentMovie>
            <CurrentMovie>{'movie.name'}</CurrentMovie>
            <CurrentMovie>{'movie.name'}</CurrentMovie>
            <CurrentMovie>{'movie.name'}</CurrentMovie>
            {/* {movies.map((movie, index) => {
                return <CurrentMovie>{movie.name}</CurrentMovie>
            })} */}
        </CurrentMovieList>
        <SpeedDialButton onClick={() => setAddMovieContainer(!addMovieContainer)}>+</SpeedDialButton>
    </ContentWrapper>
}

// name, cast, img, desc