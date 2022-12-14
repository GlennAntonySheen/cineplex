import styled from 'styled-components'

export const ContentWrapper = styled.div`
    margin-left: calc(200px + 2rem);
    border-radius: 1rem;
    background-color: #fdfdc4;
    /* background-color: green; */
`;

export const PageHeader = styled.h1`
    padding: 1rem;
    font-size: 3.5rem;
    border-radius: 1rem;
    background-color: #fff;
`;

export const MiniHeader = styled.h1`
    padding: 1rem;
    font-size: 3.5rem;
    color: #fff;
    background-color: transparent;
`;





export const SpeedDialButton = styled.button`
    height: 60px;
    width: 60px;
    position: fixed;
    right: 40px;
    bottom: 40px;
    border: none;
    border-radius: 100%;
    font-size: 2px;
    color: #151D3B;
    transition: all 1s;
    background-color: #fff;

    &: hover {
        svg {
            transition: all .4s ;
            height: 45px;        
        }
    }
    
    svg {
        height: 40px;        
    }
`;