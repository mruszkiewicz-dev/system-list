import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card.js';
import Arow from '../components/Arow/Arow.js';

/* import Input from '../components/Input/Input.js';
 */
const systemItem = [
  {
    id: 1,
    title: 'EZD',
    description: 'Elektroniczne zarządzanie dokumentami',
    link: 'https://ezd.frse.org.pl/login'
  },
  {
    id: 2,
    title: 'System Rejestracji Czasu Pracy',
    description: 'Rozliczanie godzin',
    link: 'https://czaspracy.frse.org.pl/login'
  },
  {
    id: 3,
    title: 'Symfoniahr',
    description: 'System kadrowy, szkolenia, wnioski urlopowe',
    link:'https://frse.symfoniahr.pl'
  },
  {
    id: 4,
    title: 'Magazyn',
    description: 'Zgłoszenia IT, wnioski o sprzęt',
    link:'http://magazyn.frse.org.pl'
  },
  {
    id: 5,
    title: 'E-wnioski',
    description: 'Nadawanie i odbieranie uprawnień do systemów',
    link:'https://e-wnioski.frse.org.pl'
  },
  {
    id: 6,
    title: 'Intranet',
    description: 'Intranet FRSE',
    link:'https://intranet.frse.org.pl/'
  },
  {
    id: 7,
    title: 'Finera',
    description: 'System dokumentów OnLine',
    link:'https://finera.frse.org.pl/'
  },
  {
    id: 8,
    title: 'Mantis',
    description: 'System zgłoszeń dot Finery, Forms oraz Narzedzi Komisyjnych',
    link:'http://mantis.frse.org.pl'
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
  margin: 30px;
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
  margin-top: 8%;
  margin-bottom:20px;
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
