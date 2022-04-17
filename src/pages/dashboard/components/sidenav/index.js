import React from "react";
import styled from "styled-components";

const SideNav = () => {
  return (
    <SideNavWrapper>
      <SideNavInner>
        <SideNavItem>Overview</SideNavItem>
        <SideNavItem>Courses</SideNavItem>
        <SideNavItem>Contents</SideNavItem>
      </SideNavInner>
    </SideNavWrapper>
  );
};

export { SideNav };

const SideNavWrapper = styled.nav`
  width: 320px;
  height: 100vh;
  background: red;
  position: sticky;
  top: 0;
  left: 0;
`;
const SideNavInner = styled.ul``;
const SideNavItem = styled.li``;
