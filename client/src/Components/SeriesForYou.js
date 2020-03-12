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
const SeriesForYou = () => {
  return (
    <SeriesWrapper>
      <TitleWrapper>
        <p>Series for you</p>
      </TitleWrapper>
      <ListWrapper>
        <ListItem>
          <img src="https://fanart.tv/fanart/movies/475557/moviebackground/joker-5d68337505352.jpg" />
        </ListItem>
        <ListItem>
          <img src="https://fanart.tv/fanart/movies/496243/moviebackground/parasite-5df5fb5439d1d.jpg" />
        </ListItem>
        <ListItem>
          <img src="https://fanart.tv/fanart/movies/359724/moviebackground/go-like-hell-5d0839e2ecc25.jpg" />
        </ListItem>
        <ListItem>
          <img src="https://fanart.tv/fanart/movies/398978/moviebackground/the-irishman-5de15d18d48f4.jpg" />
        </ListItem>
        <ListItem>
          <img src="https://fanart.tv/fanart/movies/492188/moviebackground/marriage-story-5def5bf3a229b.jpg" />
        </ListItem>
        <ListItem>
          <img src="https://fanart.tv/fanart/tv/360893/showbackground/chernobyl-5cee1a264b23a.jpg" />
        </ListItem>
      </ListWrapper>
    </SeriesWrapper>
  );
};
export default SeriesForYou;
