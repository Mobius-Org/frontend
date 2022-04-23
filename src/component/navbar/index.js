import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { colors } from "../../colors";
import { NavWrapper, Logo, Hamburger, Menu, MenuItem } from "./style";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { dashBoardRoutes } from "../../appRouter/routes";
import { logo } from "../../assets";
import { Button } from "../button";
import { Profile } from "../profile";
import { HashLink } from "react-router-hash-link";
// create navigatio
const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { sign_in } = state.auth ? state.auth : null;
  const currentlocation = location.pathname;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  document.addEventListener("scroll", function (e) {
    setScrollPosition(window.scrollY);
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const scrollWithOffset = (el, offset) => {
    const elementPos = el.offsetTop - offset;
    window.scroll({
      top: elementPos,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (scrollPosition > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrollPosition]);

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
                <HashLink
                  scroll={(el) => scrollWithOffset(el, 90)}
                  onClick={handleClick}
                  to="/#Courses"
                >
                  Our Courses
                </HashLink>
              </MenuItem>
              <MenuItem>
                {" "}
                <HashLink
                  onClick={handleClick}
                  scroll={(el) => scrollWithOffset(el, 120)}
                  to={"/#Contact-us"}
                >
                  Contact us
                </HashLink>
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
              <span
                onClick={() => {
                  if (sign_in) {
                    navigate("/dashboard");
                  } else {
                    navigate("/signup");
                  }
                }}
              >
                <Button
                  onClick={handleClick}
                  text={"Enroll Now"}
                  bgColor={colors.secondary80}
                />
              </span>
            )}
          </MenuItem>
        </Menu>
      </div>
    </NavWrapper>
  );
};

export { Nav };
