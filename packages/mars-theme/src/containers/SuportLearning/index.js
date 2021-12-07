import React from "react";
import Banner from "../../components/banner/Styledbanner";
import GetInvolved from "./GetInvolved";
import LearnImpact from "./LearnImpact";
import Roadmap from "./Roadmap";
const Index = () => {
  return (
    <>
      <Banner
        title="Support Learning"
        subheading="IMPACTING EDUCATION THROUGH TECHNOLOGY"
        para="Curriki is dedicated to making interactive learning experiences accessible for everyone, by providing free and open tools to design, customize and publish content."
      />
      <GetInvolved />
      <Roadmap />
      <LearnImpact />
    </>
  );
};

export default Index;
