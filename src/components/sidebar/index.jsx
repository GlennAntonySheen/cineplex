import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { MoviesAndTv } from '@styled-icons/fluentui-system-filled/MoviesAndTv'
import { Ticket } from '@styled-icons/ionicons-outline/Ticket'
import { Slideshow } from '@styled-icons/boxicons-regular/Slideshow'
import { ProjectionScreen } from '@styled-icons/fluentui-system-regular/ProjectionScreen'

const SidebarWrapper = styled.div`
    height: calc(100vh - 2rem);
    width: 300px;
    /* position: fixed; */
    display: grid;
    grid-template: auto auto auto / 1fr;
    align-content: space-between;
    border-radius: 1rem;
    overflow: hidden;
    background-color: #DA0037;
`;

const NavHeader = styled.h1`
    /* height: 200px; */
    margin: .7rem;
    padding: 1rem;
    font-size: 2rem;
    font-weight: semi;
    text-align: center;
    color: #DA0037;
    border-radius: 1rem;
    background-color: #EDEDED;
`;

const LinksContainer = styled.ul`
    height: auto;
    padding: .5rem;
    display: grid;
    grid-gap: 1rem;
`;

const Links = styled(Link)`
    height: 40px;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    grid-gap: .4rem;
    align-content: center;
    border-radius: .6rem;
    /* grid-template: 1fr / auto 1fr; */
    transition: .5s;
    color: #EDEDED;
        /* background-color: ${props => props.active ? '#db0000' : '##E6E6E6'}; */
        /* background-color: #E6E6E6; */


    :hover {
        cursor: pointer;
        color: #DA0037;
        background-color: #EDEDED;
    }

    span {
        display: inline-flex;
        align-items: center;
        font-size: 1.2rem;
    }


`;

const NavFooter = styled.div`
    height: 200px;
    background-color: yellow;

`;

export default function Sidebar(props) {
    return <SidebarWrapper>
        <NavHeader>{`${props.currentPage}`}</NavHeader>
        <LinksContainer>
            <Links to={`movies`} active={props.currentPage == 'Movies'} onClick={() => props.setCurrentPage('Movies')} >
                <MoviesAndTv size="30" />
                <span>Movies</span>
            </Links> 
            <Links to={'screens'} active={props.currentPage == 'Screens'} onClick={() => props.setCurrentPage('Screens')} >
                <ProjectionScreen size="30" />
                <span>Screens</span>
            </Links>
            <Links to={'shows'} active={props.currentPage == 'shows'} onClick={() => props.setCurrentPage('Shows')} >
                <Slideshow size="30" />
                <span>Shows</span>
            </Links>
            <Links to={'booking'} active={props.currentPage == 'Booking'} onClick={() => props.setCurrentPage('Booking')} >
                <Ticket size="30" />
                <span>Booking</span>
            </Links>
        </LinksContainer>
        {/* <NavFooter>{props.currentPage}</NavFooter> */}
    </SidebarWrapper>
}