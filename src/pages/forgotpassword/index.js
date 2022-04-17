import React, { useState } from "react";
import { colors } from "../../colors";
import Button from "../../component/button";
import InputField from "../../component/inputfield";
import { ImGoogle } from "react-icons/im";
import { CtaWrap, HeadingText, InputWrap, Wrap, Wrap2, Wrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [next, setNext] = useState(0);
  const handleNext = () => {
    console.log(location);
    navigate(`/signin`);
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
            onClick={handleNext}
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
