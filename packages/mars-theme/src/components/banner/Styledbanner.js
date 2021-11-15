import React from "react";
import { styled } from "frontity";
import heroImg from "../../assets/images/hero-section.png";
import { Container } from "react-bootstrap";
const Banner = ({ title }) => {
  return (
    <Section>
      <Container>
        <Heading>{title}</Heading>
      </Container>
    </Section>
  );
};

export default Banner;
const Section = styled.div`
  background: url("${heroImg}");
  widht: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
`;
const Heading = styled.h2`
  color: rgb(255, 177, 36);
  font-weight: bold;
  font-family;rubic;
`;
