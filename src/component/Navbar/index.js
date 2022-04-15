import React, { useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../../colors";
import Button from "../button";
import { NavWrapper, Logo, Hamburger, Menu, MenuItem } from "./style";
import { FaChevronDown } from "react-icons/fa";

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
          <span>
            <MenuItem>
              {" "}
              <Link to={"/"}>Home</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to="">Our Courses</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to={""}>Contact us</Link>
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
