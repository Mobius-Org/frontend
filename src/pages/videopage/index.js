import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../component";
import { colors } from "../../colors";
import { VideoPlayer } from "../../component";
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
        <div>
          <h3>{Topic}</h3>
        </div>
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
            {(currVal === 1 || currVal === data.length - 1) && (
              <div onClick={() => handleDecrease()}>
                <Button
                  text={" Go to Prev Video"}
                  bgColor={colors.secondary80}
                  dir={"left"}
                />{" "}
              </div>
            )}

            <div onClick={() => handleIncrease()}>
              <Button
                text={"Go to Next Video"}
                bgColor={colors.secondary80}
                dir={"right"}
              />{" "}
            </div>
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
const FinLit = styled.div`
  width: 100%;
  /* border: 2px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const DownloadWrapper = styled.div`
  width: 10%;
`;
