import React from "react";
import styled from "styled-components";

const IntroVideosWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  min-height: 500px;
`;
const FullContainer = styled.div`
  flex: 0 0 80%;
`;
const VerticalVideos = styled.div`
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
`;
const IntroVideos = () => {
  return (
    <IntroVideosWrapper>
      <FullContainer>
        <video autoPlay muted loop width="98%">
          <source src="http://video.itunes.apple.com/apple-assets-us-std-000001/Video118/v4/67/76/0d/67760df3-65e6-a3d3-02a7-81340664bcf2/mzvf_5168019211393929040.720w.h264lc.U.p.m4v"></source>
        </video>
      </FullContainer>
      <VerticalVideos>
        <video autoPlay muted loop width="100%" height="180px">
          <source src="http://video.itunes.apple.com/apple-assets-us-std-000001/Video118/v4/67/76/0d/67760df3-65e6-a3d3-02a7-81340664bcf2/mzvf_5168019211393929040.720w.h264lc.U.p.m4v"></source>
        </video>
        <video autoPlay muted loop width="100%" height="180px">
          <source src="http://video.itunes.apple.com/apple-assets-us-std-000001/Video118/v4/67/76/0d/67760df3-65e6-a3d3-02a7-81340664bcf2/mzvf_5168019211393929040.720w.h264lc.U.p.m4v"></source>
        </video>
        <video autoPlay muted loop width="100%" height="180px">
          <source src="http://video.itunes.apple.com/apple-assets-us-std-000001/Video118/v4/67/76/0d/67760df3-65e6-a3d3-02a7-81340664bcf2/mzvf_5168019211393929040.720w.h264lc.U.p.m4v"></source>
        </video>
      </VerticalVideos>
    </IntroVideosWrapper>
  );
};
export default IntroVideos;
