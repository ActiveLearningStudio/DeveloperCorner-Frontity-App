import React from "react";
import { styled } from "frontity";
import { Container } from "react-bootstrap";
import image21 from "../../assets/images/image21.png";
import Arrow from "../../assets/images/Arrow.svg";
import Group2 from "../../assets/images/Group2.png";
import Card2 from "../../assets/images/Card2.png";
import Card3 from "../../assets/images/Card3.png";

const SuccessStories = () => {
  return (
    <Section>
      <Container>
        <Headercontainer>
          <Header>
            <h4>Educators</h4>
            <Headerbar></Headerbar>
          </Header>
          <Header>
            <h4>Businesses</h4>
            <Headerbar></Headerbar>
          </Header>
        </Headercontainer>
        <Cardcontent>
          <Card>
            <img src={image21} alt="rectangle-image"></img>
            <Cardbody>
              <p>
                TCI Education Publishing Company Discovers New Ways to Reach.
              </p>
              <Cardtext>
                <p>Category: </p>
                <p>Education Publishing</p>
              </Cardtext>
              <Cardlink>
                <a href="#">Read more</a>
                <img src={Arrow} alt="image"></img>
              </Cardlink>
            </Cardbody>
          </Card>
          <Card>
            <img src={Card2} alt="rectangle-image"></img>
            <Cardbody>
              <p>
                LA Opera Brings Interative Civicate Creates iteractive Civics
                Videos.
              </p>
              <Cardtext>
                <p>Category: </p>
                <p>Education Publishing</p>
              </Cardtext>
              <Cardlink>
                <a href="#">Read more</a>
                <img src={Arrow} alt="image"></img>
              </Cardlink>
            </Cardbody>
          </Card>
          <Card>
            <img src={Card3} alt="rectangle-image"></img>
            <Cardbody>
              <p>
                Civicate Creates iteractive Civics Videos for Remove Learning
              </p>
              <Cardtext>
                <p>Category: </p>
                <p>K-12 Education</p>
              </Cardtext>
              <Cardlink>
                <a href="#">Read more</a>
                <img src={Arrow} alt="image"></img>
              </Cardlink>
            </Cardbody>
          </Card>
        </Cardcontent>
      </Container>
    </Section>
  );
};

export default SuccessStories;
const Section = styled.div`
  margin-top: 85px;
`;
const Headercontainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
`;
const Header = styled.div`
        max-width:333px;
        display:flex;
        margin-bottom:50px;
        align-items:center;

        h4 {
            color:#084892;
            font-weight:500;
            margin-right:24px;
            font-size-32px;
        }
        `;
const Cardcontent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  margin-right: 55px;
  max-width: 333px;
  margin-bottom: 73px;
  background: #ffffff;
  box-shadow: 0px 2px 25px 5px rgba(81, 81, 81, 0.1);
  border-radius: 5px;
`;

const Headerbar = styled.div`
  width: 100px;
  border-bottom: 3px solid #fa8f2c;
  transform: rotate(0deg);
`;

const Cardbody = styled.div`
        border-radius:5px;
        padding-left:20px;

        p {
            font family:Open-Sans;
            font-style:normal;
            font-weight-normal;
            font-size:18px;
            color:#515151;
            line-height:25px;
            margin-top:30px;

        }
      `;
const Cardtext = styled.div`
  display: flex;

  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #285aa5;
    margin-bottom: 0 !important;
    margin-top: 0;
  }
`;
const Cardlink = styled.div`
  background-image: url(${Group2});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 62px 0 33px;

  a {
    color: #084892;
    font-size: 18px;
    line-height: 21px;
    font-family: Rubic;
    font-style: normal;
    text-decoration: underline;
  }
  img {
    margin-right: 25px;
  }
`;
