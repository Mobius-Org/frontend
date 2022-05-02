import React from "react";

import styled from "styled-components";

const ResetButton = ({ score, resetBoard }) => {
  return (
    <RbuttonWrapper>
      <ScoresWrapper>
        <Cscores>
          <span>X(You)</span>
          <span>{score.xScore}</span>
        </Cscores>
        <Dscores>
          <span>TIES</span>
          <span>0</span>
        </Dscores>
        <Hscores>
          <span>C(CPU)</span>
          <span>{score.oScore}</span>
        </Hscores>
      </ScoresWrapper>
      <FinishBtn onClick={resetBoard}>
        <span>Finish Playing</span>
      </FinishBtn>
    </RbuttonWrapper>
  );
};
export { ResetButton };

const RbuttonWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 97%;
    flex-direction: column;
    gap: 1rem;
  }
`;
const ScoresWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 0.5rem;
`;
const Cscores = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  background-color: #009a8e;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  color: white;
  align-items: center;
  gap: 0.3rem;
`;
const Dscores = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  background-color: #009a8e;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
  color: white;
  align-items: center;
  gap: 0.3rem;
`;
const Hscores = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  background-color: #009a8e;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  color: white;
  align-items: center;
  gap: 0.3rem;
`;
const FinishBtn = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 1.1rem 1rem;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 30px;
  font-weight: 600;
  border: 3px solid #fff;
  color: white;
  box-shadow: 0 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 3px 5px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
