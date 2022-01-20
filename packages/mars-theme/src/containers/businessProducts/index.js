import { React, useState } from "react";
import { Global, css, styled, connect } from "frontity";
import GetStarted from "./getStarted";
import Features from "./features";
import Creating from "./Creating";
import ContactUs from "./contactUs";
import Courses from "./courses";
import Banner from "../../components/banner/Styledbanner";
import featurePic from "../../assets/images/Group153.png";
import externalCss from "./style.css";
const Index = (props) => {
  const { businessCategory } = props;
  businessCategory.map(({ category, posts }) => {
    if (category.id === 32) {
      const getstartedposts = posts;
      console.log("getstart", getstartedposts);
    }
    if (category.id === 33) {
      const businessfeatureposts = posts;
      console.log("features", businessfeatureposts);
    }
    if (category.id === 35) {
      const trycurrikiposts = posts;
      console.log("try curriki", trycurrikiposts);
    }
    if (category.id === 36) {
      const exampleCoursesposts = posts;
      console.log("examplecourses", exampleCoursesposts);
    }
  });
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

export default connect(Index);
