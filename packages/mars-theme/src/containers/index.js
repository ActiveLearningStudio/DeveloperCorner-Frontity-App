import React from "react";
import { Global, css, connect } from "frontity";
import { withRouter } from "react-router";
// import Switch from "@frontity/components/switch";
import { Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import Header from "../components/Header/header.js";
import Home from "../containers/home/index";
import Footer from "../components/footer/index";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
import GeneralDiscussion from "./generaldiscussion/index";
import CurrikiArchitecture from "./currikiarchitecture/index";
import DatabaseSchema from "./databaseschemas/index";
import CurrikiForum from "./currikiforum/index";
import CurrikiPLatform from "./deployingthecurrikiplatfrom/index";
// import DatabaseSchema from "./databaseschemas/index";
const Index = (state) => {
  const history = createMemoryHistory();
  return (
    <>
      <Global styles={css(bootstrapCss)} />
      {/* <Header />
      <Switch>
        <Home when="/" />
        <CurrikiForum when={state.router.link == "/nature"} />
      </Switch>
      <Footer /> */}
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            exact
            path="/currikiarchitecture"
            component={CurrikiArchitecture}
          ></Route>
          <Route path="/databaseschemas">
            <DatabaseSchema />
          </Route>
          <Route path="/deployingthecurrikiplatfrom">
            <CurrikiPLatform />
          </Route>
          <Route path="/currikiforum">
            <CurrikiForum />
          </Route>
          <Route path="/generaldiscussion">
            <GeneralDiscussion />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default Index;
