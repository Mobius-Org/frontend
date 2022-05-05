import styled from "styled-components";
import { colors } from "../../colors";

export const NavWrapper = styled.header`
  background: ${colors.white};
  padding: 0;
  transition: all 0.3s ease-in-out;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: ${({ scrolled }) =>
    scrolled ? `0px 2px 4px ${colors.secondary60}` : "none"};
  @media (max-width: 768px) {
    height: 80px;
    ${({ scrolled }) =>
      scrolled
        ? `
   position: fixed;
    top: 0%;
    left: 0%;
    right: 0%;
      `
        : `
        background: ${colors.white};
  padding: 0;
  transition: all 0.3s ease-in-out;
  position: sticky;
  top: 0;
  z-index: 999;`}
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
  & > a > img {
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
  @media (min-width: 1098px) {
    display: none;
  }

  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  // background: ${colors.secondary_color};
  height: fit-content;
  width: fit-content;
  padding: 10px;
  border-radius: 5px;

  & > span {
    background: ${colors.secondary80};
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
        width: 35px;
        
      }
      & > span:nth-child(2){
        opacity: 0;
      }
      & > span:nth-child(3){
         transform:translateY(-10px) rotate(-45deg);
        transition: all 0.3s ease-in-out;
        width: 34px;
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
  @media (min-width: 1098px) {
    position: unset;
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
    @media (min-width: 769px) and (max-width: 1270px) {
      width: calc(100% - 180px);
      gap: 1.5rem;
    }
  }
  width: calc(100% + 3rem);
  position: absolute;
  top: 80px;
  left: 0;
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
  background-color: #fff;

  @media (max-width: 1098px) {
    overflow: hidden;
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
  position: relative;
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
    &.active {
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
    &.active:before {
      background: ${colors.secondary_color};
      width: 100%;
      transition: width 0.3s cubic-bezier((0.22, 0.61, 0.36, 1));
      border-radius: 0.5px;
    }
    &.active:after {
      background: transparent;
      width: 100%;
      border-radius: 0.5px;
    }
  }
  @media (max-width: 1098px) {
    &.drp {
      display: none;
    }
  }
  @media (min-width: 1098px) {
    &.small {
      display: none;
    }
  }
  &.active .dropdown {
    transform: translateX(25%) translateY(0);
    opacity: 1;
    pointer-events: auto;
    transition: all 0.3s ease-in-out;
  }

  &.active &:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-0.2rem);
    width: 0px;
    height: 0px;

    border: 10px solid transparent;
    border-bottom: 10px solid #333;
  }
`;
export const LinkDropDown = styled.div`
  position: absolute;
  width: max-content;
  max-width: 280px;
  top: calc(100% + 1rem);

  pointer-events: none;
  opacity: 0;
  background-color: #fff;
  padding: 0.75rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  right: 0%;
  transform: translateX(-100%) translateY(10px);
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > a {
    padding: 0.5rem 2rem;
    border-radius: 5px;
    display: flex;
    text-align: center !important;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 1098px) {
    position: unset;
    opacity: 1;
    transform: unset;
    pointer-events: unset;
  }
`;
