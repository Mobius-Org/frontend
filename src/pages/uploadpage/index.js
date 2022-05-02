import React, { useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { Button } from "../../component";
import { FaCloudUploadAlt } from "react-icons/fa";
const UploadPage = ({ showModal, setShowModal }) => {
  // const [video, setVideo] = useState(null);
  // const fileInputRef = useRef();
  // const [preview, setPreview] = useState(null);
  return (
    <UploadPageWrapper showModal={showModal}>
      <Container showModal={showModal}>
        <Heading>
          <h1>Upload - Content</h1>
          <CloseBtn>&times;</CloseBtn>
        </Heading>
        <VidContent>
          <div className="uWrap">
            <span>
              <FaCloudUploadAlt />
            </span>
            <UploadBtn>Upload Media</UploadBtn>
            <p>PNG, GIF, WEMP, MP4 max 50mb</p>
          </div>
        </VidContent>
        <BtnWrap>
          <Button text={"Next"} bgColor={colors.secondary80} />
        </BtnWrap>
      </Container>
    </UploadPageWrapper>
  );
};

export { UploadPage };
const UploadPageWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0%;
  left: 0%;

  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  opacity: 1;
  transform: scale(1);

  ${({ showModal }) =>
    !showModal &&
    `
    transition: all 0.3s ease-in-out;
    opacity:0;
    z-index:-20;
    transform: scale(0);
  
    `}
`;
const Container = styled.div`
  width: 65vw;
  border-radius: 10px;
  height: fit-content;
  background: #fff;
  margin: auto;
  box-shadow: 0 0 5px #c4c4c4;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  transition-delay: 0.3s;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ showModal }) =>
    !showModal &&
    `
  transition-delay: 0.3s;

    transition: all 0.3s ease-in-out;
    transform: scale(0);
 
    `}
  @media (max-width: 768px) {
    width: 90vw;
    height: fit-content;
  }
`;
const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & h1 {
    font-size: 2rem;
  }
`;
const CloseBtn = styled.button`
  padding: 0.3rem 0.75rem;
  font-size: 3rem;
  height: max-content;
  width: max-content;
  border: none;
  color: grey;
  background-color: unset;
  font-weight: normal;
`;
const VidContent = styled.div`
  width: 90%;
  height: 65vh;
  margin: 0 auto;
  border: 3px dashed rgba(12, 18, 28, 0.5);
  border-spacing: 30px;
  position: relative;
  & > div.uWrap {
    width: max-content;
    height: max-content;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
  }
`;
const BtnWrap = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 1rem auto;
`;
const UploadBtn = styled.div`
  padding: 0.75rem 2rem;
  border-radius: 20px;
  border: 1px solid ${colors.secondary80};
  color: ${colors.secondary80};
`;
