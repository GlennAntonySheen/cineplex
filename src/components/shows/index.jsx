import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ContentWrapper, MiniHeader, SpeedDialButton } from '../common'
import { useForm, Controller } from "react-hook-form";
import moment from 'moment'
import MoviesModel from '../../model/movies.js'
import ScreensModel from '../../model/screens.js'
import ShowsModel from '../../model/shows.js'
import { VisibilityOff } from '@styled-icons/material-rounded/VisibilityOff'
import { TextBulletListSquareEdit } from '@styled-icons/fluentui-system-regular/TextBulletListSquareEdit'
import { FormNew } from '@styled-icons/fluentui-system-regular/FormNew'

const AddShowContainer = styled.form`
    /* margin: 1rem 2rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    background-color: #EDEDED;
`;

const NewShowDetais = styled.div`
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
    justify-content: center;
    gap: 1rem 100px;
    box-sizing: border-box;
    /* background-color: red; */
`;

const Detailsfield = styled.div`
    display: grid;
    gap: .2rem;
    /* background-color: orange; */

    label {         
        padding-left: 1rem;
        color: #444444;
    }

    input {
        height: 35px;
        padding-left: 1rem;
        border: 1px solid #db0000;
        /* outline: 15px red; */
        border-radius: 1rem;
    }

    span {
        padding-left: 1rem;
        /* text-align: end; */
        color: #db0000;
    }
`;

const AddShowButton = styled.button`
    /* height: 25px; */
    width: fit-content;
    padding: .5rem 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 2rem;
    font-size: 1.1rem;
    color: #fff;
    background-color: ${props => props.active ? 'red' : 'grey'};
`;

const CurrentShowList = styled.div`
    padding: 2rem 2rem 0; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition-delay: 2.5s;
    transition: 2.9s;
    /* background-color: #db0000; */
`;

const CurrentShow = styled.div`
    height: 250px;
    width: 450px;    
    margin: 1rem 2rem;
    display: flex;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #fff;


    img {
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
    }
`;

const CurrentShowDetails = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
    background-color: orange;
`;

const ShowActionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: green;

    button {
        height: 40px;
        width: 40px;
        margin: .5rem;
        border: none;
        border-radius: 100%;
        transition: .1s;
        color: #151D3B;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        background-color: #fff;

        &: hover {
            cursor: pointer;
            background-color: #db0000;
        }
    }
`;

export default function Shows(props) {
    const [upcomingShows, setUpcomingShows] = useState(null)
    const [activeScreens, setActiveScreens] = useState([])
    const [addShowContainer, setAddShowContainer] = useState(false)
    const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm({
        mode: "all"
    });
    const moviesModel = new MoviesModel();
    const screensModel = new ScreensModel();
    const showsModel = new ShowsModel();

    const onSubmit = async (data) => {
        const res = await showsModel.addNewShow(data)
        console.log("🚀 ~ file: index.jsx:146 ~ onSubmit ~ res", res.status)
        if (res.status === 201) {
            alert('Added new show')
            getActiveShows()
        } else if (res.status === 400) {
            alert('Show has not added')
        }
        reset()
    }

    const onErrors = errors => console.error(errors);

    const getActiveShows = () => {
        showsModel.getUpcomingShows().then((response) => {
            setUpcomingShows(response)
        })
    }

    const getActiveScreens = () => {
        screensModel.getScreens({ screen_status: 'active' }).then((response) => {
            setActiveScreens(response)
        })
    }

    // const changeMovieStatus = (id, newStatus) => {
    //     // moviesModel.changeStatus(id, 'inactive').then((response) => {
    //     //     getActiveMovies()
    //     // })
    // }

    useEffect(() => {
        getActiveShows()
        getActiveScreens()
    }, [])

    return <ContentWrapper>
        {addShowContainer && <AddShowContainer onSubmit={handleSubmit(onSubmit, onErrors)}>
            {/* <PageHeader>Movies</PageHeader> */}
            <MiniHeader>Add A New Show</MiniHeader>
            <NewShowDetais>
                <Detailsfield>
                    <label>Add Movie Name</label>

                    <select
                        {...register('movie_id', { required: true })}
                    >
                        <option disabled selected value> -- select a movie -- </option>
                        {upcomingShows.map((movie) =>
                            <option key={movie._id} value={movie._id}>{movie.movie_name}</option>
                        )}
                    </select>
                    {errors.movie_id && <span>{errors.movie_id.message}</span>}
                </Detailsfield>
                <Detailsfield>
                    <label>Add Screen Name</label>
                    <select
                        {...register('screen_id', { required: true })}
                    >
                        <option disabled selected value> -- select a screen -- </option>
                        {activeScreens.map((screen) =>
                            <option key={screen._id} value={screen._id}>{screen.screen_name}</option>
                        )}
                    </select>
                    {errors.screen_id && <span>{errors.screen_id.message}</span>}
                </Detailsfield>
                <input
                    type="datetime-local"
                    min={`${moment().format('YYYY-MM-DDTHH:MM')}`}
                    {...register('show_dateTime', { required: true })}
                />
            </NewShowDetais>
            <AddShowButton active={isValid} disabled={!isValid} type="submit">Add Show</AddShowButton>
        </AddShowContainer>}
        <span>{JSON.stringify(new Date(watch()))}</span>
        <span>{JSON.stringify(watch())}</span>
        {upcomingShows !== null ?
            upcomingShows.length !== 0 ?
                <CurrentShowList>
                    {upcomingShows?.map((show, index) => {
                        console.log("🚀 ~ file: index.jsx:222 ~ {upcomingShows?.map ~ show", show.movie_id)
                        return <CurrentShow
                            key={index}
                        >
                            <img src={show.movie_id.movie_picture_URL} alt="movie Poster" />
                            <CurrentShowDetails>
                                <h1>vnbv</h1>
                                <ShowActionWrapper>
                                    <button onClick={() => {
                                        changeMovieStatus(show._id, 'inactive')
                                    }}><VisibilityOff /></button>
                                    <button><TextBulletListSquareEdit /></button>
                                </ShowActionWrapper>
                            </CurrentShowDetails>
                        </CurrentShow>
                    })}
                </CurrentShowList>
                : <div>No shows found!</div>
            : <div>Loading...</div>
        }
        <SpeedDialButton onClick={() => {
            setAddShowContainer(!addShowContainer)
        }}><FormNew /></SpeedDialButton>
    </ContentWrapper>
}
