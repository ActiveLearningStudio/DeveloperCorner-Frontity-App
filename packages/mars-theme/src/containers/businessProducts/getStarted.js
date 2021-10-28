import React from "react";
import { styled, connect } from "frontity";
import GetPic from "../../assets/images/Companies.png";
const GetStarted = () => {
  return (
    <StyleDiv>
      <div>
        <h2>
          Curriki has turnkey tool for you to{" "}
          <span> create,manage and deliver</span>
          interativve training content to employees, at scale
        </h2>
        <button>Get Started</button>
      </div>
      <img src={GetPic} alt="Get started picture" />
    </StyleDiv>
  );
};

export default connect(GetStarted);
const StyleDiv = styled.div`
  display: flex;

  div {
    margin-top: 50px;
    h2 {
      color: #084892;
      margin-bottom: 3rem;
      span {
        color: rgb(255, 177, 36);
      }
    }
    button {
      background: #084892;
      color: #fff;
      border-radius: 50px;
      border: none !important;
      padding: 5px 20px;
    }
  }
`;
