import styled from "styled-components";
import { colors } from "../../colors";
import { motion } from "framer-motion";
import { patternLogin } from "../../assets";
export const SignUpWrapper = styled(motion.div)`
  background-image: url(${patternLogin});
  background-size: contain;
  padding: 0;
  transition: all 0.3s ease-in-out;
  height: calc(110vh - 166px);
  padding: 1.5rem 1rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  & > img {
    position: absolute;
    height: 30rem;
    left: 10.5%;
    bottom: 0%;
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
  @media (max-width: 768px) {
    padding: 0;
    height: max-content;
  }
`;

export const FirstWrap = styled.div`
  transition: all 0.3s ease-in-out;
  background-color: ${colors.white};
  box-shadow: 0px 2.6501548290252686px 53.00309753417969px 0px
    rgba(0, 0, 0, 0.37);
  max-width: 1200px;
  width: 50%;
  height: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap !important;
  padding: 30px 20px;
  border-radius: 20px;
  position: unset;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  @media (max-width: 768px) {
    transition: all 0.3s ease-in-out;
    height: max-content;
    padding: 1rem 0;
    width: 100%;
    border-radius: 0px;
  }
  ${({ next }) =>
    next !== 0 &&
    `
  transition: all 0.3s ease-in-out;
  height: 0;
  opacity: 0;
  padding: 0;
  overflow: hidden;
  position:absolute;
  top:-150%;
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
  height: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap !important;
  padding: 30px 20px;
  border-radius: 20px;
  position: unset;
  opacity: 1;
  @media (max-width: 768px) {
    transition: all 0.3s ease-in-out;
    height: max-content;
    width: 100%;
    border-radius: 0px;
    padding: 1rem 0;
  }
  ${({ next }) =>
    next !== 1 &&
    `
    position:absolute;
    left:-200%;
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
  height: 90%;
  margin: auto;
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
    border-radius: 0px;
  }
  ${({ next }) =>
    next !== 2 &&
    `
    position:absolute;
    bottom:100%;
    padding: 0;
      transition: all 0.3s ease-in-out;
  height: 0;
  overflow: hidden;
  opacity: 0;
    `}
`;
export const HeadingText = styled.h1`
  font-family: Nunito;
  font-style: extra-bold;
  color: rgba(12, 18, 28, 0.75);
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
  position: relative;
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
    position: relative;
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
    & > a {
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      text-decoration: none;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      color: ${colors.secondary_color};
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  span.first {
    min-width: 150px;
    @media (max-width: 768px) {
      width: 100%;
      & > div {
        text-align: center;
        align-items: center;
        padding: 15px 36%;
        display: flex;
        text-align: center;
      }
    }
  }
  span.last {
    @media (max-width: 768px) {
      width: 100%;
      & > div {
        display: flex;
        padding: 15px auto;
        width: 100%;
        gap: 0.45rem;
        &:hover {
          padding: 15px 5px;
        }
      }
    }
  }
  span.success {
    width: fit-content;
    margin: auto;
    @media (max-width: 768px) {
      width: 100%;
      & > div {
        text-align: center;
        align-items: center;
        padding: 15px 20%;
        display: flex;
        text-align: center;
      }
    }
  }
`;
export const InputWrapDiv = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.div`
  transition: all 0.3s ease-in-out;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: ${colors.error_color};
  position: absolute;
  bottom: ${({ errFor }) => (errFor === "passWord" ? "-90%" : "-50%")};
  z-index: 10;
  width: 100%;
  padding: 0.5rem;
  border-radius: 15px;
  background-color: #c9f0ed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.37);
  text-align: start;
  @media (max-width: 768px) {
    bottom: ${({ errFor }) => (errFor === "passWord" ? "-130%" : "85%")};
  }
`;
