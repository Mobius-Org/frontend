import React from "react";
import styled from "styled-components";
import { asset4, colorPaint, moneyP } from "../../../../assets";
import { colors } from "../../../../colors";
import { CourseCard } from "../../../../component";

const OurPrograms = () => {
  const courses = [
    {
      title: "Arithmetic",
      description:
        "Learn Basic operations of math, which are addition, subtraction, multiplication and division.  ",
      price: 3000,
      image: asset4,
    },
    {
      title: "Know Your Colors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  .",
      price: 1000,
      image: colorPaint,
    },
    {
      title: "Learn Money",
      description:
        "Join us to learn the history of money, the value and how to properly use money.",
      price: 2000,
      image: moneyP,
    },
  ];
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
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
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
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
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
