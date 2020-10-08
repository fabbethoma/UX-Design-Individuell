import React from 'react'
import styled from 'styled-components';


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

const Deals = () => {
return (
      <DealContainer>
        <StyledH3>
          Få var sjätte soppa gratis!
        </StyledH3>
      </DealContainer>
  );
};

export default Deals;