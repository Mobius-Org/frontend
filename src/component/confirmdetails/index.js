import React from "react";
// import styled from "styled-components";
import "./style.css";
import { Button } from "../button";
import { colors } from "../../colors";

const ConfirmDetails = () => {
  return (
    <div className="confirmWrapper">
      <div className="confirmContainer">
        <div className="confirm">
          <h2>Confirm Details</h2>
        </div>

        <table>
          <tr>
            <td>Name</td>
            <td>Bell Nweke</td>
          </tr>

          <tr>
            <td>Email Address</td>
            <td>Bell.nweke@gmail.com</td>
          </tr>

          <tr>
            <td>Phone Number</td>
            <td>+234903234567</td>
          </tr>
          <tr>
            <td>Course Amount</td>
            <td>#2000</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>06/05/2022</td>
          </tr>
          <tr>
            <td>
              <div className="btn-cont">
                {" "}
                <Button
                  text="cancel"
                  dir={"left"}
                  filled={false}
                  bgColor={colors.secondary_color}
                />
              </div>
            </td>
            <td>
              <div className="btn-cont1">
                <Button
                  text="right"
                  dir={"Proceed"}
                  filled={false}
                  bgColor={colors.secondary_color}
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export { ConfirmDetails };

{
  /* <div className="confirm">
          <h5>Name</h5>
          <p>Bell</p>
        </div>
        <div className="confirm">
          <p>Email Address</p>
          <p>Bell.nweke@gmail.com</p>
        </div>
        <div className="confirm">
          <p>Phone Number</p>
          <p>+234903234567</p>
        </div>
        <div className="confirm">
          <p>Course Amount</p>
          <p>#2000</p>
        </div>
        <div className="confirm">
          <p>Date</p>
          <p>06/05/2022</p>
        </div>
        <div className="confirm">
          <button>Cancel</button>
          <button>Proceed</button>
        </div> */
}
