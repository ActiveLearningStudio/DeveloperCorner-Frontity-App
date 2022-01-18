import React from "react";
import { styled, connect } from "frontity";

import plusicon from "../../assets/images/PLUS.svg";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import Arrow from "../../assets/images/Arrow.svg";
import laopera from "../../assets/images/laopera.png";
const Courses = ({ state }) => {
  const Courses = state.source.get("/category/example-courses/");
  console.log("courses", Courses);
  return (
    <Section>
      <Container>
        <SectionTitle>
          <Title>SEE EXAMPLE COURSES FROM BUSINESS PARTNERS</Title>
          <img src={plusicon} alt="plus icon" />
        </SectionTitle>
        <CardContent>
          <Card>
            <img src={laopera} alt="" />

            <h3>LA Opera</h3>
            <p>
              The LA Opera is committed to providing access to quality opera
              music for all. Learning is a passion, and so is opera …
            </p>
            <Footer>
              <a href="#">See Project</a>
              <img src={Arrow} alt="" />
            </Footer>
          </Card>
          <Card>
            <img src={image1} alt="" />
            <h3>ORACLE</h3>
            <p>
              Lorem ipsum dolor sit amet, adipiscing consectetur adipiscing
              elit.
            </p>
            <Footer>
              <a href="#">See Project</a>
              <img src={Arrow} alt="" />
            </Footer>
          </Card>
          <Card>
            <img src={image2} alt="" />
            <h3>DEJU</h3>
            <p>
              Lorem ipsum dolor sit amet, adipiscing consectetur adipiscing
              elit.
            </p>
            <Footer>
              <a href="#">See Project</a>
              <img src={Arrow} alt="" />
            </Footer>
          </Card>
        </CardContent>
      </Container>
    </Section>
  );
};

export default connect(Courses);
const Section = styled.div`
  margin-top: 50px;
`;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
  margin: auto;
  @media screen and (max-width: 1200px) {
    padding: 0px 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 40px;
  }
`;
const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const Title = styled.h2`
  margin-right: 15px;
  color: #084892;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
`;
const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Card = styled.div`
  max-width: 340px;
  box-shadow: 0px 2px 25px 5px rgba(81, 81, 81, 0.1);
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    color: #084892;
  }
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #515151;
  }
  a {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    color: #084892;
  }
  @media screen and (max-width: 1202px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 248px;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
