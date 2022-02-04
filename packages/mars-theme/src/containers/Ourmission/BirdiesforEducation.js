import React from "react";
import { styled, connect } from "frontity";
import BirdiesImg from "../../assets/images/ourMission/birdies.svg";
import HeartIcon from "../../assets/images/ourMission/heart1.svg";
import amazonpic from "../../assets/images/amazonpic.png";
const BirdiesforEducation = ({ birdiesposts, state, libraries }) => {
  const Html2React = libraries.html2react.Component;
  return (
    <Section>
      <Container>
        <Content>
          {/* <UpperRow>
            <LeftCol>
              <TopHeading>Birdies for Education</TopHeading>
              <Paragraph>
                Contribute through Birdies for Education – Maverick McNealy’s
                golf fundraiser for Curriki.
              </Paragraph>
              <Button>TAKE ME TO BIRDIES</Button>
            </LeftCol>
            <RightCol>
              <img
                src={BirdiesImg}
                className="birdiesImg"
                alt=""
                width="550px"
              />
            </RightCol>
          </UpperRow> */}

          {birdiesposts && birdiesposts.length > 0 ? (
            birdiesposts?.map((postitem) => {
              const featuremedia =
                state.source.attachment[postitem?.featured_media];
              // alert(featured_media);
              return (
                <BottomRow>
                  <LeftCol>
                    {featuremedia && (
                      <img src={featuremedia.source_url} alt="" />
                    )}
                    <HeaderContent>
                      <h6
                        dangerouslySetInnerHTML={{
                          __html: postitem.title.rendered,
                        }}
                      />
                      <BottomLine></BottomLine>
                    </HeaderContent>
                    <Paragraph>
                      <Html2React
                        className="item-para"
                        html={postitem.content.rendered}
                      />
                    </Paragraph>
                  </LeftCol>
                </BottomRow>
              );
            })
          ) : (
            <>
              <UpperRow>
                <LeftCol>
                  <TopHeading>Birdies for Education</TopHeading>
                  <Paragraph>
                    Contribute through Birdies for Education – Maverick
                    McNealy’s golf fundraiser for Curriki.
                  </Paragraph>
                  <Button>TAKE ME TO BIRDIES</Button>
                </LeftCol>
                <RightCol>
                  <img
                    src={BirdiesImg}
                    className="birdiesImg"
                    alt=""
                    width="550px"
                  />
                </RightCol>{" "}
              </UpperRow>
              <BottomRow>
                <LeftCol>
                  <img src={HeartIcon} alt="" />
                  <HeaderContent>
                    <h6>Donate Offline</h6>
                    <BottomLine></BottomLine>
                  </HeaderContent>
                  <Paragraph>
                    <p>
                      Send your tax-deductible contribution directly to us by
                      mailing it to: 20660 Stevens Creek Blvd/332 Cupertino, CA
                      95014
                    </p>
                  </Paragraph>
                </LeftCol>
                <RightCol>
                  <img src={amazonpic} className="amazonPic" alt="" />
                  <HeaderContent>
                    <h6>Alternative ways to contribute</h6>
                    <BottomLine></BottomLine>
                  </HeaderContent>

                  <Paragraph>
                    AmazonSmile is a simple and automatic way for you to support
                    Curriki every time you shop, at no cost to you.
                    <Link>AmazonSmile</Link>
                  </Paragraph>
                </RightCol>
              </BottomRow>
            </>
          )}
        </Content>
      </Container>
    </Section>
  );
};

export default connect(BirdiesforEducation);
const Section = styled.div``;
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
const Content = styled.div`
  padding: 80px 0px;
`;
const TopHeading = styled.h2`
  color: #084892;
  max-width: 314px;
  margin-bottom: 40px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

  color: #084892;
`;
const UpperRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;
`;
const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftCol = styled.div`
  h6 {
    color: #084892;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  button {
    background: #084892;
    color: #fff;
    font-weight: 700;
    border-radius: 25px;
    border: none !important;
    padding: 5px 20px;
    margin-top: 10px;
    @media screen and (max-width: 992px) {
      width: 200px;
      height: 40px;
    }
  }
`;
const RightCol = styled.div`
  h6 {
    color: #084892;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  img.birdiesImg {
    @media screen and (max-width: 1024px) {
      width: 100%;
      margin-right: 40px;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  img.amazonPic {
    @media screen and (max-width: 993px) {
      max-width: 551px;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`;
const HeaderContent = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-between;
  align-items: center;
  h6 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #084892;
  }
`;
const BottomLine = styled.div`
  width: 100px;
  border-bottom: 2px solid #ffb124;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Paragraph = styled.p`
  color: #515151;
  max-width: 514px;
  font-family: Open Sans;
  p {
    max-width: 400px;
    color: #515151;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 306px;
  }
  @media screen and (max-width: 768px) {
    max-width: 620px;
  }
`;
const Button = styled.button``;
const Link = styled.a`
  display: flex;
  margin-top: 15px;
  color: #084892;
`;
