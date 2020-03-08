import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import { theme1, GlobalStyle } from "./theme/globalStyle";

function App() {
  return (
    <ThemeProvider theme={theme1}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
