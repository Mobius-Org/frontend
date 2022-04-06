import React from "react";
import Button from "../button/index";
import {
  Section1,
  TextWrapper_1,
  TextWrapper1_h1,
  TextWrapper1_p,
} from "./InfoSection.elements";
import { Button1 } from "../../global-styles";
import { colors } from "../../colors";

const InfoSection1 = () => {
  return (
    <div>
      <div>
        <Section1>
          <TextWrapper_1>
            <TextWrapper1_h1>Changing Our Learning Pattern</TextWrapper1_h1>
            <TextWrapper1_p>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Aenean adipiscing nullam dapibus
              <br /> justo ac lectus eros facilisi. Arcu nisl, nisl
              <br /> venenatis ut velit habitasse mi placerat.
            </TextWrapper1_p>
            <Button filled={false} bg={colors.secondary_color} />
          </TextWrapper_1>

          <div>
            <img src="../../images/girl1.png" alt="" />
          </div>
        </Section1>
      </div>
    </div>
  );
};

export default InfoSection1;
