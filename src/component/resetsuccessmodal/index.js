import React, { useState } from "react";
import { colors } from "../../colors";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ResetSuccessModal = ({ src, text, text2, alt, heading, func }) => {
  return (
    <InfoWrap>
      <div className="imgWrap">
        <img src={src} alt={alt} />
      </div>
      {<h1>{heading}</h1>}
      {<p>{text}</p>}
      <div className="btnWrap">
        {
          <span onClick={() => func()}>
            {" "}
            <BTn>{text2}</BTn>
          </span>
        }
      </div>
    </InfoWrap>
  );
};

export { ResetSuccessModal };
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 55vh;
  & .imgWrap {
    height: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  & .btnWrap {
    width: fit-content;
  }
  h1 {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  p {
    width: 80%;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
    }
  }
`;
const BTn = styled.button`
  width: 10px 30px;
  background-color: ${colors.secondary80};
  align-items: center;
  color: #fff;
  padding: 15px 2rem;
  border-radius: 24px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;
  &:hover {
    background-color: ${colors.white};
    color: ${colors.secondary80};
    border: 1px solid ${colors.secondary80};
    transition: all 0.3s ease-in-out;
  }
`;
