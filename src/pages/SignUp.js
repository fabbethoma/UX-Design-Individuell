import React, { useState } from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const ContainerDiv = styled.div`
  height: 90vh;
  background-color: #F8F8F8;
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

const Form = styled.form`
margin: 0 auto;
display flex;
flex-direction: column;
width: 85vw;
margin-top: 10vh;

`;

const StyledInput = styled.input`

border: 1px solid #005B4D;
border-radius: 10px;
background: white;
height: 40px;
padding: 4px;
margin-bottom: 10px;
`;

const Label = styled.label`
margin: "0" 
marginLeft:"5px"
color: "#005B4D"
`;

const SubmitButton = styled.button`
border-radius 10px;
width: 160px;
height: 60px;
background-color: #2EDE9E;
color: #005043;
margin: 0 auto;
border: none;
outline: none;

`;

const alreadyAccount = {
    margin: 'auto',
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'

}

const SignUp = () => {

    const history = useHistory();

    const [userName, setUserName] = useState();
    let user_name = localStorage.getItem('user-name', '');

    const [newAdress, setNewAdress] = useState('');
    let currentAdress = localStorage.getItem('user-adress', '');


const handleNameChange = (e) => {
    setUserName(e.target.value);
}

const handleAdressChange = (e) => {
    setNewAdress(e.target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    user_name = localStorage.setItem('user-name', userName);

    setNewAdress(newAdress)
    currentAdress = localStorage.setItem('user-adress', newAdress);

    history.push('/cart');

}


return(
        <ContainerDiv>
            <TitleDiv>
                <Title> Registrera konto </Title>
            </TitleDiv>
            <Title style={{fontSize:"10", paddingTop: "20px"}}> Du behöver ett konto för att kunna fortsätta </Title>
            <Form>
                <Label>Användarnamn</Label>
                <StyledInput
                value={userName}
                onChange={handleNameChange}
                type="text"
                placeholder="Användarnamn"
                ></StyledInput>

                <Label>Leveransadress</Label>
                <StyledInput
                value={currentAdress}
                onChange={handleAdressChange}
                type="text"
                placeholder="Vägengatan 1"
                ></StyledInput>

                <Label>Telefonnummer</Label>
                <StyledInput
                type="number"
                placeholder="+46 *** *** ***"
                ></StyledInput>


            <SubmitButton type="submit" onClick={onSubmit}>
                Registrera konto
            </SubmitButton>
            </Form>

            <div style={alreadyAccount}>
            <h4 style={{textDecoration:'underline'}}> Har du redan ett konto? </h4>
            <p style={{textDecoration:'underline', marginRight: "auto", marginLeft: "auto"}}> Klicka här! </p>
            </div>
            
        </ContainerDiv>
    );
}



export default SignUp;