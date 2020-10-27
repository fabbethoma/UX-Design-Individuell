import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import soupLogo from '../img/soup.png'
import { IoMdArrowRoundBack } from 'react-icons/all';


const ContainerDiv = styled.div`
  height: 90vh;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
`;

const TitleDiv = styled.div`
margin: 20px;
background-color: #DDEBE9;
height: 5vh;
margin: 0;
padding: 0;
border-bottom: 1px solid #ccc;
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
`;

const Title = styled.h2`
font-size: 16px;
padding-top: 15px;
padding-bottom: 10px;
display: flex;
justify-content: center;
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

const Button = styled.button`
  cursor: pointer;
  font-size: 20px;
  width: 230px;
  height: 70px;
  background-color: #2EDE9E;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  color: #006152;
  border-radius: 12px 12px 12px 12px;
  border: none;
  outline: none;
`;

const goBackStyle = {
  cursor: 'pointer',
  color: 'black',
  fontSize: '25px',
  position: 'absolute',
  left: '20px',
  top: '12px'
};

const Done = () => {

  const history = useHistory();
  
    return(
        <ContainerDiv>
        <div onClick={() => history.push('/home')}>
        <IoMdArrowRoundBack  style={goBackStyle} />
        </div>
        <TitleDiv>
        <Title>ALLT KLART!</Title>
        </TitleDiv>


        <DealContainer>
          <div>
          <img style={{height: "60px", width: "60px"}} src={soupLogo}></img>
          </div>
          <h1 style={{fontSize: "40px", marginTop: "1px", marginBottom: "5px", color: "#066638", fontFamily: 'Mystery Quest'}}>Souperb!</h1>
          <br/>
          Din soppa är nu påväg till dig. <br/>
          Tack för att du valde Souperb!
        </DealContainer>

        <Button onClick={() => history.push('/Delivery')}> Följ din beställning här! </Button>

        </ContainerDiv>
    );
}

export default Done;