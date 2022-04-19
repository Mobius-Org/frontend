import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { colors } from "../../../../colors";
import { motion } from "framer-motion";
import {
  boyH,
  gilPaint,
  girlPic,
  groupPic1,
  smallGirl,
  sTk,
} from "../../../../assets";
import { Button } from "../../../../component";
const KidAdvert = () => {
  return (
    <KidAdvertWrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <KidAdvertWrapperInner>
        <KidAdvertWrapperInnerImage>
          <ImageWrapper>
            <img src={groupPic1} alt="" />
          </ImageWrapper>
          <ImageWrapper1>
            <img src={smallGirl} alt="" />
          </ImageWrapper1>
          <ImageWrapper2>
            <img src={boyH} alt="" />
          </ImageWrapper2>
          <ImageWrapper3>
            <img src={sTk} alt="" />
          </ImageWrapper3>
          <ImageWrapper4>
            <img src={gilPaint} alt="" />
          </ImageWrapper4>
          <ImageWrapper5>
            <img src={girlPic} alt="" />
          </ImageWrapper5>
        </KidAdvertWrapperInnerImage>
        <KidAdvertWrapperInnerText>
          <Heading>Best place to entrust your children’s education</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            adipiscing nullam dapibus justo ac lectus eros facilisi. Arcu nisl,
            nisl venenatis ut velit habitasse mi placerat.
          </Paragraph>
          <BtnWrap>
            <Button text={"Enroll Now"} bgColor={colors.secondary80} />
          </BtnWrap>
        </KidAdvertWrapperInnerText>
      </KidAdvertWrapperInner>
    </KidAdvertWrapper>
  );
};

export { KidAdvert };
export const Spinner = keyframes`
   25%{
      transform: rotate(90deg);
       border-top-color: ${colors.secondary80};
    }
  
      50% {
      transform: rotate(180deg);
        border-left-color: ${colors.accent80};
    }
    75%{
         transform: rotate(270deg);
         border-bottom-color: ${"#9fe0cc"};
    }
    
      100% {
      transform: rotate(360deg);
        border-right-color: ${"#5396ba"};
    }
`;
const Breathing = keyframes` 
  0% {
    -webkit-transform: scale(0.97);
    -ms-transform: scale(0.97);
    transform: scale(0.97);
  }

  25% {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
   
  }

  60% {
    -webkit-transform: scale(0.97);
    -ms-transform: scale(0.97);
    transform: scale(0.97);
  }

  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
`;
const KidAdvertWrapper = styled(motion.div)`
  width: 100%;
  height: fit-content;
  padding: 2rem;
  background: ${colors.secondary20};
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;
const KidAdvertWrapperInner = styled.div`
  height: 70vh;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 90%;
  }
`;

const KidAdvertWrapperInnerText = styled.div`
  width: 60%;
  height: 70%;
  margin: auto 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    gap: 1rem;
    padding: 1rem 0;
  }
`;
const KidAdvertWrapperInnerImage = styled.div`
  width: 35%;
  height: 90%;
  margin: auto 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  position: relative;
  gap: 1rem;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 50vh;
    // border: 1px solid red;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const Heading = styled.div`
  font-family: Nunito;
  font-weight: Bold;
  font-size: 48px;
  line-height: 65px;
  width: 68%;
  text-align: start;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 24px;
    line-height: 33px;
  }
`;
const Paragraph = styled.div`
  font-family: Nunito;
  font-style: Regular;
  font-size: 20px;
  line-height: 38px;
  text-align: start;
  width: 90%;
  color: grey;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;
const BtnWrap = styled.div`
  width: fit-content;
`;

const ImageWrapper1 = styled.div`
  width: 236px;
  height: 236px;
  border-radius: 40px;
  background: #9fe0cc;
  margin: auto;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  & img {
    width: 90%;
    height: 90%;
    object-fit: contain;
    margin: 0 auto;
    margin-top: 10%;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    z-index: 15;
    transform: scale(1.1);
    & img {
      transition: all 0.3s ease-in-out;
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const ImageWrapper2 = styled.div`
  width: 236px;
  height: 236px;
  border-radius: 100px 0 100px 0;
  background: #5396ba;
  margin: auto;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  & img {
    width: 85%;
    height: 90%;
    object-fit: contain;
    margin: 0 auto;
    margin-top: 20%;
    margin-left: 10%;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    z-index: 15;
    transform: scale(1.1);
    & img {
      transition: all 0.3s ease-in-out;
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const ImageWrapper3 = styled.div`
  width: 236px;
  height: 236px;
  border-radius: 100px 0 100px 0;

  background: #5396ba;
  margin: auto;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  & img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    margin: 0 auto;
    margin-top: 20%;
    margin-right: 25%;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    z-index: 15;
    transform: scale(1.1);
    & img {
      transition: all 0.3s ease-in-out;
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const ImageWrapper4 = styled.div`
  width: 236px;
  height: 236px;
  border-radius: 40px;
  background: #f4c556;
  margin: auto;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  & img {
    width: 90%;
    height: 90%;
    object-fit: contain;
    margin: 0 auto;
    margin-top: 20%;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    z-index: 15;
    transform: scale(1.1);
    & img {
      transition: all 0.3s ease-in-out;
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageWrapper5 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 236px;
  height: 236px;
  border-radius: 50%;
  z-index: 10;
  background: #fff;
  border: 4px solid transparent;
  animation: ${Spinner} 1.3s ease-in-out infinite;

  transform: translate(-50%, -50%) !important;

  & img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: contain;
    animation: ${Breathing} 4s ease-in-out infinite;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    width: 256px;
    height: 256px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
