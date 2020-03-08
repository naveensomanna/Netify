import { createGlobalStyle } from "styled-components";

export const theme1 = {
  primary: "#ff0198",
  secondary: "#01c1d6",
  danger: "#eb238e",
  light: "#a5a2a2",
  dark: "#070404",
  white: "#FFFFFF"
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto:400,900');
body{
    padding:0;
    margin:0;
    font-family: Roboto, sans-serif;
    background-color:${theme1.dark}
    }
`;
