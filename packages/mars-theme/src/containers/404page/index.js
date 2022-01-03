import React from "react";
import DonorImg from "../../assets/images/error.png";
import { styled, css } from "frontity";
const Index = () => {
  return (
    <Container>
      <Content>
        <Heading>404</Heading>
        <Subheading>
          The page you are looking for is <span>not found.</span>{" "}
        </Subheading>
        <Paragraph>
          The link you followed may be broken, or the page may have been remove.
        </Paragraph>
        <ErrorButtons>
          <PrimaryButton>Go home</PrimaryButton>
          <SecondaryButton>Back</SecondaryButton>
        </ErrorButtons>
      </Content>
    </Container>
  );
};

export default Index;
const Container = styled.div`
  max-width: 1440px;
  padding: 131px 146px 0px;
  margin: 0px auto -16px;
  background-image: url(${DonorImg});
  background-size: auto;
  background-position: right;
  background-repeat: no-repeat;
  @media screen and (max-width: 991px) {
    background: inherit;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 40px;
  }
`;
const Content = styled.div`
  max-width: 632px;
  padding-bottom: 120px;
  @media screen and (max-width: 475px) {
    padding-bottom: 72px;
  }
`;
const Heading = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 150px;
  line-height: 178px;
  color: #285aa5;
  font-weight: bold;
`;
const Subheading = styled.h2`
  font-style: normal;
  font-weight: 700;
  max-width: 632px;
  font-size: 32px;
  line-height: 38px;
  font-feature-settings: "case" on;
  color: #084892;
  span {
    color: rgb(255, 177, 36);
  }
`;
const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  font-feature-settings: "case" on;
  margin-bottom: 40px;
  max-width: 621px;
  color: #515151;
`;
const ErrorButtons = styled.div`
  @media screen and (max-width: 475px) {
    display: flex;
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  align-items: center;
  padding: 10px 45px;
  background: #084892;
  box-shadow: 0px 10px 20px -5px rgba(8, 72, 146, 0.35);
  border-radius: 25px;
  font-weight: bold;
  border: none !important;
  color: #ffffff !important;
  text-transform: uppercase;
  margin-right: 40px;
  @media screen and (max-width: 475px) {
    margin: 0px 0px 12px;
  }
`;

const SecondaryButton = styled.button`
  padding: 10px 45px;
  border-radius: 25px;
  background: transparent;
  border: 1px solid #084892;
  font-style: normal;
  font-weight: bold;
  color: #084892;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
`;
