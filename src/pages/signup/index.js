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
  ErrorMessage,
  InputWrapDiv,
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
  const [nameError, setNameError] = useState(false);
  const [age, setAge] = useState(null);
  const [favColor, setFavColor] = useState("");
  const [favColorError, setFavColorError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  // making a request
  const handlesignup = async () => {
    if (
      name === "" ||
      age === null ||
      favColor === "" ||
      email === "" ||
      password === ""
    ) {
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      name === "" ? setNameError(true) : setNameError(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const response = await mobiusApp.post("/auth/signUp", {
        name,
        age,
        favColor,
        email,
        password,
      });

      dispatch(handleSignUp(response?.data));
      setLoading(false);

      toast.success(response?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleNext(1);
      // navigate(from, { replace: true });
    } catch (err) {
      // console.log(err?.response);
      if (err.response?.status === 400) {
        toast.error(err?.response?.data?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      } else if (err.response?.status === 401) {
        toast.error("Unauthorized", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      } else {
        toast.error(err?.response?.data?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
          <InputWrapDiv>
            <InputField
              type="text"
              label={"What is your name?"}
              placeholder={"Enter your name here ..."}
              labelId={"name"}
              functionName={setName}
              Validator={setNameError}
            />
            {nameError === false && (
              <ErrorMessage>
                Please enter a valid name : john Nweke
              </ErrorMessage>
            )}
          </InputWrapDiv>
          <InputWrapDiv>
            <Dropdown functionName={setAge} />
          </InputWrapDiv>
          <InputWrapDiv>
            <InputField
              type="text"
              label={"What is your favourite color?"}
              placeholder={"Enter your favourite color here ..."}
              functionName={setFavColor}
              cValue={favColor}
              Validator={setFavColorError}
            />
            {favColorError === false && (
              <ErrorMessage>Please enter a your favourite : green</ErrorMessage>
            )}
          </InputWrapDiv>
        </InputWrap>
        <CtaWrap>
          <span className="first" onClick={() => handleNext(1)}>
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
        </InputWrap>
        <CtaWrap>
          <span className="first" onClick={() => handleNext(-1)}>
            <Button
              bgColor={colors.secondary_color}
              dir={"left"}
              text={"previous"}
              filled={true}
            />
          </span>
          <span className="first" onClick={handlesignup}>
            <Button
              loadingState={loading}
              bgColor={colors.secondary_color}
              text={"Sign up"}
            />
          </span>
        </CtaWrap>
        <CtaWrap>
          <span className="last">
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
        </InputWrap>
        <CtaWrap>
          <span className="success" onClick={() => navigate("/dashboard")}>
            <Button
              text={`Take me to Dashboard`}
              bgColor={colors.secondary_color}
            />
          </span>
        </CtaWrap>
      </SuccessScreen>
    </SignUpWrapper>
  );
};

export { SignUp };
