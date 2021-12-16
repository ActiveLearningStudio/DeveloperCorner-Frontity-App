import React from "react";
import { styled } from "frontity";
import plusicon from "../../assets/images/PLUS.svg";
const LearnImpact = () => {
  return (
    <Container>
      <Content>
        <HeadingContent>
          <Topheading>
            <Heading>LEARN</Heading>
            <img src={plusicon} alt="" />
          </Topheading>

          <Subheading>OUR IMPACT</Subheading>
        </HeadingContent>
        <InnerContent>
          <LeftCol>
            <Colheading>Curriki suites release notes</Colheading>
            <Paragraph>
              Curious as to what we’ve already built, how we are building it,
              and what is next? Our publish product roadmap and documentation
              provides our planned path towards what our team is working on and
              the value it brings to education.
            </Paragraph>
            <Button>See public jira roadmap</Button>
          </LeftCol>
          <RightCol>
            <Colheading>See the impact we make</Colheading>
            <Paragraph>
              We’re proud of the impact we’ve made in education but we’re only
              doing so because of our great partners. Check out our reference
              implementations to see how Curriki and our suite of tools are
              driving innovation in education.
            </Paragraph>
            <Button>Success stories</Button>
          </RightCol>
        </InnerContent>
      </Content>
    </Container>
  );
};

export default LearnImpact;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
`;
const Content = styled.div`
  padding: 50px 0px 80px 0px;
`;
const HeadingContent = styled.div`
  @media screen and (max-width: 576px) {
    padding: 0px 20px;
  }
`;
const Topheading = styled.div`
  display: flex;
  align-items: center;
`;
const Heading = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
  margin-right: 20px;
  text-transform: uppercase;
`;

const Subheading = styled.span`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
`;
const Colheading = styled.h3`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: #084892;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const LeftCol = styled.div``;
const RightCol = styled.div``;
const Paragraph = styled.p`
  width: 500px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #515151;
  max-width: 99%;
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    margin-bottom: 60px;
  }
  @media screen and (max-width: 992px) {
    margin-bottom: 40px;
  }
`;
const Button = styled.button`
  padding: 8px 80px;
  background: #084892;
  box-shadow: 0px 10px 20px -5px rgb(8 72 146 / 35%);
  border-radius: 25px;
  font-weight: bold;
  color: #fff;
  border: 1px solid #084892;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    padding: 8px 60px;
  }
  @media screen and (max-width: 576px) {
    padding: 8px 40px;
  }
`;
