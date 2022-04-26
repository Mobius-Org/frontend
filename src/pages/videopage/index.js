import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../component";
import { colors } from "../../colors";
import { VideoPlayer } from "../../component";
import { AiOutlineArrowLeft } from "react-icons/ai";
import data from "./data";
const Video = () => {
  const [currVal, setCurrVal] = useState(0);

  const handleDecrease = () => {
    return currVal > 0 && setCurrVal(currVal - 1);
  };
  const handleIncrease = () => {
    return currVal < data.length - 1 && setCurrVal(currVal + 1);
  };

  const { Topic, title, text } = data[currVal];

  return (
    <VideoContainer>
      <VideoWrapper>
        <TopicWrapper>
          <AiOutlineArrowLeft className="arrowLeft" />
          <h3>{Topic}</h3>
        </TopicWrapper>
        <VideoSpace>
          {" "}
          <VideoPlayer />
        </VideoSpace>
        <DownloadWrapper>
          <Button text={" Download "} bgColor={colors.secondary80} />
        </DownloadWrapper>
        <ModuleCon>
          <h3> {title} </h3>
          <p>{text}</p>
          <FinLit>
            {/* =========================================================== */}
            <div>
              {(currVal === 1 || currVal === data.length - 1) && (
                <ButtonWrapper onClick={() => handleDecrease()}>
                  <Button
                    text={" Go to Prev Video"}
                    bgColor={colors.secondary80}
                    dir={"left"}
                  />{" "}
                </ButtonWrapper>
              )}
            </div>

            <ButtonWrapper onClick={() => handleIncrease()}>
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

export { Video };

const VideoContainer = styled.div`
  /* border: 2px solid red; */
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
  /* border: 2px solid blue; */
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
  /* border: 2px solid green; */
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
