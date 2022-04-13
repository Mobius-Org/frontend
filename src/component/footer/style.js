import styled from "styled-components";
import { colors } from "../../colors";
export const FooterWrapper = styled.footer`
  background: linear-gradient(101.08deg, #810486 0.51%, #810486 97.37%);
  padding: 0;
  transition: all 0.3s ease-in-out;
  /* background-color: black; */
  @media (max-width: 768px) {
    height: 80px;
  }
`;
export const FooterContainer = styled.div`
  transition: all 0.3s ease-in-out;
  /* background-color: black; */
  background: linear-gradient(101.08deg, #810486 0.51%, #810486 97.37%);
  max-width: 1200px;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
  & > div:last-of-type {
    color: #d9dbe1;
  }
`;

export const Logo = styled.a`
  width: 150px;
  height: 63px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 100px;
    height: 50px;
    transition: all 0.3s ease-in-out;
  }
  & > img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
  }
`;
