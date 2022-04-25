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
  }
  @media (max-width: 768px) {
    padding: 0;
    height: fit-content;
  }
`;

export const Wrap = styled.div`
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
    height: max-content;
    width: 100%;
    border-radius: 0;
  }
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
  width: 95%;
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
export const CtaWrap = styled.div`
  width: 95%;
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
  & > span {
    min-width: 150px;
    & > a {
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      color: rgba(12, 18, 28, 0.75);
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      &:hover {
        transition: all 0.3s ease-in-out;
        color: ${colors.secondary_color};
      }
    }
    @media (max-width: 768px) {
      width: 100%;
      // border:1px solid red;
      &:first-of-type > div {
        text-align: center;
        align-items: center;
        padding: 15px 37%;
        display: flex;
        text-align: center;
      }
      &:last-of-type > div {
        display: flex;
        padding: 15px auto;
        width: 100%;
        gap: 0.45rem;
        &:hover {
          padding: 15px auto;
        }
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
    bottom: ${({ errFor }) => (errFor === "passWord" ? "-130%" : "-80%")};
  }
`;
