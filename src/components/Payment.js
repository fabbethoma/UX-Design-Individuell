import React, {useState} from 'react'
import styled from 'styled-components'
import { FiCreditCard } from "react-icons/all";
import swishLogo from '../img/swish.png'
import klarnaLogo from '../img/klarna.png'


const ContainerDiv = styled.div`
  height: 90vh;
  background-color: #f6f5f5;
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

const SettingsDiv = styled.div`

height: 10vh;
width: 100vw;

`;

const Settings = styled.p`
color: #9586A8;
justify-content: flex-start;
margin-left: 20px;

`;

const SettingsButton = styled.button`

float: right;
margin-right: 20px;
border: none;
outline: none;
background: none;
color: #9586A8;
font-weight: 600;

`;


const PaymentOptions = () => {

  // const [status, setStatus] = useState(false);
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  const statusHandler = (e) => {
    setSelected(e.target.value)
    setVisible(false);
    console.log(selected)
  }

  const showOptions = () => {

    setVisible(!visible);
  }

    return(
        <div>
          <SettingsDiv>
          <SettingsButton onClick={showOptions}> Ändra </SettingsButton>

          <div>
            {selected === "credit"
            ?
            <Settings>
            <FiCreditCard style={{marginRight: "10px", fontSize: "20px"}}/> **** **** **** 4747
            </Settings>
            : <Settings>
                {selected}
            </Settings>

            }

            {selected === null && visible === false
            ? <Settings>Lägg till en betalningsmetod</Settings>
              : null
            }

            {visible === true
            ?<form>
            <Settings style={{justifyContent: "space-evenly"}}>
              <input type="radio" value="swish" onChange={statusHandler}/>
                <label for="swish" style={{marginLeft:"10px"}}>Swish</label>
              <img style={{height: "20px", width: "20px", marginLeft:"10px"}} src={swishLogo}></img>
            </Settings>
            <Settings>
              <input type="radio" value="klarna" onChange={statusHandler}/>
                <label for="klarna" style={{marginLeft:"10px"}}> Klarna</label>
              <img style={{height: "20px", width: "20px", marginLeft:"10px"}} src={klarnaLogo}></img>

            </Settings>
            <Settings>
              <input type="radio" value="credit"  onChange={statusHandler}/>
                <label for="credit" style={{marginLeft:"10px"}}> Kreditkort</label>
              <FiCreditCard style={{marginLeft: "10px", fontSize: "20px", marginBottom: "0"}}/>
            </Settings>
          </form>
            :
            null
            }

          </div>

          </SettingsDiv>
        </div>
    );

}

export default PaymentOptions;