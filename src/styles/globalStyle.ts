import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       outline: none;

      font-family: 'Poppins';


       @media (max-width: 1400px) {
          font-size: 87.5%
       }
 }

 body {
    background: ${({theme}) => theme.colors["background-page"]};
 }

`