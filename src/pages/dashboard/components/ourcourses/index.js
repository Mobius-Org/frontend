import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../colors";
import { Button, CourseCard } from "../../../../component";

const OurCourses = ({
  text,
  data,
  func,
  courseDetails,
  showModal,
  setShowModal,
}) => {
  const courses = data;
  const location = useLocation();
  return (
    <Container>
      <OurProgramsWrapper>
        <SecHeading>
          <h2>{text}</h2>{" "}
          {location.pathname.includes("/dashboard/Content") && (
            <ButtonWrapper onClick={() => setShowModal(true)}>
              <Button
                text={"Upload"}
                dir={"right"}
                filled={false}
                bgColor={colors.secondary_color}
              />
            </ButtonWrapper>
          )}
        </SecHeading>
        <CoursesList>
          {courses?.map((course, index) => {
            localStorage.setItem("vUrl", course?.videoc);
            const title = course?.courseName || course?.courseTitle;
            const description =
              course?.description?.shortSummary || course?.descriptionc;
            const price = course?.description?.price || "Free";
            const image = course?.description?.image || course?.courseImage;
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
                  courseDetails={courseDetails ? courseDetails[index] : null}
                  txt={course?.status ? course?.status : null}
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
  justify-content: space-between;
  // flex-direction: column;
  align-items: center;
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
const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 0;
  padding: 1rem;
`;
