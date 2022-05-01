import React from "react";
import styled from "styled-components";
import { Button } from "..";
import { colors } from "../../colors";
import { VideoPlayer } from "..";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { logo } from "../../assets";
const Adminvideo = () => {
  return (
    <VideoContainer>
      <VideoWrapper>
        <NavCont></NavCont>
        <div className="NavContainer">
          <div className="logo">
            <img src={logo} alt="Mobius Logo" />
          </div>
          <div>
            <h5 className="Content-Approval">Content Approval</h5>
            <div className="underline"></div>
          </div>
          <div>
            <FaBell className="Bell-Icon" />
          </div>
        </div>

        <TopicWrapper>
          <AiOutlineArrowLeft className="arrowLeft" />
          <h3>Back</h3>
        </TopicWrapper>

        <VideoSpace>
          <VideoPlayer />
        </VideoSpace>

        <ModuleCon>
          <h5> Name: Pasqua Emeka </h5>
          <h5> Course: Know Your Color </h5>

          <div>
            <FinLit>
              <h5> Date: 27/12/2022 </h5>

              <ButtonCont>
                <ButtonWrapper>
                  <Button
                    text={" Approve"}
                    bgColor={colors.secondary80}
                    dir={"left"}
                  />{" "}
                </ButtonWrapper>

                <ButtonWrapper>
                  <Button
                    text={"Reject"}
                    bgColor={colors.secondary80}
                    dir={null}
                  />{" "}
                </ButtonWrapper>
              </ButtonCont>
            </FinLit>
          </div>
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
  padding-left: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const NavCont = styled.div``;
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
  gap: 5rem;

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
  padding-bottom: 20px;

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

const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
