import React from "react";
import KidAdvert from "./component/advert";
import Hero from "./component/hero";
import Newsletter from "./component/Newletter";
import OurInteractiveGames from "./component/ourInteractiveGames";
import OurPrograms from "./component/ourprograms";
import { motion } from "framer-motion";

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

export { LandingPage };
