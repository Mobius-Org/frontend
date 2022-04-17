import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../colors";

const SideNav = () => {
  return (
    <SideNavWrapper>
      <SideNavInner>
        <NavWrapper>
          <div className="firstWrap">
            <div>
              <Logo>
                <Link to="/">
                  <img src="images/MobiusLogo.svg" alt="mobius_logo" />
                </Link>
              </Logo>
              <Hamburger>
                <span></span>
                <span></span>
                <span></span>
              </Hamburger>
            </div>
            {/*
            <Menu isOpen={isOpen}>
              <span>
                <MenuItem>
                  {" "}
                  <Link onClick={handleClick} to={"/"}>
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link onClick={handleClick} to="#Courses">
                    Our Courses
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link onClick={handleClick} to={"#Contact-us"}>
                    Contact us
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link onClick={handleClick} to={""}>
                    Parent Page
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link onClick={handleClick} to="/signup">
                    Account {"  "} <FaChevronDown />
                  </Link>
                </MenuItem>
              </span>
              <MenuItem>
                <Button
                  onClick={handleClick}
                  text={"Enroll Now"}
                  bgColor={colors.secondary80}
                />
              </MenuItem>
            </Menu> */}
          </div>
          <div>
            <div className="LogOutWrap">
              <span></span>
              <span>Log Out</span>
            </div>
          </div>
        </NavWrapper>
      </SideNavInner>
    </SideNavWrapper>
  );
};

export default SideNav;

const SideNavWrapper = styled.nav`
  width: 261px;
  background-color: #00b7ab;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
`;
const SideNavInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const Logo = styled.a`
  width: 150px;
  height: 83px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 100px;
    height: 50px;
    transition: all 0.3s ease-in-out;
  }
  & > a > img {
    width: 50%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    :hover {
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      transform: scale(0.9);
    }
  }
`;
const NavWrapper = styled.div`
  height: 90%;
  width: 90%;
  margin: auto;
  margin-left: 10%;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  div.firstWrap {
    border: 1px solid coral;
    height: 60%;
  }

  div.LogOutWrap {
    height: fit-content;
    width: fit-content;
    border: 1px solid red;
    padding: 15px 1rem;
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;
    & span:first-of-type {
      width: 25px;
      height: 25px;
      background-color: white;
    }
    & span:last-of-type {
      color: white;
      font-weight: 600;
    }
  }
`;

const Hamburger = styled.div`
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
