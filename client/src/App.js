import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import IntroVideos from "./Components/IntroVideos";
import { theme1, GlobalStyle } from "./theme/globalStyle";

function App() {
  return (
    <ThemeProvider theme={theme1}>
      <Header />
      <IntroVideos />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
