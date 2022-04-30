import React from "react";

import { colors } from "../../colors";
import styled from "styled-components";

const PaymentModal = ({
  showModal,
  setShowModal,
  src,
  image,
  price,
  title,
  shortSummary,
}) => {
  return (
    <EditProfileWrap showModal={showModal}>
      <Container showModal={showModal}>
        <div>
          <h1>Confirm Payment Details</h1>
          <img src={image} alt="course" />
          <div>
            <aside className="firsta">
              <h2>{title}</h2>
              <p>{shortSummary}</p>
            </aside>
            <aside className="seconda">
              <h3>Price : &#8358;{price}</h3>
            </aside>
            <aside className="third">
              <ButtonWrap onClick={() => setShowModal(!showModal)}>
                <span>←</span>
                <span>Cancel</span>
              </ButtonWrap>
              <ButtonWrap
                color={colors.sucess_color}
                onClick={() => {
                  setShowModal(!showModal);
                  const tag = document.createElement("a");
                  tag.href = src;
                  tag.target = "_blank";
                  tag.rel = "noopener noreferrer";
                  document.body.appendChild(tag);
                  tag.click();
                  document.body.removeChild(tag);
                }}
              >
                <span>Pay Now</span>
                <span>→</span>
              </ButtonWrap>
            </aside>
          </div>
        </div>
      </Container>
    </EditProfileWrap>
  );
};

export { PaymentModal };

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

const Container = styled.div`
  width: 40vw;
  border-radius: 10px;
  height: fit-content;
  background: #fff;
  margin: auto;
  box-shadow: 0 0 3px #c4c4c4;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  transition-delay: 0.3s;
  padding: 0;
  padding-bottom: 0.5rem;

  ${({ showModal }) =>
    !showModal &&
    `
  transition-delay: 0.3s;

    transition: all 0.3s ease-in-out;
    transform: scale(0);
 
    `}
  @media (max-width: 768px) {
    width: fit-content;
    height: fit-content;
  }
  & > div {
    border-radius: inherit;
    outline: none;
    border: none;
    width: 100%;
    height: fit-content;
    & h1 {
      font-size: 2rem;
      text-align: center;
      padding: 1rem 0;
    }
    & img {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
    & div {
      aside.firsta {
        padding: 1rem 2rem;
        & > h2 {
          font-size: 1.5rem;
          color: ${colors.secondary80};
        }
        & > p {
          font-size: 0.9rem;
          color: grainsboro;
        }
      }
      aside.seconda {
        padding: 1rem 2rem;
        display: flex;
        background: ${colors.secondary20};
        flex-flow: column wrap;
        gap: 0.5rem;
        & > h3 {
          font-size: 1rem;
        }
      }
      aside.third {
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const ButtonWrap = styled.div`
  padding: 0.5rem 0.3rem;
  width: 150px;
  background: ${({ color }) => (color ? color : colors.error_color)};
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${({ color }) => (color ? color : colors.error_color)};
    background: #fff;
    border: 1px solid ${({ color }) => (color ? color : colors.error_color)};
  }
`;
