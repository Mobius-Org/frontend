import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ButtonWrap, IconArrow, Icon, Loading } from "./style";
const Button = ({ src, dir, filled, bgColor, text, loadingState }) => {
  const Icon = src;
  return (
    <>
      <ButtonWrap dir={dir} filled={filled} bgColor={bgColor}>
        {loadingState === true ? (
          <ButtonWrap>
            <Loading></Loading>
          </ButtonWrap>
        ) : (
          <>
            {src && (
              <span>
                <Icon />
              </span>
            )}
            <p>{text}</p>
            <IconArrow>
              {dir === "left" ? (
                <AiOutlineArrowLeft />
              ) : (
                <AiOutlineArrowRight />
              )}
            </IconArrow>
          </>
        )}
      </ButtonWrap>
    </>
  );
};

export default Button;
