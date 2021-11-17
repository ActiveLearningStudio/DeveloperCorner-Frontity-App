import React from "react";
import Banner from "../../components/banner/Styledbanner";
import GetInvolved from "./GetInvolved";
import Roadmap from "./Roadmap";
const Index = () => {
  return (
    <>
      <Banner
        title="Support Learning"
        subheading="Impact education through technology"
        para="Curriki is dedicated to interactive learning experience eccessible for everyone by pproviding free and open tools to design. customize andpublish content"
      />
      <GetInvolved />
      <Roadmap />
    </>
  );
};

export default Index;
