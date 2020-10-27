import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Soups from '../components/soups'
import menu from '../menu'
import Details from '../components/Details';
import Deals from '../components/Deals';
import Filter from '../components/Filter';
import {CartContext} from '../context/index'

// const StyledDiv = styled.div`
//   color: #066638;
//   background-color: #ddebe9;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 100vw;
//   height: 100vh;
// `;

// const StyledInput = styled.input`
//   width: 100%;
//   height: 30px;
//   border-radius: 10px;
//   border: none;
//   box-shadow: 5px 5px 5px #ccc;
// `;

const SoupWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const StyledAdress = styled.h3`
  display: flex;
  justify-content: center;
  height: 5vh;
  padding-top: 15px;
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

const Home = ({inputText}) =>{

const [adress, setAdress] = useState();
const [newAdress, setNewadress] = useState('adress');
const [numberOfSoups, setNumberOfSoups] = useState(1);
const [chosenSoup, setChosenSoup] = useState();
const [chosenFilter, setChosenFilter] = useState('');
const { cart, setCart } = useContext(CartContext)

let currentAdress = localStorage.getItem('user-adress', '');
  
const onAddToCartClick = () => {
    setNumberOfSoups(numberOfSoups);
    //open modal.
  }; // send as props.

  const handleGoBackClick = () => {
    
  };

  const handleSoupClick = (id) => {
    const chosenSoup = menu.soups.find((s) => s.id === id);
    const {drinks, breads} = menu

    let temp = cart.cart
    
    setCart({
      cart: [...cart.cart],
      current_soup: {
        ...chosenSoup,
        sides: [...drinks, ...breads],
      }
    })
    
  };
  //change which soups rendering, - eg. if Veganks is clicked, show only Vegansk soppa.
  const handleFilterClick = (key) => {
    setChosenFilter(key);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setAdress(newAdress);
  };
  const handleAdressChange = (e) => {
    setNewadress(e.target.value);
    };
  const goBack = () => {
    setCart({
      ...cart,
      current_soup: {}
    })
}

if(Object.keys(cart.current_soup).length != 0) {
    return (<div><Details onClick={goBack} soup={cart.current_soup} /></div>)
} 
return (
    <div>
        <StyledAdress onClick={handleAdressChange}> Nuvarande adress: <p style ={{color: "red", marginLeft: "5px", marginTop: "14px"}}>{currentAdress} </p> </StyledAdress> {/* gör en onClick för attt ändra adressen. */}
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