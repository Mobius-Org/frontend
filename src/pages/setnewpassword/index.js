import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import mobiusApp from "../../api/mobiusApp";
import { kiddles } from "../../assets";
import { colors } from "../../colors";
import { Button, InputField, Modal } from "../../component";

import {
  CtaWrap,
  HeadingText,
  InputWrap,
  Wrap2,
  Wrapper,
} from "../forgotpassword/style";

import { ErrorMessage, InputWrapDiv } from "../signin/style";

const SetNewPassword = () => {
  const [showModal, SetShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const { token } = useParams();
  // alert(token);

  const handleSubmit = async (e) => {
    if (password !== confirmPassword) {
      toast.error("password must Match", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    try {
      const response = await mobiusApp.patch(`/auth/reset-password/${token}`, {
        password,
      });
      toast.success(response?.data.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <Wrapper>
      <Modal
        showModal={showModal}
        SetShowModal={SetShowModal}
        children={<div>Hellow</div>}
      />
      <img src={kiddles} alt="doddle" />

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
          <span onClick={handleSubmit}>
            <Button bgColor={colors.secondary_color} text={"Reset Password"} />
          </span>
        </CtaWrap>
      </Wrap2>
    </Wrapper>
  );
};

export { SetNewPassword };
