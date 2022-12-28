import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card.js';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-gap: 40px;
`;
const StyledWrapperH1 = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  color: #333;
  margin: 10px;
  font-size: 18px;
`;
const GridTemplate = () => (
  <StyledWrapper>
    <StyledWrapperH1>
      <h1>Systemy FRSE</h1>
    </StyledWrapperH1>
    <StyledGridWrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledGridWrapper>
  </StyledWrapper>
);

export default GridTemplate;
