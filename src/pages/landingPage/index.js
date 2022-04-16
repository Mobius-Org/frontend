import React from "react";
import KidAdvert from "./component/advert";
import Hero from "./component/hero";
import Newsletter from "./component/Newletter";
import OurInteractiveGames from "./component/ourInteractiveGames";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      {/* ourProgrames */}
      <KidAdvert />
      <OurInteractiveGames />
      <Newsletter />
    </div>
  );
};

export { LandingPage };
