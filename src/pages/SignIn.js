import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import styled from 'styled-components'


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

const SignIn = () => {

  const history = useHistory();
  
  const handleNameChange = (e) => {
    setUserName(e.target.value);
}

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
}

const onSubmit = () => {

  if(user_name){
    history.push('/reciept');
  }
  else{
    return(<span> Du har inte angivit rätt användarnamn eller lösenord </span>)
  }
}

    const [userName, setUserName] = useState();
    let user_name = localStorage.getItem('user-name', '');


    const [password, setPassword] = useState();

    return(
    <ContainerDiv>
      <TitleDiv>
        <Title> Registrera konto </Title>
      </TitleDiv>
      <Form>
        <Label>Användarnamn</Label>
        <StyledInput
        onChange={handleNameChange}
        type="text"
        placeholder="Användarnamn"
        ></StyledInput>

        <Label>Lösenord</Label>
        <StyledInput
        onChange={handleNameChange}
        type="password"
        ></StyledInput>

          <SubmitButton type="submit" onClick={onSubmit}>
            Logga in
          </SubmitButton>
      </Form>

    </ContainerDiv>
        
    );
}

export default SignIn;