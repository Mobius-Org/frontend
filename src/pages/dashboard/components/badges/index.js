import React from "react";
import styled from "styled-components";
import { colors } from "../../../../colors";
import { Badge1 } from "../../../../assets";
const Badges = () => {
  return (
    <Container>
      <MyContentInner>
        <SecHeading>
          <h2>Badges</h2>
        </SecHeading>
        <BadgesList>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((badgeIcon) => (
            <Badge>
              <img src={Badge1} />
            </Badge>
          ))}
        </BadgesList>
      </MyContentInner>
    </Container>
  );
};

export { Badges };

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2.5rem;
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
const Badge = styled.div`
  width: 281px;
  height: 250px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  img {
    width: 60%;
    height: 80%;
    object-fit: contain;
    margin: auto;
  }
`;

const SecHeading = styled.div`
  display: flex;

  align-self: start;
  width: 100%;
  height: fit-content;
  padding: 1.5rem 0;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
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
const BadgesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 200px 0px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  gap: 2rem;
  padding: 2rem;
  justify-content: space-between;
  background: #dcdcdc;
  border-radius: 15px;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;
