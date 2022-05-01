import React from "react";

import styled from "styled-components";

const ResetButton = ({ resetBoard }) => {
  return <Rbutton onClick={resetBoard}>Reset</Rbutton>;
};
export { ResetButton };

const Rbutton = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: rgb(0, 110, 255);
  color: white;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  margin: 2rem auto;
  display: block;

  &:hover {
    background-color: rgb(0, 119, 255);
  }
`;
