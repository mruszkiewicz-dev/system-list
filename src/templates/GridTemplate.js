import React from 'react';
import styled, { css } from 'styled-components';
import { systemItem } from '../data/index.js';
import Card from '../components/Card/Card.js';
import Arow from '../components/Arow/Arow.js';

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
  animation-name: appear;
  animation-duration: 0.5s;
  animation-iteration-count: ease;
`;
const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-gap: 50px;
  margin: 30px;
  animation-name: appear;
  animation-duration: 1s;
  animation-iteration-count: ease;
  justify-content: center;
  align-items: center;
  align-content: center;

  ${({ showMore }) =>
    showMore &&
    css`
      grid-template-columns: repeat(4, 1fr);
    `}
`;
const StyledWrapperH1 = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  color: #333;
  margin: 30px;
  font-size: 18px;
`;

const StyledArowWrapper = styled.div`
position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 8%;
  margin-bottom: 20px;
  font-size: 18px;
  padding: 0;
`;

const H5 = styled.h5`
  top: 10px;
  position: relative;
  margin: 0;
`;

const StyleFAQ = styled.div`
  font-size: 18px;
  text-decoration: none;
  & a {
    text-decoration: none;
    color: black;
    background-color: #054371;
    color: white;
    border-radius: 6px;
    position: absolute;
    right: 30px;
    top: 30px;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-out;
    }
  }
`;
class GridTemplate extends React.Component {
  state = {
    showMore: false,
    system: [...systemItem],
  };

  openMore = () => {
    this.setState({
      showMore: true,
    });
  };

  render() {
    const { showMore } = this.state;
    const { system } = this.state;
    return (
      <StyledWrapper>
        <StyleFAQ>
          <a href="https://intranet.frse.org.pl/faqs/" target="_blank" rel="noreferrer">
            FAQ
          </a>
        </StyleFAQ>
        <StyledWrapperH1>
          <h1>Systemy FRSE</h1>
        </StyledWrapperH1>
        <StyledGridWrapper showMore={showMore}>
          {system
            .filter((item) => item.id <= 2)
            .map((itemFilter) => (
              <Card showMore={showMore} key={itemFilter.id} {...itemFilter} />
            ))}
          {showMore === false && (
            <StyledArowWrapper onClick={() => this.openMore()}>
              <H5>Pokaż Wiecej Systemów</H5>
              <Arow />
            </StyledArowWrapper>
          )}
          {showMore === true && (
            <>
              {system
                .filter((item) => item.id > 2)
                .map((itemFilter) => (
                  <Card showMore={showMore} key={itemFilter.id} {...itemFilter} />
                ))}
            </>
          )}
        </StyledGridWrapper>
      </StyledWrapper>
    );
  }
}

export default GridTemplate;
