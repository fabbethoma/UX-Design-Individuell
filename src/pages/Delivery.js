import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import DeliveryImage from '../img/yourDelivery.jpg'
import soupLogo from '../img/soup.png'
import { IoMdArrowRoundBack } from 'react-icons/all';



const ContainerDiv = styled.div`
  height: 90vh;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
`;

const DealContainer = styled.div`

@media (max-width: 800px) {
  width: 90vw;
  height: 30vh;
  background-color: #DDEBE9;
  color: #53646B;
  font-weight: 700;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 3px 3px 0px #ccc;
}
`;


const Title = styled.h2`
font-size: 16px;
padding-top: 15px;
padding-bottom: 10px;
display: flex;
justify-content: center;
margin-top: 40px;
`;

const goBackStyle = {
    cursor: 'pointer',
    color: 'black',
    fontSize: '25px',
    position: 'absolute',
    left: '20px',
    top: '12px'
  };

const Delivery = () => {

    const history = useHistory();

    return(
        <ContainerDiv>
            <div onClick={() => history.push('/home')}>
            <IoMdArrowRoundBack  style={goBackStyle} />
            </div>
        <DealContainer>
        <img style={{height: "90%", width: "90%"}} src={DeliveryImage}></img>
        </DealContainer>

        <Title>
            Fram med skeden din soppa är här om ca:
        </Title>
        <p style={{color: "red", marginLeft: "auto",  marginRight: "auto", fontSize: "22px"}}>20 minuter! </p>
        <img style={{height: "70px", width: "70px", marginLeft: "auto",  marginRight: "auto"}} src={soupLogo}></img>
        <h1 
        style={{
            fontSize: "40px",
            marginTop: "1px",
            marginBottom: "5px", 
            color: "#066638", 
            fontFamily: 'Mystery Quest',
            marginLeft: "auto",  
            marginRight: "auto"}}
            >
            Souperb!</h1>
        </ContainerDiv>
    );
}

export default Delivery;