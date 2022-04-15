import React from "react";
import { colors } from "../../colors";
import Button from "../button";
import {
  MickyContainer,
  MickeyWrapper,
  MickeyImageWrapper,
  MickyImg,
  MickeyTextWrapper,
  MickeyP,
  Mickey_H1,
  MickySpan,
  Mickey_H4,
} from "./InfoSection.elements";

const InfoSection4 = () => {
  return (
    <MickyContainer>
      <MickeyWrapper>
        <MickeyImageWrapper>
          <MickyImg src="../../images/mickey.svg" alt="" />
        </MickeyImageWrapper>

        <div>
          <Mickey_H1>
            Hey! i am <MickySpan>Mickey</MickySpan>
          </Mickey_H1>
          <MickeyTextWrapper>
            <MickeyP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              sint suscipit eligendi incidunt illum doloremque iure sed,
              voluptas quidem possimus quisquam maiores fugiat? Eligendi aliquam
              nesciunt saepe at fugit quidem.
            </MickeyP>

            <MickeyP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              sint suscipit eligendi incidunt illum doloremque iure sed,
              voluptas quidem possimus quisquam maiores fugiat? Eligendi aliquam
              nesciunt saepe at fugit quidem.
            </MickeyP>

            <Mickey_H4>See You in class friend</Mickey_H4>

            <Button
              text={"Learn with Mickey"}
              filled={false}
              bgColor={colors.secondary_color}
            />
          </MickeyTextWrapper>
        </div>
      </MickeyWrapper>
    </MickyContainer>
  );
};

export default InfoSection4;
