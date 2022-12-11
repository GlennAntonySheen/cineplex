import styled from 'styled-components'

export const ContentWrapper = styled.div`
    background-color: #3e3e3e;
`;

export const PageHeader = styled.h1`
    padding: 1rem;
    font-size: 3.5rem;
    background-color: #9aee5e;
`;

export const MiniHeader = styled.h1`
    padding: 1rem;
    font-size: 1.5rem;
    background-color: #0085be;
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
    background-color: #db0000;

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