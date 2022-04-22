import React from "react";
import { motion } from "framer-motion";
import {
  Hero,
  KidAdvert,
  Newsletter,
  OurInteractiveGames,
  OurPrograms,
} from "./component";
import mobiusApp from "../../api/mobiusApp";

const LandingPage = ({ children }) => {
  const handleGetAllCourse = async () => {
    try {
      const res = await mobiusApp.get("/courses/all");
      const data = res?.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  handleGetAllCourse();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <OurPrograms />
      <KidAdvert />
      <OurInteractiveGames />
      <Newsletter />
    </motion.div>
  );
};

export { LandingPage };
