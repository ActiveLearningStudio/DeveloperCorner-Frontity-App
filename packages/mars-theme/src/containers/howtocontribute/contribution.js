import React from "react";
import { styled, css } from "frontity";
import Linksheading from "../../components/QuickLinksHeading/index";
import Unsplash from "../../assets/images/unsplash.png";
import Unsplash1 from "../../assets/images/unsplash1.png";
const Contribution = () => {
  return (
    <Container>
      <Content>
        <Linksheading titlebar="How to contribute" />
        <ContributeArticle>
          <div className="article-content">
            <Heading>Cursus neque eget a bibendum.</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              convallis integer viverra ut. Auctor faucibus eu pellentesque arcu
              tortor, porttitor. Blandit non dolor suscipit mauris.
            </Paragraph>
          </div>
          <div className="article-img">
            <img src={Unsplash} alt="" />
          </div>
        </ContributeArticle>
        <ContributeArticle>
          <div className="article-content">
            <Heading>Cursus neque eget a bibendum.</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              convallis integer viverra ut. Auctor faucibus eu pellentesque arcu
              tortor, porttitor. Blandit non dolor suscipit mauris. Vulputate ut
              est sed interdum in sodales. Consequat a neque lacinia consequat
              arcu diam eu pulvinar. Purus morbi nisl nec nulla ultricies
              faucibus mauris. Nam cursus auctor velit quisque dignissim
              pulvinar id quam. Odio.
            </Paragraph>
          </div>
          <div className="article-img">
            <img src={Unsplash1} alt="" />
          </div>
        </ContributeArticle>
        <ContributeArticle>
          <div className="article-content">
            <Heading>Cursus neque eget a bibendum.</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              convallis integer viverra ut. Auctor faucibus eu pellentesque arcu
              tortor, porttitor. Blandit non dolor suscipit mauris. Vulputate ut
              est sed interdum in sodales. Consequat a neque lacinia consequat
              arcu diam eu pulvinar. Purus morbi nisl nec nulla ultricies
              faucibus mauris. Nam cursus auctor velit quisque dignissim
              pulvinar id quam. Odio.
            </Paragraph>
          </div>
          <div className="article-img">
            <button>CTA button</button>
          </div>
        </ContributeArticle>
      </Content>
    </Container>
  );
};

export default Contribution;

const Container = styled.div`
  max-width: 1200px;
`;
const Content = styled.div`
  padding: 30px 60px 70px;
  @media (max-width: 980px) {
    padding: 30px 20px 70px;
  }
`;
const ContributeArticle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  max-width: 1008px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
  .article-img {
    width: 100%;
    img {
      @media (max-width: 600px) {
        width: 100%;
      }
    }
  }
  .article-img {
    button {
      border: 1px solid #084892;
      width: 124px;
      height: 32px;
      background: #084892;
      color: #ffffff;
      box-shadow: 0px 2px 8px 1px rgba(8, 72, 146, 0.16);
      border-radius: 16px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Heading = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #084892;
`;
const Paragraph = styled.p`
  max-width: 833px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #515151;
  @media (max-width: 1024px) {
    margin-right: 20px;
  }
  @media (max-width: 992px) {
    text-align: justify;
  }
`;
