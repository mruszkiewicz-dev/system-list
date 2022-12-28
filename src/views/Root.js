import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate.js';
import GridTemplate from '../templates/GridTemplate.js';

const StyledWrapper = styled(MainTemplate)`
  background-color: red;
`;

const Root = () => (
  <>
    <StyledWrapper />
    <GridTemplate />
  </>
);

export default Root;
