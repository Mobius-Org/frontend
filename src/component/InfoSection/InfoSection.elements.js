import styled from "styled-components";
// import { Button1 } from "../../global-styles";

//=============== Infosection3 =========================
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  width: 70%;
  vertical-align: middle;
  display: inline-block;
  max-height: 550px;
  padding-top: 20px;
  max-width: 100%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ImgWrapper = styled.div``;
export const Span = styled.span`
  background-color: orange;
  font-size: 42px;
  color: #fff;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const InteractiveWrapper = styled.div`
  padding-top: 20px;
`;

export const H1 = styled.h1`
  color: #810486;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

// ======================Section1 ===============
export const TextWrapper_0 = styled.div`
  background-color: #810486;
  opacity: 0.95;
  background-image: url("../../images/Frame.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: auto;
  padding-bottom: 70px;
`;

export const Section1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    height: fit-content !important;
    flex-flow: column-reverse;
    justify-content: unset;

    padding: 1rem 0;
  }
`;

export const TextWrapper_1 = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: justify;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextWrapper1_h1 = styled.h1`
  font-size: 42px;
  padding-bottom: 40px;
  font-weight: 800;
  line-height: 44px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: unset;
    display: flex;
  }
`;

export const TextWrapper1_p = styled.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 43px;
  padding-bottom: 40px;
  color: #fff;
  @media (max-width: 768px) {
    line-height: normal;
    font-size: 15px;
    width: 100%;
  }
`;

export const TextWrapper_img = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    display: block;
  }
`;

export const Img_1 = styled.img`
  width: 100%;
  display: inline-block;
  @media (max-width: 768px) {
  }
`;

//================ Mickey Section ==============

export const MickyContainer = styled.div`
  background-image: url("../../images/MickyBg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 20px;
`;

export const MickeyWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: justify;
  margin-left: 20%;
  margin-right: 20%;
  padding-top: 8%;
  padding-bottom: 5%;
`;

export const MickeyImageWrapper = styled.div`
  width: 50%;
`;

export const MickyImg = styled.img`
  height: 500px;
`;

export const MickeyTextWrapper = styled.div`
  padding-left: 20%;
  padding-top: 5%;
`;

export const MickeyP = styled.p`
  line-height: 35px;
  padding-bottom: 5%;
  font-weight: 600;
  padding-right: 30px;
  color: #0c121c;
`;

export const Mickey_H1 = styled.h1`
  font-weight: 800;
  margin-top: -40px;
  padding-top: -20px;
  color: #810486;
`;

export const MickySpan = styled.span`
  color: #fff;
  font-size: 42px;
  font-weight: 800;
  background-color: #ffa500;
  padding: 10px;
  border-radius: 10px;
`;

export const Mickey_H4 = styled.h4`
  padding-bottom: 5%;
  color: #0c121c;
`;

//============InfoSection5 ================

export const UpdateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  margin: 0 auto;
  height: 30vw;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20%;
  }
`;

export const Update1 = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 20px;
  }
`;

export const Updateh3 = styled.h3`
  font-size: 32px;
  font-weight: 800;
  color: purple;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 15px;
    padding-top: -20px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    padding-right: 20px;
  }
`;

export const Form = styled.div`
  border: 2px solid #00b7ab;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    margin: 0 auto;
    border: none;
    flex-direction: column;
    gap: 5px;
    margin-top: -20px;
  }
`;

export const FormInput = styled.input`
  outline: none;
  border: 2px solid #00b7ab;
  margin-right: 5px;
  @media (max-width: 768px) {
    margin-left: -5px;
    width: 100%;
  }
`;

export const ButtonCon = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 5px;
`;
