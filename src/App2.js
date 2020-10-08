import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import './App.css';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Details from './components/Details'
import Adress from './pages/Adress'
import Footer from './Layout/Footer';

const Container = styled.div`
width: 100vw;
`;

export default function App2() {
    return(
        <div>
            <Router>
                <Container>
                  <Switch>
                    {/* <Route exact path= '/' component={Adress} /> */}
                    <Route exact path='/home' component={Home} />
                    <Route path='/details' component={Details}/>
                    <Route path='/profile' component={Profile} />
                    <Route path='/cart' component={Cart} />
                  </Switch>
                </Container>
                <Footer />
              </Router>
        </div>
    )
}