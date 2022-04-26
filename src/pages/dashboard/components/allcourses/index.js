import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { broCanva } from "../../../../assets";
import { EmptyItem } from "../../../../component";
import OurCourses from "../ourcourses";

const AllCourses = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const enrolledCourses = state?.auth?.profile?.enrolledCourse;
  return (
    <Container>
      <AllCoursesInner>
        {enrolledCourses?.length > 0 ? (
          <OurCourses text={"Enrolled Courses"} />
        ) : (
          <EmptyItem
            src={broCanva}
            text={"You have not enrolled for any course yet"}
            alt={"emptyCourse"}
            text2={"Enroll"}
          />
        )}
      </AllCoursesInner>
    </Container>
  );
};

export { AllCourses };

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AllCoursesInner = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 90%;
    height: fit-content;
    flex-direction: column;
    gap: 2rem;
  }
`;
