import React from "react";
import { useNavigate } from "react-router-dom";
import { rafiki } from "../../assets";
import { EmptyItem } from "../../component";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../colors";
const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Main>
        <InnerWrap>
          <Container>
            <EmptyItem
              text="You Have missed your way"
              text2="Take Me Back to Home"
              src={rafiki}
              func={goHome}
            />
          </Container>
        </InnerWrap>
      </Main>
    </Wrapper>
  );
};

export { NotFound };

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
  height: 100vh;
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
const Container = styled.div`
  width: 100%;
  height: fit-content;
  // padding: 2rem;
  background: ${"inherit"};
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;
