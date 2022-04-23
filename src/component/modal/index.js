import React from "react";

import styled from "styled-components";
const Modal = ({ children, showModal, SetShowModal }) => {
  return (
    <EditProfileWrap showModal={showModal}>
      <Container showModal={showModal}>{children}</Container>
    </EditProfileWrap>
  );
};

export { Modal };

const EditProfileWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Container = styled.div`
  width: 40vw;
  border-radius: 10px;
  height: fit-content;
  background: #fff;
  margin: auto;
  box-shadow: 0 0 5px #c4c4c4;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  transition-delay: 0.3s;
  padding: 2rem 0;

  ${({ showModal }) =>
    !showModal &&
    `
  transition-delay: 0.3s;

    transition: all 0.3s ease-in-out;
    transform: scale(0);
 
    `}
  @media (max-width: 768px) {
    width: 90vw;
    height: fit-content;
  }
`;
