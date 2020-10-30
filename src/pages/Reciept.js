import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {CartContext} from '../context'
import Payment from '../components/Payment';
import {IoIosBicycle} from 'react-icons/all'
import {BiWalk} from 'react-icons/all'



const ContainerDiv = styled.div`
  height: 90vh;
  background-color: #DDEBE9;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
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

const SettingsDiv = styled.div`

// height: 15vh;
width: 100vw;
// display: flex;
// justify-content: space-between;


`;

const SettingsDiv1 = styled.div`

// height: 15vh;
width: 100vw;
// display: flex;
// justify-content: space-between;


`;
const SettingsDiv2 = styled.div`

// height: 15vh;
width: 100vw;
// display: flex;
// justify-content: space-between;


`;

const Settings = styled.p`
color: #9586A8;
justify-content: flex-start;
margin-left: 20px;

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

const settingStyle = {

  marginLeft: '10px',
  justifyContent: 'flex-start',
  
  }

const chosenOption = {
  border: '2px solid #005B4D', 
  justifyContent: "flex-start", 
  // marginLeft: "15px" 
}

const Reciept = () => {

  const history = useHistory();

  const user_name = localStorage.getItem('user-name', '');
  const user_adress = localStorage.getItem('user-adress', '');
  const zipCode = localStorage.getItem('user-zipCode', '');
  const location = localStorage.getItem('user-location', '');

  const [style, setStyle] = useState();
  const [style1, setStyle1] = useState();

  const handleDeliveryChange = (e) => {

      if(style != chosenOption){
       setStyle(chosenOption)
      }
      else {
        setStyle(null);
      }
  }
  const handleDeliveryChange1 = (e) => {

      if(style1 != chosenOption){
       setStyle1(chosenOption)
      }
      else {
        setStyle1(null);
      }
  }

  const finishPayment = () => {
    history.push('/done')
  }

    return (
    <ContainerDiv>
      <TitleDiv>
        <Title> Checkout </Title>
      </TitleDiv>


      <Title style={settingStyle}> Betalningsmetod </Title>
      <SettingsDiv>
        <Payment> </Payment>
      </SettingsDiv>


      <Title style={settingStyle}> Leveransadress </Title>
        <SettingsDiv>
           <Settings style={{marginBottom: "0"}}>
              {user_name}
            </Settings>
             <Settings style={{marginBottom: "0"}}>
             {user_adress}
            </Settings>
             <Settings style={{marginBottom: "0"}}>
             {zipCode}
            </Settings>
             <Settings style={{marginBottom: "0"}}>
             {location}
            </Settings>
        </SettingsDiv>

    <Title style={settingStyle}> Leveransalternativ </Title>

    <SettingsDiv onClick={handleDeliveryChange} style={style} value="pickup"> 
      <Title style={{justifyContent: "flex-start", marginLeft: "15px" }}> 
      <BiWalk style={{fontSize: "25px", marginRight: "10px"}}/>
      Jag hämtar soppan själv 
      </Title>
    </SettingsDiv>

    <SettingsDiv onClick={handleDeliveryChange1} style={style1} value="delivery"> 
      <Title style={{justifyContent: "flex-start", marginLeft: "15px" }}>
      <IoIosBicycle style={{fontSize: "25px", marginRight: "10px"}}/> 
      Jag vill att soppan budas ut 
      </Title>
    </SettingsDiv>

    <ToPayment onClick={finishPayment}>
          SLUTFÖR BESTÄLLNINGEN
    </ToPayment>

    </ContainerDiv>

    );
}

export default Reciept;