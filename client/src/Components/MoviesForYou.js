import React from "react";
import styled from "styled-components";

const MoviesWrapper = styled.div`
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
  flex: 0 0 19.7%;
  position: relative;
  cursor: pointer;
  z-index: 1;
  transition: transform 300ms ease 100ms;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  /* & ${HoverCard} {
    display: none;
    & p:first-child {
      color: #a5a2a2;
      font-weight: 200;
      font-size: 0.7rem;
      padding: 10px 0 0 20px;
    }
    & .videoTag {
      margin: 0 auto;
      width: 80%;
      display: flex;
      object-fit: cover;
      height: 150px;
    }
  } */
  &:hover ~ li {
    transform: translateX(25%);
  }
  &:hover {
    transform: scale(1.5) !important;
  }
`;
const MoviesForYou = () => {
  return (
    <MoviesWrapper>
      <TitleWrapper>
        <p>Movies for you</p>
      </TitleWrapper>
      <SliderWrapper>
        <ListWrapper>
          <ListItem>
            {/* <div className="image-wrapper"> */}
            {/* <p>Trending in Poland</p> */}
            <img src="https://fanart.tv/fanart/tv/355567/showbackground/the-boys-5d4c66a61f5cb.jpg" />
            {/* </div> */}
            {/* <HoverCard>
            <p>Trending in Poland</p>
            <video autoPlay muted loop controls className="videoTag">
              <source src="http://video.itunes.apple.com/apple-assets-us-std-000001/Video118/v4/67/76/0d/67760df3-65e6-a3d3-02a7-81340664bcf2/mzvf_5168019211393929040.720w.h264lc.U.p.m4v"></source>
            </video>
          </HoverCard> */}
          </ListItem>
          <ListItem>
            {/* <div className="image-wrapper"> */}
            {/* <p>Trending in Poland</p> */}
            <img src="https://fanart.tv/fanart/tv/314614/showbackground/fleabag-5bbfae2909224.jpg" />
            {/* </div> */}
            {/* <HoverCard>
            <p>Trending in Poland</p>
            <video autoPlay muted loop controls className="videoTag">
              <source src="http://video.itunes.apple.com/apple-assets-us-std-000001/Video118/v4/67/76/0d/67760df3-65e6-a3d3-02a7-81340664bcf2/mzvf_5168019211393929040.720w.h264lc.U.p.m4v"></source>
            </video>
          </HoverCard> */}
          </ListItem>
          <ListItem>
            {/* <div className="image-wrapper"> */}
            {/* <p>Trending in Poland</p> */}
            <img src="https://fanart.tv/fanart/tv/328708/showbackground/mindhunter-5b125a7844f6a.jpg" />
            {/* </div> */}
            {/* <HoverCard>
            <p>Trending in Poland</p>
            <video autoPlay muted loop controls className="videoTag">
              <source src="http://video.itunes.apple.com/apple-assets-us-std-000001/Video118/v4/67/76/0d/67760df3-65e6-a3d3-02a7-81340664bcf2/mzvf_5168019211393929040.720w.h264lc.U.p.m4v"></source>
            </video>
          </HoverCard> */}
          </ListItem>
          <ListItem>
            {/* <div className="image-wrapper"> */}
            {/* <p>Trending in Poland</p> */}
            <img src="https://fanart.tv/fanart/tv/305288/showbackground/stranger-things-5d2f417e8faae.jpg" />
            {/* </div> */}
            {/* <HoverCard>
            <p>Trending in Poland</p>
            <video autoPlay muted loop controls className="videoTag">
              <source src="http://video.itunes.apple.com/apple-assets-us-std-000001/Video118/v4/67/76/0d/67760df3-65e6-a3d3-02a7-81340664bcf2/mzvf_5168019211393929040.720w.h264lc.U.p.m4v"></source>
            </video>
          </HoverCard> */}
          </ListItem>
          <ListItem>
            {/* <div className="image-wrapper"> */}
            {/* <p>Trending in Poland</p> */}
            <img src="https://fanart.tv/fanart/tv/270915/showbackground/peaky-blinders-5277be064c089.jpg" />
            {/* </div> */}
            {/* <HoverCard>
            <p>Trending in Poland</p>
            <video autoPlay muted loop controls className="videoTag">
              <source src="http://video.itunes.apple.com/apple-assets-us-std-000001/Video118/v4/67/76/0d/67760df3-65e6-a3d3-02a7-81340664bcf2/mzvf_5168019211393929040.720w.h264lc.U.p.m4v"></source>
            </video>
          </HoverCard> */}
          </ListItem>
          <ListItem>
            {/* <div className="image-wrapper"> */}
            {/* <p>Trending in Poland</p> */}
            <img src="https://fanart.tv/fanart/movies/475557/moviethumb/joker-5db693c454a3e.jpg" />
            {/* </div> */}
            {/* <HoverCard>
            <p>Trending in Poland</p>
            <video autoPlay muted loop controls className="videoTag">
              <source src="http://video.itunes.apple.com/apple-assets-us-std-000001/Video118/v4/67/76/0d/67760df3-65e6-a3d3-02a7-81340664bcf2/mzvf_5168019211393929040.720w.h264lc.U.p.m4v"></source>
            </video>
          </HoverCard> */}
          </ListItem>
        </ListWrapper>
      </SliderWrapper>
    </MoviesWrapper>
  );
};
export default MoviesForYou;
