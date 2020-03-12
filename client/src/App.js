import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import SeriesForYou from "./Components/SeriesForYou";
import MoviesForYou from "./Components/MoviesForYou";
import IntroVideos from "./Components/IntroVideos";
import { theme1, GlobalStyle } from "./theme/globalStyle";

function App() {
  return (
    <ThemeProvider theme={theme1}>
      <Header />
      <IntroVideos />
      <SeriesForYou />
      <MoviesForYou />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
