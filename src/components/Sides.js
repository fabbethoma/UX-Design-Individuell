import React, {useState, useEffect, useReducer, useContext} from 'react'
import styled from 'styled-components'
import menu from '../menu';
import {CartContext} from '../context/index'

const SoupQuantity = styled.div`
  width: 70px;
  display: flex;
  flex-direction: row;
`;
const Increment = styled.div`
  display:flex;
  padding: 8px;
  cursor: pointer;
  /* position: absolute; */
  right: 10px;
  top: -2px;
  align-items: right;
`;
const Decrement = styled.div`
  padding: 8px;
  
  cursor: pointer;
  /* position: absolute; */
  right: 10px;
  top: -2.3px;
`;
const Quantity = styled.div`
  cursor: default;
  background-color: white;
  padding: 8px;
  border-radius: 10px 10px 10px 10px;
  /* position: absolute; */
  left: 17px;
  font-size: 10px;
`;

const ItemList = styled.li`
height: 30px;
display: flex;
flex-direction: row;
justify-content: space-between;

`;

 function init() {
    return {count: 0}
  }
  
  function buttonReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT': 
        if (state.count === 5) return { count: 5} //sets max value
        return { count: state.count + 1 }
      case 'DECREMENT': 
        if (state.count === 0) return {count: 0} //sets min value
        return { count: state.count - 1 }
      default: throw new Error('Something went wrong')
    }
  }

  const ButtonGroup = ({item}) => {
    const [state, dispatch] = useReducer(buttonReducer, 0, init)
    const {cart, setCart} = useContext(CartContext)
    const onClickHandler = (type) => dispatch({ type: type })
    
    const onItemUpdate = (item, count) => {
      
        let arr = cart.current_soup.sides.map((side) => side.id === item.id && side.type === item.type
          ?
          { ...side, amount: count }
          :
          side
        )
      
    
      setCart({
        ...cart,
        current_soup: {
          ...cart.current_soup,
          sides: [

            ...arr
          ]
        }
      })
    }
    
    return (
      <>
        <Decrement
          onClick={() => { onClickHandler('DECREMENT'); onItemUpdate(item, state.count);}}>
          -
        </Decrement>
        <Quantity>{state.count}</Quantity>
        <Increment
          onClick={() => { onClickHandler('INCREMENT'); onItemUpdate(item, state.count);}}>
          +
        </Increment>
      </>
    )
}
  
const Sides = ({ sides, title}) => {
  
    return (
      <div>
        <p>{title}</p>
            <ul>{sides && sides.map((item) => {
                return (
                  <ItemList key={item.id} type={item.type}>{item.name}: {item.price}kr
                      <SoupQuantity>
                         <ButtonGroup
                         item={item} />
                      </SoupQuantity>
                  </ItemList>
                )
            })}
         </ul>
      </div>
    )

}

export default Sides;



  //   const increment = (id, type) => {
  //     if (!num) return; 
  //       // setNum((ps) => ({ ...ps, [id]: ps[id].amount + 1 })); <----------- hale theObject = num.find(elem => elem.id === id && elem.type === type);
  //     let index = num.findIndex(elem => elem.id === id && elem.type === type);

      
      
  //     console.log(num[index]) //det här funkar 
  //     setNum(
  //       [
  //         ...num, //behåller statet
  //       {
  //         ...num[index], //tycker den borde uppdatera det här statet
  //         amount: +1 // jag tycker det borde ha funkat för länge sen. jag fattar inte varför den inte vill
  //           //vet du vad vi gör. Pallar du skriva om den? // om du vill, allt för att få skiten att fungera haha
  //         // ok följ mig då, har en ide
  //         }
  //       ]
  //     )
  //     console.log(num)
      
  //     //
  //     // 
  // } 

  //    /* console.log('Typ av side: ' + theObject.type);
  //       console.log( 'ID är: ' + theObject.id); */
  //       // console.log(theObject.amount = theObject.amount + 1 );
  //    /*   setNum([...num, {[theObject.id]: theObject[theObject.id].amount + 1}]) */
  //   const decrement = (id) => {
        
  //   }


  /*  const [num, setNum] = useState([
        { id:menu.drinks[0].id, amount: 0, type: menu.drinks[0].type },
        { id:menu.drinks[1].id, amount: 0, type: menu.drinks[1].type },
        { id:menu.drinks[2].id, amount: 0, type: menu.drinks[2].type },
        { id:menu.drinks[3].id, amount: 0, type: menu.drinks[3].type },

        { id:menu.breads[0].id, amount: 0, type: menu.breads[0].type },
        { id:menu.breads[1].id, amount: 0, type: menu.breads[1].type },
        { id:menu.breads[2].id, amount: 0, type: menu.breads[2].type },
        { id:menu.breads[3].id, amount: 0, type: menu.breads[3].type }
    ]); */
            