import React from 'react'
import styled from 'styled-components'
import { MoviesAndTv } from '@styled-icons/fluentui-system-filled/MoviesAndTv'

const SidebarWrapper = styled.div`
    width: 200px;
    display: grid;
    grid-template: auto auto auto / 1fr;
    align-content: space-between;
    background-color: #fff;
`;

const NavHeader = styled.div`
    height: 200px;
    background-color: green;
`;

const LinksContainer = styled.ul`
    height: auto;
    padding: .5rem;
    display: grid;
    grid-gap: 1rem;
    background-color: orange;
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
    background-color: pink;

    :hover {
        cursor: pointer;
        background-color: red;
    }

    span {
        display: inline-flex;
        align-items: center;
        font-size: 1.2rem;
        /* background-color: grey; */
    }


`;

const NavFooter = styled.div`
    height: 200px;
    background-color: yellow;

`;

export default function Sidebar(props) {
    return <SidebarWrapper>
        <NavHeader />
        <LinksContainer>
            <Links onClick={() => props.setCurrentPage('movies')}>
                <MoviesAndTv size="30" />
                <span>Movies</span>
            </Links>
            <Links onClick={() => props.setCurrentPage('screens')} >
                <span>Screens</span>
            </Links>
            <Links onClick={() => props.setCurrentPage('booking')} >
                <span>Booking</span>
            </Links>
        </LinksContainer>
        <NavFooter>{props.currentPage}</NavFooter>
    </SidebarWrapper>
}