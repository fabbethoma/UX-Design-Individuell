import React from 'react';
import styled from 'styled-components'
import { Links, useHistory } from 'react-router-dom';

const Container = styled.div`
width: 100vw;
position: fixed;
bottom: 0;
height: 50px;
background: blue;
display: flex;
align-items:center;
justify-content: space-around;
`

export default function Footer() {

    const history = useHistory()

    return (<Container>
        <div onClick={() => history.push('/home')}>hem</div>
        <div onClick={() => history.push('/cart')}>cart</div>
        <div onClick={() => history.push('/profile')}>profil</div>
    </Container>)
}