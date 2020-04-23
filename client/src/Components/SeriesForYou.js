import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SeriesWrapper = styled.div`
  min-height: 300px;
`;
const TitleWrapper = styled.div`
  & p {
    color: #ffffff;
    padding: 0 0 0 55px;
    text-transform: capitalize;
    font-weight: bold;
  }
`;
const ListWrapper = styled.ul`
  margin: 0;
  padding: 0 55px;
  transition: transform 300ms ease 100ms;
  display: flex;
  & a {
    flex: 0 0 19.7%;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: transform 300ms ease 100ms;
  }
  &:hover li {
    transform: translateX(-25%);
  }
`;
const SliderWrapper = styled.div`
  padding: 20px 0;
  overflow: hidden;
  position: relative;
  overflow: auto;
`;
const HoverCard = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  height: 100%;
  width: 100%;
`;
const ListItem = styled.li`
  list-style-type: none;
  margin: 0 2px;
  transition: transform 300ms ease 100ms;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &:hover ~ li {
    transform: translateX(25%);
  }
  &:hover {
    transform: scale(1.5) !important;
  }
`;

const SeriesForYou = () => {
  return (
    <SeriesWrapper>
      <TitleWrapper>
        <p>Series for you</p>
      </TitleWrapper>
      <SliderWrapper>
        <ListWrapper>
          <Link to="/details/`https://fanart.tv/fanart/movies/475557/moviebackground/joker-5d68337505352.jpg`">
            <ListItem>
              <img src="https://fanart.tv/fanart/movies/475557/moviebackground/joker-5d68337505352.jpg" />
            </ListItem>
          </Link>
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
      </SliderWrapper>
    </SeriesWrapper>
  );
};
export default SeriesForYou;
