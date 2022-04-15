import React, { useState } from "react";
import { colors } from "../../colors";
import Button from "../../component/button";
import InputField from "../../component/inputfield";
import { ImGoogle } from "react-icons/im";
import { CtaWrap, HeadingText, InputWrap, Wrap, Wrap2, Wrapper } from "./style";
const ForgotPassword = () => {
  const [next, setNext] = useState(0);
  const handleNext = (num) => {
    if (next === 0 && num === -1) return;
    if (next === 1 && num === 1) return;
    setNext(num + next);
  };
  return (
    <Wrapper>
      <img src="images/kiddieDoddles.svg" alt="doddle" />
      <Wrap next={next}>
        <HeadingText>Forgotten Password</HeadingText>
        <InputWrap>
          <InputField
            type={"email"}
            labelId={"email"}
            label={"What is your email address??"}
            placeholder={"Enter your email address here ..."}
          />
        </InputWrap>
        <CtaWrap>
          <span onClick={() => handleNext(-1)}>
            <Button
              dir={"left"}
              filled={true}
              bgColor={colors.secondary_color}
              text={"Previous"}
            />
          </span>
          <span
            onClick={() => handleNext(1)}
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            <Button bgColor={colors.secondary_color} text={"Reset Password"} />
          </span>
        </CtaWrap>
      </Wrap>
      <Wrap2 next={next}>
        <HeadingText>Create new password</HeadingText>
        <InputWrap>
          <InputField
            type={"password"}
            labelId={"password"}
            label={"What is your new password?"}
            placeholder={"Enter your new password here ..."}
          />
          <InputField
            type={"password"}
            labelId={"cpassword"}
            label={"Re-enter your password again"}
            placeholder={"Enter your password here ..."}
          />
        </InputWrap>
        <CtaWrap>
          <span onClick={() => handleNext(1)}>
            <Button bgColor={colors.secondary_color} text={"Reset Password"} />
          </span>
        </CtaWrap>
      </Wrap2>
    </Wrapper>
  );
};

export { ForgotPassword };
