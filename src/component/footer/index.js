import React from "react";
import { FooterWrapper, FooterContainer, Logo } from "./style";
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Logo>
          <img src="images/logo.svg" alt="mobius_logo" />
        </Logo>
        <div>© 2022 Mobius. All rights reserved</div>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
