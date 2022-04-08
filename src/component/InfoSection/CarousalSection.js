import React, { useState } from "react";
import { colors } from "../../colors";
import Button from "../button";
import "./carousal.css";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { Data } from "../Helpers/CarouselData";

const CarousalSection = () => {
  const [currVal, setCurrVal] = useState(0);

  const handleDecrease = () => {
    return currVal > 0 && setCurrVal(currVal - 1);
  };
  const handleIncrease = () => {
    return currVal < Data.length - 1 && setCurrVal(currVal + 1);
  };

  return (
    <div className="container">
      <div className="Wrapper">
        <MdSkipPrevious className="LeftDir" onClick={handleDecrease} />

        <div className="shadowBox">
          <img src={Data[currVal].img} alt="" className="MicImg" />
          <div className="literacy">
            <p>{Data[currVal].title}</p>
            <h3>{Data[currVal].price}</h3>
          </div>
          <div className="button">
            <Button
              text={Data[currVal].button}
              bgColor={colors.secondary_color}
              filled={false}
            />
          </div>
        </div>

        <div className="ParaContainer">
          <h2 className="h2">{Data[currVal].topic}</h2>
          <p className="para">
            {Data[currVal].Para}
          </p>
        </div>

        <MdSkipNext className="rightDir" onClick={handleIncrease} />
      </div>
    </div>
  );
};

export default CarousalSection;
