import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { colors } from "../../../../colors";
import { arrHl, heroBg, thinsmooth } from "../../../../assets";
import { Button } from "../../../../component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const state = useSelector((state) => state);
  const { sign_in } = state.auth ? state.auth : null;
  const navigate = useNavigate();
  return (
    <Container>
      <HeroWrapper>
        <HeroText>
          <AdText>Admission is ongoing!🚀</AdText>
          <Heading>
            Learning made easy and fun with interactive games and activities.
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            adipiscing nullam dapibus justo ac lectus eros facilisi. Arcu nisl,
            nisl venenatis ut velit habitasse mi placerat.
          </Paragraph>
          <BtnWrap
            onClick={() => {
              if (sign_in) {
                navigate("/dashboard");
              } else {
                navigate("/signup");
              }
            }}
          >
            {sign_in ? (
              <Button
                text={"Take Me to Dashboard"}
                bgColor={colors.secondary80}
              />
            ) : (
              <Button text={"Enroll Now"} bgColor={colors.secondary80} />
            )}
          </BtnWrap>
          <img src={arrHl} alt="arrH" id="arrH" />
          <img src={thinsmooth} alt="star" id="star" />
        </HeroText>
        <HeroImage>
          <ImageWrapper>
            <img src={heroBg} alt="hero" id="hero" />
          </ImageWrapper>
        </HeroImage>
      </HeroWrapper>
    </Container>
  );
};

export { Hero };
const Breathing = keyframes` 
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;
const Breathing2 = keyframes` 
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
  padding: 2rem;
  background: ${"#FaFcfe"};
  // Added the min width
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 100%;
    width: 100%;
  }
  //Added the min-width
  @media (min-width: 480px) and (max-width: 768px) {
    padding: 1.5rem 0;
    width: 100%;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    width: 100%;
  }
`;
const HeroWrapper = styled.div`
  max-width: 1400px;
  width: calc(100% - 2rem);
  height: 82vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
  @media (min-width: 300px) and (max-width: 768px) {
    width: 90%;
    height: fit-content;
    flex-direction: column;
    gap: 2rem;
  }
`;
const HeroText = styled.div`
  width: 55%;
  height: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2rem;

  & > img#arrH {
    width: 66%;
    position: absolute;
    top: 54%;
    left: 20%;
    animation: ${Breathing} 5s ease-out infinite normal;

    @media (min-width: 1200px) and (max-width: 1400px) {
      width: 75%;
      top: 60%;
      height: 60%;
    }
    @media (min-width: 480px) and (max-width: 900px) {
      width: 75%;
      top: 60%;
      height: 60%;
    }
  }
  & > img#star {
    // width: 80%;
    position: absolute;
    top: 88%;
    left: 90%;
    z-index: 1;
    animation: ${Breathing2} 5s ease-out infinite normal;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: fit-content;
    gap: 1rem;
    padding: 1rem 0;
    & > img {
      display: none;
    }
  }
`;
const AdText = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: rgba(89, 157, 255, 1);
  text-align: start;
`;
const Heading = styled.div`
  font-family: Nunito;
  font-weight: Bold;
  font-size: 48px;
  line-height: 65px;
  width: 90%;
  color: rgba(77, 80, 79, 1);
  text-align: start;
  @media (min-width: 1200px) and (max-width: 1400px) {
    font-size: 39px;
    margin-bottom: -20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 24px;
    line-height: 33px;
  }
  @media (max-width: 1200px) {
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
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;
const BtnWrap = styled.div`
  width: fit-content;
  z-index: 1;
`;
const HeroImage = styled.div`
  width: 45%;
  height: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 50vh;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto 0;
  position: relative;
  @media (max-width: 768px) {
    height: 46.4vh;
  }
  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
    left: 0;
    top: 10%;
    position: absolute;
    z-index: 3;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20%;
    width: 60%;
    height: 100%;
    background: #f1e34d;
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 9%;
    left: 12.5%;
    width: 75%;
    height: 80%;
    background: #599dff;
    z-index: 2;
  }
`;
