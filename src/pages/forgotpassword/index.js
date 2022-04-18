import React, { useState } from "react";
import { colors } from "../../colors";
import Button from "../../component/button";
import InputField from "../../component/inputfield";
import { ImGoogle } from "react-icons/im";
import { CtaWrap, HeadingText, InputWrap, Wrap, Wrap2, Wrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { ErrorMessage, InputWrapDiv } from "../signin/style";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  const handleBack = () => {
    console.log(location);
    navigate(`/signin`);
  };
  const handleSubmit = (e) => {};
  return (
    <Wrapper>
      <img src="images/kiddieDoddles.svg" alt="doddle" />
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
                Please enter a valid email: obinna@gmail.com
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
