import React, { useState } from "react";
import { colors } from "../../colors";
import Button from "../../component/button";
import InputField from "../../component/inputfield";
import Dropdown from "../../component/selectDropDown";
import { ImGoogle } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import mobiusApp from "../../api/mobiusApp";
import { toast } from "react-toastify";
import { handleSignUp } from "../../store/action";
import {
  SignUpWrapper,
  FirstWrap,
  HeadingText,
  InputWrap,
  CtaWrap,
  SecondWrap,
  SuccessScreen,
} from "./style";
const SignUp = () => {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loading, setLoading] = useState(false);

  // getting form inputs
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [favColor, setFavColor] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // making a request
  const handlesignup = async () => {
    try {
      const response = await mobiusApp.post("/auth/signUp", {
        name,
        age,
        favColor,
        email,
        password,
      });

      dispatch(handleSignUp(response?.data));
      console.log(response);

      toast.success(response?.data?.message);
      // navigate(from, { replace: true });
    } catch (err) {
      // console.log(err?.response);
      if (err.response?.status === 400) {
        toast.error(err?.response?.data?.message);
        setLoading(false);
      } else if (err.response?.status === 401) {
        toast.error("Unauthorized");
        setLoading(false);
      } else {
        toast.error(err?.response?.data?.message);
        setLoading(false);
      }
    }
  };

  //slider
  const [next, setNext] = useState(0);
  const handleNext = (num) => {
    setNext(num + next);
  };
  return (
    <SignUpWrapper next={next}>
      <img src="images/kiddieDoddles.svg" alt="doddle" />
      <FirstWrap next={next}>
        <HeadingText>Sign up</HeadingText>
        <InputWrap>
          <InputField
            type="text"
            label={"What is your name?"}
            placeholder={"Enter your name here ..."}
            labelId={"name"}
            functionName={setName}
            cValue={name}
          />
          <div>
            <Dropdown functionName={setAge} />
          </div>
          <InputField
            type="text"
            label={"What is your favourite color?"}
            placeholder={"Enter your favourite color here ..."}
            functionName={setFavColor}
            cValue={favColor}
          />
        </InputWrap>
        <CtaWrap>
          <span onClick={() => handleNext(1)}>
            <Button text={"Next"} bgColor={colors.secondary_color} />
          </span>
          <p>
            Already have an account? <Link to="/signin">Login here</Link>
          </p>
        </CtaWrap>
      </FirstWrap>
      <SecondWrap next={next}>
        <HeadingText>Finish setting up</HeadingText>
        <InputWrap>
          <InputField
            type={"email"}
            labelId={"email"}
            label={"What is your email address?"}
            placeholder={"Enter your email address here ..."}
            functionName={setEmail}
            cValue={email}
          />
          <InputField
            type={"password"}
            labelId={"password"}
            label={"Create a new password"}
            placeholder={"Enter your password here ..."}
            functionName={setPassword}
            cValue={password}
          />
        </InputWrap>
        <CtaWrap>
          <span onClick={() => handleNext(-1)}>
            <Button
              bgColor={colors.secondary_color}
              dir={"left"}
              text={"previous"}
              filled={true}
            />
          </span>
          <span onClick={handlesignup}>
            <Button bgColor={colors.secondary_color} text={"Sign up"} />
          </span>
        </CtaWrap>
        <CtaWrap>
          <span>
            <Button
              src={ImGoogle}
              bgColor={colors.secondary_color}
              filled={true}
              text={"Finish up with Google instead"}
            />
          </span>
        </CtaWrap>
      </SecondWrap>
      <SuccessScreen next={next}>
        <InputWrap next={next}>
          <img src="images/kidsdoodle3.svg" />
          <HeadingText>Congratulations!</HeadingText>
          <p>Hello, I’m Mickey and I am happy to welcome you to Mobius.</p>
          <Button
            text={`Take me to Dashboard`}
            bgColor={colors.secondary_color}
          />
        </InputWrap>
      </SuccessScreen>
    </SignUpWrapper>
  );
};

export { SignUp };
