import React from 'react';
import styled from 'styled-components';

const StyledArowWrapper = styled.div`
  width: 10vmin;
  height: 10vmin;
  box-sizing: border-box;
  position: relative;
  transform: rotate(-225deg);

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-width: 0.8vmin 0.8vmin 0 0;
    border-style: solid;
    border-color: #054371;
    transition: 0.2s ease;
    display: block;
    transform-origin: 100% 0;
  }

  &:after {
    content: '';
    float: left;
    position: relative;
    top: -100%;
    width: 100%;
    height: 100%;
    border-width: 0 0 0 0;
    border-style: solid;
    border-color: #fafafa;
    transform-origin: 100% 0;
    transition: 0.2s ease;
  }

  &:hover::after {
    transform: rotate(45deg);
    border-color: #cdaa51;
    height: 100%;
  }
  &:hover::before {
    border-color: orange;
    transform: scale(0.8);
  }
`;

const Arow = () => <StyledArowWrapper />;

export default Arow;
