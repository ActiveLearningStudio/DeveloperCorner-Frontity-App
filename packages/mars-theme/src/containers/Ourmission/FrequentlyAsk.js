import React from "react";
import { styled } from "frontity";
import GlobalCss from "../../assets/css/fonts.css";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
const FrequentlyAsk = () => {
  return (
    <Section>
      <Container>
        <Heading>Frequently Asked Questions</Heading>
      </Container>
    </Section>
  );
};

export default FrequentlyAsk;
const Section = styled.div``;

const Heading = styled.h2`
  max-width: 1440px;
  margin: auto;
  padding: 0px 110px;
`;
