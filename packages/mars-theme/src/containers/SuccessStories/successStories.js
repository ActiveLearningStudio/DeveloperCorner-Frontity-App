import React from "react";
import { styled } from "frontity";
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
            <Cardbody>
              <img src={image21} alt="rectangle-image"></img>
              <div className="card-inner-content">
                <p>
                  TCI Education Publishing Company Discovers New Ways to Reach
                  Students.
                </p>
                <Cardtext>
                  <p>Category:&nbsp; </p>
                  <p>Education Publishing</p>
                </Cardtext>
              </div>
            </Cardbody>
            <Cardlink>
              <a href="#">Read more</a>
              <img src={Arrow} alt="image"></img>
            </Cardlink>
          </Card>
          <Card>
            <Cardbody>
              <img src={Card2} alt="rectangle-image"></img>
              <div className="card-inner-content">
                <p>
                  LA Opera Brings Interactive and User-Friendly Digital
                  Educational Content to Inspire and Teach the Community
                </p>
                <Cardtext>
                  <p>Category:&nbsp; </p>
                  <p>Education Publishing</p>
                </Cardtext>
              </div>
            </Cardbody>
            <Cardlink>
              <a href="#">Read more</a>
              <img src={Arrow} alt="image"></img>
            </Cardlink>
          </Card>
          <Card>
            <Cardbody>
              <img src={Card3} alt="rectangle-image"></img>
              <div className="card-inner-content">
                <p>
                  Civicate Creates Iteractive Civics Videos for Remove Learning
                </p>
                <Cardtext>
                  <p>Category:&nbsp; </p>
                  <p>K-12 Education</p>
                </Cardtext>
              </div>
            </Cardbody>
            <Cardlink>
              <a href="#">Read more</a>
              <img src={Arrow} alt="image"></img>
            </Cardlink>
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
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
  @media screen and (max-width: 992px) {
    padding: 0px 70px;
  }
  @media screen and (max-width: 767px) {
    padding: 0px 40px;
  }
`;
const Headercontainer = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    width: 98%;
  }
`;
const Header = styled.h4`
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
  margin-right: -50px;
  margin-bottom: 73px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (max-width: 767px) {
    flex-direction: row;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 55px;
  max-width: 333px;

  background: #ffffff;
  box-shadow: 0px 2px 25px 5px rgba(81, 81, 81, 0.1);
  border-radius: 5px;
  @media screen and (max-width: 1024px) {
    margin: 0px 0px 40px 0px;
    max-width: 300px;
  }
  @media screen and (max-width: 767px) {
    max-width: 620px;
  }
`;
const Headerbar = styled.div`
  width: 100px;
  border-bottom: 3px solid #fa8f2c;
  transform: rotate(0deg);
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const Cardbody = styled.div`
        border-radius:5px;
          img{
            width:100%;
          }
        .card-inner-content{
          padding:14px;
          margin-bottom:0px;
        p {
            font-style:normal;
            font-weight-normal;
            font-size:18px;
            color:#515151;
            line-height:25px;
        }
      }
      `;
const Cardtext = styled.p`
  display: flex;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #285aa5;
    margin-bottom: 0 !important;
    margin-top: 0;
    color: #084892 !important;
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
  width: 100%;
  padding: 40px 0px 33px;
  a {
    color: #084892;
    font-size: 18px;
    line-height: 21px;
    font-family: Rubic;
    font-style: normal;
    text-decoration: underline;
    margin-left: 20px;
  }
  img {
    margin-right: 25px;
  }
`;
