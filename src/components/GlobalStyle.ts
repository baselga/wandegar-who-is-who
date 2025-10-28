import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: url("/bg.jpg");
    background-size: cover;
    background-attachment: fixed;
    display: block;
    padding: 0;
    margin: 0;

    font-family: "Sora", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
  }
`;