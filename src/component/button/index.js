import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ButtonWrap, IconArrow, Icon } from "./style";
const Button = ({ src, dir, filled, bgColor, text }) => {
  const Icon = src;
  return (
    <>
      <ButtonWrap dir={dir} filled={filled} bgColor={bgColor}>
        {src && (
          <span>
            <Icon />
          </span>
        )}
        <p>{text}</p>
        <IconArrow>
          {dir === "left" ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
        </IconArrow>
      </ButtonWrap>
    </>
  );
};

export default Button;
