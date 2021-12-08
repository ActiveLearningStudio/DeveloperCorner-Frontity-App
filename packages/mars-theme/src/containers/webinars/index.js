import React from "react";
import { styled, css } from "frontity";
import webinarhero from "../../assets/images/webinarhero.svg";
import backgroundPic from "../../assets/images/Group153.png";
import vector1 from "../../assets/images/vector1.png";
import Banner from "../../components/banner/Styledbanner";
import pcimage from "../../assets/images/Rectangle109.png";
import plusicon from "../../assets/images/PLUS.svg";
import arrowIcon from "../../assets/images/yellow-arrow.png";
import playIcon from "../../assets/images/play.png";
import webinar1 from "../../assets/images/webinars/web1.png";
import webinar2 from "../../assets/images/webinars/web2.png";
import webinar3 from "../../assets/images/webinars/web3.png";
import webinar4 from "../../assets/images/webinars/web4.png";
import webinar5 from "../../assets/images/webinars/web5.png";
import webinar6 from "../../assets/images/webinars/web6.png";
import webinar7 from "../../assets/images/webinars/web7.png";
import webinar8 from "../../assets/images/webinars/web8.png";
const Index = () => {
  return (
    <div>
      <Banner title="Curriki Webinars" />
      <Container>
        <Content>
          <LeftCol>
            <Heading>Dive into CurrikiStudio </Heading>
            <Paragraph>Register for monthly webinar demo</Paragraph>
            <PrimaryButton>Register Now</PrimaryButton>
          </LeftCol>
          <RightCol>
            <img src={webinarhero} alt="" />
          </RightCol>
        </Content>
      </Container>
      <PastWebinars>
        <Container>
          <WebinarHeading>
            <h2>PAST WEBINARS</h2>
            <img src={plusicon} alt="" />
          </WebinarHeading>
          <CardContent>
            <Card>
              <CardHead
                css={css`
                  background: linear-gradient(
                      0deg,
                      rgba(40, 90, 165, 0.75),
                      rgba(40, 90, 165, 0.75)
                    ),
                    url("${webinar1}");
                `}
              >
                <div>
                  <img src={playIcon} alt="" />
                </div>
              </CardHead>
              <div className="card-inner-content">
                <CardHeading>
                  {" "}
                  Civicate Transforms Civics Videos Into Interactive Learning
                  Experience
                </CardHeading>
                <CardPara>February 23, 2021</CardPara>
                <CardBottom>
                  <a href="#">Watch webinar now</a>
                  <img src={arrowIcon} alt="" />
                </CardBottom>
              </div>
            </Card>
            <Card>
              <CardHead
                css={css`
                  background: linear-gradient(
                      0deg,
                      rgba(40, 90, 165, 0.75),
                      rgba(40, 90, 165, 0.75)
                    ),
                    url("${webinar2}");
                `}
              >
                <div>
                  <img src={playIcon} alt="" />
                </div>
              </CardHead>
              <div className="card-inner-content">
                <CardHeading>
                  {" "}
                  Using CurrikiStudio Interactions to Inspire Curiosity and
                  Critical Thinking
                </CardHeading>
                <CardPara>January 27, 2021</CardPara>
                <CardBottom>
                  <a href="#">Watch webinar now</a>
                  <img src={arrowIcon} alt="" />
                </CardBottom>
              </div>
            </Card>
            <Card>
              <CardHead
                css={css`
                  background: linear-gradient(
                      0deg,
                      rgba(40, 90, 165, 0.75),
                      rgba(40, 90, 165, 0.75)
                    ),
                    url("${webinar3}");
                `}
              >
                <div>
                  <img src={playIcon} alt="" />
                </div>
              </CardHead>
              <div className="card-inner-content">
                <CardHeading> Dialogue Cards vs. Flash Cards</CardHeading>
                <CardPara>December 09, 2020</CardPara>
                <CardBottom>
                  <a href="#">Watch webinar now</a>
                  <img src={arrowIcon} alt="" />
                </CardBottom>
              </div>
            </Card>
            <Card>
              <CardHead
                css={css`
                  background: linear-gradient(
                      0deg,
                      rgba(40, 90, 165, 0.75),
                      rgba(40, 90, 165, 0.75)
                    ),
                    url("${webinar4}");
                `}
              >
                <div>
                  <img src={playIcon} alt="" />
                </div>
              </CardHead>
              <div className="card-inner-content">
                <CardHeading> Hotspots are HOT!</CardHeading>
                <CardPara>December 02, 2020</CardPara>
                <CardBottom>
                  <a href="#">Watch webinar now</a>
                  <img src={arrowIcon} alt="" />
                </CardBottom>
              </div>
            </Card>
            <Card>
              <CardHead
                css={css`
                  background: linear-gradient(
                      0deg,
                      rgba(40, 90, 165, 0.75),
                      rgba(40, 90, 165, 0.75)
                    ),
                    url("${webinar5}");
                `}
              >
                <div>
                  <img src={playIcon} alt="" />
                </div>
              </CardHead>
              <div className="card-inner-content">
                <CardHeading>
                  {" "}
                  Creating Learning Activities with Drag and Drop
                </CardHeading>
                <CardPara>November 18, 2020</CardPara>
                <CardBottom>
                  <a href="#">Watch webinar now</a>
                  <img src={arrowIcon} alt="" />
                </CardBottom>
              </div>
            </Card>
            <Card>
              <CardHead
                css={css`
                  background: linear-gradient(
                      0deg,
                      rgba(40, 90, 165, 0.75),
                      rgba(40, 90, 165, 0.75)
                    ),
                    url("${webinar6}");
                `}
              >
                <div>
                  <img src={playIcon} alt="" />
                </div>
              </CardHead>
              <div className="card-inner-content">
                <CardHeading>
                  {" "}
                  Making Interactive Videos that Engage Like Never Before
                </CardHeading>
                <CardPara>November 11, 2020</CardPara>
                <CardBottom>
                  <a href="#">Watch webinar now</a>
                  <img src={arrowIcon} alt="" />
                </CardBottom>
              </div>
            </Card>
            <Card>
              <CardHead
                css={css`
                  background: linear-gradient(
                      0deg,
                      rgba(40, 90, 165, 0.75),
                      rgba(40, 90, 165, 0.75)
                    ),
                    url("${webinar7}");
                `}
              >
                <div>
                  <img src={playIcon} alt="" />
                </div>
              </CardHead>
              <div className="card-inner-content">
                <CardHeading>
                  {" "}
                  How to Create Interactive Experiences to Excite, Engage, and
                  Inspire Your Students
                </CardHeading>
                <CardPara>August 27, 2020</CardPara>
                <CardBottom>
                  <a href="#">Watch webinar now</a>
                  <img src={arrowIcon} alt="" />
                </CardBottom>
              </div>
            </Card>
            <Card>
              <CardHead
                css={css`
                  background: linear-gradient(
                      0deg,
                      rgba(40, 90, 165, 0.75),
                      rgba(40, 90, 165, 0.75)
                    ),
                    url("${webinar8}");
                `}
              >
                <div>
                  <img src={playIcon} alt="" />
                </div>
              </CardHead>
              <div className="card-inner-content">
                <CardHeading>
                  {" "}
                  Publishing Interactive Content with CurrikiGo
                </CardHeading>
                <CardPara>July 30, 2020</CardPara>
                <CardBottom>
                  <a href="#">Watch webinar now</a>
                  <img src={arrowIcon} alt="" />
                </CardBottom>
              </div>
            </Card>
          </CardContent>
        </Container>
      </PastWebinars>
    </div>
  );
};

