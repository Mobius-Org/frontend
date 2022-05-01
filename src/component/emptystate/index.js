import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { Button } from "../button";

const EmptyState = ({ text, src, alt, func, text2 }) => {
  const handleClick = () => {
    func();
  };
  return (
    <EnrollCoursesWrapper>
      <EnrollWrapper>
        <EnrollImgWrapper>
          <img src={src} alt={alt} />
          <h3>{text}</h3>
        </EnrollImgWrapper>
        <ButtonWrapper onClick={handleClick}>
          <Button
            text={text2}
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
  height: fit-content;
  margin: auto;
`;
const EnrollWrapper = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    height: 70vh;
    display: flex;
    margin: auto;
  }
`;
const EnrollImgWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 768px) {
    height: 80%;
  }

  & > img {
    height: 20%;
    aspect-ratio: 1;
    /* flex-grow: 1/2; */
    @media (max-width: 768px) {
      height: 10rem;
      flex-grow: unset;
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
