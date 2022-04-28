import React from "react";
import styled from "styled-components";
// import { asset4, colorPaint, moneyP } from "../../../../assets";
import { colors } from "../../../../colors";
import { CourseCard } from "../../../../component";

const OurPrograms = ({ data }) => {
  const courses = data;
  return (
    <Container id="Courses">
      <OurProgramsWrapper>
        <SecHeading>
          <h2>
            Our <span>Programs</span>
          </h2>
          <p>
            We offer the following programs extentsively and working on more.
          </p>
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
                  key={index + 2}
                  title={title}
                  description={description}
                  price={price}
                  image={image}
                  id={studentEnrolled}
                  courseId={courseId}
                />
              </>
            );
          })}
        </CoursesList>
      </OurProgramsWrapper>
    </Container>
  );
};

export { OurPrograms };

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2rem;
  background: ${"#FaFcfe"};

  @media (min-width: 1200px) and (max-width: 1400px) {
    padding-top: 70px;
  }
  /* Added the min-width */
  @media (min-width: 480px)and(max-width: 768px) {
    padding: 1.5rem 0;
  }
`;
const OurProgramsWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 82vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1200px) and (max-width: 1400px) {
    margin-bottom: 2rem;
    padding-bottom: 50px;
  }
  @media (min-width: 400px) and (max-width: 768px) {
    width: 90%;
    height: fit-content;
    flex-direction: column;
    gap: 2rem;
  }
`;
const SecHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: fit-content;
  gap: 2rem;
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
  & > p {
    align-items: center;
    font-family: Nunito;
    font-style: regular;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: grey;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 16px;
      width: 100%;
      text-align: start;
    }
  }
`;
const CoursesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 2rem;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 90%;
    flex-direction: row;
  }
`;
