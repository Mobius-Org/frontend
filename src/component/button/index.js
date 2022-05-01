import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ButtonWrap, IconArrow, Loading } from "./style";
const Button = ({ src, dir, filled, bgColor, text, loadingState }) => {
  const Icon = src;
  return (
    <>
      <ButtonWrap dir={dir} filled={filled} bgColor={bgColor}>
        {loadingState === true ? (
          <Loading></Loading>
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

export { Button };
