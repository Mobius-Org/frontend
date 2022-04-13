import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";

const SechHeader = ({ text, textCaption }) => {
  return (
    <SechHeaderWrapper>
      <p>
        {text} <span>{textCaption}</span>
      </p>
    </SechHeaderWrapper>
  );
};

export default SechHeader;

const SechHeaderWrapper = styled.div`
  & p {
    font-size: 42px;
    font-weight: 800;
    font-family: Nunito;
    font-style: normal;
    color: ${colors.primary_cadium_violet};
    & > span {
      font-size: 42px;
      color: ${colors.white};
      padding: 0.1rem;
      background: ${colors.accent};
      border-radius: 15px;
      padding: 0 10px;
      @media (max-width: 768px) {
        font-size: 30px;
      }
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;
