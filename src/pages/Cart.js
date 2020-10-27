import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { IoMdArrowRoundBack } from 'react-icons/all';
import {CartContext} from '../context'


const ContainerDiv = styled.div`
  height: 90vh;
  background-color: #f6f5f5;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const AddedObjects = styled.div`
margin-top: 7px;
background-color: #DDEBE9;
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
height: 10vh;
font-size: 20px;

`;

const SoupName = styled.p`
margin-top: 7px;
margin-left: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const SoupPrice = styled.p`
color: #9586A8;
margin-right: 10px;
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

const Money = styled.div`
display: grid;
// display:flex;
grid-template-rows: 1fr 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr;
width: 100vw;
// justify-content: space-between;
position: fixed;
bottom: 140px;
height: 15vh;
`;

const ToPayText = styled.p`
margin-left: 15px;
grid-column: 1;
color: #9586A8;
`;

const ToPayAmount = styled.p`
margin-right: 15px;
grid-column: 2;
display: flex;
justify-content: flex-end;
`;

const DividerDiv = styled.div`
width: 80vw;
height: 1px;
color: #9586A8;

`;

const EmptyCart = styled.p`
opacity: 0.5;
margin: auto;
font-size: 25px;

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
  const {cart, setCart} = useContext(CartContext);

  let total = cart.cart.reduce((a, b) => a + Number(b.price), 0)
  let totalAmount = total + 39; // här ska sides in i beräkningen

  const userSignIn = () => {
    history.push('/signup')
  }

return (
    <ContainerDiv>
      <div onClick={() => history.push('/home')}>
        <IoMdArrowRoundBack  style={goBackStyle} />
        </div>
      <TitleDiv>
        <Title>KUNDVAGN</Title>
      </TitleDiv>

        {cart.cart && cart.cart.map(item => (
          <AddedObjects> 
            <SoupName>
            {item.name}
                <SoupPrice>
                {item.price}kr
                </SoupPrice>
            </SoupName>

          </AddedObjects>
        ))}

        {/* {cart.cart.sides && cart.cart.sides.map(item => (
          <AddedObjects>
            <SoupName>
            {item.name}
                <SoupPrice>
                {item.price}kr
                </SoupPrice>
            </SoupName>
          </AddedObjects>
          
        ))} */}

        {/* {cart.cart.sides && cart.cart.sides.map((side) => (
          <Money>
            <ToPayText> Tillägg </ToPayText> <ToPayAmount> {side.price}kr</ToPayAmount> 
          </Money>
        ))} */}

        {total > 0 ? 
        <Money>
          <ToPayText style={{gridRow: "1", gridColumn: "1"}}> Mat </ToPayText> <ToPayAmount style={{gridRow: "1", gridColumn: "2"}}> {total}kr </ToPayAmount>
          <ToPayText style={{gridRow: "2", gridColumn: "1"}}> Extra Tillägg </ToPayText> <ToPayAmount style={{gridRow: "2", gridColumn: "2"}}> kr</ToPayAmount>
          <ToPayText style={{gridRow: "3", gridColumn: "1"}}> Leverans </ToPayText> <ToPayAmount style={{gridRow: "3", gridColumn: "2"}}> 39kr </ToPayAmount>
          <ToPayText style={{gridRow: "4", gridColumn: "1", borderTop: "1px solid #ccc"}}> Totalt </ToPayText> <ToPayAmount style={{gridRow: "4", gridColumn: "2", borderTop: "1px solid #ccc"}}> {totalAmount}kr </ToPayAmount>
        </Money>
        : <EmptyCart> DIN VARUKORG ÄR TOM <b/> <EmptyCart style={{transform: "rotate(90deg)", fontSize: "40px"}}> :( </EmptyCart> </EmptyCart>
          
        }

        {total > 0 
        ? 
        <ToPayment onClick={userSignIn}>
          TILL BETALNING
        </ToPayment>
        : null
        }
    </ContainerDiv>
  )
}

export default Cart;