import React from "react";
import { styled, connect } from "frontity";
import Linked from "../../components/Header/link";
import arrow from "../../assets/images/yellow-arrow.png";
const PressArticle = ({ state, item }) => {
  const media = state.source.attachment[item.featured_media];
  const author = state.source.author[item.author];
  return (
    <Article>
      {media && (
        <div className="blog-image">
          <img src={media.source_url} alt="" />
        </div>
      )}
      <div className="article-text">
        {item.excerpt && (
          <Linked link={item.link}>
            <BlogHeading
              dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
            />
          </Linked>
        )}
        {author && <BlogAuthor>By: {author.name}</BlogAuthor>}
        <BlogLink>
          <Linked link={item.link}>Read article</Linked>
          <Linked link={item.link}>
            <img src={arrow} alt="" />
          </Linked>
        </BlogLink>
      </div>
    </Article>
  );
};

export default connect(PressArticle);

const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  background: #ffffff;
  box-shadow: 0px 2px 25px 5px rgba(81, 81, 81, 0.1);
  border-radius: 5px;
  margin-right: 36px;
  margin-bottom: 30px;
  .article-text {
    padding: 20px 20px;
  }
  .blog-image {
    img {
      width: 100%;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    .blog-image {
      img {
        width: 100%;
      }
    }
  }
`;
const BlogHeading = styled.h3`
  p {
    font-family: "Rubik";
    width: 220px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    min-height: 105px;
    margin-bottom: 10px;
    color: #084892;
    @media screen and (min-width: 320px) and (max-width: 767px) {
      width: 100%;
    }
  }
`;
const BlogAuthor = styled.p`
  width: 220px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px !important;
  line-height: 14px;
  color: #515151 !important;
  padding: 0px !important;
`;
const BlogLink = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-style: normal;
    font-weight: 500;
    font-size: 14.7987px;
    line-height: 18px;
    text-decoration-line: underline;
    color: #084892;
  }
  img {
    width: 36px;
    height: 36px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
  }
`;
