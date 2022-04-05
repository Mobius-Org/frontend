import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavWrapper>
      <div>
        <Logo>
          <img src="images/logo.svg" alt="mobius_logo" />
        </Logo>
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuItem> Home</MenuItem>
          <MenuItem> Our Courses</MenuItem>
          <MenuItem> Contact us</MenuItem>
          <MenuItem> Account</MenuItem>
          <MenuItem> Parent Page</MenuItem>
        </Menu>
      </div>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.header`
  background: linear-gradient(101.08deg, #810486 0.51%, #810486 97.37%);
  padding: 0;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    height: 80px;
  }
  & > div {
    position: relative;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(101.08deg, #810486 0.51%, #810486 97.37%);
    max-width: 1200px;
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

const Logo = styled.a`
  width: 150px;
  height: 63px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
const Hamburger = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  background: ${colors.white};
  height: fit-content;
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
      & > span {
    background: ${colors.primary_cadium_violet};
    width: 30px;
    height: 4px;
    display: flex;
  }
   ${({ isOpen }) =>
    isOpen ? `
      & > span:nth-child(1){
        transform: rotate(45deg);
      }
      & > span:nth-child(2){
        opacity: 0;
      }
      & > span:nth-child(3){
        transform: rotate(-45deg);
      }
      `:`
         & > span:nth-child(1){
        transform: rotate(0deg);
      }
      & > span:nth-child(2){
        opacity: 1;
      }
      & > span:nth-child(3){
        transform: rotate(0deg);
      }
  }`
    
  }
`;
const Menu = styled.ul`
  @media (min-width: 768px) {
    postion: unset;
    width: unset;
    display: flex;
    flex-flow: row;
    height: fit-content;
    gap: 2rem;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    color: ${colors.white};
    font-size: 16px;
    font-weight: 800;
    transition: all 0.3s ease-in-out;
  }
  width: 100%;
  postion: absolute;
  top: 80px;
  height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  padding: ${({ isOpen }) => (isOpen ? "0" : "0")};
  width: 100vw;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  color: ${colors.white};
  font-size: 24px !important;
  font-weight: 800;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

const MenuItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    border-bottom: 3px solid ${colors.accent};
    padding-bottom: 2px;
  }
`;
