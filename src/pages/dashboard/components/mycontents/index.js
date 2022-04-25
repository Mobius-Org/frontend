import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { girlCanva } from "../../../../assets";
import { EmptyItem } from "../../../../component";
import OurCourses from "../ourcourses/index";

const MyContents = () => {
  const state = useSelector((state) => state);
  const enrolledCourses = state?.auth?.profile?.enrolledCourse;
  return (
    <Container>
      <MyContentInner>
        {enrolledCourses?.length > 0 ? (
          <OurCourses text={"My Contents"} />
        ) : (
          <EmptyItem
            src={girlCanva}
            text={"You have not uploaded any content yet."}
            alt={"Upload Now"}
            text2={"Create Content"}
          />
        )}
      </MyContentInner>
    </Container>
  );
};

export { MyContents };

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MyContentInner = styled.div`
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
