import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { ContentWrapper, MiniHeader, PageHeader } from '../common'
import MoviesModel from '../../model/movies.js'
import ShowsModel from '../../model/shows.js'
import popcornImg from '../../assets/popcorn.svg'
import { VisibilityOff } from '@styled-icons/material-rounded/VisibilityOff'


const MovieDetailsWrapper = styled.div`
    display: flex;
    overflow: hidden;
    border-radius: 1rem;
    /* background-color: pink; */

    img {
        border-radius: 1rem;
        height: 300px;
    }
`;

const MovieDetailsContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* background-color: orange; */

    h1 {
        font-family: 'Titillium Web', sans-serif;
        font-size: 4rem;
        font-weight: bold;
    }

    span { 
        font-size: 1rem;
        font-family: 'Open Sans', sans-serif;

    }


`;

const ShowsContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

`;

const ShowDetails = styled.div`
    width: fit-content;
    padding: 1rem;
    display: flex;
    gap: 2rem;
    border-radius: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    img {
        height: 60px;
    }
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: .5rem;
        
        label {
            font-size: 1.1rem;
            font-family: 'Open Sans', sans-serif;
        }
    }

    button {
        width: 40px;
        border: none;
        cursor: pointer;
        background-color: transparent;
    }
`;

export default function MovieDetails(props) {
    const [movie, setMovie] = useState(null)
    const [shows, setShows] = useState(null)
    const { movieId } = useParams()
    const moviesModel = new MoviesModel();
    const showsModel = new ShowsModel();

    const getMovieDetails = () => {
        moviesModel.getMovieDetails(movieId).then((movieDetails) => {
            setMovie(movieDetails)
        })
    }

    const getShows = () => {
        showsModel.getShows({ movie_id: movieId }).then((showDetails) => {
            // console.log("🚀 ~ file: movieDetails.jsx:55 ~ showsModel.getShows ~ showDetails", showDetails)
            setShows(showDetails)
        })
    }

    useEffect(() => {
        getMovieDetails()
        getShows()
    }, [])

    return <ContentWrapper>
        <MovieDetailsWrapper>
            <img src={movie?.movie_picture_URL} />
            <MovieDetailsContainer>
                <h1>{movie?.movie_name}</h1>
                <span>{`Cast: ${movie?.movie_cast}`}</span>
                <span>{`Cast: ${movie?.movie_description}`}</span>
            </MovieDetailsContainer>
        </MovieDetailsWrapper>

        <PageHeader style={{'margin-top': '2rem'}}>Shows</PageHeader>
        <ShowsContainer>
            {shows?.map((show) => {
                return <ShowDetails key={show._id}>
                    <img src={popcornImg} />
                    <div>
                        <label>{`🎬 Screen: ${show.screen_id.screen_name}`}</label>
                        <label>{`⏰ Time: ${moment(show.show_dateTime).calendar()}`}</label>
                    </div>
                    <button><VisibilityOff color={'green'} /></button>
                </ShowDetails>
            })}
        </ShowsContainer>
    </ContentWrapper>
}
