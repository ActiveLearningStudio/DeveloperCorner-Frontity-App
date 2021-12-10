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
          <PrimaryButton>GO home</PrimaryButton>
          <SecondaryButton>Back</SecondaryButton>
        </ErrorButtons>
      </Content>
      <ImgContent>
        <img src={DonorImg} alt="" />
      </ImgContent>
    </Container>
  );
};

export default Index;
const Container = styled.div`
  max-width: 1440px;
  padding: 100px 0px 0px 146px;
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div`
  max-width: 632px;
  margin-bottom: 120px;
`;
const Heading = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 150px;
  line-height: 178px;
  color: #285aa5;
  font-weight: bold;
`;
const Subheading = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 700;
  width:597px;
  font-size: 32px;
  line-height: 38px;
  font-feature-settings: "case" on;
  color: #084892;
  span {
    color: rgb(255, 177, 36);
  }
`;
const Paragraph = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  font-feature-settings: "case" on;
  margin-bottom: 40px;
  width:597px;
  color: #515151;
`;
const ErrorButtons = styled.div``;

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
`;

const SecondaryButton = styled.button`
  padding: 10px 45px;
  border-radius: 25px;
  background: transparent;
  border: 1px solid #084892;
  font-family: Rubik
  font-style: normal;
  font-weight: bold;
  color:#084892;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
`;
const ImgContent = styled.div``;
