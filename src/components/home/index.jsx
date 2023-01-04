import React from 'react'
import styled from 'styled-components'
import { ContentWrapper, MiniHeader, SpeedDialButton } from '../common'
import image from '../../assets/images/Urvasi-Theatres.jpg'

const WelcomeImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 1rem;
`;

export default function Home() {
  return <ContentWrapper>
    <WelcomeImage src={image} />
    </ContentWrapper>
  
}
