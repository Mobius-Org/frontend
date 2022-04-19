import styled from "styled-components";
import { colors } from "../../colors";
export const FooterWrapper = styled.footer`
  background: ${colors.white};
  padding: 0;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.15);
  @media (max-width: 768px) {
    height: 80px;
  }
`;
export const FooterContainer = styled.div`
  transition: all 0.3s ease-in-out;
  background: inherit;
  max-width: 1400px;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }
  & > div:last-of-type {
    color: grey;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
export const IconsWrapper = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  li {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #f5f5f7;
    text-align: center;
    font-size: 35px;
    transition: all 0.3s ease-in-out;

    a {
      text-decoration: none;
      color: #4d504f;
    }
    &:hover {
      transition: all 0.3s ease-in-out;
      background: #4d504f;
      a {
        color: #f5f5f7;
      }
    }
  }
  @media (max-width: 768px) {
    width: 50%;
    gap: auto;
    li {
      font-size: 20px;
      width: 30px;
      height: 30px;
    }
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
  & > a > img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    :hover {
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      transform: scale(0.9);
    }
  }
`;
