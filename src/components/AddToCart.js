import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  font-size: 20px;
  width: 200px;
  background-color: green;
  color: white;
  border-radius: 12px 12px 12px 12px;
`;

const AddToCart = () => {
  return <Button>Add to Cart</Button>;
};

export default AddToCart;
