import styled from "styled-components";
import { colors } from "../../colors";

export const ButtonWrap = styled.div`
  margin: auto;
  border: 1px solid
    ${({ filled, bgColor }) => (filled === true ? bgColor : "none")};
  background-color: ${({ filled, bgColor }) =>
    filled === true ? "none" : bgColor};
  width: fit-content;
  display: flex;
  flex-direction: ${({ dir }) => (dir === "left" ? "row-reverse" : "row")};
  gap: 1rem;
  align-items: center;
  padding: 1rem 20px;
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
    padding: 1rem 28px;
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
`;
