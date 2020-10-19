import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {CartContext} from '../context/index'
import menu from '../menu'

const Button = styled.button`
  cursor: pointer;
  font-size: 20px;
  width: 200px;
  background-color: #2EDE9E;
  color: #006152;
  border-radius: 12px 12px 12px 12px;
  border: none;
  outline: none;
`;

const AddToCart = ({onSuccess, showModal}) => {

  const {cart, setCart} = useContext(CartContext);

  const AddToCartBtn = (id) => {
/* 
  setCart({
    ...cart,
    cart: [...cart.cart, cart.current_soup ]
  });
 */
  console.log(cart);
    
  };

  return(
    <>
      <Button onClick={() => {onSuccess(); AddToCartBtn(); showModal()}}>
         Lägg till i kundvagn
      </Button>
    </>
  ) 
};

export default AddToCart;
