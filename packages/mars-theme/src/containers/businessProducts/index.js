import { React, useState } from "react";
import { Global, css, styled, connect } from "frontity";
import GetStarted from "./getStarted";
import Features from "./features";
import Creating from "./Creating";
import ContactUs from "./contactUs";
import Loading from "../../components/loading/loading";
import Courses from "./courses";
import Banner from "../../components/banner/Styledbanner";
import featurePic from "../../assets/images/Group153.png";
import externalCss from "./style.css";
const Index = (props) => {
  const { businessCategory, data } = props;
  let {
    getstartedpostdata,
    businessfeatureposts,
    trycurrikiposts,
    exampleCoursesposts,
  } = [];
  businessCategory.map(({ category, posts }) => {
    if (category) {
      if (category.id === 32) {
        return (getstartedpostdata = posts);
      }
      if (category.id === 33) {
        return (businessfeatureposts = posts);
      }
      if (category.id === 35) {
        return (trycurrikiposts = posts);
      }
      if (category.id === 36) {
        return (exampleCoursesposts = posts);
      }
    }
  });
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner title="Businesses" subheading="" para="" />
      {data.isFetching && <Loading />}
      {data.isReady && (
        <>
          <GetStarted getstartedposts={getstartedpostdata} />
          <Features featureposts={businessfeatureposts} />
          <Creating trycurrikiposts={trycurrikiposts} />
          <Courses exampleCoursesposts={exampleCoursesposts} />
          <ContactUs />
        </>
      )}
    </>
  );
};

export default connect(Index);
