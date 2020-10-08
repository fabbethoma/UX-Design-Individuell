import React from 'react'
import styled from 'styled-components';
import {Carousel} from 'antd'

const DealContainer = styled.div`

@media (max-width: 800px) {
  width: 90vw;
  height: 15vh;
  background-color: #DDEBE9;
  color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 3px 3px 0px #ccc;
}
`;

const StyledH3 = styled.h3`
  color: #53646B;
`;

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#53646B',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#DDEBE9',
};

const Deals = () => {
return (
        <Carousel autoplay={onChange} effect="fade">
          <div>
            <h3 style={contentStyle}>Få din sjätte soppa gratis!</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Få en gratis soppa om du delar med en vän</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Wow grattis! Du kom hela vägen hit!</h3>
          </div>
       </Carousel>
  );
};

export default Deals;