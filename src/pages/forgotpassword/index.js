import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import Button from "../../component/button";
import InputField from "../../component/inputfield";
import { ImGoogle } from "react-icons/im";
const ForgotPassword = () => {
  const [next, setNext] = useState(0);
  const handleNext = (num) => {
    setNext(num + next);
  };
  return (
    <Wrapper>
      <img src="images/kiddieDoddles.svg" alt="doddle" />
      <Wrap next={next}>
        <HeadingText>Forgotten Password</HeadingText>
        <InputWrap>
          <InputField
            type={"email"}
            labelId={"email"}
            label={"What is your email address??"}
            placeholder={"Enter your email address here ..."}
          />
        </InputWrap>
        <CtaWrap>
          <span onClick={() => handleNext()}>
            <Button
              dir={"left"}
              filled={true}
              bgColor={colors.secondary_color}
              text={"Previous"}
            />
          </span>
          <span
            onClick={() => handleNext(1)}
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            <Button bgColor={colors.secondary_color} text={"Reset Password"} />
          </span>
        </CtaWrap>
      </Wrap>
      <Wrap2 next={next}>
        <HeadingText>Finish setting up</HeadingText>
        <InputWrap>
          <InputField
            type={"password"}
            labelId={"password"}
            label={"What is your new password?"}
            placeholder={"Enter your new password here ..."}
          />
          <InputField
            type={"password"}
            labelId={"cpassword"}
            label={"Re-enter your password again"}
            placeholder={"Enter your password here ..."}
          />
        </InputWrap>
        <CtaWrap>
          <span onClick={() => handleNext(1)}>
            <Button bgColor={colors.secondary_color} text={"Reset Password"} />
          </span>
        </CtaWrap>
      </Wrap2>
    </Wrapper>
  );
};

export default ForgotPassword;

const Wrapper = styled.div`
  background-image: url("images/patternLogin.svg");
  background-size: contain;
  padding: 0;
  transition: all 0.3s ease-in-out;
  height: calc(100vh - 166px);
  padding: 1.5rem 1rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > img {
    position: absolute;
    height: 30rem;
    left: 15.5%;
    bottom: -10%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    @media (max-width: 1150px) {
      transition: all 0.3s ease-in-out;
      bottom: -100%;
    }
  }
`;

const Wrap = styled.div`
  transition: all 0.3s ease-in-out;
  background-color: ${colors.white};
  box-shadow: 0px 2.6501548290252686px 53.00309753417969px 0px
    rgba(0, 0, 0, 0.37);
  max-width: 1200px;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 30px 20px;
  border-radius: 20px;

  opacity: 1;
  @media (max-width: 768px) {
    transition: all 0.3s ease-in-out;
    height: 70vh;
    width: 100%;
  }
  ${({ next }) =>
    next !== 0 &&
    `
  transition: all 0.3s ease-in-out;
  height: 0 !important;
  overflow: hidden;
  padding: 0;
  opacity: 0;`}
`;
const Wrap2 = styled.div`
  transition: all 0.3s ease-in-out;
  background-color: ${colors.white};
  box-shadow: 0px 2.6501548290252686px 53.00309753417969px 0px
    rgba(0, 0, 0, 0.37);
  max-width: 1200px;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap !important;
  padding: 30px 20px;
  border-radius: 20px;

  opacity: 1;
  @media (max-width: 768px) {
    transition: all 0.3s ease-in-out;
    height: 70vh;
    width: 100%;
  }
  ${({ next }) =>
    next !== 1 &&
    `
  transition: all 0.3s ease-in-out;
  height: 0 !important;
  overflow: hidden;
  padding: 0;
  opacity: 0;`}
`;
const HeadingText = styled.h1`
Font-family: Nunito;
Font-style:extra-bold;
Font size: 16px;
color:rgba(12, 18, 28, 0.75);
align-self: center;
 transition: all 0.3s ease-in-out;

 @media (max-width: 768px) {
      transition: all 0.3s ease-in-out;
      font-size: 1.5rem;
    }
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  width: 90%;
  & > div {
    width: 100%;
  }
  gap: 1rem;

  & > img {
    width: 70%;
    height: 40%;
    margin: auto;
  }
  & > p {
    font-size: 20px;
    font-weight: 700;
  }
  & > div {
    margin: auto;
  }
`;
const CtaWrap = styled.div`
  width: 90%;
  align-self: start !important;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 388px) {
    justify-content: start;
    align-items: start;
    flex-direction: column;
  }
  & > p {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    color: ${colors.chinese_black};
    & > span {
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      color: ${colors.secondary_color};
    }
  }
`;
