import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    * {
        margin: 0;
        font-size: 16px;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
    &::-webkit-scrollbar {
        background-color: ${colors.secondary20};
        
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${colors.secondary_color};
        border-radius: 15px;
        box-shadow:  0 15px 6px ${colors.secondary20};
        cursor: pointer;
    }
    h1, h2, h3, h4, h5, h6 {
        color: ${colors.secondary_text_color};
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }


    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1.2rem;
    }

    h5 {
        font-size: 1rem;
    }

    h6 {
        font-size: 0.85rem;
    }

    p {
        font-size: 1rem;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button1 = styled.button`
  border-radius: 15px;
  background: ${({ primary }) => (primary ? "#fff" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  /* border-bottom-right-radius: 40px;
  border-top-right-radius: 40px; */

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;