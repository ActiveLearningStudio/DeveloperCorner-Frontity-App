import React from "react";
import Header from "../../components/Header/header";
import Banner from "../../components/banner/Styledbanner";
import Requestinfo from "./Requestinfo";
import AboutProgram from "./aboutProgram";
import LearningProvider from "./learningProvider";
import Certification from "./certification";
const Index = () => {
  return (
    <>
      <Banner title="Providers" />
      <Requestinfo />
      <AboutProgram />
      <LearningProvider />
      <Certification />
    </>
  );
};

export default Index;
