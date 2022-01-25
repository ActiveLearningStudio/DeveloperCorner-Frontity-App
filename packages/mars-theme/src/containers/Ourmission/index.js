import React from "react";
import Banner from "../../components/banner/Styledbanner";
import Donation from "./donation";
import InnerBanner from "./InnerrBanner";
import Loading from "../../components/loading/loading";
import BirdiesforEducation from "./BirdiesforEducation";
import CurrikiSupporters from "./CurrikiSupporters";
import FrequentlyAsk from "./FrequentlyAsk";
const Index = (props) => {
  const { ourmissionCategory, data } = props;
  let {
    FrequentlyAskposts,
    CurrikiSupportersposts,
    birdiesposts,
    donationposts,
  } = [];
  ourmissionCategory.map(({ category, posts }) => {
    if (category) {
      if (category.id === 74) {
        return (donationposts = posts);
      }
      if (category.id === 71) {
        return (birdiesposts = posts);
      }
      if (category.id === 72) {
        return (CurrikiSupportersposts = posts);
      }
      if (category.id === 73) {
        return (FrequentlyAskposts = posts);
      }
    }
  });
  return (
    <>
      <Banner title="Support our mission" subheading="" para="" />
      {data.isFetching && <Loading />}
      {data.isReady && (
        <>
          <Donation donationposts={donationposts} />
          <InnerBanner />
          <BirdiesforEducation birdiesposts={birdiesposts} />
          <CurrikiSupporters supporterPosts={CurrikiSupportersposts} />
          <FrequentlyAsk FrequentlyAskposts={FrequentlyAskposts} />
        </>
      )}
    </>
  );
};

export default Index;
