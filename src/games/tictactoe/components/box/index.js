import React from "react";
import styled from "styled-components";
const Box = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";

  return (
    <Button className={style} onClick={onClick}>
      {value}
    </Button>
  );
};
export { Box };

const Button = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 10%;
  box-shadow: 0px 0px 8px #888888;
  width: 5rem;
  height: 5rem;
  text-align: center;
  font-size: 5em;
  font-family: "Fredoka", sans-serif;
  font-weight: bold;
  line-height: 5rem;
  margin: 0.5rem;
  transition: all 0.3s ease-in-out;

  &.x {
    color: rgb(255, 70, 37);
  }

  &.o {
    color: rgb(44, 135, 255);
  }

  &:hover {
    box-shadow: 0px 0px 15px #888888;
  }
`;
