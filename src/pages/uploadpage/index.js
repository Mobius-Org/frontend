import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { Button } from "../../component";
import { FaCloudUploadAlt } from "react-icons/fa";
import ReactPlayer from "react-player";
import { BsArrowLeft } from "react-icons/bs";
import mobiusApp from "../../api/mobiusApp";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const UploadPage = ({ showModal, setShowModal }) => {
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();
  const [preview, setPreview] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const state = useSelector((state) => state);
  const { auth } = state;
  const { profile } = auth;
  const token = profile?.token;
  var formData = new FormData();
  const handleVideo = (e) => {
    setFiles(e.target.files[0]);
  };
  const handleUpload = async () => {
    if (title === "" || description === "" || files === null)
      toast.error("please fill the fields");
    setLoading(true);
    let formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("files", files);
    try {
      const res = mobiusApp.post(
        `/courses/student-upload/${localStorage.getItem("courseId")}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "multipart/form-data",
          },
        }
      );
      toast.success(res.message);
      setTitle("");
      setDescription("");
      setFiles(null);
      setLoading(false);
    } catch (error) {
      console.log("Upload failed");
    }
  };
  useEffect(() => {
    formData.append("title", title);
    formData.append("description", description);
    formData.append("files", files);
  }, [title, description, files]);
  useEffect(() => {
    if (files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result.toString());
      };
      reader.readAsDataURL(files);
    } else {
      setPreview(null);
    }
  }, [files]);
  return (
    <UploadPageWrapper showModal={showModal}>
      <Container
        id="myForm"
        showModal={showModal}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {!showContent ? (
          <>
            <input
              type={"file"}
              ref={fileInputRef}
              accept={"video/*"}
              style={{ display: "none" }}
              onChange={handleVideo}
              id={"files"}
            />
            <Heading>
              <h1>Upload - Content</h1>
              <CloseBtn
                onClick={() => {
                  setPreview(null);
                  setFiles(null);
                  setShowModal(!showModal);
                  setShowContent(false);
                }}
              >
                &times;
              </CloseBtn>
            </Heading>
            <VidContent>
              {preview === null ? (
                <div className="uWrap">
                  <span>
                    <FaCloudUploadAlt size={50} />
                  </span>
                  <UploadBtn
                    onClick={(e) => {
                      e.preventDefault();
                      fileInputRef.current.click();
                    }}
                  >
                    Upload Media
                  </UploadBtn>
                  <p>PNG, GIF, WEMP, MP4 max 50mb</p>
                </div>
              ) : (
                <ReactPlayer
                  controls
                  url={preview}
                  height={"100%"}
                  width={"100%"}
                />
              )}
            </VidContent>
            <BtnWrap onClick={() => setShowContent(true)}>
              <Button text={"Next"} bgColor={colors.secondary80} />
            </BtnWrap>
          </>
        ) : (
          <>
            <Heading>
              <div
                style={{ display: "flex", gap: "1rem" }}
                className="smT"
                onClick={() => setShowContent(false)}
              >
                <span>
                  <BsArrowLeft size={30} />
                </span>
                <h3>Finish your upload</h3>
              </div>
              <CloseBtn
                onClick={() => {
                  setPreview(null);
                  setFiles(null);
                  setShowModal(!showModal);
                  setShowContent(false);
                }}
              >
                &times;
              </CloseBtn>
            </Heading>
            <InputsWrapper>
              <HeaderText>
                <h4>Content Header</h4>
                <input
                  placeholder="type in your haeder..."
                  value={title}
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </HeaderText>
              <HeaderText>
                <h4>Content Description</h4>
                <textarea
                  className="Cd"
                  id={"description"}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter your description here..."
                />
              </HeaderText>
              <BtnWrap onClick={handleUpload}>
                <Button text={"Upload Content"} bgColor={colors.secondary80} />
              </BtnWrap>
            </InputsWrapper>
          </>
        )}
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
const Container = styled.form`
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
  & h3 {
    font: 1rem;
  }
  @media (max-width: 500px) {
    & div.smT {
      font-size: 16px;
    }
  }
`;
const CloseBtn = styled.button`
  font-size: 3rem;
  height: 3rem;
  width: 3rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  border: none;
  color: grey;
  background-color: unset;
  font-weight: normal;
  &:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background-color: ${colors.secondary80};
    color: #fff;
    border-radius: 10px;
  }
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
    & > span {
      color: ${colors.secondary80};
    }
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
  font-size: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${colors.secondary80};
    color: white;
    cursor: pointer;
  }
`;
const HeaderText = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-direction: column;

  textarea,
  input {
    width: 100%;
    height: 3rem;
    border: 0;
    outline: 0;
    box-shadow: 0 0 2px #333;
    border-radius: 10px;
    padding: 0 15px;
  }
  & > textarea.Cd {
    height: 30vh;
    padding: 10px;
    text-align: start;
  }
`;
const InputsWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
