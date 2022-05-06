import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { girlCanva } from "../../../../assets";
import { EmptyItem } from "../../../../component";
import OurCourses from "../ourcourses/index";
import { UploadPage } from "../../../uploadpage";
import mobiusApp from "../../../../api/mobiusApp";

const MyContents = () => {
  const state = useSelector((state) => state);
  const { auth } = state;
  const { profile } = auth;
  const token = profile?.token;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [courseDetails, setCourseDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const handleGetAllMyContents = async () => {
      setLoading(true);
      try {
        const res = await mobiusApp.get("/users/dashboard/my-contents", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res?.data;
        setData(data?.result.filter((el) => el.status === "approved"));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    handleGetAllMyContents();
  }, [token]);
  return (
    <Container>
      <MyContentInner>
        <UploadPage showModal={showModal} setShowModal={setShowModal} />
        {data?.length > 0 ? (
          <OurCourses data={data} text={"My Contents"} />
        ) : (
          <EmptyItem
            src={girlCanva}
            text={"You have not uploaded any content yet."}
            alt={"Upload Now"}
            text2={"Create Content"}
            func={() => setShowModal(true)}
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
