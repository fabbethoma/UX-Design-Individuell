import React, { useState } from 'react'
import styled from 'styled-components'
import Soups from '../components/soups'
import menu from '../menu'
import ChosenSoupPage from '../components/Details';
import Deals from '../components/Deals';
import Filter from '../components/Filter';




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

const Home = () =>{

const [adress, setadress] = useState('');
  //const [adress, setadress] = useState('blommensbergsvägen 180'); // for dev reason.
const [newadress, setNewadress] = useState('adress');
const [numberOfSoups, setNumberOfSoups] = useState(1);
const [chosenSoup, setChosenSoup] = useState();
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
  const goBack = () => {
    setChosenSoup(undefined)
}


if(chosenSoup) {
    return (<div><ChosenSoupPage onClick={goBack} soup={chosenSoup} /></div>)
} 
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
    )
}

export default Home;