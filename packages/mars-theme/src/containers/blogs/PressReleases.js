import React from "react";
import { styled } from "frontity";
import arrow from "../../assets/images/yellow-arrow.png";
import currikiupdate from "../../assets/images/currikiupdates.png";
import press1 from "../../assets/images/PressReleases/press1.png";
import press2 from "../../assets/images/PressReleases/press2.png";
import press3 from "../../assets/images/PressReleases/press3.png";
import press4 from "../../assets/images/PressReleases/press4.png";
import press5 from "../../assets/images/PressReleases/press5.png";
import Pagination from "react-bootstrap/Pagination";
const PressReleases = () => {
  return (
    <Container>
      <Heading>Press Releases</Heading>
      <Content>
        <Article>
          <div className="blog-image">
            <img src={currikiupdate} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
        <Article>
          <div className="blog-image">
            <img src={press1} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
        <Article>
          <div className="blog-image">
            <img src={press2} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
        <Article>
          <div className="blog-image">
            <img src={press3} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
        <Article>
          <div className="blog-image">
            <img src={press4} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
        <Article>
          <div className="blog-image">
            <img src={press5} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
        <Article>
          <div className="blog-image">
            <img src={currikiupdate} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
        <Article>
          <div className="blog-image">
            <img src={press1} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
        <Article>
          <div className="blog-image">
            <img src={press2} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
        <Article>
          <div className="blog-image">
            <img src={press3} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
        <Article>
          <div className="blog-image">
            <img src={press4} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
        <Article>
          <div className="blog-image">
            <img src={press5} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              What's New with CurrikiStudio Updates as of November 2020
            </BlogHeading>
            <BlogAuthor>By Leny Dora</BlogAuthor>
            <BlogLink>
              <Link>Red article</Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
      </Content>
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item disabled>{2}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Container>
  );
};

export default PressReleases;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
  .pagination {
    justify-content: center;
    border-radius: 25px;
    li.page-item {
      a.page-link {
        border-radius: 25px;
        background: #285aa5;
        margin-left: 8px;
        font-family: Rubik;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #ffffff;
      }
    }
    span.page-link {
      border-radius: 25px;
      background: #e5e5e5;
      margin-left: 8px;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #ffffff;
    }
  }
`;
const Heading = styled.h2`
  width: 290px;
  font-family: rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
  text-transform: uppercase;
  margin-top: 101px;
  margin-bottom: 50px;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -36px;
  margin-bottom: 50px;
`;
const Article = styled.div`
  width: 260px;
  background: #ffffff;
  box-shadow: 0px 2px 25px 5px rgba(81, 81, 81, 0.1);
  border-radius: 5px;
  margin-right: 36px;
  margin-bottom: 30px;
  .article-text {
    padding: 20px 20px;
  }
`;

const BlogHeading = styled.h3`
  width: 220px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #084892;
`;
const BlogAuthor = styled.p`
  width: 220px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #515151;
`;
const BlogLink = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Link = styled.a`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14.7987px;
  line-height: 18px;
  text-decoration-line: underline;
  color: #084892;
  img {
    width: 36px;
    height: 36px;
  }
`;
