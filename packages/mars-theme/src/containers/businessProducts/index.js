import React from "react";
import { Global, css, styled } from "frontity";
import GetStarted from "./getStarted";
import Features from "./features";
import Creating from "./Creating";
import ContactUs from "./contactUs";
import Courses from "./courses";
import Banner from "../../components/banner/Styledbanner";
import featurePic from "../../assets/images/Group153.png";
import externalCss from "./style.css";
const Index = () => {
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner title="Businesses" subheading="" para="" />
      <GetStarted />
      <Features />
      <Creating />
      <Courses />
      <ContactUs />
    </>
  );
};

export default Index;

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0px 110px;
`;
