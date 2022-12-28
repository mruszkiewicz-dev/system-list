import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap");

*, *::before,*, *::after {
   box-sizing: border-box;
   * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
}
html {
   font-size:62.5%;
}
body {
   font-size:1rem;
   font-family: Montserrat, sans-serif;
   background-color:  #DBE3E9;
   margin: 0;
   
   ${({ black }) =>
     black &&
     css`
       background-color: black;
       color:white;
     `}  
}
@keyframes appear {
  0% {
    opacity: 0;
    top: 35px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}
`;

export default GlobalStyle;
