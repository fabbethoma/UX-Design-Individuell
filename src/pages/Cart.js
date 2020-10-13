import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { IoMdArrowRoundBack } from 'react-icons/all';


const ContainerDiv = styled.div`
  height: 90vh;
  background-color: #f6f5f5;
  display: flex;
  flex-direction: column;
`;

const AddedObjects = styled.div`
margin-top: 7px;
background-color: #DDEBE9;
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);

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

const ToPayment = styled.button`
bottom: 80px;
position: fixed;
width: 100vw;
height: 40px;
border: none;
border-radius: 10px 10px 0px 0px;
background-color: #2EDE9E;
color: #005043;

`;

const goBackStyle = {
  cursor: 'pointer',
  color: 'white',
  fontSize: '25px',
  position: 'absolute',
  left: '20px',
  top: '12px'
};


const Cart = (props) =>{
  const history = useHistory();

return (
    <ContainerDiv>
      <div onClick={() => history.push('/home')}>
        <IoMdArrowRoundBack  style={goBackStyle} />
        </div>
      <TitleDiv>
        <Title>KUNDVAGN</Title>
      </TitleDiv>
        
        <AddedObjects>
        {/* render added objects here*/}
        Här ska en vara vara
        </AddedObjects>
        <AddedObjects>
        {/* render added objects here*/}
        Här ska en vara vara
        </AddedObjects>
        <AddedObjects>
        {/* render added objects here*/}
        Här ska en vara vara
        </AddedObjects>

        <ToPayment>
          TILL BETALNING
        </ToPayment>

    </ContainerDiv>
  )
}

export default Cart;