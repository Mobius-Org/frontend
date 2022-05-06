import React, { useState } from "react";
import { logo } from "../../assets";
import "./style.css";
import { FaBell } from "react-icons/fa";
import data from "./data";
import {Profile} from '../profile'

const Admin = () => {
  //   const [data, setData] = useState(data);
  return (
    <div>
      <div className="admin">
        <div className="NavContainer">
          <div className="logo">
            <img src={logo} alt="Mobius Logo" />
          </div>
          <div>
            <h5 className="Content-Approval">Content Approval</h5>
            <div className="underline"></div>
          </div>
          <div>
            {/* <FaBell className="Bell-Icon" />
             */}

             <Profile />
          </div>
        </div>

        <div className="NameCont">
          <div className="Namebar">
            <div>Name</div>
            <div>Course</div>
            <div>Date</div>
            <div>Status</div>
          </div>
        </div>
        {data.map((item, index) => {
          const { name, status, data, course } = item;
          return (
            <div className="NameCont1" key={index}>
              <div className="Namebar1">
                <p>{name}</p>

                <p>{course}</p>

                <p>{data}</p>

                <p>{status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Admin };
