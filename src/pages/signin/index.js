import React, { useState } from "react";
import { colors } from "../../colors";

import { ImGoogle } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import mobiusApp from "../../api/mobiusApp";
import { handleSignIn } from "../../store/action";
import { useDispatch } from "react-redux";
import {
  CtaWrap,
  HeadingText,
  InputWrap,
  SignUpWrapper,
  Wrap,
  InputWrapDiv,
  ErrorMessage,
} from "./style";
import { motion } from "framer-motion";
import { kiddles } from "../../assets";
import { Button, InputField } from "../../component";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const [loading, setLoading] = useState(false);
  // getting input data
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  //fetching data
  const handleLogin = async () => {
    alert("clalled");
    if (email === "" || password === "") {
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      email === "" ? setEmailError(true) : setEmailError(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const response = await mobiusApp.post("/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      dispatch(handleSignIn(response?.data.user));
      setLoading(false);

      toast.success(response?.data?.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/dashboard");
    } catch (err) {
      console.log(err?.response);

      if (err.response?.status === 400) {
        toast.error(err?.response?.data?.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      } else if (err.response?.status === 401) {
        toast.error(err?.response?.data?.message, {
          position: "top-center",
          autoClose: 1000,
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
          autoClose: 1000,
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

  const [next] = useState(true);
  const handleNext = (num) => {};
  return (
    <SignUpWrapper
      as={motion.div}
      initial={{ opacity: 0.5, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: 200 }}
    >
      <img src={kiddles} alt="doddle" />
      <Wrap next={next}>
        <HeadingText>Sign in</HeadingText>
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
          <InputWrapDiv>
            <InputField
              type={"password"}
              labelId={"password"}
              label={"Enter password"}
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
          <span onClick={handleLogin}>
            <Button bgColor={colors.secondary_color} text={"Sign In"} />
          </span>
          <span style={{ alignSelf: "center" }}>
            <Button
              src={ImGoogle}
              bgColor={colors.secondary_color}
              filled={true}
              text={"Sign in with Google instead"}
              loadingState={loading}
            />
          </span>
        </CtaWrap>
        <CtaWrap>
          <span
            onClick={() => handleNext(1)}
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            <Link to="/auth/forgot-password"> Forgot Password?</Link>
          </span>
          <span
            onClick={() => handleNext(1)}
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            <Link to="/signup"> Don't have an account? Create</Link>
          </span>
        </CtaWrap>
      </Wrap>
    </SignUpWrapper>
  );
};

export { SignIn };
