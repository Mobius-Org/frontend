import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  Hero,
  KidAdvert,
  Newsletter,
  OurInteractiveGames,
  OurPrograms,
} from "./component";
import mobiusApp from "../../api/mobiusApp";
import { Puff } from "react-loader-spinner";
import { colors } from "../../colors";

const LandingPage = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleGetAllCourse = async () => {
      setLoading(true);
      try {
        const res = await mobiusApp.get("/courses/all");
        const data = res?.data;
        setData(data);
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <Hero />
          <OurPrograms data={data?.data} />
          <KidAdvert />
          <OurInteractiveGames />
          <Newsletter />
        </motion.div>
      )}
    </>
  );
};

export { LandingPage };

const LoaderWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 78vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
