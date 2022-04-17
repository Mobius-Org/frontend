import React from "react";
import KidAdvert from "./component/advert";
import Hero from "./component/hero";
import Newsletter from "./component/Newletter";
import OurInteractiveGames from "./component/ourInteractiveGames";
import OurPrograms from "./component/ourprograms";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <OurPrograms />
      <KidAdvert />
      <OurInteractiveGames />
      <Newsletter />
    </div>
  );
};

export { LandingPage };
