import React, { useState } from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart';
import { IoMdArrowRoundBack } from 'react-icons/all';

const HeaderImage = styled.div`
  height: 35vh;
  max-width: 100vw;
  // overflow: hidden;
  position: relative;
  z-index: -1;
`;
const Img = styled.img`
  max-width: 100vw;
  max-height: initial;
`;

const ContentWrapper = styled.div`
  height: 65vh;
  background-color: #f6f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;


  @media (max-width: 800px) {
    border-radius: 40px 40px 0px 0px;
  }
  
`;
const Info = styled.div`
  display: flex;
  padding: 5px 5px 5px;
  max-width: 100px;
  justify-content: center;
  border-radius: 10px 10px 10px;
  background-color: lightblue;
`;
const InfoWrapper = styled.div`
  // margin: 10px 0px 10px 0px;
  display: flex;
  justify-content: space-around;
  width: 200px;
`;

const SoupDescription = styled.p`
  margin: 20px;

`;

const SoupQuantity = styled.div`
  width: 70px;
  display: flex;
  flex-direction: row;
`;
const Increment = styled.div`
  padding: 8px;
  cursor: pointer;
  /* position: absolute; */
  right: -10px;
  top: -2px;
  font-size: 30px;
`;
const Decrement = styled.div`
  padding: 8px;
  cursor: pointer;
  /* position: absolute; */
  left: -10px;
  top: -2.3px;
  font-size: 30px;
`;
const Quantity = styled.div`
  cursor: default;
  background-color: white;
  padding: 8px;
  border-radius: 10px 10px 10px 10px;
  /* position: absolute; */
  left: 17px;
  font-size: 30px;
`;
const goBackStyle = {
  cursor: 'pointer',
  color: 'white',
  fontSize: '50px',
  position: 'absolute',
  left: '30px',
  top: '20px'
};

const SoupHeading = styled.h1`
  padding: 10px;
`;

const AddToCartWrapper = styled.div`
  max-width: 90vw;
  display: flex;
  justify-items: flex-end;
  justify-content: space-around;
`;
const Price = styled.div`
  margin-left: 4vw;
  .price {
    font-size: 30px;
    font-weight: bold;
    color: black;
  }
  .text {
    font-size: 20px;
    color: grey;
  }
`;
//function, take string, and make first letter uppercase.
const upperCasify = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const ChosenSoupPage = ({ soup, onClick }) => {
  const [num, setNum] = useState(0);

  return (
    <div className='div'>
      <HeaderImage className='HeaderImage'>
        <IoMdArrowRoundBack onClick={onClick} style={goBackStyle} />
        <Img className='Img' src={soup.img}></Img>
      </HeaderImage>
      <ContentWrapper>
        <SoupHeading>{upperCasify(soup.name)}</SoupHeading>
        <Price>
          <span className='price'>{soup.price}</span>
          <span className='text'> SEK/ Portion</span>
        </Price>
        <InfoWrapper>
          <Info>{soup.kcal}kcal</Info> <Info>{soup.sub[0]}</Info>{' '}
        </InfoWrapper>
        <SoupDescription>{soup.description}</SoupDescription>
        <AddToCartWrapper>
          <SoupQuantity>
            <Decrement
              onClick={() => {
                num > 0 && setNum(num - 1);
              }}
            >
              -
            </Decrement>
            <Quantity>{num + 1}</Quantity>
            <Increment
              onClick={() => {
                num < 9 && setNum(num + 1);
              }}
            >
              +
            </Increment>
          </SoupQuantity>
          <AddToCart />
        </AddToCartWrapper>
      </ContentWrapper>
    </div>
  );
};

export default ChosenSoupPage;
