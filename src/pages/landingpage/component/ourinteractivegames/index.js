import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { ctaPlay, lineG, ticTacImage } from "../../../../assets";
import { colors } from "../../../../colors";
const OurInteractiveGames = () => {
  return (
    <Container>
      <OurInteractiveGamesWrapper>
        <SecHeading>
          <img src={lineG} alt="" id="arrowG" />
          <h2>
            Our Interactive <span>Games</span>
          </h2>
          <p>
            We have interactive games to help easy assimiliation of what we
            teach.
          </p>
        </SecHeading>
        <OurGame>
          <ImageWrapper>
            <img src={ctaPlay} alt="" id="play" />
            <img src={ticTacImage} alt="tictacimg" id="tictac" />
          </ImageWrapper>
        </OurGame>
      </OurInteractiveGamesWrapper>
    </Container>
  );
};

export { OurInteractiveGames };
const Breathing = keyframes` 
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;
const OurInteractiveGamesWrapper = styled.div`
  height: 82vh;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }
`;

const SecHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: fit-content;
  gap: 2rem;
  padding: 1rem 0;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
  & > img#arrowG {
    position: absolute;
    top: 100%;
    left: 10%;
    width: 100%;
    height: 50vh;
    animation: ${Breathing} 5s ease-out infinite normal;
    @media (max-width: 768px) {
      display: none;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      display: none;
    }
  }
  & > h2 {
    align-items: center;
    font-family: Nunito;
    font-style: Bold;
    font-size: 36px;
    line-height: 19px;
    text-align: start;
    span {
      align-items: center;
      font-family: Nunito;
      font-style: Bold;
      font-size: 36px;
      line-height: 19px;
      border-bottom: 4px solid ${colors.secondary80};
      @media (max-width: 768px) {
        font-size: 24px;
      }
    }
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  & > p {
    align-items: center;
    font-family: Nunito;
    font-style: regular;
    font-size: 20px;
    line-height: 26px;
    text-align: start;
    color: grey;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 16px;
      width: 100%;
    }
  }
`;
const OurGame = styled.div`
  height: 100%;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
`;
const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  img#play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15rem;
    height: 15rem;
    transition: all 0.3s ease;
    @media (max-width: 768px) {
      width: 12rem;
      height: 12rem;
    }
    &:hover {
      transition: all 0.3s ease;
      cursor: pointer;
      width: 17rem;
      height: 17rem;
      @media (max-width: 768px) {
        width: 14rem;
        height: 14rem;
      }
    }
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    @media (max-width: 768px) {
      border-radius: 30px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      height: 70vh;
    }
  }
`;
