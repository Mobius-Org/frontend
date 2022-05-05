import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import mobiusApp from "../../../../api/mobiusApp";
import { colors } from "../../../../colors";
import { Button } from "../../../../component";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubscription = async () => {
    setLoading(true);
    try {
      const response = await mobiusApp.post("/users/subscribe", {
        email,
      });

      setLoading(false);
      document.getElementById("sId").textContent = " ";
      toast.success(response?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      setLoading(false);
      toast.error(err?.response?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <Container>
      <NewLetterWraper>
        <div>
          <h2>
            Join our <span>Newsletter</span>
          </h2>
        </div>
        <div>
          <p>
            Stay up to date on whats new in our courses and interactive games.
          </p>
        </div>
        <NewsletterInput>
          <input
            type="text"
            value={email}
            id="sId"
            loadingState={loading}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type in your email address here"
          />
          <span onClick={handleSubscription}>
            <Button
              bgColor={colors.secondary80}
              text={"Subscribe"}
              className="button"
            />
          </span>
        </NewsletterInput>
      </NewLetterWraper>
    </Container>
  );
};

export { Newsletter };

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;
const NewLetterWraper = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 23.4rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: ${colors.secondary20};
  border-radius: 30px;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 768px) {
    width: 90%;
  }
  & > div {
    display: flex;
    margin: 0 auto;
    & > h2 {
      align-items: center;
      font-family: Nunito;
      font-style: Bold;
      font-size: 36px;
      line-height: 19px;
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
    & > p {
      align-items: center;
      font-family: Nunito;
      font-style: regular;
      font-size: 20px;
      line-height: 26px;
      color: grey;
      width: 420px;
      @media (max-width: 768px) {
        font-size: 16px;
        width: 70%;
        margin: 0 auto;
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        width: 100%;
      }
    }
  }
`;
const NewsletterInput = styled.div`
  width: 50%;
  height: fit-content;
  padding: 1rem;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > input {
    width: 70% !important;
    height: 100%;
    border: none;
    background: transparent;
    outline: none;
  }
  & > div {
    width: 25%;

    @media (max-width: 768px) {
      & > p {
        display: none;
      }
    }
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 85%;
  }
`;
