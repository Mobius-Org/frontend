import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../../colors";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { toast } from "react-toastify";
const TicTacToeQuestion = ({
  setShowModal,
  func,
  scores,
  setScores,
  setWonPlayer,
  setXPlaying,
  setPerformance,
}) => {
  let { oScore } = scores;
  const Operands = ["-", "+", "x"];
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [value, setValue] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operand, setOperand] = useState("+");
  const [result, setResult] = useState(false);
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [solved, setSolved] = useState(0);

  const handleBackToGame = () => {
    if (correctAnswer) {
      setTimeout(() => {
        setShowModal(false);
        setCorrectAnswer(null);
        setResult(!result);
      }, 700);
    }
  };
  const UpdatePerformance = useCallback(() => {
    setPerformance(((solved / attemptedCount) * 100).toFixed(1));
  }, [solved, attemptedCount]);
  const generateNum = useCallback(() => {
    return Math.floor(Math.random() * 10) + 100;
  }, []);

  const generateOperand = useCallback(() => {
    return Operands[Math.floor(Math.random() * Operands.length)];
  }, []);

  const handleSolveAgain = () => {
    setResult(false);
    setCorrectAnswer(null);
  };
  const handleSolve = () => {
    if (value === "") {
      toast.error("Please Enter an Answer", {
        position: "top-center",
      });
      return;
    }
    setAttemptedCount(attemptedCount + 1);
    const operator = document.getElementById("operator").textContent;
    const q1 = Number(document.getElementById("q1").textContent);
    const q2 = Number(document.getElementById("q2").textContent);

    if (operator === "+" && q1 + q2 === Number(value)) {
      setCorrectAnswer(true);
      setResult(!result);
      setSolved(solved + 1);
    } else if (operator === "-" && q1 - q2 === Number(value)) {
      setCorrectAnswer(true);
      setResult(!result);
      setSolved(solved + 1);
    } else if (operator === "x" && q1 * q2 === Number(value)) {
      setCorrectAnswer(true);
      setResult(!result);
      setSolved(solved + 1);
    } else if (
      operator === "÷" &&
      (q1 / q2).toFixed(3) === Number(value).toFixed(3)
    ) {
      setCorrectAnswer(true);
      setResult(!result);
      setSolved(solved + 1);
    } else {
      setCorrectAnswer(false);
      setResult(!result);
      return;
    }
  };
  const text =
    operand === "+"
      ? "Addition"
      : operand === "-"
      ? "Subtraction"
      : operand === "x"
      ? "Multiplication"
      : "Division";

  useEffect(() => {
    setNum1(generateNum());
    setNum2(generateNum());
    setOperand(generateOperand());
    setValue("");
  }, [result]);
  useEffect(() => {
    UpdatePerformance();
  }, [attemptedCount]);

  return (
    <QuestionWrapper>
      {correctAnswer === null ? (
        <Heading>Solve To Play: {text}</Heading>
      ) : correctAnswer === true ? (
        <Heading>Correct Answer</Heading>
      ) : (
        <Heading>Wrong Answer</Heading>
      )}
      {result ? (
        correctAnswer ? (
          <CorrectWrapper>
            <h3>
              <BsFillPatchCheckFill size={80} />
            </h3>
            <BtnWraps>
              <Btn onClick={handleBackToGame}>Play</Btn>
            </BtnWraps>
          </CorrectWrapper>
        ) : (
          <CorrectWrapper>
            <h3>
              <span>x</span>
            </h3>
            <BtnWraps>
              <Btn onClick={handleSolveAgain}>Try Again</Btn>
            </BtnWraps>
          </CorrectWrapper>
        )
      ) : (
        <QWrap>
          <div>
            <h1 id="operator">{operand}</h1>
            <span>
              <Q1 id="q1">{num1}</Q1>
              <Q2 id="q2">{num2}</Q2>
            </span>
          </div>
          <span className="btn-icon">
            <input
              type={"number"}
              value={value}
              onChange={({ target }) => setValue(target.value)}
            />
            <Btn onClick={handleSolve}>Solve</Btn>
          </span>
        </QWrap>
      )}
    </QuestionWrapper>
  );
};

export { TicTacToeQuestion };

const QuestionWrapper = styled.div`
  height: 35vh;
  width: 80%;
  margin: auto;
`;
const CorrectWrapper = styled.div`
  height: 35vh;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 1.5rem;
  gap: 2rem;
  flex-direction: column;
  & > h3 {
    color: ${colors.sucess_color};
    margin: 0.5rem;
    width: max-content;
    height: max-content;

    span {
      font-size: 80px;
      border-radius: 50%;
      text-shadow: 0px 0px 4px salmon;
      color: ${colors.error_color};
    }
  }
`;
const Heading = styled.h3`
  width: max-content;
  border-bottom: 4px solid ${colors.secondary_color};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Q1 = styled.h3`
  padding: 0.5rem;
  letter-spacing: 3px;
  margin-left: 0.5rem;
  color: red;
`;
const Q2 = styled.h3`
  padding: 0.5rem;
  letter-spacing: 3px;
  margin-left: 0.5rem;
  color: purple;
`;
const QWrap = styled.div`
  width: max-content;
  margin: 2rem auto;
  & > div {
    display: flex;
    width: 8rem;
    margin: 0 auto;
    justify-items: space-between;
    align-items: center;
    h1 {
      color: green;
    }
    & > span {
      width: max-content;
      align-items: center;
      text-align: end;
    }
  }
  & > span {
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    &.btn-icon::before {
      content: "Ans: ";
      position: absolute;
      padding: 0.2rem;
      left: -30%;
      z-index: 2;
      pointer-events: none; /* important */
      width: 2rem;
      color: grey;
      font-weight: bold;
    }
  }
  & input {
    height: 2rem;
    width: 8rem;
    border: 3px solid transparent;
    padding: 0 0.5rem;
    border-top-color: ${colors.accent};
    border-bottom-color: ${colors.sucess_color};
    outline: 0;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    color: green;
    text-align: center;
    position: relative;
  }
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
