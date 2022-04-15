import React from "react";
import InfoSection1 from "./component/InfoSection/InfoSection1";
import CarousalSection from "./component/InfoSection/CarousalSection";
import Mickysec from "./component/mickyContainer";
import OurGames from "./component/ourgamesec";
import InfoSection5 from "./component/InfoSection/InfoSection5";
const LandingPage = () => {
  return (
    <div>
      <InfoSection1 />
      <CarousalSection />
      <Mickysec />
      <OurGames />
      <InfoSection5 />
    </div>
  );
};

export { LandingPage };
