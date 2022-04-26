import React from "react";
import { Link } from "react-router-dom";
import { FooterWrapper, FooterContainer, Logo, IconsWrapper } from "./style";
import { ImPlay, ImDribbble, ImInstagram, ImTwitter } from "react-icons/im";
import { logo } from "../../assets";
const Footer = () => {
  return (
    <FooterWrapper id="Contact-us">
      <FooterContainer>
        <Logo>
          <Link to="/">
            <img src={logo} alt="mobius_logo" />
          </Link>
        </Logo>
        <IconsWrapper>
          <li>
            <Link to={""}>
              <ImInstagram size={20} />
            </Link>
          </li>
          <li>
            <Link to={""}>
              <ImDribbble size={20} />
            </Link>
          </li>
          <li>
            <Link to={"twitter.com"}>
              <ImTwitter size={20} />
            </Link>
          </li>
          <li>
            <Link to={""}>
              <ImPlay size={20} />
            </Link>
          </li>
        </IconsWrapper>
        <div>© 2022 Mobius. All rights reserved</div>
      </FooterContainer>
    </FooterWrapper>
  );
};

export { Footer };
