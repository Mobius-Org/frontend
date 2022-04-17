import React from "react";
import styled from "styled-components";
import { SideNav, TopNav } from "../../pages/dashboard";

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
   width: min-width(100opx, 100%);
  height: fit-content;
  margin: 0 auto;
  border
  display: flex;
`;
const Main = styled.main`
  margin-left: 320px;
`;
