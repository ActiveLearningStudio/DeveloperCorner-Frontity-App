import React from "react";
import { styled } from "frontity";
import globeImg from "../../assets/images/providers.png";
const Requestinfo = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Leftcol>
            <h2>
              Amplifying our collective <span>impact in education</span>
            </h2>
            <h3>
              JOIN US IN BUILDING THE NEXT GENERATION OF TOOLS THAT SUPPORT FREE
              AND OPEN EDUCATION
            </h3>
            <p>
              Curriki provides organizations from around the world with the
              tools to create our next generation learning experience. To
              support our customers, we are growing a network of professional
              Service providers with strong leadership, technology expertise,
              and comitment to scaling open, free, and quality education across
              the globe.
            </p>
            <button>REQUEST MORE INFORMATION</button>
          </Leftcol>
          <Rightcol>
            <img src={globeImg} alt="" />
          </Rightcol>
        </Content>
      </Container>
    </Section>
  );
};

export default Requestinfo;
const Section = styled.div``;

const Content = styled.div`
  display: flex;
  padding: 60px 0px;
`;

const Leftcol = styled.div`
  h2 {
    color: #084892;
    margin-bottom: 2rem;
    span {
      color: rgb(255, 177, 36);
    }
  }
  h3 {
    color: #084892;
    margin-bottom: 1rem;
  }
  p {
    color: #515151;
    margin-bottom: 2rem;
  }
  button {
    background: #084892;
    border: none;
    color: #fff;
    border-radius: 50px;
    padding: 3px 35px;
  }
`;

const Rightcol = styled.div``;
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0px 110px;
`;
