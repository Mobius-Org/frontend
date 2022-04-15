import styled from "styled-components";
import { colors } from "../../colors";

export const SignUpWrapper = styled.div`
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
    ${({ next }) =>
      next === 2 &&
      `
      transition: all 0.3s ease-in-out;
      bottom: -100%;
    `}
  }
`;

export const FirstWrap = styled.div`
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

  transition: all 0.3s ease-in-out;
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
  height: 0;
  opacity: 0;
  padding: 0;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 0;
  }
  `}
`;
export const SecondWrap = styled.div`
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
export const SuccessScreen = styled.div`
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
    next !== 2 &&
    `
    padding: 0;
      transition: all 0.3s ease-in-out;
  height: 0;
  overflow: hidden;
  opacity: 0;
    `}
`;
export const HeadingText = styled.h1`
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
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  gap: 1rem;
  ${({ next }) =>
    next === 2 &&
    `  
    
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
  }`}
`;
export const CtaWrap = styled.div`
  width: 90%;
  align-self: start !important;
  display: flex;
  gap: 1rem;
  align-items: center;

  justify-content: space-between;
  @media (max-width: 768px) {
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
