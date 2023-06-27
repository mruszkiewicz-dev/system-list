import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  line-height: normal;
  position: absolute;
  clear: both;
  bottom: 15px;
  right: 50%;
  transform: translate(50%, -50%);
  min-height: 25px;
  min-width: 0;
  outline: none;
  padding: 10px 14px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 70%;
  will-change: transform;
  color: white;
  background-color: #bd9d4b;

  &:disabled {
    
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: #bd9d4b;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  }

  &:active {
    box-shadow: none;
  }
`;
const Button = ({ link }) => (
  <StyledButton href={link} target="_blank">
    Wybierz
  </StyledButton>
);
export default Button;
