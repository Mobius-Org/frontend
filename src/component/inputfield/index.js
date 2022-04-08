import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const InputField = ({ type, placeholder, label }) => {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const inputRef = useRef();
  const errRef = useRef();

  const [value, setValue] = useState("");
  const [valid, setValid] = useState(null);
  const [userFocus, setUserFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (type === "password") {
      setValid(PWD_REGEX.test(e.target.value));
    }
    setValid(USER_REGEX.test(e.target.value));
  };
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <InputFieldWrapper>
      <Label htmlFor={label}>{label}:</Label>
      {type === "text" ? (
        <Input
          userFocus={userFocus}
          type={type}
          id={label}
          placeholder={placeholder}
          className={
            valid === null ? null : valid === true ? "valid" : "invalid"
          }
          ref={inputRef}
          autoComplete="off"
          onChange={handleChange}
          value={value}
          required
          aria-invalid={valid ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => {
            if (value === "") {
              setValid(null);
            }
            setUserFocus(false);
          }}
        />
      ) : (
        <Input
          type={type}
          ref={inputRef}
          id={label}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          required
          aria-invalid={valid ? "false" : "true"}
          aria-describedby="confirmnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => {
            if (value === "") {
              setValid(null);
            }
            setUserFocus(false);
          }}
        />
      )}
    </InputFieldWrapper>
  );
};

export default InputField;

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Label = styled.label`
  font-family: Nunito;
  font-style: Bold;
  font-size: 20px;
  line-height: 43px;
  color: rgba(12, 18, 28, 0.75);
`;
const Input = styled.input`
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;
  width: 100%;

  &.valid {
    color: limegreen;
    border: 1px solid limegreen !important;
  }

  &.invalid {
    color: red;
    border: 1px solid red !important;
  }
  &:focus {
    outline: none;
  }
`;
