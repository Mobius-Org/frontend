import React from "react";
import styled from "styled-components";
import { Box } from "../box";

const Board = ({ board, onClick }) => {
  return (
    <BoardWrapper>
      {board.map((value, idx) => {
        return (
          <Box value={value} onClick={() => value === null && onClick(idx)} />
        );
      })}
    </BoardWrapper>
  );
};

export { Board };

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  place-items: center;
  justify-content: center;
  margin: 10px auto;
`;
