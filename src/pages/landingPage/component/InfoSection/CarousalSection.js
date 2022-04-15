import React, { useState } from "react";
import { colors } from "../../../../colors";
import Button from "../../../../component/button";
import "./carousal.css";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { Data } from "../Helpers/CarouselData";
import styled from "styled-components";

const CarousalSection = () => {
  const [currVal, setCurrVal] = useState(0);

  const handleDecrease = () => {
    return currVal > 0 && setCurrVal(currVal - 1);
  };
  const handleIncrease = () => {
    return currVal < Data.length - 1 && setCurrVal(currVal + 1);
  };

  return (
    <Container>
      <div className="Wrapper">
        <div className="LeftDir">
          {(currVal === 1 || currVal === Data.length - 1) && (
            <MdSkipPrevious onClick={handleDecrease} className="left" />
          )}
        </div>

        <div className="center">
          <div className="courseName">
            <h1>
              Our <span className="course">Courses</span>
            </h1>
          </div>

          <div className="Flex">
            <img src={Data[currVal].img} className="imgSize" />
            <div classsName="paraCon">
              <h3 className="literacy">{Data[currVal].title}</h3>
              <p className="literacy_P">{Data[currVal].Para}</p>
              <div className="smallFlex">
                <h3 className="price">NGN: {Data[currVal].price}</h3>
                <div className="button">
                  <Button
                    text={Data[currVal].button}
                    bgColor={colors.secondary_color}
                    filled={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rightDir">
          <MdSkipNext onClick={handleIncrease} className="right" />
        </div>
      </div>
    </Container>
  );
};

export default CarousalSection;
const Container = styled.div`
  background-image: url("images/CourseBg.png");
`;

{
  /* <div className="shadowBox">
          <h2 className="h2">{Data[currVal].topic}</h2>
          <img src={Data[currVal].img} alt="" className="MicImg" />
          <div className="literacy"></div>
        </div>

        <div className="ParaContainer">
          <h3>{Data[currVal].title}</h3>
          <p className="para">{Data[currVal].Para}</p>
          <h3>NGN {Data[currVal].price}</h3>
          <div className="button">
            <Button
              text={Data[currVal].button}
              bgColor={colors.secondary_color}
              filled={false}
            />
          </div>
        </div> */
}
