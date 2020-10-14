import React, {useContext, useState} from 'react';
import styled from 'styled-components'
import {useHistory } from 'react-router-dom';
import {CartContext} from '../context/index'
// det funkar va
// alltså den displayar ingenting, den borde väl säga "0"?, ja precis
// ser inget i navbaren, nu då? 
// toString gillade den inte haha
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

const CartAmount =  styled.p`
background-color: #005B4D;
color: #F8F8F8;
border-radius: 10px;
width: 25px;
display: flex;
justify-content: center;
margin: 0 auto;
bottom: 1px;
`;

export default function Footer() {
    const {cart} = useContext(CartContext)
    const history = useHistory()


  
  //om du kollar initiala statet i app2.js så gjorde jag det såhär: {cart: []} så det blir då cart.cart.length
  // du kan ändra det initiala state sen nu hur du nu vill ha det

    const {visible, setVisible} = useState(false);

    // const cartVisible = () => {
    //   if(cart.cart.length < 1){
    //     return (
    //     <CartAmount> {cart.cart.length}</CartAmount>
    //     )
    //   }
    //   else{
    //     return null;
    //   }
    // }


    return (
    <Container>
        <Buttons onClick={() => history.push('/home')}>HEM</Buttons>
          
          <Buttons onClick={() => history.push('/cart')}>KUNDVAGN  </Buttons> 

        <Buttons onClick={() => history.push('/profile')}>PROFIL</Buttons>
    </Container>
    )
}

{/* <CartAmount>{cart.cart.length} </CartAmount> */}