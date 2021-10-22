import React from "react";
import { Global, css } from "frontity";
import externalCss from "./style.css";
import Button from "react-bootstrap/Button";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
const index = () => {
  return (
    <>
      <Global styles={css(externalCss)} />
      <Global styles={css(bootstrapCss)} />
      <div className="raja" style={{ color: "red" }}>
        this is parent
        <div className="col">
          <h2>pakistan</h2>
        </div>
      </div>
      <Button variant="primary">Secondary</Button>
    </>
  );
};

export default index;
