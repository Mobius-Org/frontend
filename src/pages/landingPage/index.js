import React from "react";
import { motion } from "framer-motion";
import {
  Hero,
  KidAdvert,
  Newsletter,
  OurInteractiveGames,
  OurPrograms,
} from "./component";

const LandingPage = ({ children }) => {
  console.log(children);
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

export default LandingPage;
