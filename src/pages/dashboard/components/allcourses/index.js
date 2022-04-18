import React from "react";
import OurCourses from "../OurCourse";
import styled from "styled-components";
import { useSelector } from "react-redux";
import EmptyState from "../../../../component/emptystate";

const AllCourses = () => {
  const  state= useSelector(state => state);
  const enrolledCourses = state?.auth?.profile?.enrolledCourse
  return <Container>
    <AllCoursesInner>
      {
        enrolledCourses.length > 0 ?      <OurCourses text={"Enrolled"}/> :
        <EmptyState src={'./images/brocanva.png'} text={"You have not enrolled for any course yet"} alt={'emptyCourse'}/>
      }
 
    </AllCoursesInner>
  </Container>;
};

export default AllCourses;

const Container = styled.div`

`

const AllCoursesInner = styled.div``