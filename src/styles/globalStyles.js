import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
  }
  body{
    background: ${({ theme }) => theme.bg2};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', san-serif;
     letter-spacing: .6px;
  }
  .App {
    text-align: center;
  }
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
`;
