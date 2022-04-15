import React from "react";
import { Link } from "react-router-dom";
import { FooterWrapper, FooterContainer, Logo, IconsWrapper } from "./style";
import { ImPlay, ImDribbble, ImInstagram, ImTwitter } from "react-icons/im";
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Logo>
          <img src="images/logo.svg" alt="mobius_logo" />
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
            <Link to={""}>
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

export default Footer;
