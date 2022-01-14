import { React, useState, useEffect } from "react";
import { styled, connect } from "frontity";
import Paginate from "../../components/pagination/pagination";
import PressArticle from "./article";
import Loading from "../../components/loading/loading";
// import history from "../../../src/history";
import arrow from "../../assets/images/yellow-arrow.png";
import press13 from "../../assets/images/press13.png";
import { parse } from "himalaya";
const PressReleases = ({ state, libraries }) => {
  const [activePage, setactivePage] = useState(1);
  function handlepagechange() {
    // history.push("/");
  }
  const data = state.source.get(state.router.link);
  // alert(state.router.link);
  console.log("posts", data);
  const Html2React = libraries.html2react.Component;
  // console.log("******************************************");
  // console.log("HTML content - Normal content");
  // console.log(state.source["post"][273].content.rendered);
  // console.log("******************************************");
  // console.log("JSON content");
  // console.log(parse(state.source["post"][273].content.rendered));
  // console.log("******************************************");
  return (
    <Container>
      <Heading>Press Releases</Heading>
      {data.isFetching && <Loading />}
      <Content>
        {data.items &&
          data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            return <PressArticle key={item.id} item={item} />;
          })}
      </Content>
      {!data.isFetching && <Paginate link="/category/blogs/page/" />}
    </Container>
  );
};

export default connect(PressReleases);
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
  margin: auto;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    padding: 0px 70px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding: 0px 40px;
  }
  .pagination {
    justify-content: center;
    align-items: baseline;
    margin-bottom: 40px;
    li.page-item {
      a.page-link {
        background: #e5e5e5;
        border-radius: 25px;
        border: none;
        margin-left: 8px;
        color: #fff;
        font-family: "Rubik";
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        width: 35px;
        :focus {
          box-shadow: none;
        }
      }
    }
    .page-item.active .page-link {
      color: #fff !important;
      border: none;
      background: rgba(40, 19, 166) !important;
      a {
        color: #fff;
      }
    }
    .page-item.disabled .page-link.disabled {
      background: none !important;
    }
    span.page-link {
      border-radius: 25px;
      background: #285aa5;
      margin-left: 8px;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      :focus {
        box-shadow: none;
      }
      :disabled {
        background: none;
      }
    }
    .page-item:first-child .page-link {
      background: none !important;
      border: none;
      font-size: 20px;
    }
    a {
      color: #084892;
    }
    .page-item:last-child .page-link {
      background: none !important;
      border: none;
      font-size: 20px;
    }
    a {
      color: #084892;
    }
  }
`;
const Heading = styled.h2`
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
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
