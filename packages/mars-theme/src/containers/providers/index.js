import React from "react";
import Header from "../../components/Header/header";
import Banner from "../../components/banner/Styledbanner";
import Requestinfo from "./Requestinfo";
import AboutProgram from "./aboutProgram";
import LearningProvider from "./learningProvider";
import Certification from "./certification";
const Index = ({ providerCategory }) => {
  let {
    requestedinfoposts,
    aboutprogramposts,
    learningposts,
    certificationposts,
  } = [];
  providerCategory.map(({ category, posts }) => {
    if (category) {
      if (category.id === 57) {
        return (requestedinfoposts = posts);
      }
      if (category.id === 58) {
        return (aboutprogramposts = posts);
      }
      if (category.id === 59) {
        return (learningposts = posts);
      }
      if (category.id === 60) {
        return (certificationposts = posts);
      }
    }
  });
  return (
    <>
      <Banner title="Providers" subheading="" para="" />
      <Requestinfo requestedinfoposts={requestedinfoposts} />
      <AboutProgram aboutprogramposts={aboutprogramposts} />
      )
      <LearningProvider learningposts={learningposts} />
      <Certification certificationposts={certificationposts} />
    </>
  );
};

export default Index;
