import styled, { keyframes } from "styled-components";
import { colors } from "../../colors";

const Breathing = keyframes` 
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    color: ${colors.chinese_black};
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;
export const ButtonWrap = styled.div`
  // margin: auto;
  border: 1px solid
    ${({ filled, bgColor }) => (filled === true ? bgColor : "none")};
  background-color: ${({ filled, bgColor }) =>
    filled === true ? "none" : bgColor};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ dir }) => (dir === "left" ? "row-reverse" : "row")};
  gap: 1rem;
  align-items: center;
  padding: 15px 2rem;
  border-radius: 24px;
  font-weight: 700;
  font-size: 14px;
  color: ${({ filled, bgColor }) => (filled === true ? bgColor : colors.white)};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ filled, bgColor }) =>
      filled === true ? bgColor : "unset"};
    color: ${({ filled, bgColor }) =>
      filled === true ? colors.white : bgColor};
    border: 1px solid
      ${({ filled, bgColor }) => (filled === true ? "unset" : bgColor)};
    padding: 15px 2.1rem;
  }
  @media (max-width: 768px) {
    gap: 0.5rem;
    p {
      font-size: 16px;
    }
  }
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`;
export const IconArrow = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  animation: ${Breathing} 3s ease-in-out infinite;
`;
export const Spinner = keyframes`
   from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
`;
export const Loading = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.white};

  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: ${colors.white};
    border-radius: 100%;
    animation: ${Spinner} 1s ease infinite;
  }
  &:hover::after {
    border-top-color: ${colors.secondary80};
  }
`;
