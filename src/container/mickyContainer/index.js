import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import Button from "../../component/button";
import SechHeader from "../../component/sectionheader";

const Mickysec = () => {
  return (
    <MickysecWrapper>
      <Container>
        <MickyPic src="images/Micky.png" alt="a pic a micky"></MickyPic>
        <TextArea>
          <SechHeader text={"Hey! I am"} textCaption={"Micky"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            adipiscing nullam dapibus justo ac lectus eros facilisi. Arcu nisl,
            nisl venenatis ut velit habitasse mi placerat. friend.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            adipiscing nullam dapibus justo ac lectus eros facilisi. Arcu nisl,
            nisl venenatis ut velit habitasse mi placerat.
          </p>
          <p> See you in class</p>
          <div>
            <Button
              text={"Learn with Micky"}
              bgColor={colors.primary_cadium_violet}
            />
          </div>
        </TextArea>
      </Container>
    </MickysecWrapper>
  );
};

export default Mickysec;

const MickysecWrapper = styled.div`
  background: #f9d2ff;
  height: 85vh;
  display: flex;
  @media (max-width: 768px) {
    height: fit-content;
  }
`;
const Container = styled.div`
  // border: 1px solid red;
  background-image: url("images/MickyBg.svg");
  background-size: cover;
  object-fit: cover;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    width: 90%;
  }
`;
const MickyPic = styled.img`
  width: 40%;
  height: 90%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const TextArea = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-flow: column;
  justify-content: space-between !important;
  gap: 0rem;
  align-items: start;
  width: 40%;
  height: 90%;
  margin: auto;
  & > p {
    font-size: 24px;
    text-align: start;
    font-weight: 500;
    color: rgba(12, 18, 28, 0.75);
  }
  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
    height: fit-content;
    // align-items: center;
    & > p {
      padding: 1rem 0;
      font-size: 18px;
      // text-align: center;
    }
  }
`;
