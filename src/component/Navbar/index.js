import React, { useState } from "react";
import { NavWrapper, Logo, Hamburger, Menu, MenuItem } from "./style";

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


