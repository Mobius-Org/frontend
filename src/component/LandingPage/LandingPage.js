import React from "react";
import InfoSection1 from "../InfoSection/InfoSection1";
import CarousalSection from "../InfoSection/CarousalSection";
import InfoSection5 from "../InfoSection/InfoSection5";
import OurGames from "../../container/ourgamesec";
import Mickysec from "../../container/mickyContainer";

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

export default LandingPage;
