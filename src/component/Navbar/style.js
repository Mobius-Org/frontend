import styled from "styled-components";
import { colors } from "../../colors";

export const NavWrapper = styled.header`
  background: ${colors.white};
  padding: 0;
  transition: all 0.3s ease-in-out;
  position: sticky;
  top: 0;
  z-index: 999;

  @media (max-width: 768px) {
    height: 80px;
  }
  & > div {
    position: relative;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    background: ${colors.white};
    max-width: 1400px;
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap !important;
    padding: 10px 20px;
  }
`;

export const Logo = styled.a`
  width: 150px;
  height: 63px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 100px;
    height: 50px;
    transition: all 0.3s ease-in-out;
  }
  & > img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    :hover {
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      transform: scale(0.9);
    }
  }
`;
export const Hamburger = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  background: ${colors.secondary_color};
  height: fit-content;
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  & > span {
    background: ${colors.white};
    width: 30px;
    height: 4px;
    display: flex;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }
  ${({ isOpen }) =>
    isOpen
      ? `
      & > span:nth-child(1){

        transition: all 0.3s ease-in-out;
        transform:translateY(10px) rotate(45deg);
        width: 40px;
      }
      & > span:nth-child(2){
        opacity: 0;
      }
      & > span:nth-child(3){
         transform:translateY(-5px) rotate(-45deg);
        transition: all 0.3s ease-in-out;
        width: 35px;
      }
      `
      : `
         & > span:nth-child(1){
        transform: rotate(0deg);
      }
      & > span:nth-child(2){
        opacity: 1;
      }
      & > span:nth-child(3){
        transform: rotate(0deg);
      }
  }`}
`;
export const Menu = styled.ul`
  @media (min-width: 768px) {
    postion: unset;
    z-index: 100;
    width: 72%;
    display: flex;
    flex-flow: row;
    height: fit-content;
    gap: 2rem;
    align-items: center;
    list-style: none;
    color: #707070;
    font-size: 16px;
    font-weight: 800;
    transition: all 0.3s ease-in-out;
    justify-content: space-between;
    & > span {
      display: flex;
      gap: 2.5rem;
    }
  }
  width: 100%;
  postion: absolute;
  top: 80px;
  height: ${({ isOpen }) => (isOpen ? "90vh" : "0")};
  padding: ${({ isOpen }) => (isOpen ? "0" : "0")};
  width: 100vw;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: ${colors.white};
  font-size: 24px !important;
  font-weight: 800;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  @media (max-width: 768px) {
    & > span {
      display: flex;
      flex-direction: column;
      height: fit-conetnt;
      gap: 2.5rem;
    }
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  a {
    text-decoration: none;
    color: #707070;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    letter-spacing: 1px;
    position: relative;
    text-decoration: none;
    text-transform: capitalize;
    font-weight: 600;
    transition: all 0.3s ease;
    -webkit-transition: all 0.5s ease;

    :hover {
      color: ${colors.secondary_color};
      transition: all 0.3s ease;
      -webkit-transition: all 1s ease;
    }
    :before,
    :after {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      bottom: -8px;
      background: ${colors.secondary_color};
      border-radius: 10px;
    }
    :before {
      left: 0;
      transition: 0.3s;
    }
    :after {
      background: ${colors.secondary_color};
      right: 0;
    }
    :hover:before {
      background: ${colors.secondary_color};
      width: 100%;
      transition: width 0.3s cubic-bezier((0.22, 0.61, 0.36, 1));
      border-radius: 0.5px;
    }
    :hover:after {
      background: transparent;
      width: 100%;
      border-radius: 0.5px;
    }
  }
`;
