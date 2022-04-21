import React from "react";

import styled from "styled-components";

const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <ScoreboardWraap>
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>
        O - {oScore}
      </span>
    </ScoreboardWraap>
  );
};
export { ScoreBoard };

const ScoreboardWraap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 20rem;
  font-size: 1.5rem;
  background-color: white;
  margin: 3rem auto;
  box-shadow: 0px 0px 8px #888888;
  border-radius: 0.5rem;
  font-weight: bold;

  &.score {
    width: 100%;
    text-align: center;
    padding: 1rem 0rem;
  }

  &.x-score {
    color: rgb(255, 70, 37);
    border-bottom: 5px solid rgb(255, 70, 37);
    border-radius: 0.5rem 0rem 0rem 0.5rem;
  }

  &.o-score {
    color: rgb(44, 135, 255);
    border-bottom: 5px solid rgb(44, 135, 255);
    border-radius: 0rem 0.5rem 0.5rem 0rem;
  }

  &.inactive {
    border-bottom: 5px solid transparent;
  }
`;
