import React from "react";
import Achitect from "../../assets/images/c1.svg";
import Schema from "../../assets/images/c2.svg";
import DeployImg from "../../assets/images/c3.svg";
import Arrow from "../../assets/images/Arrow.svg";
import ProductBackground from "../../assets/images/busi-background.svg";
const BusinessProduct = () => {
  return (
    <div
      className="bussiness-product-section"
      style={{ backgroundImage: "url(" + ProductBackground + ")" }}
    >
      <div className="container">
        <div className="bussiness-product-title">
          <h2>Products for developers and businesses</h2>
          <p>
            Take a closer look at the products we offer for developers and
            businesses
          </p>
        </div>
        <div className="bussiness-card-content">
          <div className="bussiness-card mr-94">
            <div className="bussiness-card-detail">
              <img src={Achitect} alt="development bussiness" />
              <h2>ARCHITECTURE</h2>
              <p>
                What Is CurrikiStudio?
                <br /> How Does it Work?
                <br /> How is Content Created and Managed? How is Data
                Persisted?
              </p>
              <div className="bussiness-card-footer">
                <a href="www.curriki.org">Learn More</a>
                <img src={Arrow} alt="learn- more"></img>
              </div>
            </div>
          </div>

          <div className="bussiness-card mr-94">
            <div className="bussiness-card-detail">
              <img src={Schema} alt="development bussiness" />
              <h2>DATABASE SCHEME </h2>
              <p>
                What is Curriki’s Major Schemas?
                <br /> Sub schemas:
                <br /> Authoring Flow, Teams, Projects, Playlists, Activities,
                H5P.
              </p>
              <div className="bussiness-card-footer">
                <a href="www.curriki.org">Learn More</a>
                <img src={Arrow} alt="learn- more"></img>
              </div>
            </div>
          </div>

          <div className="bussiness-card">
            <div className="bussiness-card-detail">
              <img src={DeployImg} alt="development bussiness" />
              <h2>DEPLOYMENT</h2>
              <p>
                What is CurrikiStudio’s Topology?
                <br /> How Can I Deploy the Platform? Where Can I Deploy the
                Infrastructure? What is the Recommended Sizing?
              </p>
              <div className="bussiness-card-footer">
                <a href="www.curriki.org">Learn More</a>
                <img src={Arrow} alt="learn- more"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProduct;
