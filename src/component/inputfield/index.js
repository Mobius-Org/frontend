import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
const InputField = ({ type, placeholder, label, labelId }) => {
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
      <Label htmlFor={labelId}>{label}:</Label>
      {type === "text" ? (
        <Input
          userFocus={userFocus}
          type={type}
          id={labelId}
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
          id={labelId}
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
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: Nunito;
  font-weight: 700;
  font-size: 20px;
  color: ${colors.chinese_black};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Input = styled.input`
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  padding: 0.8rem 0.5rem;
  border-radius: 20px;
  width: 100%;
  border: 3px solid rgba(217, 217, 217, 1);
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  &.valid {
    color: ${colors.sucess_color};
    border: 3px solid ${colors.sucess_color} !important;
  }

  &.invalid {
    color: ${colors.error_color};
    border: 3px solid ${colors.error_color} !important;
  }
  &:hover {
    border: 3px solid ${colors.chinese_black};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
