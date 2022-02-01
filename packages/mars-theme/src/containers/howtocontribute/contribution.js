import React from "react";
import { styled, css, connect } from "frontity";
import Alert from "react-bootstrap/Alert";
import Loading from "../../components/loading/loading";
import Linksheading from "../../components/QuickLinksHeading/index";
import Unsplash from "../../assets/images/unsplash.png";
import Unsplash1 from "../../assets/images/unsplash1.png";
const Contribution = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;
  return (
    <Container>
      <Content>
        <Linksheading titlebar="How to contribute" />
        {data.isFetching && <Loading />}
        {!data.isFetching && (
          <Content>
            {data.items ? (
              data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                const media = state.source.attachment[item.featured_media];
                return (
                  <ContributeArticle>
                    <div className="article-content">
                      {item?.title && (
                        <Heading
                          dangerouslySetInnerHTML={{
                            __html: item.title.rendered,
                          }}
                        />
                      )}
                      {item?.excerpt && (
                        <h4
                          dangerouslySetInnerHTML={{
                            __html: item.excerpt.rendered,
                          }}
                        />
                      )}
                    </div>
                    <div className="article-img">
                      <img src={media.source_url} alt="" />
                    </div>
                  </ContributeArticle>
                );
              })
            ) : (
              <ContributeArticle>
                <div className="article-content">
                  <Alert variant="success">
                    <Alert.Heading>
                      Hey there, No article found for the contribution{" "}
                    </Alert.Heading>
                    <p>
                      Aww yeah, you successfully read this important alert
                      message. Please go to admin panel and create blogs for
                      contribution category. When you will create any blog that
                      will be render here.
                    </p>
                    <hr />
                    <p className="mb-0">
                      Whenever you need to, be sure to use margin utilities to
                      keep things nice and tidy.
                    </p>
                  </Alert>
                </div>
              </ContributeArticle>
            )}

            {/* <ContributeArticle>
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
        </ContributeArticle> */}
          </Content>
        )}
      </Content>
    </Container>
  );
};

export default connect(Contribution);

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
    @media (max-width: 600px) {
      width: 100%;
    }
    // img {
    //   @media (max-width: 600px) {
    //     width: 100%;
    //   }
    // }
    img {
      width: 100%;
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
  .article-content {
    h4 {
      width: 833px;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #515151;
      @media (max-width: 1350px) {
        width: 100%;
      }
      @media (max-width: 1024px) {
        padding-right: 20px;
      }
      @media (max-width: 992px) {
        text-align: justify;
      }
    }
  }
`;
const Heading = styled.h3`
  font-family: "Rubik";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #084892;
`;
