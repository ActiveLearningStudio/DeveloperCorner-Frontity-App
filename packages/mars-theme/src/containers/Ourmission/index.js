import React from "react";
import Banner from "../../components/banner/Styledbanner";
import Donation from "./donation";
import InnerBanner from "./InnerrBanner";
import BirdiesforEducation from "./BirdiesforEducation";
import CurrikiSupporters from "./CurrikiSupporters";
import FrequentlyAsk from "./FrequentlyAsk";
const Index = () => {
  return (
    <>
      <Banner title="Support Our Mission" subheading="" para="" />
      <Donation />
      <InnerBanner />
      <BirdiesforEducation />
      <CurrikiSupporters />
      <FrequentlyAsk />
    </>
  );
};

export default Index;
