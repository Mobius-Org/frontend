import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "..";
import { colors } from "../../colors";
import { VideoPlayer } from "..";
import { AiOutlineArrowLeft } from "react-icons/ai";
import data from "./data";
const Adminvideo = () => {
  return (
    <VideoContainer>
      <VideoWrapper>
        <TopicWrapper>
          <AiOutlineArrowLeft className="arrowLeft" />
          <h3>Back</h3>
        </TopicWrapper>

        <VideoSpace>
          <VideoPlayer />
        </VideoSpace>

        <DownloadWrapper>
          <Button text={" Download "} bgColor={colors.secondary80} />
        </DownloadWrapper>
        <ModuleCon>
          <h3> jj </h3>
          <p>jj</p>
          <FinLit>
            <ButtonWrapper>
              <Button
                text={" Go to Prev Video"}
                bgColor={colors.secondary80}
                dir={"left"}
              />{" "}
            </ButtonWrapper>

            <ButtonWrapper>
              <Button
                text={"Go to Next Video"}
                bgColor={colors.secondary80}
                dir={"right"}
              />{" "}
            </ButtonWrapper>
          </FinLit>
        </ModuleCon>
      </VideoWrapper>
    </VideoContainer>
  );
};

export { Adminvideo };

const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20px;
`;
const VideoWrapper = styled.div`
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TopicWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & .arrowLeft {
    font-size: 22px;
    margin-right: 10px;
  }
`;

const FinLit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    gap: 1rem;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;
const VideoSpace = styled.div`
  width: 90%;
  height: 50vh;
`;

const ModuleCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;

  @media (max-width: 768px) {
    width: 90%;
    text-align: justify;
  }
`;

const DownloadWrapper = styled.div`
  width: 10%;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const ButtonWrapper = styled.div`
  @media (max-width: 768px) {
  }
`;
