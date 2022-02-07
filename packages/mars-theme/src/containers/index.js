import React, { useEffect } from "react";
import { Global, css, connect } from "frontity";
import { createGlobalStyle } from "styled-components";
import Switch from "@frontity/components/switch";
import Header from "../components/Header/header.js";
import Loading from "../components/loading/loading";
import { getPostsGroupedByCategory } from "../components/PostbyCategory/posbycategory";
import { categoriesWidgetsHome } from "./config.js";
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
import InterativeLearning from "./new-ui/index";
import Contribution from "./howtocontribute/index";
const Globalstyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
 body,h1,h2,h3,h4,h5  {
    font-family:'Rubik',sans-serif;
}
p {
  font-family:'Open Sans',sans-serif;
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
  var routewithoutint = "";
  const splitafterint = /\d+/g;
  const data = state.source.get(state.router.link);
  const source_address = state.source.url;
  // Get the total posts to be displayed based for the current link
  const postsPerCategory = getPostsGroupedByCategory(state.source);
  const { next, previous } = state.source.get(state.router.link);
  let route = state.router.link;
  route = route.split("#")[0];
  if (data.isTaxonomy) {
    wpRoute = data.link.replace(/[^\d.]/g, "");
  }
  if (data.isPostType) {
    routewithoutint = data.link.split(splitafterint)[0];
    wpRoute = data.route.replace(/[^\d.]/g, "");
    console.log("withno digits", routewithoutint);
    route = route.split(splitafterint)[0];
    route = route + wpRoute + "/";
  }
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
        <BusinessProduct
          businessCategory={postsPerCategory}
          when={route === "/category/businessproduct/"}
          data={data}
        />
        <Providers
          when={route === "/category/providers/"}
          providerCategory={postsPerCategory}
          data={data}
        />
        <Ourmission
          when={route === "/category/ourmission/"}
          ourmissionCategory={postsPerCategory}
          data={data}
        />

        <SupportLearning
          when={route === "/category/supportlearning/"}
          learningCategory={postsPerCategory}
          data={data}
        />
        <PrivacyPage when={route === "/category/privacy-policy/"} />
        <Terms when={route === "/category/termscondition/"} />
        <SuccessStories when={route === "/category/successstories/"} />
        <SuccessStories
          when={route === "/category/successstories/page/" + wpRoute + "/"}
        />
        <Successdetail when={route === "/successstories/" + wpRoute + "/"} />
        <Blogs when={route === "/category/blogs/"} />
        <Blogs when={route === "/category/blogs/page/" + wpRoute + "/"} />
        <Blogdetail when={route === "/blogs/" + wpRoute + "/"} />
        <Thankyou when={route === "/thankyou/"} />
        <PressAwards when={route === "/category/pressawards/"} />
        <PressAwards
          when={route === "/category/pressawards/page/" + wpRoute + "/"}
        />
        <Pressdetail when={route === "/pressawards/" + wpRoute + "/"} />
        <Webinars
          when={route === "/category/webinars/"}
          webinarsCategory={postsPerCategory}
          data={data}
        />
        <InterativeLearning
          when={route === "/category/interactive-learning/"}
          interactiveCategory={postsPerCategory}
          data={data}
        />
        <Contribution when={route === "/category/contribution/"} />
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
      {state.router.link === "/InterativeLearning/" && <InterativeLearning />}
      {state.router.link === "/contribution/" && <Contribution />} */}
    </>
  );
};

export default connect(Index);
