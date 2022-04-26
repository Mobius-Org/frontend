import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const VideoPlayer = () => {
  const [videos] = useState([
    "https://www.youtube.com/watch?v=JE-EsLhmlkU",
    "https://www.youtube.com/watch?v=JxKwqZTLufQ",
    "https://www.youtube.com/watch?v=WWoqbIDBDbQ",
  ]);
  const [watchComplete, setWatchComplete] = useState(false);
  // let vidArrayLength = videos.length;
  let [curVid] = useState(0);
  const [url, setUrl] = useState(videos[curVid]);
  // const handleNext = () => {
  //   if (!watchComplete) return;
  //   if (curVid === vidArrayLength - 1) return;
  //   setCurVid(curVid + 1);
  //   setWatchComplete(false);
  // };
  // const handlePrev = () => {
  //   if (curVid === 0) return;
  //   if (curVid === 0 && vidArrayLength === 1) return;
  //   setCurVid(curVid - 1);
  // };
  const handleProgress = ({ played, playedSeconds, loaded }) => {
    if (played >= 0.8 && !watchComplete) {
      setWatchComplete(true);
    }
  };
  useEffect(() => {
    setUrl(videos[curVid]);
    console.log(curVid);
  }, [curVid, videos]);

  return (
    <VideoPlayerWrapper>
      <ReactPlayerInner>
        <ReactPlayer
          height="100%"
          width="100%"
          controls
          url={url}
          onProgress={handleProgress}
        />
        {/* <CtaWrapper>
          <PrevBtn onClick={handlePrev}>prev</PrevBtn>
          <NextBtn onClick={handleNext}>next</NextBtn>
        </CtaWrapper> */}
      </ReactPlayerInner>
    </VideoPlayerWrapper>
  );
};

export { VideoPlayer };

const VideoPlayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  color: red;
`;
// const NextBtn = styled.button``;
// const PrevBtn = styled.button``;
// const CtaWrapper = styled.div``;
// const VideoPlayerWrap = styled.div``;

const ReactPlayerInner = styled.div`
  width: 100%;
  height: 100%;
`;
