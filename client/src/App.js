import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import SeriesForYou from "./Components/SeriesForYou";
import MoviesForYou from "./Components/MoviesForYou";
import IntroVideos from "./Components/IntroVideos";
import { theme1, GlobalStyle } from "./theme/globalStyle";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <ThemeProvider theme={theme1}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <IntroVideos />
            <SeriesForYou />
            <MoviesForYou />
          </Route>
          <Route path="/details/:url">
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
