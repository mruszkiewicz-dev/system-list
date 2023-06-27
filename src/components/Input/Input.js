import styled from 'styled-components';
import magnifier from '../../assets/icons/magnifier.svg';

const Input = styled.input`
  font-size: 10px;
  background-color: white;
  border: wheat;
  border-radius: 50px;
  padding: 8px;
  background-image: url(${() => magnifier});
  background-size: 15px;
  background-position: 10px 50%;
  background-repeat: no-repeat;
  text-align: center;
  width: 20px;

  :focus {
    outline: none;
}
  ::placeholder {
    letter-spacing: 1px;
    color: gray;
    text-align: center;
  }
`;

export default Input;
