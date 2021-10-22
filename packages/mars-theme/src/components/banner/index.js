import React from "react";
import { Global, css } from "frontity";
import heroImg from "../../assets/images/hero-section.png";
import bannerCss from "./style.css";

const Index = ({ children }) => {
  return (
    <>
      <Global styles={css(bannerCss)} />
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Index;
