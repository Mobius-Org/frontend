import React from "react";
import Button from "../button";
import styled from "styled-components";
import { colors } from "../../colors";

const EmptyState = ({ text, src, alt }) => {
  return (
    <EnrollCoursesWrapper>
      <EnrollWrapper>
        <EnrollImgWrapper>
          <img src={"./images/brocanva.png"} alt={alt} />
          <h3>{text}</h3>
        </EnrollImgWrapper>
        <ButtonWrapper>
          <Button
            text={"Enroll Now"}
            dir={"right"}
            filled={false}
            bgColor={colors.secondary_color}
          />
        </ButtonWrapper>
      </EnrollWrapper>
    </EnrollCoursesWrapper>
  );
};

export default EmptyState;

const EnrollCoursesWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const EnrollWrapper = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 2%;
  @media (max-width: 768px) {
    width: 90%;
    height: 80%;
    display: flex;
    margin: auto;
  }
`;
const EnrollImgWrapper = styled.div`
  width: 100%;
  height: 100%;

  & > img {
    width: 100%;
    height: 70%;
    @media (max-width: 768px) {
      height: 70%;
    }
  }
  & > h3 {
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;
const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: -8rem;
`;
