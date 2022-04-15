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

export default SideNav;

const SideNavWrapper = styled.nav``;
const SideNavInner = styled.ul``;
const SideNavItem = styled.li``;
