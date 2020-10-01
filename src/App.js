import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import userEvent from '@testing-library/user-event';
import Soups from './components/soups';
import menu from './menu';
import ChosenSoupPage from './components/chosenSoupPage';
import Filter from './components/Filter';
import AddToCart from './components/AddToCart';

const StyledDiv = styled.div`
  color: #066638;
  background-color: #ddebe9;
  display: flex;
  justify-content: center;
  align-items: center;
  <link href="https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap" rel="stylesheet">

  width: 100vw;
  height: 100vh;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 20px;
`;

const SoupWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

//create stages. first soup stage.
//on soupclick, pickedSoup stage
//perhaps switch? for controlling pages.
/*
switch(user) {
  case address: 
  return (<div></div>)
  break;
  case chosenSoup && address:
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
  const [address, setAddress] = useState('');
  //const [address, setAddress] = useState('blommensbergsvägen 180'); // for dev reason.
  const [newAddress, setNewAddress] = useState('Address');
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
    setAddress(newAddress);
  };
  const handleAddressChange = (e) => {
    //console.log(e.target.value);
    setNewAddress(e.target.value);
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
  } else if (!address) {
    return (
      <StyledDiv className='App'>
        <div>
          <h1>Välkommen till Souperb</h1>
          <h3>Var befinner du dig någonstans?</h3>
          <form onSubmit={handleSubmit}>
            <StyledInput
              value={newAddress}
              onChange={handleAddressChange}
              type='text'
              placeholder='Adress'
            ></StyledInput>
          </form>
        </div>
      </StyledDiv>
    );
  } else if (address && !isEmpty(chosenSoup)) {
    return <ChosenSoupPage onClick={handleGoBackClick} soup={chosenSoup} />;
  } else if (address) {
    return (
      <div>
        <h1>Välkommen </h1>
        <h3>{address}</h3> {/* gör en onClick för attt ändra addressen. */}
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
