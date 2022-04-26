import styled from "styled-components";
import { patternLogin } from "../../assets";
import { colors } from "../../colors";
export const Wrapper = styled.div`
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
  gap: 2rem;
  & > img {
    position: absolute;
    height: 30rem;
    left: 10.5%;
    bottom: 0%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    @media (max-width: 1150px) {
      transition: all 0.3s ease-in-out;
      bottom: -400%;
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    height: max-content;
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
  flex-direction: column;
  gap: 2rem;
  padding: 30px 20px;
  border-radius: 20px;
  position: unset;

  opacity: 1;
  @media (max-width: 768px) {
    transition: all 0.3s ease-in-out;
    height: 70vh;
    width: 100%;
    padding: 1rem 0;
    border-radius: 0;
  }
`;
export const Wrap2 = styled.div`
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
  flex-direction: column;
  gap: 2rem;
  padding: 30px 20px;
  border-radius: 20px;
  position: unset;

  opacity: 1;
  @media (max-width: 768px) {
    transition: all 0.3s ease-in-out;
    height: 70vh;
    width: 100%;
    border-radius: 0;
    padding: 1rem 0;
  }
`;
export const HeadingText = styled.h1`
  font-family: Nunito;
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
export const CtaWrap = styled.div`
  width: 90%;
  align-self: start !important;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: start;
    align-items: start;
    flex-direction: column;
  }

  color: ${colors.chinese_black};
  & > span {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    min-width: 200px;
    @media (max-width: 768px) {
      font-size: 1rem;
      width: 100%;
      &:first-of-type > div {
        text-align: center;
        align-items: center;
        padding: 15px 37%;
        display: flex;
        text-align: center;
      }
      &:last-of-type > div {
        text-align: center;
        align-items: center;
        padding: 15px 28.5%;
        display: flex;
        text-align: center;
      }
    }
    color: ${colors.secondary_color};
  }
`;
