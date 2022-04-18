import React from "react";
import styled from "styled-components";
import { BsFillBellFill } from "react-icons/bs";
import { colors } from "../../colors";
import { useSelector } from "react-redux";
const Profile = () => {
  const state = useSelector((state) => state);
  const { profile } = state.auth;
  return (
    <ProfileWrapper>
      <Notification>
        <BsFillBellFill size={28} />
      </Notification>
      <ProfileImg>
        <img src="images/girl pc.png" alt="profile" />
      </ProfileImg>
      <ProfileName>
        <span>{profile?.name}</span>
      </ProfileName>
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
`;
const Notification = styled.div`
  color: ${colors.secondary80};
`;
const ProfileImg = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const ProfileName = styled.div`
  span {
    font-family: Nunito;
    font-weight: Bold;
    font-ize: 16px;
    color: #4d504f;
  }
`;
