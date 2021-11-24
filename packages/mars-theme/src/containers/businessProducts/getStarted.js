import React from "react";
import { styled, connect } from "frontity";
import { Container } from "react-bootstrap";
import PrimaryButton from "../../StyledComponent/PrimaryButton";
import GetPic from "../../assets/images/Companies.png";
const GetStarted = () => {
  return (
    <Container>
      <StyleDiv>
        <div>
          <h2>
            Curriki has turnkey tool for you to{" "}
            <span> create,manage and deliver </span>
            interativve training content to employes, at scale
          </h2>
          <Button title="Get Started">Get Started</Button>
        </div>
        <InnerDiv>
          <img src={GetPic} alt="Get started picture" />
        </InnerDiv>
      </StyleDiv>
    </Container>
  );
};

export default connect(GetStarted);
const StyleDiv = styled.div`
  display: flex;
  padding: 20px 0px;

  div {
    margin-top: 50px;
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
      color: #084892;
      margin-bottom: 3rem;
      span {
        color: rgb(255, 177, 36);
      }
    }
  }
`;
const Button = styled.button`
  width: 212px;
  height: 45px;
  background: #084892;
  font-family: rubik;
  color: #fff;
  border: 1px solid #084892;
  box-shadow: 0px 10px 20px -5px rgb(8 72 146 / 35%);
  border-radius: 25px;
  @media screen and (max-width: 1200px) {
    margin-bottom: 70px;
  }
`;
const InnerDiv = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
