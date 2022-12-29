import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ContentWrapper, MiniHeader, SpeedDialButton } from '../common'
import { useForm } from "react-hook-form";
import MoviesModel from '../../model/movies.js'
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

const AddMovieButton = styled.button`
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
    /* padding: 0 2rem;  */
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

export default function Movies(props) {
    const [addMovieContainer, setAddMovieContainer] = useState(false)
    const [movies, setMovies] = useState(null)
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "all"
    });
    const moviesModel = new MoviesModel();

    const onSubmit = async (data) => {
        await moviesModel.addNewMovie(data)
        reset()
        setAddMovieContainer(false)
        getActiveMovies()
    }

    const onErrors = errors => console.log(errors);

    const getActiveMovies = () => {
        moviesModel.getAllMovie({ movie_status: 'active' }).then((response) => {
            setMovies(response)
        })
    }

    const changeMovieStatus = (id, newStatus) => {
        moviesModel.changeStatus(id, 'inactive').then((response) => {
            getActiveMovies()
        })
    }

    useEffect(() => {
        getActiveMovies()
    }, [])

    return <ContentWrapper>
        {addMovieContainer && <AddMovieContainer onSubmit={handleSubmit(onSubmit, onErrors)}>
            {/* <PageHeader>Movies</PageHeader> */}
            <MiniHeader>Add A New Movie</MiniHeader>
            <NewMovieDetais>
                <Detailsfield>
                    <label>Add Movie Name</label>
                    <input
                        name="movie_name"
                        type="text"
                        {...register("movie_name", {
                            validate: value => value.trim() !== "" || "Please Enter a Movie Name"
                        })}
                    />
                    {errors.movie_name && <span>{errors.movie_name.message}</span>}
                </Detailsfield>
                <Detailsfield>
                    <label>Add Movie description</label>
                    <input
                        name="movie_description"
                        type="text"
                        {...register("movie_description", {
                            validate: value => value.trim() !== "" || "Please Enter a Movie description"
                        })}
                    />
                    {errors.movie_description && <span>{errors.movie_description.message}</span>}
                </Detailsfield>
                <Detailsfield>
                    <label>Add Casts</label>
                    <input
                        name="movie_cast"
                        type="text"
                        {...register("movie_cast", {
                            validate: value => value.trim() !== "" || "Please Enter Cast of the Movie"
                        })}
                    />
                    {errors.movie_cast && <span>{errors.movie_cast.message}</span>}
                </Detailsfield>
                <Detailsfield>
                    <label>Add Cover Image URL</label>
                    <input
                        name="movie_picture_URL"
                        type="text"
                        {...register("movie_picture_URL", {
                            pattern: {
                                value: `https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)`
                                ,
                                message: "Please Enter Movie Cover URL"
                            }
                        })}
                    />
                    {errors.movie_picture_URL && <span>{errors.movie_picture_URL.message}</span>}
                </Detailsfield>
            </NewMovieDetais>
            <AddMovieButton type="submit">Add Movie</AddMovieButton>
        </AddMovieContainer>}
        {/* <MiniHeader>Current Movies</MiniHeader> */}

        {movies !== null ?
            movies.length !== 0 ?
                <CurrentMovieList>
                    {movies?.map((movie, index) => {
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
                : <div>No movies found!</div>
            : <div>Loading...</div>
        }
        <SpeedDialButton onClick={() => {
            setAddMovieContainer(!addMovieContainer)
        }}><FormNew /></SpeedDialButton>
    </ContentWrapper>
}