export default Index;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
`;
const Content = styled.div`
  width: 1100px;
  max-width: 1100px;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
`;
const LeftCol = styled.div``;
const RightCol = styled.div``;
const Heading = styled.h2`
  width: 391px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: #084892;
  margin-bottom: 20px;
`;
const Paragraph = styled.p`
  width: 395px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: #515151;
  margin-bottom: 40px;
`;
const PrimaryButton = styled.button`
  padding: 10px 45px;
  background: #084892;
  border-radius: 25px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  color: #ffffff;
`;
const PastWebinars = styled.div`
  background: url(${backgroundPic});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -115px;
`;
const WebinarHeading = styled.div`
  display: flex;
  align-items: center;
  padding-top: 200px;
  margin-bottom: 60px;
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #084892;
    margin-right: 20px;
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;

  border-radius: 5px;
  background: #fff;
  margin-right: 25px;
  margin-bottom: 25px;
  box-shadow: 0px 2px 25px 5px rgba(81, 81, 81, 0.1);
  border-radius: 5px;
  .card-inner-content {
    padding: 14px;
  }
`;

const CardHead = styled.div`
  width: 260px;
  height: 200px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover !important;

  div {
    text-align: center;
    padding-top: 62px;
  }
`;
const CardHeading = styled.h5`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #084892;
  margin-top: 20px;
  width: 220px;
  height: 84px;
  margin-bottom: 10px;
`;
const CardPara = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 30px;
  color: #515151;
`;
const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-decoration-line: underline;

    color: #084892;
    margin-right: 20px;
  }
`;
