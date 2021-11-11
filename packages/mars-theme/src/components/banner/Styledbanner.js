import React from "react";
import { styled } from "frontity";
import heroImg from "../../assets/images/hero-section.png";

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

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0px 110px;
`;
