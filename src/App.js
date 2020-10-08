import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import userEvent from '@testing-library/user-event';
import Soups from './components/soups';
import menu from './menu';
import Details from './components/Details';
import Filter from './components/Filter';
import AddToCart from './components/AddToCart';
import Deals from './components/Deals';

import Cart from './pages/Cart';
import Profile from './pages/Profile';

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

const SoupWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const StyledAdress = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

//create stages. first soup stage.
//on soupclick, pickedSoup stage
//perhaps switch? for controlling pages.
/*
switch(user) {
  case adress: 
  return (<div></div>)
  break;
  case chosenSoup && adress:
    return (<div></div>)
    break;
}
*/
//help for checking empty obj.
function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}

const filterByProp = (arr, str) => {
  if (str === '') {
    return arr;
  }
  let filtered = [];
  arr.forEach((obj) => obj.sub.includes(str) && filtered.push(obj));
  return filtered;
};

export default function App() {
  const [adress, setadress] = useState('');
  //const [adress, setadress] = useState('blommensbergsvägen 180'); // for dev reason.
  const [newadress, setNewadress] = useState('adress');
  const [numberOfSoups, setNumberOfSoups] = useState(1);
  const [chosenSoup, setChosenSoup] = useState({});
  const [chosenFilter, setChosenFilter] = useState('');
  const onAddToCartClick = () => {
    setNumberOfSoups(numberOfSoups);
    //open modal.
  }; // send as props.

  const handleGoBackClick = () => {
    setChosenSoup({});
  };

  const handleSoupClick = (id) => {
    const chosenSoup = menu.soups.find((s) => s.id === id);
    setChosenSoup(chosenSoup);
  };
  //change which soups rendering, - eg. if Veganks is clicked, show only Vegansk soppa.
  const handleFilterClick = (key) => {
    setChosenFilter(key);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setadress(newadress);
  };
  const handleadressChange = (e) => {
    //console.log(e.target.value);
    setNewadress(e.target.value);
  };

  //functions for filtering soups by property.
  //get all values in an array. then filter out duplicates.

  let user = { admin: true };
  user.admin = !user.admin;

  if (user.admin) {
    return (
      <div>
        <p>Admin Page</p>
      </div>
    );
  } else if (!adress) {
    return (
      <StyledDiv className='App'>
        <div>
          <h1 style={{marginBottom: "1px"}}>Välkommen till</h1>
          <h1 style={{fontSize: "60px", marginTop: "1px"}}>Souperb!</h1>
          <h3>Var befinner du dig någonstans?</h3>
          <form onSubmit={handleSubmit}>
            <StyledInput
              value={newadress}
              onChange={handleadressChange}
              type='text'
              placeholder='Adress'
            ></StyledInput>
          </form>

          <p style={{color: "#066638", margin: "20px auto", width: "80vw"}}>För att veta om vi kan leverera till dig, 
          så ber vi dig skriva in din adress.</p>
        </div>
      </StyledDiv>
    );
  } else if (adress && !isEmpty(chosenSoup)) {
    return <Details onClick={handleGoBackClick} soup={chosenSoup} />;
  } else if (adress) {
    return (
      <div>
        <StyledAdress> Nuvarande adress: <StyledAdress style={{color: "red", fontSize: "18px", marginLeft: "5px"} }>  {adress} </StyledAdress> </StyledAdress> {/* gör en onClick för attt ändra adressen. */}
        <Deals/>
        <Filter onClick={handleFilterClick} soups={menu.soups} />
        <SoupWrapper className='soupwrapper'>
          <Soups
            onClick={handleSoupClick}
            /* soups={menu.soups} */
            soups={filterByProp(menu.soups, chosenFilter)}
          />
        </SoupWrapper>
      </div>
    );
  }
}
