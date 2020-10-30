import React, { useState } from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import Password from 'antd/lib/input/Password';

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
margin-left: auto;
margin-right: auto;
display flex;
flex-direction: column;
width: 85vw;
margin-top: 15px;

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
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'

}

const SignUp = () => {

    const history = useHistory();

    const [userName, setUserName] = useState();
    let user_name = localStorage.getItem('user-name', '');


    const [password, setPassword] = useState();

    const [newAdress, setNewAdress] = useState('');
    let currentAdress = localStorage.getItem('user-adress', '');

    const [zipCode, setZipCode] = useState();
    // let currentZipCode = localStorage.getItem('user-zipCode', '');

    const [location, setLocation] = useState();


const handleNameChange = (e) => {
    setUserName(e.target.value);
}

const handleAdressChange = (e) => {
    setNewAdress(e.target.value);
}

const handleZipChange = (e) => {
    setZipCode(e.target.value);
}

const handleLocationChange = (e) => {
    setLocation(e.target.value);
}

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    user_name = localStorage.setItem('user-name', userName);

    // setNewAdress(newAdress)
    currentAdress = localStorage.setItem('user-adress', newAdress);

    localStorage.setItem('user-zipCode', zipCode)
    localStorage.setItem('user-location', location);
    localStorage.setItem('user-password', password)

    if(user_name){
        history.push('/reciept');
    }
    else {
        history.push('/cart');
    }
    

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
                // fix issue with this 
                onChange={handleAdressChange} 
                type="text"
                placeholder="Vägengatan 1"
                ></StyledInput>

                <Label>Postkod</Label>
                <StyledInput
                value={zipCode}
                onChange={handleZipChange} 
                type="number"
                placeholder="123 45"
                ></StyledInput>

                <Label>Ort</Label>
                <StyledInput
                value={location}
                onChange={handleLocationChange} 
                type="text"
                placeholder="Stockholm"
                ></StyledInput>

                <Label>Telefonnummer</Label>
                <StyledInput
                type="number"
                placeholder="+46 *** *** ***"
                ></StyledInput>

                <Label>Lösenord</Label>
                <StyledInput
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder=""
                ></StyledInput>


            <SubmitButton type="submit" onClick={onSubmit}>
                Registrera konto
            </SubmitButton>
            </Form>

            <div style={alreadyAccount}>
            <h4 style={{textDecoration:'underline'}}> Har du redan ett konto? </h4>
            <button 
            onClick={() => history.push('/signin')} 
            style={{textDecoration:'underline',
             marginRight: "auto", 
             marginLeft: "auto", 
             border: "none", 
             outline: "none", 
             backgroundColor:"inherit"}}
             > Klicka här! </button>
            </div>
            
            
        </ContainerDiv>
    );
}



export default SignUp;