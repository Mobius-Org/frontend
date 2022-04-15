import React from "react";
import styled from "styled-components";
import SechHeader from "../../../../component/sectionheader";
const OurGames = () => {
  return (
    <OurGamesWrap>
      <Container>
        <SechHeader text={"Our Interactive"} textCaption={"Games"} />
        <ImageWrapper>
          <img src="images/CtaPlay.png" alt="Play Button" />
          <div>
            <img src="images/Micky.png" />
          </div>
          <div>
            <div>
              <img src="images/Micky.png" />
            </div>
            <div>
              <img src="images/Micky.png" />
            </div>
          </div>
        </ImageWrapper>
      </Container>
    </OurGamesWrap>
  );
};

export default OurGames;

const OurGamesWrap = styled.div`
  background-image: url("images/OurCourseBg.svg");
  background-size: cover;
  height: 90vh;
  display: flex;
  @media (max-width: 768px) {
    height: fit-content;
  }
`;
const Container = styled.div`
  object-fit: cover;
  padding: 2rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  gap: 2rem;
  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    width: 100%;
  }
`;
const ImageWrapper = styled.div`
  height: 85%;
  display: flex;
  flex-flow: row;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
  & > img {
    position: absolute;
    top: 50%;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 200px;
    height: 200px;

    &:hover {
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      width: 250px;
      height: 250px;
    }
    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
      &:active {
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        width: 100px;
        height: 100px;
      }
    }
  }
  & > div:first-of-type {
    width: 50%;
    border: 1px solid red;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & > div:last-of-type {
    width: 50%;
    display: flex;

    flex-flow: column;
    height: 100%;
    & > div {
      height: 50%;
      border: 1px solid red;
      &:first-of-type {
        border-top-right-radius: 15px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      &:last-of-type {
        border-bottom-right-radius: 15px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
