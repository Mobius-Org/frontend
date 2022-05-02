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
  border-radius: 0px;
  box-shadow: 0px 0px 8px #888888;
  width: 7rem;
  height: 7rem;
  text-align: center;
  font-size: 5em;
  font-weight: 900;
  line-height: 5rem;
  margin: 0.5rem;
  transition: all 0.3s ease-in-out;

  &.x {
    color: orange;
  }

  &.o {
    color: #1f4fed;
  }

  &:hover {
    cursor: pointer;
    text-shadow: 0px 0px 15px #888888;
  }
  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
  @media (max-width: 330px) and (min-width: 0px) {
    width: 5rem;
    height: 5rem;
  }
`;
