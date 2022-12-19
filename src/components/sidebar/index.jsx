import React from 'react'
import styled from 'styled-components'
import { MoviesAndTv } from '@styled-icons/fluentui-system-filled/MoviesAndTv'
import { Ticket } from '@styled-icons/ionicons-outline/Ticket'
import { ProjectionScreen } from '@styled-icons/fluentui-system-regular/ProjectionScreen'

const SidebarWrapper = styled.div`
    height: calc(100vh - 2rem);
    width: 200px;
    position: fixed;
    display: grid;
    grid-template: auto auto auto / 1fr;
    align-content: space-between;
    border-radius: 1rem;
    overflow: hidden;
    background-color: #0071ce;
`;

const NavHeader = styled.h1`
    /* height: 200px; */
    margin: .7rem;
    padding: 1rem;
    font-size: 2rem;
    font-weight: semi;
    text-align: center;
    color: #fff;
    border-radius: 1rem;
    background-color: #ffc220;
`;

const LinksContainer = styled.ul`
    height: auto;
    padding: .5rem;
    display: grid;
    grid-gap: 1rem;
`;

const Links = styled.li`
    height: 40px;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    grid-gap: .4rem;
    align-content: center;
    border-radius: .6rem;
    /* grid-template: 1fr / auto 1fr; */
    transition: .5s;
    color: #ffc220;
        /* background-color: ${props => props.active ? '#db0000' : '##E6E6E6'}; */
        /* background-color: #E6E6E6; */


    :hover {
        cursor: pointer;
        background-color: #fff;
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
            <Links active={props.currentPage == 'Movies'} onClick={() => props.setCurrentPage('Movies')}>
                <MoviesAndTv size="30" />
                <span>Movies</span>
            </Links>
            <Links active={props.currentPage == 'Screens'} onClick={() => props.setCurrentPage('Screens')} >
                <ProjectionScreen size="30" />
                <span>Screens</span>
            </Links>
            <Links active={props.currentPage == 'shows'} onClick={() => props.setCurrentPage('Shows')} >
                <ProjectionScreen size="30" />
                <span>Shows</span>
            </Links>
            <Links active={props.currentPage == 'Booking'} onClick={() => props.setCurrentPage('Booking')} >
                <Ticket size="30" />
                <span>Booking</span>
            </Links>
        </LinksContainer>
        {/* <NavFooter>{props.currentPage}</NavFooter> */}
    </SidebarWrapper>
}