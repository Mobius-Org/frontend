import React from "react";
import Button from "../../../../component/button/index";
import {
  Section1,
  TextWrapper_1,
  TextWrapper1_h1,
  TextWrapper1_p,
  TextWrapper_0,
  TextWrapper_img,
  Img_1,
  BtnCon,
} from "./InfoSection.elements";
import { Button1 } from "../../../../global-styles";
import { colors } from "../../../../colors";

const InfoSection1 = () => {
  return (
    <TextWrapper_0>
      <Section1>
        <TextWrapper_1>
          <TextWrapper1_h1>Changing Our Learning Pattern</TextWrapper1_h1>
          <TextWrapper1_p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            adipiscing nullam dapibus justo ac lectus eros facilisi. Arcu nisl,
            nisl venenatis ut velit habitasse mi placerat.
          </TextWrapper1_p>
          <BtnCon>
            <Button
              text={"Enroll Now"}
              bgColor={colors.secondary_color}
              filled={false}
            />
          </BtnCon>
        </TextWrapper_1>

        <TextWrapper_img>
          <Img_1 src="../../images/girl1.png" alt="girl1" />
        </TextWrapper_img>
      </Section1>
    </TextWrapper_0>
  );
};

export default InfoSection1;
