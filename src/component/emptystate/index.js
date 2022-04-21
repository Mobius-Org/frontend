import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { Button } from "../button";

const EmptyState = ({ text, src, alt }) => {
  return (
    <EnrollCoursesWrapper>
      <EnrollWrapper>
        <EnrollImgWrapper>
          <img src={src} alt={alt} />
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

export { EmptyState };

const EnrollCoursesWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const EnrollWrapper = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
    height: 70vh;
    display: flex;
    margin: auto;
  }
`;
const EnrollImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    height: 80%;
  }

  & > img {
    width: 100%;
    height: 85%;
    @media (max-width: 768px) {
      height: 90%;
    }
  }
  & > h3 {
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 16px;
      padding: 1rem 0;
    }
  }
`;
const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding: 1rem;
`;
