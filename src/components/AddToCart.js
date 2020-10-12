import React, {useState} from 'react';
import styled from 'styled-components';

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

  return(
    <>
      <Button onClick={() => {onSuccess(); showModal()}}>
         Lägg till i kundvagn
      </Button>
    </>
  ) 
};

export default AddToCart;
