import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ContentWrapper, PageHeader, MiniHeader, SpeedDialButton } from '../common'
import { useFormik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";


const AddMovieContainer = styled.form`
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

const Detailsfield = styled.div`
    display: grid;

    background-color: orange;

    span {
        text-align: end;
        background-color: green;
    }
`;

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
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "all"
      });
    const onSubmit = (data) => {
        console.log("🚀 ~ file: index.jsx:72 ~ onSubmit ~ data", data)

    }
    const onErrors = errors => console.log(errors);



    return <ContentWrapper>
        <PageHeader>Movies</PageHeader>
        {addMovieContainer && <AddMovieContainer onSubmit={handleSubmit(onSubmit, onErrors)}>
            <MiniHeader>Add a new movie</MiniHeader>
            <NewMovieDetais>
                <Detailsfield>
                    <label>Add Movie Name</label>
                    <input
                        name="name"
                        type="text"
                        {...register("name", {
                            validate: value => value.trim() !== "" || "Please Enter a Movie Name"
                        })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </Detailsfield>
                <Detailsfield>
                    <label>Add Movie description</label>
                    <input
                        name="desc"
                        type="text"
                        {...register("desc", {
                            validate: value => value.trim() !== "" || "Please Enter a Movie description"
                        })}
                    />
                    {errors.desc && <span>{errors.desc.message}</span>}
                </Detailsfield>
                <Detailsfield>
                    <label>Add Casts</label>
                    <input
                        name="cast"
                        type="text"
                        {...register("cast", {
                            validate: value => value.trim() !== "" || "Please Enter Cast of the Movie"
                        })}
                    />
                    {errors.cast && <span>{errors.cast.message}</span>}
                </Detailsfield>
                <Detailsfield>
                    <label>Add Cover Image URL</label>
                    <input
                        name="pictureURL"
                        type="text"
                        {...register("pictureURL", {
                            pattern: { 
                                value: "https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
                                , 
                                message: "Please Enter Movie Cover URL"
                            }
                        })}
                    />
                    {errors.pictureURL && <span>{errors.pictureURL.message}</span>}
                </Detailsfield>
            </NewMovieDetais>
            <AddMovieButton type="submit">Add Movie</AddMovieButton>
        </AddMovieContainer>}
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
        {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
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
        <SpeedDialButton onClick={() => {
            setAddMovieContainer(!addMovieContainer)
            console.log(watch("example"));

        }}>+</SpeedDialButton>
    </ContentWrapper>
}

// name, cast, img, desc===