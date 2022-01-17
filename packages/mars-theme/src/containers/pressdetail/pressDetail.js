import React from "react";
import Banner from "../../components/banner/Styledbanner";
import Linked from "../../components/Header/link";
import { styled, connect } from "frontity";
import facebookicon from "../../assets/images/social-icons/facebook.png";
import twittericon from "../../assets/images/social-icons/twitter.png";
import linkedicon from "../../assets/images/social-icons/linked-in.png";
import moreicon from "../../assets/images/social-icons/more-icon.png";
import pressBackground from "../../assets/images/pressBackground.png";
import arrowicon from "../../assets/images/yellow-arrow.png";
const PressDetail = ({ state, libraries }) => {
  const RecentPosts = state.source.get("/category/pressawards/");
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const featuredmedia = state.source.attachment[post.featured_media];
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  return (
    <div>
      <Banner title="Press" />
      <Container>
        <BlogContent>
          <div className="updates-content">
            {post.excerpt && (
              <Heading
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            )}
            <Paragraph>
              <span>By {author.name}</span>
              <span>{date.toDateString()}</span>
              <span>News &gt; </span>
              <span>0 Comments</span>
            </Paragraph>
            <SocialLinks>
              <div>
                {" "}
                <img src={facebookicon} alt="" />
              </div>
              <div>
                {" "}
                <img src={twittericon} alt="" />
              </div>
              <div>
                {" "}
                <img src={linkedicon} alt="" />
              </div>
              <div>
                {" "}
                <img src={moreicon} alt="" />
              </div>
            </SocialLinks>
          </div>
          <div className="curriki-updates-image">
            <img src={featuredmedia.source_url} alt="" />
          </div>
        </BlogContent>
      </Container>
      <BlogSection>
        <Container>
          <DescriptionContent>
            <Description>
              {post.content ? (
                <Html2React html={post.content.rendered} />
              ) : (
                <p>Details are not avaialable for this post</p>
              )}
            </Description>
            <RecentPost>
              <div className="recent-post-content">
                <h2>Recent Posts</h2>
                {RecentPosts.items.map(({ type, id }) => {
                  const item = state.source[type][id];
                  return (
                    <div className="recent-post-detail">
                      <Linked link={item.link}>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.excerpt.rendered,
                          }}
                        />
                      </Linked>
                      <div className="article-link">
                        <Linked link={item.link}>
                          <a>Read article</a>
                        </Linked>
                        <Linked link={item.link}>
                          <img src={arrowicon} alt="" />
                        </Linked>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="recent-post-detail">
                  <p>
                    Curriki Answers the Call from School Districts,
                    Universities, and Nonprofits―Launches CurrikiStudio AWS
                    CloudFormation Template
                  </p>
                  <div className="article-link">
                    <a>Read article</a>
                    <img src={arrowicon} alt="" />
                  </div>
                </div> */}
              </div>
              <div className="archives-heading">
                <h4>archives</h4>
                <div className="inner-link-div">
                  <a href="#">April 2021</a>
                  <a href="#">February 2021</a>
                  <a href="#">December 2020</a>
                  <a href="#">November 2020</a>
                  <a href="#">September 2020</a>
                  <a href="#">August 2020</a>
                  <a href="#">July 2020</a>
                  <a href="#">June 2020</a>
                  <a href="#">March 2020</a>
                  <a href="#">November 2019</a>
                  <a href="#">September 2019</a>
                  <a href="#">April 2019</a>
                </div>
              </div>
            </RecentPost>
          </DescriptionContent>
        </Container>
      </BlogSection>
    </div>
  );
};

export default connect(PressDetail);
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
  @media screen and (max-width: 380px) {
    padding: 0px 20px;
  }
`;
const BlogSection = styled.div`
  width: 100%;
  background: url(${pressBackground});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -190px;

  @media screen and (max-width: 600px) {
    margin-top: -240px;
  }
  @media screen and (max-width: 480px) {
    margin-top: -280px;
  }
`;
const BlogContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 100px;
  .curriki-updates-image {
    img {
      width: 410px;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`;
const Heading = styled.h4`
  width: 700px;
  max-width: 700px;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-transform: capitalize;
    color: #084892;
    margin-bottom: 30px;
    span {
      color: #ffb124;
    }
  }
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  span {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    color: #084892;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  width: 121px;
  justify-content: space-between;
  div {
    margin-right: 8px;
  }
`;
const DescriptionContent = styled.div`
  display: flex;
  padding-top: 200px;
  @media screen and (max-width: 600px) {
    padding-top: 300px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 340px;
  }
  @media screen and (max-width: 380px) {
    padding-top: 420px;
  }
`;
const Description = styled.div`
  width: 787px;
  margin-bottom: 106px;
  .article-desc-image {
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
  .updates-list-para {
    .list-item {
      display: flex;
      align-items: baseline;
      img {
        width: 10px;
        height: 10px;
        margin-right: 8px;
      }
      @media screen and (max-width: 380px) {
        display: block;
      }
    }
  }
  @media screen and (max-width: 380px) {
    width: 100%;
  }
`;
const RecentPost = styled.div`
  border-left: 1px solid #084892;
  margin-left: 30px;
  .recent-post-content {
    width: 300px;
    margin-left: 30px;
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      text-transform: uppercase;
      color: #084892;
    }
    .article-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .recent-post-detail {
      border-bottom: 1px solid #084892;
      padding-bottom: 20px;
      margin-top: 20px;
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        color: #084892;
      }
      .article-link {
        a {
          font-style: normal;
          font-weight: 500;
          font-size: 14.7987px;
          line-height: 18px;
          text-decoration-line: underline;

          color: #084892;
        }
      }
    }
  }
  .archives-heading {
    display-flex;
    flex-direction:column;
    margin:30px 0px 0px 30px;
    h4 {
      text-transform:uppercase;
      font-size:25px;
      font-weight:bold;
      color:#084892;
      margin-bottom:25px;
    }
    .inner-link-div {
      display:flex;
      flex-direction:column;
      a {
        margin-bottom:8px;
        text-decoration:none;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    display:none;
  }
`;
