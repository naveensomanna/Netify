import React from "react";
import styled from "styled-components";

const SeriesWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const TitleWrapper = styled.div`
  & p {
    color: #ffffff;
  }
`;
const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;
const ListItem = styled.li`
  list-style-type: none;
  width: 15%;
  height: 220px;
  margin: 5px;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    & img {
      transform: scale(1.4);
      transition: transform 0.3s ease-in-out;
    }
  }
`;
const MoviesForYou = () => {
  return (
    <SeriesWrapper>
      <TitleWrapper>
        <p>Movies for you</p>
      </TitleWrapper>
      <ListWrapper>
        <ListItem>
          <img src="https://fanart.tv/fanart/tv/355567/showbackground/the-boys-5d4c66a61f5cb.jpg" />
        </ListItem>
        <ListItem>
          <img src="https://fanart.tv/fanart/tv/314614/showbackground/fleabag-5bbfae2909224.jpg" />
        </ListItem>
        <ListItem>
          <img src="https://fanart.tv/fanart/tv/328708/showbackground/mindhunter-5b125a7844f6a.jpg" />
        </ListItem>
        <ListItem>
          <img src="https://fanart.tv/fanart/tv/305288/showbackground/stranger-things-5d2f417e8faae.jpg" />
        </ListItem>
        <ListItem>
          <img src="https://fanart.tv/fanart/tv/270915/showbackground/peaky-blinders-5277be064c089.jpg" />
        </ListItem>
        <ListItem>
          <img src="https://fanart.tv/fanart/movies/475557/moviethumb/joker-5db693c454a3e.jpg" />
        </ListItem>
      </ListWrapper>
    </SeriesWrapper>
  );
};
export default MoviesForYou;
