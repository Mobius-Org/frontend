import React from "react";
import styled from "styled-components";
import Profile from "../../../../component/profile";
import { dashBoardRoutes } from "../../../../appRouter/routes";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
function TopNav() {
  const location = useLocation();
  return (
    <TopNavWrapper>
      <DisplayName>
        {dashBoardRoutes.map(
          ({ name, icon, path, displayName }, i) =>
            location.pathname === path && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "fit-content" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.5 }}
              >
                {displayName}
              </motion.span>
            )
        )}
      </DisplayName>
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
    </TopNavWrapper>
  );
}

export { TopNav };

const TopNavWrapper = styled.div`
  width: calc(100vw - 400px);
  position: sticky;
  top: 20px;
  height: 5rem;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DisplayName = styled.div`
  span {
    font-family: Nunito;
    font-weight: 600;
    font-size: 32px;
    line-height: 20px;
    color: #4d504f;
    width: fit-content;
    transition: all 0.3s ease-in-out;
  }
`;

const ProfileWrapper = styled.div``;
