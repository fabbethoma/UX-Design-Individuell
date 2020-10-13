import React from 'react';
import styled from 'styled-components';
import { BsClockHistory } from "react-icons/bs";

const StyledSpan = styled.span`
  font-size: 12px;
  // font-variant: small-caps;
  font-weight: 600;
  position: absolute;
  left: ${(p) => p.position === 'name' && '10px'};
  right: ${(p) => p.position !== 'name' && '10px'};
`;
const Time = styled.div`
  padding: 5px;
  margin-top: 15px;
  margin-left: 6px;
  font-size: 11px;
`;

const SoupElem = styled.div`
  & :hover {
    cursor: pointer;
  }
  width: 40vw;
  display: flex;
  flex-direction: column;
  margin: 10px 10px 10px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 800px) {
    width: 90vw;
  }
`;
const Img = styled.img`
  max-width: 100%;
  max-height: 300px;
`;

const ContentWrapper = styled.div`
  position: relative;
`;

const Soups = ({ soups, onClick }) => {
  console.log(soups); //undefined????
  return (
    <>
      {soups.map((soup) => (
        <SoupElem
          className='SoupElem'
          onClick={() => onClick(soup.id)}
          key={soup.id}
        >
          <Img src={soup.img}></Img>

          <ContentWrapper>
            <StyledSpan position='name'>
              {soup.name + ' - ' + soup.kcal + 'kcal'}
            </StyledSpan>{' '}
            <StyledSpan>
              {soup.sub[0] + ', '} {soup.sub[1] && soup.sub[1]}
            </StyledSpan>
          </ContentWrapper>
          <Time> <BsClockHistory/> 30-35min</Time>
        </SoupElem>
      ))}
    </>
  );
};

export default Soups;
