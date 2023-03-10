import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bobyRgba},0.6)`};
`;

const Title = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  div {
    display: flex;
    flex-direction: row;
    gap: 1px;
  }
  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }
  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 500;
    text-transform: capitalize;
  }
`;
const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title>
        <div>
          <h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            W
          </h1>
          <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
            i
          </h1>
          <h1 data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
            b
          </h1>
          <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
            e
          </h1>
        </div>
        <h2>Inspire. Create. Belive</h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
