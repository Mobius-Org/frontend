import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../../colors";
import { useSelector } from "react-redux";
import { bannerKids } from "../../../../assets";
import OurCourses from "../ourcourses";
import { Puff } from "react-loader-spinner";
import mobiusApp from "../../../../api/mobiusApp";
const Overview = () => {
  const state = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleGetAllCourse = async () => {
      setLoading(true);
      try {
        const res = await mobiusApp.get("/courses/all");
        const data = res?.data;
        setData(data?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    handleGetAllCourse();
  }, []);

  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <Puff color={colors.secondary80} width="150px" height={"150px"} />
        </LoaderWrapper>
      ) : (
        <OverviewWrap>
          <BannerWrapper>
            <SecHeading>
              <h2>Hi {state?.auth?.profile?.name},</h2>
            </SecHeading>
            <Banner>
              <ImgTextContainer>
                <ImgContainer>
                  {" "}
                  <img src={bannerKids} alt="" />
                </ImgContainer>
                <TextContainer>
                  <h2>Welcome to Mobius!</h2>
                  <p>
                    
                    Get familiar with the dasboard and start your learning
                    journey.
                  </p>
                </TextContainer>
              </ImgTextContainer>
            </Banner>
          </BannerWrapper>
          <OurCourses data={data} text={"Available Courses"} />
        </OverviewWrap>
      )}
    </>
  );
};

export { Overview };
const LoaderWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 78vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 90%;
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

const OverviewWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Banner = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 0.5rem;
  position: relative;
  background: #102a6c;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    height: 25vh;
  }
`;
const ImgTextContainer = styled.div`
  width: 70%;
  display: flex;
  height: 100%;

  justify-content: space-between;
  align-items: center;
  margin-left: 5rem;
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;
const ImgContainer = styled.div`
  width: 35%;
  height: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: fit;
  }
  @media (max-width: 768px) {
    width: 30%;
    height: 70%;
    align-self: end;
    margin-left: 1rem;
  }
`;
const TextContainer = styled.div`
  width: 60%;
  text-align: start;

  & > h2 {
    font-size: 32px;
    font-weight: bold;
    line-height: 20px;
    padding-bottom: 1rem;
    color: #fff;
    @media (max-width: 768px) {
      font-size: 25px;

      font-weight: 600;
      line-height: 20px;
      width: 100%;
    }
  }

  & > p {
    width: 90%;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
  @media (max-width: 768px) {
    width: 64%;
  }
`;
const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1200px) and (max-width: 1400px) {
    margin: 3rem;
  }
`;
