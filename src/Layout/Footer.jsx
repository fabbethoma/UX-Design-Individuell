import React from 'react';
import styled from 'styled-components'
import { Links, useHistory } from 'react-router-dom';

const Container = styled.div`
width: 100vw;
position: fixed;
bottom: 0;
height: 80px;
background: #F8F8F8;
display: flex;
align-items:center;
justify-content: space-around;
border-top: 1px solid #ccc;
`;

const Buttons = styled.div`
  background-color: inherit;
  color: #005B4D;

`;

export default function Footer() {

    const history = useHistory()

    return (
    <Container>
        <Buttons onClick={() => history.push('/home')}>HEM</Buttons>
        <Buttons onClick={() => history.push('/cart')}>KUNDVAGN</Buttons>
        <Buttons onClick={() => history.push('/profile')}>PROFIL</Buttons>
    </Container>
    )
}