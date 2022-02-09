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
import {
  GeneralDiscussion,
  CurrikiArchitecture,
  DatabaseSchema,
  CurrikiForum,
  CurrikiPLatform,
  BusinessProduct,
  Ourmission,
  Providers,
  SupportLearning,
  PrivacyPage,
  Terms,
  SuccessStories,
  QuickLinks,
  Successdetail,
  Blogs,
  Blogdetail,
  Thankyou,
  PressAwards,
  Pressdetail,
  ErrorPage,
  Webinars,
  InterativeLearning,
  Contribution,
} from "./export";
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
    </>
  );
};

export default connect(Index);
