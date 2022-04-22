import React, { useState } from "react";
import { colors } from "../../colors";
import { CtaWrap, HeadingText, InputWrap, Wrap, Wrapper } from "./style.js";
import { useLocation, useNavigate } from "react-router-dom";
import { ErrorMessage, InputWrapDiv } from "../signin/style";
import { Button, InputField, Modal } from "../../component";
import { kiddles } from "../../assets";
import { useSelector } from "react-redux";
import mobiusApp from "../../api/mobiusApp";
const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const { auth } = useSelector((state) => state);
  const { token } = auth?.profile;

  const handleBack = () => {
    console.log(location, token);
    navigate(`/signin`);
  };
  const handleSubmit = async (e) => {
    try {
      const response = await mobiusApp.patch("/auth/forgot-password", {
        email,
      });
      console.log(response);
    } catch (err) {}
  };
  return (
    <Wrapper>
      <Modal showModal={showModal} SetShowModal={setShowModal} />
      <img src={kiddles} alt="doddle" />
      <Wrap>
        <HeadingText>Forgotten Password</HeadingText>
        <InputWrap>
          <InputWrapDiv>
            <InputField
              type={"email"}
              labelId={"email"}
              label={"What is your email address?"}
              placeholder={"Enter your email address here ..."}
              functionName={setEmail}
              cValue={email}
              Validator={setEmailError}
            />
            {emailError === false && (
              <ErrorMessage>
                Please enter a valid email: something@gmail.com
              </ErrorMessage>
            )}
          </InputWrapDiv>
        </InputWrap>
        <CtaWrap>
          <span onClick={handleBack}>
            <Button
              dir={"left"}
              filled={true}
              bgColor={colors.secondary_color}
              text={"Previous"}
            />
          </span>
          <span
            onClick={handleSubmit}
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            <Button bgColor={colors.secondary_color} text={"Reset Password"} />
          </span>
        </CtaWrap>
      </Wrap>
    </Wrapper>
  );
};

export { ForgotPassword };
