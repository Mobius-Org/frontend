import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ButtonWrap, IconArrow, Icon } from "./style";
const Button = ({ src, dir, filled, bgColor }) => {
  return (
    <>
      <ButtonWrap dir={dir} filled={filled} bgColor={bgColor}>
        {src && <Icon src={src} alt={"icon"} />}
        <p>Button</p>
        <IconArrow>
          {dir === "left" ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
        </IconArrow>
      </ButtonWrap>
    </>
  );
};

export default Button;
