import React, { useState } from "react";
import { colors } from "../../colors";
import { CtaWrap, HeadingText, InputWrap, Wrap, Wrapper } from "./style.js";
import { useLocation, useNavigate } from "react-router-dom";
import { ErrorMessage, InputWrapDiv } from "../signin/style";
import { Button, EmptyState, InputField, Modal } from "../../component";
import { EmailIcon, kiddles } from "../../assets";
// import { useSelector } from "react-redux";
import mobiusApp from "../../api/mobiusApp";
const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("No text Yet");
  const [loading, setLoading] = useState(false);

  // const { auth } = useSelector((state) => state);
  // const { token } = auth?.profile;
  const closeModal = () => {
    setShowModal(!showModal);
    navigate(from);
  };
  const handleBack = () => {
    navigate(`/signin`);
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      const response = await mobiusApp.patch("/auth/forgot-password", {
        email,
      });
      setResponseMessage(response?.data.message);
      setShowModal(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <Modal
        showModal={showModal}
        SetShowModal={setShowModal}
        children={
          <EmptyState
            text={responseMessage}
            src={EmailIcon}
            alt={"emailicon"}
            func={closeModal}
            text2="Close"
          />
        }
      />
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
            <Button
              bgColor={colors.secondary_color}
              text={"Reset Password"}
              loadingState={loading}
            />
          </span>
        </CtaWrap>
      </Wrap>
    </Wrapper>
  );
};

export { ForgotPassword };
