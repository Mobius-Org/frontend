import React, { useRef, useState, useEffect } from "react";

import styled from "styled-components";
import { colors } from "../../colors";
const Modal = ({ children, showModal, SetShowModal }) => {
  const handleClick = (e) => {};

  return (
    <EditProfileWrap showModal={showModal}>
      <Container showModal={showModal}>
        {children}
        <AButton onClick={() => SetShowModal(false)}>Go Back Home</AButton>
      </Container>
    </EditProfileWrap>
  );
};

export default Modal;

const EditProfileWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 1000;
  display: flex;
  top: 0%;
  left: 0%;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  opacity: 1;
  transform: scale(1);

  ${({ showModal }) =>
    !showModal &&
    `
    transition: all 0.3s ease-in-out;
    opacity:0;
    z-index:-20;
    transform: scale(0);
  
    `}
`;
const AButton = styled.button`
  background: ${"#000"};
  padding: 1rem;
  border-radius: 15px;
  outline: 0;
  border: none;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(0.96);
  }
`;

const Button = styled.button`
  background: ${colors.main_color};
  color: #fff;
  width: fit-content;
  padding: 1rem;
  border-radius: 10px;
  outline: 0;
  font-size: 1rem;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    padding: 0 1.05rem;
    width: fit-content;
    cursor: pointer;
    background: #c75af6;
    height: 2.8rem;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 70%;
  margin: 1rem auto;
  height: 18rem;
  gap: 0.5rem;
  & > div {
    display: flex;
    flex-flow: row;
    width: 100%;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;

    &: hover {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      transform: scale(0.96);
    }
  }
`;

const ProfileImage = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  width: 70%;
  margin: 1rem auto;
  height: 18rem;
  & > img {
    height: 200px;
    width: 200px;
    margin: auto;
    border-radius: 50%;
    border: 1px solid #f5f5f7;
    object-fit: cover;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    margin: auto;
    width: 70%;
    & > div,
    & > button {
      width: fit-content;
      padding: 0 1rem;
      border-radius: 10px;
      outline: 0;
      border: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        transition: all 0.3s ease-in-out;
        padding: 0 1.05rem;
        width: fit-content;
        cursor: pointer;
        background: #c75af6;
        height: 2.8rem;
      }
    }
    & > button {
      background: ${colors.main_color};
      color: #fff;
    }
  }
`;

const Container = styled.div`
  width: 40vw;
  border-radius: 10px;
  height: 95vh;
  background: #fff;
  margin: auto;
  box-shadow: 0 0 5px #c4c4c4;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  transition-delay: 0.3s;

  ${({ showModal }) =>
    !showModal &&
    `
  transition-delay: 0.3s;

    transition: all 0.3s ease-in-out;
    transform: scale(0);
 
    `}
  @media (max-width: 768px) {
    width: 90vw;
    height: 95vh;
  }
`;
