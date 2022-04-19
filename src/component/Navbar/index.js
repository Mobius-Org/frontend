import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { colors } from "../../colors";
import { NavWrapper, Logo, Hamburger, Menu, MenuItem } from "./style";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { dashBoardRoutes } from "../../appRouter/routes";
import { logo } from "../../assets";
import { Button } from "../button";
import { Profile } from "../profile";

const Nav = () => {
  const location = useLocation();
  const state = useSelector((state) => state);
  const { sign_in } = state?.auth;
  const currentlocation = location.pathname;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  document.addEventListener("scroll", function (e) {
    setScrollPosition(window.scrollY);
  });
  useEffect(() => {
    if (scrollPosition > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrollPosition]);

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavWrapper scrolled={scrolled}>
      <div>
        <Logo>
          <Link to="/">
            <img src={logo} alt="mobius_logo" />
          </Link>
        </Logo>
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Menu isOpen={isOpen}>
          {currentlocation.includes("/dashboard") ? (
            <span>
              {dashBoardRoutes.map(({ name, icon, path, displayName }, i) => (
                <MenuItem>
                  {" "}
                  <Link onClick={handleClick} to={path}>
                    {name}
                  </Link>
                </MenuItem>
              ))}
            </span>
          ) : (
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
          )}
          <MenuItem>
            {sign_in && currentlocation.includes("/dashboard") ? (
              <Profile />
            ) : (
              <Button
                onClick={handleClick}
                text={"Enroll Now"}
                bgColor={colors.secondary80}
              />
            )}
          </MenuItem>
        </Menu>
      </div>
    </NavWrapper>
  );
};

export { Nav };
