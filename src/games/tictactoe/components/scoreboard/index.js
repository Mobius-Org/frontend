import React from "react";

import styled from "styled-components";
import { colors } from "../../../../colors";

const ScoreBoard = ({
  scores,
  xPlaying,
  wonPlayer,
  handlePlayAgain,
  FinishGame,
}) => {
  // const { xScore, oScore } = scores;

  return (
    <ScoreboardWraap>
      <h1>{wonPlayer} Takes This Round</h1>
      <BtnWraps>
        <Btn onClick={handlePlayAgain}>Play Again</Btn>
        <Btn onClick={() => FinishGame()}>Finish</Btn>
      </BtnWraps>
    </ScoreboardWraap>
  );
};
export { ScoreBoard };

const ScoreboardWraap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  font-size: 1.5rem;
  background-color: white;
  margin: 0.5rem auto;
  border-radius: 0.5rem;
  font-weight: bold;
`;
const BtnWraps = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Btn = styled.button`
  width: 200px;
  padding: 0.8rem 0;
  font-weight: bold;
  color: #fff;
  background-color: ${colors.accent};
  border: none;
  outline: 0;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.7);
  }
  &:last-of-type {
    background-color: ${colors.chinese_black};
    &:hover {
      transition: all 0.3s ease-in-out;
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;
