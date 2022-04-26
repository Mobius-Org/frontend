import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import mobiusApp from "../../api/mobiusApp";
import { colors } from "../../colors";
import { Button } from "../../component";
import { MdWest, MdVerified, MdAccessTime } from "react-icons/md";
import { BiBookOpen } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const CourseDetails = () => {
  const state = useSelector((state) => state);
  const { auth } = state;
  const { profile } = auth;
  const token = profile?.token;
  const { id } = useParams();
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const EnrollCourse = async () => {
    if (token) {
      try {
        const res = await mobiusApp.patch(
          `/courses/enroll/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = res?.data;
        console.log(data);
        toast.success("enrollment success");
      } catch (error) {
        toast.error("Course enrollment failed");
      }
    } else {
      toast("Please register or login to enroll");
      return;
    }
  };

  useEffect(() => {
    let mounted = true;
    const getOneCourse = async () => {
      setLoading(true);
      try {
        const res = await mobiusApp.get(`/courses/${id}`);
        const data = res?.data;
        setCourseData(data?.course);
        setLoading(false);
      } catch (error) {
        console.log("error");
        setLoading(false);
      }
    };
    if (mounted) {
      getOneCourse();
    }
    return () => (mounted = false);
  }, [id]);

  return (
    <div>
      {loading ? (
        <LoaderWrapper>
          <Puff color={colors.secondary80} width="150px" height={"150px"} />
        </LoaderWrapper>
      ) : (
        <CourseDetailWrapper>
          <CourseDetailWrapperInner>
            <Row1>
              <BackContainer onClick={() => window.history.back()}>
                <span>
                  <MdWest />
                </span>
                <span>Back to Courses</span>
              </BackContainer>
              <Row>
                <ImageWrap src={courseData?.description?.image} />
                <CourseDetail>
                  <CourseName>{courseData.courseName}</CourseName>
                  <CourseDescription>
                    <span>
                      {" "}
                      {courseData?.description?.summary}
                      {". "}
                    </span>
                    <CourseHighlight>
                      {courseData?.sections?.contents.map((content) => {
                        return (
                          <Highlight>
                            <span>
                              <MdVerified />{" "}
                            </span>
                            <span>{content?.description}</span>.
                          </Highlight>
                        );
                      })}
                    </CourseHighlight>
                  </CourseDescription>
                  <CoursePriceBtn>
                    <CoursePrice>
                      {courseData?.description?.price === "Free" ? (
                        courseData?.description?.price
                      ) : (
                        <span>&#8358;{courseData?.description?.price}</span>
                      )}
                    </CoursePrice>
                    <Btnwrap onClick={EnrollCourse}>
                      <Button
                        bgColor={colors.secondary_color}
                        text={"Enroll"}
                        loadingState={loading}
                      />
                    </Btnwrap>
                  </CoursePriceBtn>
                </CourseDetail>
              </Row>
            </Row1>
            <Row2>
              <Col>
                <ColRow>
                  {" "}
                  <span>
                    <MdAccessTime />
                  </span>
                  <span>Duration </span>
                </ColRow>
                <Text>{courseData?.description?.duration} Minutes</Text>
              </Col>
              <Col>
                <ColRow>
                  {" "}
                  <span>
                    <BiBookOpen />
                  </span>
                  <span>Modules </span>
                </ColRow>
                <Text>{courseData?.description?.modules} Modules</Text>
              </Col>
              <Col>
                <ColRow>
                  {" "}
                  <span>
                    <FaUserAlt />
                  </span>
                  <span>Age </span>
                </ColRow>
                <Text>
                  {courseData?.description?.age} {"Years"}
                </Text>
              </Col>
              <Col>
                <ColRow>
                  {" "}
                  <span>
                    <IoLanguage />
                  </span>
                  <span>Language: English </span>
                </ColRow>
                <Text>English Language</Text>
              </Col>
            </Row2>
            <Row3>
              <h1>Student Testimonials</h1>
              <div>
                <TesRow>
                  <PImg src={courseData?.description?.image} alt="name" />
                  <TesDesc>
                    <TesName>Bell Endee</TesName>
                    <TesDescText>
                      <p>"I enjoyed the lessons even the games, thank you."</p>
                    </TesDescText>
                  </TesDesc>
                </TesRow>
                <TesRow>
                  <PImg src={courseData?.description?.image} alt="name" />
                  <TesDesc>
                    <TesName>Bell Endee</TesName>
                    <TesDescText>
                      <p>"I enjoyed the lessons even the games, thank you."</p>
                    </TesDescText>
                  </TesDesc>
                </TesRow>
                <TesRow>
                  <PImg src={courseData?.description?.image} alt="name" />
                  <TesDesc>
                    <TesName>Bell Endee</TesName>
                    <TesDescText>
                      <p>"I enjoyed the lessons even the games, thank you."</p>
                    </TesDescText>
                  </TesDesc>
                </TesRow>
                <TesRow>
                  <PImg src={courseData?.description?.image} alt="name" />
                  <TesDesc>
                    <TesName>Bell Endee</TesName>
                    <TesDescText>
                      <p>"I enjoyed the lessons even the games, thank you."</p>
                    </TesDescText>
                  </TesDesc>
                </TesRow>
              </div>
            </Row3>
          </CourseDetailWrapperInner>
        </CourseDetailWrapper>
      )}
    </div>
  );
};
export { CourseDetails };

const LoaderWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 78vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CourseDetailWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: ${"inherit"};
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;
const CourseDetailWrapperInner = styled.div`
  width: 90%;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 2rem;
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 90%;
    height: fit-content;
    flex-direction: column;
    gap: 2rem;
  }
`;
const Row1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const BackContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  width: max-content;
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: bold;
  background: ${colors.secondary_color};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  border-radius: 10px;
  &:hover {
    background: ${colors.white};
    color: ${colors.secondary_color};
    border: 1px solid ${colors.secondary_color};
    border-radius: 10px;
    transform: scale(0.9) translateX(-0.1rem);
    transition: all 0.3s ease-in-out;
  }
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ImageWrap = styled.img`
  height: 23rem;
  aspect-ratio: 1.65;
  border-radius: 10px;
  object-fit: fit;
  &:hover {
    box-shadow: 0 2px 5px ${colors.secondary40};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CourseDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 0.5rem; */
`;
const CourseName = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;
const CourseDescription = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: #333;
  text-align: start;

  /* gap: 1rem; */
  display: flex;
  padding-top: 1rem;
  flex-direction: column;

  & > span {
    /* height: 4rem; */
    color: #303030;
    font-weight: 400;
  }
`;
const CoursePriceBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const CoursePrice = styled.h3``;
const Btnwrap = styled.div``;

const Highlight = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  & span:first-of-type {
    padding: 0.5rem;
    color: ${colors.secondary_color};
  }
  & span:last-of-type {
    font-size: 14px;
    font-weight: 400;
    color: #333;
  }
  span {
    display: flex;
    align-items: center;
  }
`;
const CourseHighlight = styled.div`
  padding-top: 8px;
  padding-bottom: 24px;
`;
const Row2 = styled.div`
  width: 100%;
  display: flex;
  height: fit-content;
  padding: 1rem 0;
  border-radius: 10px;
  background-color: #ecf1fb;
  box-shadow: 0 0 1px ${colors.secondary40};
  flex-wrap: wrap;
`;

const Col = styled.div`
  height: max-content;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 768px) {
    width: 50%;
    padding: 1rem 0;
  }
`;
const ColRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: rgba(12, 18, 28, 0.5);
  span {
    text-align: center;
    align-items: center;
    display: flex;
  }
`;
const Text = styled.h4``;
const Row3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1rem;
  & > h1 {
    font-size: 28px;
    font-weight: bold;
  }
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
const TesRow = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  box-shadow: 0 0 3px #dcdcdc;
`;
const TesDesc = styled.figure`
  width: 200px;
`;
const TesName = styled.h4`
  text-align: start;
`;
const TesDescText = styled.blockquote`
  text-align: start;
  width: 100%;
  color: grey;
`;
const PImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;

  object-fit: cover;
`;
