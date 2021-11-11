import React from "react";
import { styled } from "frontity";
import plusicon from "../../assets/images/PLUS.svg";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import Arrow from "../../assets/images/Arrow.svg";
import laopera from "../../assets/images/laopera.png";
const Courses = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          <Title>SEE EXMPLES COURSES FROM BUSINESS PARTENER</Title>
          <img src={plusicon} alt="plus icon" />
        </SectionTitle>
        <CardContent>
          <Card>
            <img src={laopera} alt="" />

            <h3>LA Opera</h3>
            <p>
              The LA opera is commited t providing access to quality opera music
              for all. Learming is a passion, and so is opera.Lorem ipsum
              statment for dummy data
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
              The LA opera is commited t providing access to quality opera music
              for all. Learming is a passion, and so is opera.Lorem ipsum
              statment for dummy data
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
              The LA opera is commited t providing access to quality opera music
              for all. Learming is a passion, and so is opera.Lorem ipsum
              statment for dummy data
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

export default Courses;
const Section = styled.div`
  margin-top: 50px;
  height: 620px;
`;
const SectionTitle = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
`;
const Title = styled.h2`
  margin-right: 15px;
  color: #084892;
`;
const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 340px;
  height: 470px;
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
    color: #515151;
  }
  a {
    color: #084892;
    font-weight: bold;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0px 110px;
`;
