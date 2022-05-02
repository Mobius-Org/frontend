import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { gameBg } from "../../assets";
import { TicTacToe } from "../../games/tictactoe";
const ExercisePage = () => {
  const { exerciseId } = useParams();
  return (
    <GameWrapper>
      <TicTacToe />
    </GameWrapper>
  );
};

export { ExercisePage };

const GameWrapper = styled.div`
  height: 80vh;
  background: url(${gameBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  border-radius: 15px;
  @media (max-width: 768px) {
    border-radius: unset;
  }
`;
