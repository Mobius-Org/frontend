import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../colors";
import { FaChevronDown } from "react-icons/fa";
import { dashBoardRoutes } from "../../../../appRouter/routes";
const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCurrentId = (path) => {
    navigate(path);
  };
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
            <Menu>
              {dashBoardRoutes.map(({ name, icon, path, displayName }, i) => {
                return (
                  <MenuItem onClick={() => handleCurrentId(path)} key={i}>
                    {" "}
                    <Link
                      to={path}
                      className={path === location.pathname ? "active" : null}
                    >
                      <span>
                        <FaChevronDown />
                      </span>
                      <span>{name}</span>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
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
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100px;
    overflow: hidden;
  }
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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  div.firstWrap {
    // border: 1px solid coral;
    height: 60%;
  }

  div.LogOutWrap {
    height: fit-content;
    width: fit-content;

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

const Menu = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
`;

const MenuItem = styled.div`
  // border: 1px solid black;
  width: 80%;
  margin-left: 20%;
  height: fit-contnet;
  display: flex;
  border-radius: 30px 0px 0px 30px;
  & > a {
    width: 100%;
    color: ${colors.white};
    height: 3.5rem;
    text-decoration: none;
    font-size: 16px;
    border-radius: inherit;
    font-weight: 600;
    background: ${colors.secondary80};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease-in-out;
    gap: 1rem;
    & span:first-of-type {
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & span:last-of-type {
      font-weight: 600;
      text-align: start;
      width: 70%;
    }

    &.active {
      transition: all 0.3s ease-in-out;
      color: ${colors.secondary80};
      background: ${colors.white};
    }
    &:hover {
      transition: all 0.3s ease-in-out;
      color: ${colors.secondary80};
      background: ${colors.white};
      transform: scale(1.1);
    }
  }
`;
