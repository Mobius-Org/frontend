import React from "react";
import KidAdvert from "./component/advert";
import Newsletter from "./component/Newletter";
import OurInteractiveGames from "./component/ourInteractiveGames";

const LandingPage = () => {
  return (
    <div>
      <KidAdvert />
      <OurInteractiveGames />
      <Newsletter />
    </div>
  );
};

export { LandingPage };
