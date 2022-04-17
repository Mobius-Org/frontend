import React from "react";
import Nav from "../../component/Navbar";
import SideNav from "../../pages/dashboard/components/sidenav";
import { TopNav } from "../../pages/dashboard/components/topnav";
import styled from "styled-components";

const DashBoardLayout = ({ children }) => {
  return (
    <Wrapper>
      <TopNav />
      <SideNav />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export { DashBoardLayout };

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: fit-content;
`;
const Main = styled.main`
  border: 1px solid red;
  margin-left: 270px;
`;
