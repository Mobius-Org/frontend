import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { motion } from "framer-motion";
import { Nav } from "../../component";

const DashBoardLayout = ({ children }) => {
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Nav />
      <InnerWrap>
        <Main>{children}</Main>
      </InnerWrap>
    </Wrapper>
  );
};

export { DashBoardLayout };

const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 1600px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Main = styled.main`
  height: fit-content;
  width: 100%;
  background: ${colors.white};
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
  @media (max-width: 768px) {
  }
`;

const InnerWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  flex-direction: column;
  margin: 0 auto;
  gap: 2rem;
`;
