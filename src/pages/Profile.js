import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'


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

height: 10vh;
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

const settingStyle = {

marginLeft: '10px',
justifyContent: 'flex-start',

}

const Profile = () =>{
const history = useHistory();


return (
    <ContainerDiv>
        <TitleDiv>
          <Title>Profil</Title>
        </TitleDiv>
        <Title>Your Name</Title>

        <Title style={settingStyle}> Betalmetod </Title>
        <SettingsDiv>
           <SettingsButton> Change </SettingsButton> 
          <Settings>
              **** **** **** 4747
          </Settings>
        </SettingsDiv>

        <Title style={settingStyle}> Leveransadress </Title>
        <SettingsDiv>
           <SettingsButton> Change </SettingsButton> 
          <Settings>
              Adressen skall hämtas från "adress" componenten
          </Settings>
        </SettingsDiv>


        <DealContainer>
            Beställ tre soppor till så bjuder vi på den sjätte
        </DealContainer>
    </ContainerDiv>
)
}

export default Profile;