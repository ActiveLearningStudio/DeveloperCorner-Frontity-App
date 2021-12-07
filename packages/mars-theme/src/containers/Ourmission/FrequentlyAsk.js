import React from "react";
import { styled } from "frontity";
import GlobalCss from "../../assets/css/fonts.css";
// import { Accordion, Card } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import ArrowPath from "../../assets/images/ArrowPath.png";
const FrequentlyAsk = () => {
  return (
    <Section>
      <Container>
        <HeaderContent>
          <Heading>Frequently Asked Questions</Heading>
          <BottomLine></BottomLine>
        </HeaderContent>
        <Content>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Is my donation tax deductible?</Accordion.Header>
    <Accordion.Body>
    All donations are 100% tax-deductible. Curriki is a U.S. tax exempt organization under Internal Revenue
    Service Act Section 501(c)(3). Our Tax ID number is 20-3478467.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Can I speak with someone about a wire transfer or other type of gift?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Is my donation tax deductible?</Accordion.Header>
    <Accordion.Body>
    All donations are 100% tax-deductible. Curriki is a U.S. tax exempt organization under Internal Revenue
    Service Act Section 501(c)(3). Our Tax ID number is 20-3478467.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Is my donation tax deductible?</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

        </Content>
      </Container>
    </Section>
  );
};

export default FrequentlyAsk;
const Section = styled.div``;
const Container = styled.div`
max-width:1440px;
padding:0px 146px;
`;
const Content = styled.div`
  padding: 35px 0 70px 0px;
  Card {
    color: #084892;
  }
  .accordion {
    .accordion-item {
      .accordion-header {
        box-shadow: 0px 10px 20px -5px rgba(8, 72, 146, 0.35) !important; 
        background: linear-gradient(0deg, #084892, #084892) !important;
        border-radius: 5px !important;
      }
    }
  }
`;
const HeaderContent = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display:block;
  }
`;
const AccordionTitle = styled.div`
  color: #fff;
  background: linear-gradient(0deg, #084892, #084892);
  box-shadow: 0px 10px 20px -5px rgba (8,  72,  146,  0.35);
  border-radius: 5px;
`;
const Heading = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 58px;
  color: #084892;
`;
const BottomLine = styled.div`
  width: 100px;
  border-bottom: 2px solid #ffb124;
  @media screen and (max-width: 768px) {
    display:none;
  }
`;
const Paragraph = styled.div`
  color: #515151;
  font-family: Open Sans;
`;
