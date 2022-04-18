import React, { useState } from "react";
import { colors } from "../../colors";
import Button from "../../component/button";
import InputField from "../../component/inputfield";
import Modal from "../../component/modal";
import {
  CtaWrap,
  HeadingText,
  InputWrap,
  Wrap2,
  Wrapper,
} from "../forgotPassword/style";
import { ErrorMessage, InputWrapDiv } from "../signin/style";

const SetNewPassword = () => {
  const [showModal, SetShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  return (
    <Wrapper>
      <Modal
        showModal={showModal}
        SetShowModal={SetShowModal}
        children={<div>Hellow</div>}
      />
      <img src="images/kiddieDoddles.svg" alt="doddle" />

      <Wrap2>
        <HeadingText>Create new password</HeadingText>
        <InputWrap>
          <InputWrapDiv>
            <InputField
              type={"password"}
              labelId={"password"}
              label={"Create a new password"}
              placeholder={"Enter your password here ..."}
              functionName={setPassword}
              cValue={password}
              Validator={setPasswordError}
            />
            {passwordError === false && (
              <ErrorMessage errFor={"passWord"}>
                <p>Please enter a valid password:</p>
                <p>
                  password must contain atleast 1 uppercase, 1 lowercase and
                  must be 6 character long .
                </p>
              </ErrorMessage>
            )}
          </InputWrapDiv>
          <InputWrapDiv>
            <InputField
              type={"password"}
              labelId={"confirmPassword"}
              label={"Confirm new password"}
              placeholder={"Confirm your password here ..."}
              functionName={setConfirmPassword}
              cValue={confirmPassword}
              Validator={setConfirmPasswordError}
            />
            {confirmPasswordError === false && (
              <ErrorMessage errFor={"passWord"}>
                <p>Please enter a valid password:</p>
                <p>
                  password must contain atleast 1 uppercase, 1 lowercase and
                  must be 6 character long .
                </p>
              </ErrorMessage>
            )}
          </InputWrapDiv>
        </InputWrap>
        <CtaWrap>
          <span onClick={() => SetShowModal(!showModal)}>
            <Button bgColor={colors.secondary_color} text={"Reset Password"} />
          </span>
        </CtaWrap>
      </Wrap2>
    </Wrapper>
  );
};

export { SetNewPassword };
