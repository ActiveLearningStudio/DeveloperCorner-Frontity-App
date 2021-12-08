import React from "react";
import { Global, css, connect } from "frontity";
import Header from "../components/Header/header.js";
import IntractiveLearning from "./IntractiveLearning/index";
import Footer from "../components/footer/index";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
import GeneralDiscussion from "./generaldiscussion/index";
import CurrikiArchitecture from "./currikiarchitecture/index";
import DatabaseSchema from "./databaseschemas/index";
import CurrikiForum from "./currikiforum/index";
import CurrikiPLatform from "./deployingthecurrikiplatfrom/index";
import BusinessProduct from "./businessProducts/index";
import Ourmission from "./Ourmission/index";
import Providers from "./providers/index";
import SupportLearning from "./SuportLearning/index";
import PrivacyPage from "./PolicyPrivacy/index";
import Terms from "./termsCondition/index";
import SuccessStories from "./SuccessStories";
import QuickLinks from "./QuickLinks/index";
import Success from "./success/Success";
import Blogs from "./blogs/index";
import Blogdetail from "./blogdetail/blogdetail.js";
import ErrorPage from "./404page/index";
import Webinars from "./webinars/index";
const Index = ({ state }) => {
  return (
    <>
      <Global styles={css(bootstrapCss)} />
      <Header />

      {state.router.link === "/" && <QuickLinks />}
      {state.router.link === "/architecture/" && <CurrikiArchitecture />}
      {state.router.link === "/databaseschemas/" && <DatabaseSchema />}
      {state.router.link === "/deployingthecurrikiplatfrom/" && (
        <CurrikiPLatform />
      )}

      {state.router.link === "/generaldiscussion/" && <GeneralDiscussion />}
      {state.router.link === "/currikiforum/" && <CurrikiForum />}
      {state.router.link === "/businessproduct/" && <BusinessProduct />}
      {state.router.link === "/providers/" && <Providers />}
      {state.router.link === "/ourmission/" && <Ourmission />}
      {state.router.link === "/supportlearning/" && <SupportLearning />}
      {state.router.link === "/privacypolicy/" && <PrivacyPage />}
      {state.router.link === "/termscondition/" && <Terms />}
      {state.router.link === "/successstories/" && <SuccessStories />}
      {state.router.link === "/success/" && <Success />}
      {state.router.link === "/learning/" && <IntractiveLearning />}
      {state.router.link === "/blogs/" && <Blogs />}
      {state.router.link === "/blogdetail/" && <Blogdetail />}
      {state.router.link === "/error/" && <ErrorPage />}
      {state.router.link === "/webinars/" && <Webinars />}
      <Footer />
    </>
  );
};

export default connect(Index);
