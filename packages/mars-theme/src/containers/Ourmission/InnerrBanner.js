import React from "react";
import { styled } from "frontity";
import heroImg from "../../assets/images/hero-section.png";
import { Container } from "react-bootstrap";
const Banner = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Heading>
            {" "}
            Be part of curriki <span> ground breaking</span> work
          </Heading>
          <Button>Donate</Button>
        </Content>
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
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Heading = styled.h2`
color: #fff;
  font-weight: bold;
  font-family;rubic;
  span{
    color: rgb(255, 177, 36);
  }
`;
const Button = styled.button`
  background-color: #084892 !important;
  color: #fff !important;
  border-color: #fff;

  font-weight: bold !important;
  padding: 2px 30px;
  border-radius: 32px !important;
`;
