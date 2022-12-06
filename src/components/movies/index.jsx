import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ContentWrapper, PageHeader, MiniHeader, SpeedDialButton } from '../common'
import { useFormik, Field, Form } from 'formik';
import * as Yup from 'yup';

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

    const formik = useFormik({
        initialValues: {
            name: "",
            desc: "",
            cast: "",
            picture: "",
        },
        validationSchema: Yup.object ({
            name: Yup.string()
            .trim()
            .required('Movie name is required'),
            desc: Yup.string()
            .trim()
            .required('Movie description is required'),
            cast: Yup.string()
            .trim()
            .required('Movie cast is required'),
            picture: Yup.string()
            .trim()
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                'Enter correct url!'
            )
            .required('Movie Cover Image URL is required'),
        }),
        onSubmit: (value) => {
            console.log(value)
            return fetch('mongodb://localhost:27017/cineplex.movies', {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => console.log(data)); 
        },
        handleChange: (value) => {
            console.log("someing")
        }

    })
    console.log(formik.values)

    return <ContentWrapper>
        <PageHeader>Movies</PageHeader>
        {addMovieContainer && <AddMovieContainer onSubmit={formik.handleSubmit}>
            <MiniHeader>Add a new movie</MiniHeader>
            <NewMovieDetais>
                <input 
                    name="name" 
                    type="text" 
                    placeholder="Movie Name" 
                    values={formik.values.name}
                    onChange={formik.handleChange}
                />
                <input 
                    name="desc" 
                    type="text" 
                    placeholder="Movie Description" 
                    values={formik.values.desc}
                    onChange={formik.handleChange}
                />
                <input 
                    name="cast" 
                    type="text" 
                    placeholder="Movie cast" 
                    values={formik.values.cast}
                    onChange={formik.handleChange}
                />
                <input 
                    name="picture" 
                    type="text" 
                    placeholder="Cover Image URL" 
                    values={formik.values.picture}
                    onChange={formik.handleChange}
                />
            </NewMovieDetais>
            <AddMovieButton type="submit">Add Movie</AddMovieButton>
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
        <SpeedDialButton onClick={() => {
            setAddMovieContainer(!addMovieContainer)
            formik.handleReset()
        }}>+</SpeedDialButton>
    </ContentWrapper>
}

// name, cast, img, desc