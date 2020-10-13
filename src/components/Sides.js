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

const Sides = ({ sides, title }) => {

    const [num, setNum] = useState([
        { id:menu.drinks[0].id, amount: 0, type: menu.drinks[0].type },
        { id:menu.drinks[1].id, amount: 0, type: menu.drinks[1].type },
        { id:menu.drinks[2].id, amount: 0, type: menu.drinks[2].type },
        { id:menu.drinks[3].id, amount: 0, type: menu.drinks[3].type },

        { id:menu.breads[0].id, amount: 0, type: menu.breads[0].type },
        { id:menu.breads[1].id, amount: 0, type: menu.breads[1].type },
        { id:menu.breads[2].id, amount: 0, type: menu.breads[2].type },
        { id:menu.breads[3].id, amount: 0, type: menu.breads[3].type }
    ]);
  
  const { cart, setCart } = useContext(CartContext)
  //sådär, nu kan du använda setCart här som exempel och få tillgång till cart-statet 
// asgrymt, så om jag nu vill lägga till en cola, så gör jag typ "setCart(nånting)"
    // ja precis. tänkte dock om du kanske ska göra det när du trycker på OK. Allting läggs till. Men nu har ju varje knapp sitt eget state
    // kanske smartare att göra som du tänkte, att man lägger till det när man klickar på OK. 
  // borde funka, då gör du ett object i arrayen med all info för den rätten man beställt
  // men man behöver ju samla all data någonstans kom jag på
  // just nu är allt bara visuellt, har ingen backend. 

  // testa lite och se, kanske att man ändå kan använda cart så uppdateras det när man lägger till ta bort. 
  // klickar man på krysset eller backar så tar man bort objektet från cart-statet, borde ju gå
  // mjo, btw, navbaren finns i layout/footer.jsx såg att du var o kikade där
  // ah
  // kolla i 
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

  const ButtonGroup = () => {

    const [state, dispatch] = useReducer(buttonReducer, 0, init)

    const onClickHandler = (type) => dispatch({type: type})
    
    // varje knapp har sitt egna state nu ju som styr countet. 
    // sedan för att pusha till varukorgen så kan man lösa det när man klickar på OK kanske? 

    return (
      <>
        <Decrement
          /* disabled={} */
          onClick={() => onClickHandler('DECREMENT')}>
          -
        </Decrement>
        <Quantity>{state.count}</Quantity>
        <Increment
          disabled={state.count === 5 ? true : false}
          // såg nu att dem var divar. Kör du buttons så kan du disablea dem men vi
           //lägga det i buttonReducer funktionen också, KÖR VAD SOM ÄR LÄTTAST whoops caps
          onClick={() => onClickHandler('INCREMENT')}>
          +
        </Increment>
      </>
    )
  }
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
  
    return (
      <div>
        <p>{title}</p>
            <ul>{sides && sides.map((elem) => {
                return (
                    <ItemList key={elem.id} type={elem.type}>{elem.name}
                        <SoupQuantity>
                            {/* <Decrement
                            onClick={() => decrement(elem.id, elem.type)}>
                              -
                            </Decrement>
                            <Quantity>{num.id}</Quantity>
                            <Increment  
                                onClick={() => increment(elem.id, elem.type)}>
                              +
                          </Increment> */}
                           <ButtonGroup />
                        </SoupQuantity>
                    </ItemList>
                )
            })}
         </ul>
      </div>
    )

}

export default Sides;

            