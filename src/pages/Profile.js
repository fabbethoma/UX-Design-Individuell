import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {Modal} from 'antd'
import {message} from 'antd'
import Payment from '../components/Payment'
import swishLogo from '../img/swish.png'

const ContainerDiv = styled.div`
  height: 90vh;
  background-color: #f6f5f5;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;


const DealContainer = styled.div`

@media (max-width: 800px) {
  width: 90vw;
  height: 15vh;
  background-color: #DDEBE9;
  color: #53646B;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 3px 3px 0px #ccc;
}
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

height: 15vh;
width: 100vw;
// display: flex;
// justify-content: space-between;


`;

const Settings = styled.p`
color: #9586A8;
justify-content: flex-start;
margin-left: 20px;

`;

const SettingsButton = styled.button`

float: right;
margin-right: 20px;
border: none;
outline: none;
background: none;
color: #9586A8;
font-weight: 600;

`;

const StyledInput = styled.input`
color: #9586A8;
justify-content: flex-start;
margin-left: 20px;
border: none;
outline: none;
background: none;

`;

const settingStyle = {

marginLeft: '10px',
justifyContent: 'flex-start',

}

const Profile = () =>{

const history = useHistory();
const [visible, setVisible] = useState(false);

const [adress, setAdress] = useState();
const [newAdress, setNewAdress] = useState('');
let currentAdress = localStorage.getItem('user-adress', '');

let user_name = localStorage.getItem('user-name', '');
const user_adress = localStorage.getItem('user-adress', '');
const zipCode = localStorage.getItem('user-zipCode', '');
const location = localStorage.getItem('user-location', '');

const handleAdressChange = (e) => {
  setNewAdress(e.target.value);
}

const showModal = () => {
  setVisible(true)
};

const handleCancel = e => {
  console.log(e);
  setVisible(false)
};

const success = () => {
  message.success('Din adress är nu ändrad');
};

const handleOk = e => {
  e.preventDefault();
  success();
  setNewAdress(newAdress)
  localStorage.setItem('user-adress', newAdress);
  setVisible(false);
}


return (
    <ContainerDiv>
        <TitleDiv>
          <Title>Profil</Title>
        </TitleDiv>
        <Title>
          {user_name
          ? <Title>{user_name}</Title>
          : <Title></Title>
          }
          
        </Title> 
        {/* Ladda in användarnamn från localstorage / annars rendera ingenting */}
        <Title style={settingStyle}> Betalningsmetod </Title>
        <SettingsDiv>
          <Payment></Payment>
        </SettingsDiv>

        <Title style={settingStyle}> Leveransadress </Title>
        <SettingsDiv>
           <SettingsButton onClick={showModal}> Ändra </SettingsButton> 
              
              {user_name
              ? <Settings>
                  <Settings  style={{marginBottom: "0"}}>
                  {user_name}
                  </Settings>
                  <Settings  style={{marginBottom: "0"}}>
                  {user_adress}
                  </Settings>
                  <Settings  style={{marginBottom: "0"}}>
                  {zipCode}
                  </Settings>
                  <Settings  style={{marginBottom: "0"}}>
                  {location}
                  </Settings>
                </Settings>
            : <Settings> {currentAdress} </Settings>
              }

           <Modal
           title="Ändra din adress nedan:"
           visible={visible}
           onOk={handleOk}
           onCancel={handleCancel}
           cancelText="Avbryt"
           >

           <form onSubmit={handleOk}>
           <StyledInput
           value={newAdress}
           onChange={handleAdressChange}
           type="text"
           placeholder={currentAdress}
           />
           
           </form>
            </Modal> 
        </SettingsDiv>

        <DealContainer>
            Beställ tre soppor till så bjuder vi på den sjätte
        </DealContainer>
    </ContainerDiv>
)
}

export default Profile;