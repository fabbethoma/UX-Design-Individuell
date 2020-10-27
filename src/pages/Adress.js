import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'; 
import styled from 'styled-components'
import soupLogo from '../img/soup.png'


const StyledDiv = styled.div`
  color: #066638;
  background-color: #ddebe9;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  border: none;
  box-shadow: 5px 5px 5px #ccc;
`;

function Adress() {
  const [adress, setAdress] = useState('');
  const history = useHistory();
  let currentAdress = localStorage.getItem('user-adress', '');
  
  const handleAdressChange = (e) => {
    setAdress(e.target.value);
  };

  const submit = (e) =>{
      e.preventDefault();
      setAdress(currentAdress);
      if (adress !== '') {
          history.push('/home');
      }
      localStorage.setItem('user-adress', adress);
  };

  useEffect(() => {
      let adress = localStorage.getItem('user-adress');
      if( adress === 'null' || adress === null){
          localStorage.setItem('user-adress', '');
          return;
      }
      if(adress !== ''){
          history.push('/home')
      }
  }, [adress]);
  return (
      <StyledDiv className='App'>
      <div>
        <h1 style={{marginBottom: "1px", color: "#066638", fontFamily: 'Mystery Quest'}}>Välkommen till</h1>
        <h1 style={{fontSize: "60px", marginTop: "1px", marginBottom: "5px", color: "#066638", fontFamily: 'Mystery Quest'}}>Souperb!</h1>
        <img style={{height: "70px", width: "70px", margin: "auto", marginBottom: "30px"}} src={soupLogo}></img>
        <h3>Var befinner du dig någonstans?</h3>
        <form onSubmit={submit}>
          <StyledInput
            value={adress}
            onChange={handleAdressChange}
            type='text'
            placeholder='Adress'
          />
        </form>
        <p style={{color: "#066638", margin: "20px auto", width: "80vw"}}>För att veta om vi kan leverera till dig, 
        så ber vi dig skriva in din adress.</p>
      </div>
    </StyledDiv>
  )
}

export default Adress;