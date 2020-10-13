import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import './App.css';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Details from './components/Details'
import Adress from './pages/Adress'
import Footer from './Layout/Footer';

import {CartContext} from './context/index'

const Container = styled.div` 
width: 100vw;
`;
// här kan du göra ett context state kanske. där du har din varukorg
// då har du varukorgen tillgänglig vid betalningssteget sen också 
// får kolla på det
// kan visa lite snabbt om du vill
// sure! hm nu ska vi se :D *laughs in nerd* hahaha
// en sek
//jag gör en context mapp i src
// kör ditt race!
//hm kanske behövs ett state här
//nu har vi skapat en provider som kan passa statet genom alla componenter


export default function App2() {
  const [cart, setCart] = useState({cart: [4]})
    return(
      <div>
        <CartContext.Provider value={{cart, setCart}}>
            <Router>
                <Container>
                  <Switch>
                    <Route exact path= '/' component={Adress} />
                    <Route exact path='/home' component={Home} />
                    <Route path='/details' component={Details}/>
                    <Route path='/profile' component={Profile} />
                    <Route path='/cart' component={Cart} />
                  </Switch>
                </Container>
                <Footer />
          </Router>
          </CartContext.Provider>
        </div>
    )
}