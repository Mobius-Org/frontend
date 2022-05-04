import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Board,
  ResetButton,
  ScoreBoard,
  TicTacToeQuestion,
} from "./components";
import styled from "styled-components";
import { colors } from "../../colors";
import { AiFillTrophy } from "react-icons/ai";
import { Modal } from "../../component/modal";
const TicTacToe = () => {
  const [showModal, setShowModal] = useState(false);
  const [xPlaying, setXPlaying] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [wonModal, setWonModal] = useState(false);
  const [wonPlayer, setWonPlayer] = useState("");
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [solved, setSolved] = useState(0);
  const WIN_CONDITIONS = useMemo(
    () => [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
    []
  );
  const handleBoxClick = (boxIdx) => {
    if (xPlaying === false) return;
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);

    // Step 2: Check if either player has won the game
    checkWinner(updatedBoard);
    // Step 3: Change active player
    setXPlaying(!xPlaying);
  };

  const checkWinner = useCallback(
    (board) => {
      for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        const [x, y, z] = WIN_CONDITIONS[i];
        // Iterate through win conditions and check if either player satisfies them
        if (board[x] && board[x] === board[y] && board[y] === board[z]) {
          const winner = board[x];
          setWon(true);
          if (winner) {
            if (winner === "O") {
              let { oScore } = scores;
              oScore += 1;
              setScores({ ...scores, oScore });
              setWonPlayer("O");
              setXPlaying(false);
            } else {
              let { xScore } = scores;
              xScore += 1;
              setScores({ ...scores, xScore });
              setWonPlayer("X");
              setXPlaying(false);
            }
          }
        }
      }
    },
    [WIN_CONDITIONS, scores]
  );

  const resetBoard = () => {
    setXPlaying(false);
    setWonModal(false);
    setWon(false);
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  const cPlayer = useCallback(
    (el) => {
      if (won) {
        return;
      } else {
        if (el.length === 0) return;
        const randChoice = Math.floor(Math.random() * el.length);
        if (el[randChoice] === null) {
          el[randChoice] = "O";
          checkWinner(el);
          setXPlaying(true);
          setBoard([...el]);
        } else if (el[randChoice] !== null) {
          cPlayer(el);
        }
      }
    },
    [won, checkWinner]
  );
  useEffect(() => {
    if (xPlaying) {
      setShowModal(true);
    }
    if (xPlaying === false && won === false) {
      setTimeout(() => {
        console.log("started");
        cPlayer(board);
      }, 1500);
    }
    if (won) {
      setWonModal(true);
      setTimeout(() => {
        setShowModal(false);
      });
    }
  }, [xPlaying, won, cPlayer, board]);

  return (
    <TicTacToeWrapper>
      <Modal
        children={
          <TicTacToeQuestion
            setShowModal={setShowModal}
            showModal={showModal}
            solved={solved}
            setSolved={setSolved}
            attemptedCount={attemptedCount}
            setAttemptedCount={setAttemptedCount}
          />
        }
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <Modal
        setShowModal={setWonModal}
        showModal={wonModal}
        children={
          <ScoreBoard
            handlePlayAgain={resetBoard}
            scores={scores}
            xPlaying={xPlaying}
            wonPlayer={wonPlayer}
            Finish={() => {}}
          />
        }
      />
      <TopItems>
        <button>
          <span>←</span>
          <span>Back to Lessons</span>
        </button>
        <span>
          <span>
            <AiFillTrophy />
          </span>
          <span>
            {solved === 0 && attemptedCount === 0
              ? 0
              : (solved / attemptedCount) * 100}
            %
          </span>
        </span>
      </TopItems>
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton
        score={scores}
        resetBoard={scores.xScore > 0 ? resetBoard : () => console.log("ye")}
      />
    </TicTacToeWrapper>
  );
};

export { TicTacToe };
const TicTacToeWrapper = styled.div``;

const TopItems = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem auto;
  & > button {
    width: fit-content;
    height: fit-content;
    padding: 6px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background: none;
    outline: none;
    border: none;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
    & > span {
      margin: auto 4px;
    }
    &:hover {
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      background-color: ${colors.secondary_color};
      color: white;
      transform: scale(1.1);
      box-shadow: 0 0 4px grey;
    }
  }
  & > span {
    width: 100px;
    display: flex;
    background-color: #009a8e;
    align-items: center;
    & > span:first-of-type {
      width: fit-content;
      height: fit-content;
      text-align: center;
      padding: 6px 7px;
      font-size: 18px;
      border-right: 1px solid white;
      color: gold;
    }
    & > span:last-of-type {
      width: fit-content;
      height: fit-content;
      text-align: center;
      padding: 6px 9px;
      color: white;
    }
  }
  @media (max-width: 768px) {
    width: 96%;
  }
`;
