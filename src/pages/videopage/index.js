import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import mobiusApp from "../../api/mobiusApp";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
const Video = ({ func }) => {
  const playerRef = useRef();
  const { id } = useParams();
  const [CompletedCount, setCompletedCount] = useState(0);
  const [courseData, setCourseData] = useState([]);
  const [setLoading] = useState(false);
  const [currVal, setCurrVal] = useState(0);
  const [watchComplete, setWatchComplete] = useState(false);
  const { sections } = courseData;
  const introduction = sections?.introduction;
  const contents = sections?.contents.length > 0 ? [...sections?.contents] : [];
  const Course = [introduction, ...contents];
  console.log(Course);
  const handleDecrease = () => {
    return currVal > 0 && setCurrVal(currVal - 1);
  };
  const handleIncrease = () => {
    if (!watchComplete) return;
    currVal < Course.length - 1 && setCurrVal(currVal + 1);
    setWatchComplete(false);
  };
  const handleProgress = ({ played }) => {
    if (played >= 0.8 && !watchComplete) {
      setWatchComplete(true);
      setCompletedCount(CompletedCount + 1);
    }
  };
  const handleDownload = async (e) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", Course[currVal]?.video, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement("a");
      tag.href = imageUrl;
      tag.target = "_blank";
      tag.download = "sample.mp4";
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
      toast.success("Downloaded Successfully");
    };
    xhr.onerror = (err) => {
      toast.error("Failed to download picture");
    };
    xhr.send();
  };
  useEffect(() => {
    let mounted = true;
    const getOneCourse = async () => {
      setLoading(true);
      try {
        const res = await mobiusApp.get(`/courses/getOne/${id}`);
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
  }, [id, setLoading]);

  return (
    <VideoContainer>
      <VideoWrapper>
        <Row>
          <Title>{courseData?.courseName}</Title>
          <TopicWrapper onClick={() => window.history.back()}>
            <span>
              <AiOutlineArrowLeft className="arrowLeft" />
            </span>
            <span>Back to Courses</span>
          </TopicWrapper>
        </Row>
        <VideoSpace>
          <ReactPlayerInner className="playerWrapper">
            <ReactPlayer
              height="100%"
              width="100%"
              className="player"
              controls
              playerRef={playerRef}
              url={Course[currVal]?.video}
              onProgress={handleProgress}
              style={{ borderRadius: "15px" }}
            />
          </ReactPlayerInner>
        </VideoSpace>
        <DownloadWrapper>
          <BtnWrapper onClick={handleDownload}>
            <span>Download</span>
            <span>
              <AiOutlineArrowDown />
            </span>
          </BtnWrapper>

          <ProgressBar>
            <span>
              <span>Completed:</span>
              <span>
                {CompletedCount} / {Course.length}
              </span>
            </span>
            <span>{(CompletedCount / Course.length) * 100}%</span>
          </ProgressBar>
        </DownloadWrapper>
        <ModuleCon>
          <h3> {Course[currVal]?.title} </h3>
          <p>{Course[currVal]?.text || Course[currVal]?.description}</p>
          <FinLit>
            {/* =========================================================== */}
            <div>
              {(currVal > 0 || currVal === Course.length - 1) && (
                <BtnWrapper onClick={() => handleDecrease()}>
                  <span>
                    <AiOutlineArrowLeft className="arrowLeft" />
                  </span>
                  <span>Previous</span>
                </BtnWrapper>
              )}
            </div>

            <BtnWrapper onClick={() => handleIncrease()}>
              <span>Next</span>
              <span>
                <AiOutlineArrowRight className="arrowRight" />
              </span>
            </BtnWrapper>
          </FinLit>
        </ModuleCon>
      </VideoWrapper>
    </VideoContainer>
  );
};

export { Video };

const VideoContainer = styled.div`
  width: 100%;
  height: fit-content;
`;
const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  max-width: 1400px;
  width: 80%;
`;
const ProgressBar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  span:first-of-type {
    font-size: 1.2rem;
    font-weight: bold;
    color: green;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    & span {
      text-align: center;
    }
  }
  & > span:last-of-type {
    padding: 0.5rem;
    background-color: ${colors.secondary80};
    font-weight: bold;
    border-radius: 10px;
    color: #fff;
  }
`;
const ReactPlayerInner = styled.div`
  width: 100%;
  height: 100%;
  &.playerWrapper {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 0px 5px ${colors.secondary60};
  }
`;
const Row = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
const Title = styled.h3``;

const TopicWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  width: max-content;

  color: ${colors.white};
  text-align: center;
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

const FinLit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    gap: 1rem;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;
const VideoSpace = styled.div`
  /* border: 2px solid green; */
  width: 100%;
  height: 60vh;
`;

const ModuleCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  p {
    color: #333;
  }
  @media (max-width: 768px) {
    width: 90%;
    text-align: justify;
  }
`;

const DownloadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  background-color: ${colors.secondary_color};
  align-items: center;
  padding: 15px 2rem;
  border-radius: 24px;
  font-weight: 700;
  font-size: 14px;
  max-width: max-content;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  & span {
    display: flex;
    align-items: center;
    text-align: center;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${colors.white};
    border: 1px solid ${colors.secondary_color};
    color: ${colors.secondary_color};
    padding: 15px 2.1rem;
  }
  @media (max-width: 768px) {
  }
`;
