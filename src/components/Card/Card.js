import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Button/Button.js';

const StyledWrapper = styled.div`
  text-align: center;
  position: relative;
  background: #054371;
  width: 350px;
  height: 180px;
  border-radius: 6px;
  padding: 1rem;
  color: #dbe3e9;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  overflow: hidden;
  transition: 0.4s ease-in-out  ;
  &:hover {
    transform: scale(1.1);
  }
  ${({ showMore }) =>
    showMore &&
    css`
      transform: scale(0.9);
    `}
`;
const StyledP = styled.p`
  font-size: 14px;
  font-weight: 200;
`;

const Card = ({ title, description, link, showMore }) => (
  <StyledWrapper showMore={showMore}>
    <h1>{title}</h1>
    <StyledP>{description}</StyledP>
    <Button link={link} />
  </StyledWrapper>
);
export default Card;
