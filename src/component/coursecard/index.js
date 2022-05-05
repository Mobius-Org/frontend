import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../colors";
import { Button } from "../button";
const CourseCard = ({ title, description, price, image, id, courseId }) => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { profile } = state?.auth;
  const _id = profile?._id;

  return (
    <Card>
      <CourseThumbNail>
        <img src={image} alt="course" />
      </CourseThumbNail>
      <CourseInfo>
        <CourseTitle>{title}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
        <CoursePriceCta>
          <CoursePrice>
            {price === "Free" ? price : <span>&#8358;{price}</span>}
          </CoursePrice>
          <CourseCta>
            {id?.includes(_id) ? (
              <span
                onClick={() => {
                  navigate(`/dashboard/myCourses/viewCourse/${courseId}`);
                  localStorage.setItem("courseId", courseId);
                }}
              >
                <Button text={`View Course`} bgColor={colors.secondary80} />
              </span>
            ) : (
              <span
                onClick={() => {
                  navigate(`/courseDetails/${courseId}`);
                  localStorage.setItem("courseId", courseId);
                }}
              >
                <Button text={"Enroll Now"} bgColor={colors.secondary80} />
              </span>
            )}
          </CourseCta>
        </CoursePriceCta>
      </CourseInfo>
    </Card>
  );
};

export { CourseCard };

const Card = styled.div`
  width: 415px;
  height: 443px;
  border-radius: 11.38px;
  background: ${colors.white};
  box-shadow: 0px 1px 5px ${colors.secondary20};
  @media (min-width: 250px) and (max-width: 480px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 480px) and (max-width: 600px) {
    max-width: 80%;
    margin: auto;
  }
  @media (min-width: 601px) and (max-width: 650px) {
    max-width: 80%;
    margin: auto;
  }

  @media (min-width: 651px) and (max-width: 750px) {
    max-width: 70%;
    width: 70%;
    margin: auto;
  }
  @media (min-width: 751px) and (max-width: 899px) {
    max-width: 45%;
  }
`;
const CourseThumbNail = styled.div`
  height: 244.73px;
  border-radius: 11.38px 11.38px 0 0;
  background: ${colors.secondary20};
  width: 100%;
  & img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
    @media (min-width: 769px) and (max-width: 1024px) {
      /* max-width: 100%;
      width: 100%; */
      /* height: px; */
    }
  }
`;
const CourseInfo = styled.div`
  height: calc(100% - 244.73px);
  width: 100%;
  border-radius: 0 0 11.38px 11.38px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
  }
`;
const CourseTitle = styled.h3`
  width: 90%;
  margin: 0 auto;
  text-align: start;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
  }
`;
const CourseDescription = styled.p`
  font-family: Nunito;
  font-style: Regular;
  font-size: 16px;
  line-height: 23px;
  text-align: start;
  width: 90%;
  height: 50px;
  overflow: hidden;
  margin: 0 auto;
  color: grey;
  z-index: 1;
  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
  }
`;
const CoursePriceCta = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 90%;
  justify-content: space-between;
`;
const CoursePrice = styled.span`
  font-weight: 700;
  font-size: 25px;
  font-family: Nunito;
  font-style: Bold;
  line-height: 19px;
  @media screen and (max-width: 768px) {
  }
  font-size: 16px;
`;

const CourseCta = styled.div`
  width: fit-content;
  @media (min-width: 769px) and (max-width: 900px) {
    width: 70%;
    height: 50%;
  }
`;
