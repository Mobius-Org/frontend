import React from "react";
import styled from "styled-components";
import { colors } from "../../../../colors";
import { CourseCard } from "../../../../component";

const OurCourses = ({ text, data, func }) => {
  const courses = data;
  return (
    <Container>
      <OurProgramsWrapper>
        <SecHeading>
          <h2>{text}</h2>
        </SecHeading>
        <CoursesList>
          {courses?.map((course, index) => {
            const title = course?.courseName;
            const description = course?.description?.shortSummary;
            const price = course?.description?.price;
            const image = course?.description?.image;
            const studentEnrolled = course?.description?.studentEnrolled;
            const courseId = course?.courseId;
            return (
              <>
                <CourseCard
                  key={index++}
                  title={title}
                  description={description}
                  price={price}
                  image={image}
                  id={studentEnrolled}
                  courseId={courseId}
                  func={func}
                />
              </>
            );
          })}
        </CoursesList>
      </OurProgramsWrapper>
    </Container>
  );
};

export default OurCourses;
const Container = styled.div`
  width: 100%;
  height: fit-content;
  // padding: 2rem;
  background: ${"inherit"};
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;
const OurProgramsWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 95%;
    height: fit-content;
    flex-direction: column;
    gap: 2rem;
  }
`;
const SecHeading = styled.div`
  display: flex;
  // flex-direction: column;
  align-self: start;
  width: 100%;
  height: fit-content;
  padding: 1rem 0;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }

  & > h2 {
    align-items: center;
    font-family: Nunito;
    font-style: Bold;
    font-size: 36px;
    line-height: 19px;
    text-align: center;
    @media (max-width: 768px) {
      text-align: start;
    }
    span {
      align-items: center;
      font-family: Nunito;
      font-style: Bold;
      font-size: 36px;
      line-height: 19px;
      border-bottom: 4px solid ${colors.secondary80};
      @media (max-width: 768px) {
        font-size: 24px;
      }
    }
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;
const CoursesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 3rem;
  justify-content: start;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;
