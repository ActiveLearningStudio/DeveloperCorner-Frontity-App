import React from "react";
import { Global, css, connect } from "frontity";
import Header from "../components/Header/header.js";
import Home from "../containers/home/index";
import Footer from "../components/footer/index";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
import GeneralDiscussion from "./generaldiscussion/index";
import CurrikiArchitecture from "./currikiarchitecture/index";
import DatabaseSchema from "./databaseschemas/index";
import CurrikiForum from "./currikiforum/index";
import CurrikiPLatform from "./deployingthecurrikiplatfrom/index";
import BusinessProduct from "./businessProducts/index";
import Providers from "./providers/index";
const Index = ({ state }) => {
  return (
    <>
      <Global styles={css(bootstrapCss)} />
      <Header />

      {state.router.link === "/" && <Home />}
      {state.router.link === "/currikiarchitecture/" && <CurrikiArchitecture />}
      {state.router.link === "/databaseschemas/" && <DatabaseSchema />}
      {state.router.link === "/deployingthecurrikiplatfrom/" && (
        <CurrikiPLatform />
      )}

      {state.router.link === "/generaldiscussion/" && <GeneralDiscussion />}
      {state.router.link === "/currikiforum/" && <CurrikiForum />}
      {state.router.link === "/businessproduct/" && <BusinessProduct />}
      {state.router.link === "/providers/" && <Providers />}
      <Footer />
    </>
  );
};

export default connect(Index);
