import React from "react";
import { Global, css, styled, connect } from "frontity";
import GetStarted from "./getStarted";
import Features from "./features";
import Creating from "./Creating";
import ContactUs from "./contactUs";
import Courses from "./courses";
import { getPostsGroupedByCategory } from "../../components/PostbyCategory/posbycategory";
import Banner from "../../components/banner/Styledbanner";
import featurePic from "../../assets/images/Group153.png";
import externalCss from "./style.css";
const Index = ({ state, actions, libraries }) => {
  const postsPerCategory = getPostsGroupedByCategory(state.source);
  console.log("postbycategory", postsPerCategory);
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
