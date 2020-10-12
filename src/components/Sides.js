import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


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
        { id:1, amount: 0 },
        { id:2, amount: 0 },
        { id:3, amount: 0 },
        { id:4, amount: 0 }
    ]);
    
      const objectToChange = (id) => {
        let theObject = num.find(elem => elem.id === id);
        // console.log(theObject.amount);
      return theObject;
    }
    
    const increment = (id) => {
        if (num) {

          // let theObject = num.find(elem => elem.id === id);

          // setNum((ps) => ({ ...ps, [id]: ps[id] + 1 }));
          // console.log(objectToChange(id));
          console.log(objectToChange(id).amount = objectToChange(id).amount + 1 );
          // setNum(objectToChange(id).amount = objectToChange(id).amount + 1 );

          // console.log(theObject.amount);
        }
    }
    // skicka med prop som säger type
    const decrement = (id) => {
        
    }
    
    return (
      <div>
        <p>{title}</p>
            <ul>{sides && sides.map((elem) => {
                return (
                    <ItemList key={elem.id}>{elem.name}
                        <SoupQuantity>
                            <Decrement
                            onClick={() => decrement(elem.id)}>
                              -
                            </Decrement>
                            <Quantity></Quantity>
                            <Increment  
                                onClick={() => increment(elem.id)}>
                              +
                          </Increment>
                        </SoupQuantity>
                    </ItemList>
                )
            })}
         </ul>
      </div>
    )

}

export default Sides;

            