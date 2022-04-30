import styled from "styled-components";
import { colors } from "../../colors";
import { motion } from "framer-motion";
import { patternLogin } from "../../assets";
export const SignUpWrapper = styled(motion.div)`
  background-image: url(${patternLogin});
  background-size: contain;
  padding: 0;
  transition: all 0.3s ease-in-out;
  height: calc(110vh - 166px);
  padding: 1.5rem 1rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  & > img {
    position: absolute;
    height: 30rem;
    left: 10.5%;
    bottom: 0%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    @media (max-width: 1150px) {
      transition: all 0.3s ease-in-out;
      bottom: -100%;
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    height: fit-content;
  }
`;

export const Wrap = styled.div`
  transition: all 0.3s ease-in-out;
  background-color: ${colors.white};
  box-shadow: 0px 2.6501548290252686px 53.00309753417969px 0px
    rgba(0, 0, 0, 0.37);
  max-width: 1200px;
  width: 50%;
  height: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap !important;
  padding: 30px 20px;
  border-radius: 20px;

  opacity: 1;
  @media (max-width: 768px) {
    transition: all 0.3s ease-in-out;
    height: max-content;
    width: 100%;
    border-radius: 0;
  }
`;
