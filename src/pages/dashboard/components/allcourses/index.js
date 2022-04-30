import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { broCanva } from "../../../../assets";
import { EmptyItem } from "../../../../component";
import OurCourses from "../ourcourses";
import mobiusApp from "../../../../api/mobiusApp";
import { Puff } from "react-loader-spinner";
import { colors } from "../../../../colors";

const AllCourses = () => {
  const state = useSelector((state) => state);
  const { auth } = state;
  const { profile } = auth;
  const token = profile?.token;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleGetAllMyCourse = async () => {
      setLoading(true);
      try {
        const res = await mobiusApp.get("/courses/dashboard/myCourses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res?.data;
        setData(data?.result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    handleGetAllMyCourse();
  }, []);
  return (
    <Container>
      <AllCoursesInner>
        {loading ? (
          <LoaderWrapper>
            <Puff color={colors.secondary80} width="150px" height={"150px"} />
          </LoaderWrapper>
        ) : (
          <>
            {data?.length > 0 ? (
              <OurCourses data={data} text={"Enrolled Courses"} />
            ) : (
              <EmptyItem
                src={broCanva}
                text={"You have not enrolled for any course yet"}
                alt={"emptyCourse"}
                text2={"Enroll"}
              />
            )}
          </>
        )}
      </AllCoursesInner>
    </Container>
  );
};

export { AllCourses };
const LoaderWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 78vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
