import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../../colors";
import Button from "../button";
import { NavWrapper, Logo, Hamburger, Menu, MenuItem } from "./style";
import { FaChevronDown } from "react-icons/fa";

const Nav = () => {
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
  return (
    <NavWrapper scrolled={scrolled}>
      <div>
        <Logo>
          <Link to="/">
            <img src="images/logo.svg" alt="mobius_logo" />
          </Link>
        </Logo>
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Menu isOpen={isOpen}>
          <span>
            <MenuItem>
              {" "}
              <Link to={"/"}>Home</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to="#Courses">Our Courses</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to={"#Contact-us"}>Contact us</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to={""}>Parent Page</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to="/signup">
                Account {"  "} <FaChevronDown />
              </Link>
            </MenuItem>
          </span>
          <MenuItem>
            <Button text={"Enroll Now"} bgColor={colors.secondary80} />
          </MenuItem>
        </Menu>
      </div>
    </NavWrapper>
  );
};

export default Nav;
