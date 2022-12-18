import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ContentWrapper, MiniHeader, SpeedDialButton } from '../common'
import { useForm } from "react-hook-form";
import ScreensModel from '../../model/screens.js'
import { VisibilityOff } from '@styled-icons/material-rounded/VisibilityOff'
import { TextBulletListSquareEdit } from '@styled-icons/fluentui-system-regular/TextBulletListSquareEdit'
import { FormNew } from '@styled-icons/fluentui-system-regular/FormNew'

const AddMovieContainer = styled.form`
    /* margin: 1rem 2rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    background-color: #151D3B;
`;

const NewMovieDetais = styled.div`
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
        color: #fff;
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

const AddScreenButton = styled.button`
    /* height: 25px; */
    width: fit-content;
    padding: .5rem 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 2rem;
    font-size: 1.1rem;
    color: #fff;
    background-color: red;
`;

const CurrentMovieList = styled.div`
    /* display: grid;
    grid-template-columns: repeat(auto-fill, 150px);*/
    padding: 2rem; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition-delay: 2.5s;
    transition: 2.9s;
    /* background-color: #db0000; */
`;

const CurrentMovie = styled.div`
    height: 350px;
    width: 230px;    
    margin: 1rem 2rem;
    overflow: hidden;
    display: flex;
    transition: .4s;
    transition-delay: .2s;
    box-sizing: border-box;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #fff;

    &:hover {
        width: 300px;
        margin: 1rem .1rem;
    }

    img {
        height: 350px;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
    }
`;

const MovieActionWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    button {
        height: 40px;
        width: 40px;
        margin-top: 1.5rem;
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

export default function Screens(props) {
    const [addScreenContainer, setAddScreenContainer] = useState(false)
    const [screens, setScreens] = useState([])
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "all"
    });
    const screensModel = new ScreensModel();

    const onSubmit = async (data) => {
        console.log("🚀 ~ file: index.jsx:140 ~ onSubmit ~ data", data)
        // await screensModel.addNewScreen(data)
        reset()
        setAddScreenContainer(false)
        getActiveScreens()
    }

    const onErrors = errors => console.log(errors);

    const getActiveScreens = () => {
        // screensModel.getAllMovie({ movie_status: 'active' }).then((response) => { setScreens(response) })
    }

    const changeMovieStatus = (id, newStatus) => {
        // screensModel.changeStatus(id, 'inactive').then((response) => { 
        //     getActiveScreens()
        //  })
    }

    useEffect(() => {
        getActiveScreens()
    }, [])

    return <ContentWrapper>
        {addScreenContainer && <AddMovieContainer onSubmit={handleSubmit(onSubmit, onErrors)}>
            <MiniHeader>Add A New Screen</MiniHeader>
            <NewMovieDetais>
                <Detailsfield>
                    <label>Add Screen Name</label>
                    <input
                        name="screen_name"
                        type="text"
                        {...register("screen_name", {
                            validate: value => value.trim() !== "" || "Please Enter a Screen Name"
                        })}
                    />
                    {errors.screen_name && <span>{errors.screen_name.message}</span>}
                </Detailsfield>
            </NewMovieDetais>
            <AddScreenButton type="submit">Add Movie</AddScreenButton>
        </AddMovieContainer>}
        <CurrentMovieList>
            {screens.map((movie, index) => {
                // console.log("🚀 ~ file: index.jsx:232 ~ Movies ~ movie", movie._id)
                return <CurrentMovie
                    key={index}
                >
                    <img src={movie.movie_picture_URL} alt="movie Poster" />
                    <MovieActionWrapper>
                        <button onClick={() => {
                            changeMovieStatus(movie._id, 'inactive')
                        }}><VisibilityOff /></button>
                        <button><TextBulletListSquareEdit /></button>
                    </MovieActionWrapper>
                </CurrentMovie>
            })}
        </CurrentMovieList>
        <SpeedDialButton onClick={() => {
            setAddScreenContainer(!addScreenContainer)
        }}><FormNew /></SpeedDialButton>
    </ContentWrapper>
}