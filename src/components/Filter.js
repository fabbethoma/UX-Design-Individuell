import React from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const FilterElem = styled.div`
  margin-top: 5px;
  margin-left: 20px;
  cursor: pointer;
  background-color: white;
  padding: 5px;
  box-shadow: 0 4px 2px -2px gray;
  color: black;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  :hover {
    background-color: "#2EDE9E";
  }

  @media (max-width: 800px) {
    
  }
`;

const RemoveFilter = styled.div`
  margin-top: 5px;
  margin-left: 20px;

  cursor: pointer;
  :hover {
    background-color: darksalmon;
  }
  background-color: salmon;
  padding: 5px;
  color: white;
  border-radius: 12px 12px 12px 12px;
  text-align: center;
  font-size: 20px;
`;
const uniqueSub = (obj) => {
  let arr = [];

  obj.forEach((object) => arr.push(object.sub));
  let flattened = [].concat.apply([], arr);
  return [...new Set(flattened)];
};

const Filter = ({ soups, onClick }) => {
  return (
    <FilterWrapper className='filterWrapper'>
      {uniqueSub(soups).map((sub) => (
        <FilterElem onClick={() => onClick(sub)} key={sub}>
          {sub + 'a'}
        </FilterElem>
      ))}
      <RemoveFilter onClick={() => onClick('')}>Ta bort filter</RemoveFilter>
    </FilterWrapper>
  );
};

export default Filter;
