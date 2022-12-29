import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card.js';
import Arow from '../components/Arow/Arow.js';
/* import Input from '../components/Input/Input.js';
 */
const systemItem = [
  {
    id: 1,
    title: 'System1',
    description: 'Lorem impsum Lorem impsum Lorem impsum',
  },
  {
    id: 2,
    title: 'System2',
    description: 'Lorem impsum Lorem impsum Lorem impsum',
  },
  {
    id: 3,
    title: 'System3',
    description: 'Lorem impsum Lorem impsum Lorem impsum',
  },
  {
    id: 4,
    title: 'System4',
    description: 'Lorem impsum Lorem impsum Lorem impsum',
  },
];

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
  margin: 20px;
  animation-name: appear;
  animation-duration: 1s;
  animation-iteration-count: ease;
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 40px;
  font-size: 18px;
  padding: 0;
`;

const H5 = styled.h5`
  top: 10px;
  position: relative;
  margin: 0;
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
        <StyledWrapperH1>
          <h1>Systemy FRSE</h1>
        </StyledWrapperH1>
{/*         <Input placeholder="Wyszukaj system" />
 */}        <StyledGridWrapper>
          {system.filter(item => item.id <= 2).map((itemFilter) => (
            <Card key={itemFilter.id} {...itemFilter} />
          ))}
        </StyledGridWrapper>
        {showMore === false && (
          <StyledArowWrapper onClick={() => this.openMore()}>
            <H5>Pokaż Wiecej Systemów</H5>
            <Arow />
          </StyledArowWrapper>
        )}
        {showMore === true && (
          <StyledGridWrapper>
            {system.filter(item => item.id > 2).map((itemFilter) => (
            <Card key={itemFilter.id} {...itemFilter} />
          ))}
          </StyledGridWrapper>
        )}
      </StyledWrapper>
    );
  }
}

export default GridTemplate;
