import React from "react";
import { Img, ImgWrapper,Span,InteractiveWrapper, H1 } from "./InfoSection.elements";

const InfoSection3 = () => {
  return (
    <div>
      <InteractiveWrapper>
        <H1>
          Our interative <Span>Games</Span>
        </H1>
      </InteractiveWrapper>
      <ImgWrapper>
        <Img src="../../images/boybackground.png" alt="boyBackground" />
      </ImgWrapper>
    </div>
  );
};

export default InfoSection3;
