import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button.js';

class Card extends React.Component {
  state = {
    active: false,
  };

  render() {
    const StyledWrapper = styled.div`
      text-align: center;
      position: relative;
      background: #054371;
      width: 350px;
      height: 180px;
      border-radius: 6px;
      padding: 1rem;
      color: #DBE3E9;
      -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
      overflow: hidden;
      &:hover {
        transform: scale(1.1);
        transition: 0.3s ease-out;
      }
    `;

    const { active } = this.state;
    return (
      <StyledWrapper active={active}>
        <h1>Rejestr</h1>
        <p>Lorem impsum Lorem impsum Lorem impsum</p>
        <Button className="button" />
      </StyledWrapper>
    );
  }
}

export default Card;
