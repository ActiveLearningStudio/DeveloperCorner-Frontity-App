import react from "react";
import { styled, connect } from "frontity";
import Banner from "../../components/banner/Styledbanner";
import Blogs from "../blogs/index";
import Linked from "../../components/Header/link";
import facebookicon from "../../assets/images/social-icons/facebook.png";
import twittericon from "../../assets/images/social-icons/twitter.png";
import linkedicon from "../../assets/images/social-icons/linked-in.png";
import moreicon from "../../assets/images/social-icons/more-icon.png";
import arrowicon from "../../assets/images/yellow-arrow.png";
const Blogdetail = ({ state, actions, libraries }) => {
  const RecentPosts = state.source.get("/category/blogs/");
  console.log("recent posts:", RecentPosts);
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const featuredmedia = state.source.attachment[post.featured_media];
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  return (
    <>
      <Banner title="Blog" />
      <Container>
        <BlogContent>
          <div className="updates-content">
            {post.excerpt && (
              <Heading
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            )}

            <Paragraph>
              <span>{author.name}</span>
              <span>{date.toDateString()}</span>
              <span>Blog</span>
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
        <DescriptionContent>
          <Description>
            {post.content ? (
              <>
                <Html2React html={post.content.rendered} />
                <button className="link-btn">Get CurrikiStudio for FREE</button>
              </>
            ) : (
              <p>Details are not avaialable for this post</p>
            )}
          </Description>
          <RecentPost>
            <div className="recent-post-content">
              <h2>Recent Posts</h2>
              <div className="recent-post-detail">
                <p>
                  “How to Become an Entrepreneur” is Now Available Online as the
                  First Higher Education Course Designed with CurrikiStudio
                </p>
                <div className="article-link">
                  <a>Read article</a>
                  <img src={arrowicon} alt="" />
                </div>
              </div>
              <div className="recent-post-detail">
                <p>
                  Curriki Answers the Call from School Districts, Universities,
                  and Nonprofits―Launches CurrikiStudio AWS CloudFormation
                  Template
                </p>
                <div className="article-link">
                  <a>Read article</a>
                  <img src={arrowicon} alt="" />
                </div>
              </div>
              <div className="recent-post-detail">
                <p>
                  Curriki® Delivers Game-Changing Functionality and Access to
                  its Free Interactive Authoring Tool, CurrikiStudio, with
                  Support from Linode
                </p>
                <div className="article-link">
                  <a>Read article</a>
                  <img src={arrowicon} alt="" />
                </div>
              </div>
              <div className="recent-post-detail">
                <p>
                  Curriki® Unveils Multi - platform Publishing for CurrikiStudio
                </p>
                <div className="article-link">
                  <a>Read article</a>
                  <img src={arrowicon} alt="" />
                </div>
              </div>
              <div className="recent-post-detail">
                <p>
                  Curriki Launches CurrikiStudio to Fast-track Digital Content
                  Authoring and Delivery for Distance Learning
                </p>
                <div className="article-link">
                  <a>Read article</a>
                  <img src={arrowicon} alt="" />
                </div>
              </div>
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
    </>
  );
};

export default connect(Blogdetail);
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
const BlogContent = styled.div`
  display: flex;
  justify-content: space-between;
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
  }
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  span {
    font-family: "Rubik";
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
`;
const Description = styled.div`
  width: 780px;
  max-width: 780px;
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
    }
  }
  button.link-btn {
    width: 301px;
    height: 45px;
    display: flex;
    justify-content: center;
    border: none;
    font-weight: 700;
    margin-top: 35px;
    background: #084892;
    color: #ffffff;
    box-shadow: 0px 10px 20px -5px rgba(8, 72, 146, 0.35);
    border-radius: 25px;
    @media screen and (max-width: 767px) {
      width: 250px;
      height: 35px;
    }
  }
  @media screen and (max-width: 992px) {
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
        max-width: 255px;
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
          text-decoration: underline;
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
