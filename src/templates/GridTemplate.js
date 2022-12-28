import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card.js';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  grid-gap: 50px;
`;
const StyledWrapperH1 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  color: #333;
  margin: 50px;
  font-size: 22px;
`;
const GridTemplate = () => (
  <StyledWrapper>
    <StyledWrapperH1>
      <h1>Systemy FRSE</h1>
    </StyledWrapperH1>
    <StyledGridWrapper>
      <Card>test</Card>
      <Card>test</Card>
      <Card>test</Card>
      <Card>test</Card>
      <Card>test</Card>
      <Card>test</Card>
      <Card>test</Card>
      <Card>test</Card>

    </StyledGridWrapper>
  </StyledWrapper>
);

export default GridTemplate;
