import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ContentWrapper, MiniHeader, SpeedDialButton } from '../common'
import { useForm } from "react-hook-form";
import ScreensModel from '../../model/screens.js'
import { FormNew } from '@styled-icons/fluentui-system-regular/FormNew'

const AddScreenContainer = styled.form`
    /* margin: 1rem 2rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    background-color: #151D3B;
`;

const NewScreenDetais = styled.div`
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
    width: fit-content;
    padding: .5rem 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 2rem;
    font-size: 1.1rem;
    color: #fff;
    background-color: red;
`;

const ScreenList = styled.div`
    padding: 1rem; 
    display: flex;
    flex-direction: column;
    /* background-color: #db0000; */
`;

const ScreenDetails = styled.div`
    padding: .5rem;
    margin-top: .5rem;
    display: grid;
    grid-template: 1fr / 100px 1fr;
    grid-auto-flow: column;
    align-items: center;
    box-sizing: border-box;
    border-radius: .8rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    button {
        padding: .4rem .6rem;
        margin-right: 2rem;
        border: none;
        border-radius: 1rem;
        color: white;
        cursor: pointer;
        background-color: ${props => props.active ? '#2ecc71' : '#EA2027'};
    }
`;

export default function Screens(props) {
    const [addScreenContainer, setAddScreenContainer] = useState(false)
    const [screens, setScreens] = useState([])
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "all"
    });
    const screensModel = new ScreensModel();

    const onSubmit = (data) => {
        screensModel.addNewScreen(data).then(response => {
            reset()
            setAddScreenContainer(false)
            getAllScreens()
        })
    }

    const onErrors = errors => console.log(errors);

    const getAllScreens = () => {
        screensModel.getAllScreens().then((response) => {
            setScreens(response)
        })
    }

    const changeScreenStatus = (id, newStatus) => {
        screensModel.changeStatus(id, newStatus).then((response) => { 
            getAllScreens()
         })
    }

    useEffect(() => {
        getAllScreens()
    }, [])

    return <ContentWrapper>
        {addScreenContainer && <AddScreenContainer onSubmit={handleSubmit(onSubmit, onErrors)}>
            <MiniHeader>Add A New Screen</MiniHeader>
            <NewScreenDetais>
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
            </NewScreenDetais>
            <AddScreenButton type="submit">Add Movie</AddScreenButton>
        </AddScreenContainer>}
        {/* <div>{JSON.stringify(screens)}</div> */}
        <ScreenList>
            {screens.map((screen, index) => {
                return <ScreenDetails
                    key={index}
                    active={screen.screen_status === 'active'}
                >
                    <button onClick={() => {
                        changeScreenStatus(screen._id, screen.screen_status === 'active' ? 'inactive' : 'active')
                    }}>{screen.screen_status}</button>
                    {`Screen Name: ${screen.screen_name}`}
                </ScreenDetails>
            })}
        </ScreenList>
        <SpeedDialButton onClick={() => {
            setAddScreenContainer(!addScreenContainer)
        }}><FormNew /></SpeedDialButton>
    </ContentWrapper>
}