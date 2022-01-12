import React, { useEffect } from "react";
import { Global, css, connect } from "frontity";
import { createGlobalStyle } from "styled-components";
import Switch from "@frontity/components/switch";
import Header from "../components/Header/header.js";
import Loading from "../components/loading/loading";
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
import Successdetail from "./successdetailpage/index";
import Blogs from "./blogs/index";
import Blogdetail from "./blogdetail/blogdetail.js";
import Thankyou from "./thankyoupage";
import PressAwards from "./pressawards/pressAwards";
import Pressdetail from "./pressdetail/pressDetail";
import ErrorPage from "./404page/index";
import Webinars from "./webinars/index";
import NewUi from "./new-ui/index";
import Contribution from "./howtocontribute/index";
const Globalstyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
 body,h1,h2,h3,h4,h5  {
    font-family:'Rubik',sans-serif;
}
p {
  font-family:'Open-Sans',sans-serif;
}
button {
  font-family:'Rubik',sans-serif;
}
a {
   font-family:'Rubik',sans-serif;
}
`;
const Index = ({ state, actions }) => {
  var wpRoute = "";
  const data = state.source.get(state.router.link);
  console.log("csddds ddsi:", data);
  if (data.isPostType) {
    wpRoute = data.route.replace(/[^\d.]/g, "");
  }
  let route = state.router.link;
  route = route.split("#")[0];
  // useEffect(() => {
  //   actions.source.fetch("/");
  //   // List.preload();
  // }, [actions.source]);
  return (
    <>
      <Globalstyle />
      <Global styles={css(bootstrapCss)} />
      <Header />
      <Switch>
        <QuickLinks when={route === "/"} />
        <CurrikiArchitecture when={route === "/category/architecture/"} />
        <DatabaseSchema when={route === "/category/database-schema/"} />
        <CurrikiPLatform
          when={route === "/category/deployingthecurrikiplatfrom/"}
        />
        <GeneralDiscussion when={route === "/generaldiscussion/"} />
        <CurrikiForum when={route === "/currikiforum/"} />
        <BusinessProduct when={route === "/businessproduct/"} />
        <Providers when={route === "/providers/"} />
        <Ourmission when={route === "/ourmission/"} />
        <SupportLearning when={route === "/supportlearning/"} />
        <PrivacyPage when={route === "/category/privacy-policy/"} />
        <Terms when={route === "/category/termscondition/"} />
        <SuccessStories when={route === "/category/successstories/"} />
        <Successdetail when={route === "/successstories/" + wpRoute + "/"} />
        <IntractiveLearning when={route === "/learning/"} />
        <Blogs when={route === "/category/blogs/"} />
        <Blogdetail when={route === "/blogs/" + wpRoute + "/"} />
        <Thankyou when={route === "/thankyou/"} />
        <PressAwards when={route === "/category/pressawards/"} />
        <Pressdetail when={route === "/pressawards/" + wpRoute + "/"} />
        <Webinars when={route === "/category/webinars/"} />
        <NewUi when={route === "/newui/"} />
        <Contribution when={route === "/contribution/"} />
        <ErrorPage when={data.is404} />
      </Switch>
      <Footer />
      {/* {state.router.link === "/" && <QuickLinks />}
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
      {state.router.link === "/successdetail/" && <Successdetail />}
      {state.router.link === "/learning/" && <IntractiveLearning />}
      {state.router.link === "/blogs/" && <Blogs />}
      {state.router.link === "/blogdetail/" && <Blogdetail />}
      {state.router.link === "/thankyou/" && <Thankyou />}
      {state.router.link === "/pressawards/" && <PressAwards />}
      {state.router.link === "/pressdetail/" && <Pressdetail />}
      {state.router.link === "/error/" && <ErrorPage />}
      {state.router.link === "/webinars/" && <Webinars />}
      {state.router.link === "/newui/" && <NewUi />}
      {state.router.link === "/contribution/" && <Contribution />} */}
    </>
  );
};

export default connect(Index);
