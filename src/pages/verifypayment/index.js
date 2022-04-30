import React, { useState } from "react";
import { colors } from "../../colors";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { SignUpWrapper, Wrap } from "./style";
import { motion } from "framer-motion";
import { Button } from "../../component";
import { ps, pe } from "../../assets";
const VerifyApp = () => {
  const { status } = useParams();
  const navigate = useNavigate();
  const [next] = useState(true);
  return (
    <SignUpWrapper
      as={motion.div}
      initial={{ opacity: 0.5, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: 200 }}
    >
      <Wrap next={next}>
        <InfoWrap>
          <div className="imgWrap">
            <img src={status === "success" ? ps : pe} alt="status icon" />
          </div>
          {status === "success" ? (
            <h1>Enrollment Successful</h1>
          ) : status === "failure-1" ? (
            <h1>Enrollment Failed</h1>
          ) : (
            <h1>Something Went Wrong</h1>
          )}
          {status === "success" ? (
            <p>Thank you for purchasing. Your payment was successful.</p>
          ) : status === "failure-1" ? (
            <p>Please try again. Your payment was Unsuccessful.</p>
          ) : (
            <p>Please check back later, while we try to fix the error. </p>
          )}
          <div className="btnWrap">
            {status === "success" ? (
              <span onClick={() => navigate("/dashboard/myCourses")}>
                {" "}
                <Button
                  text={"Take Me To Dashboard"}
                  bgColor={colors.secondary80}
                />
              </span>
            ) : (
              <span
                onClick={() =>
                  navigate(`/courseDetails/${localStorage.getItem("courseId")}`)
                }
              >
                {" "}
                <BTn>Try again</BTn>
              </span>
            )}
          </div>
        </InfoWrap>
      </Wrap>
    </SignUpWrapper>
  );
};

export { VerifyApp };
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 90%;
  & .imgWrap {
    height: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  & .btnWrap {
    width: fit-content;
  }
  h1 {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  p {
    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
    }
  }
`;
const BTn = styled.button`
  width: 10px 30px;
  background-color: ${colors.secondary80};
  align-items: center;
  color: #fff;
  padding: 15px 2rem;
  border-radius: 24px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;
  &:hover {
    background-color: ${colors.white};
    color: ${colors.secondary80};
    border: 1px solid ${colors.secondary80};
    transition: all 0.3s ease-in-out;
  }
`;
