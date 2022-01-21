import { React, useState } from "react";
import { styled, connect } from "frontity";
import Alert from "react-bootstrap/Alert";
import Paginate from "../../components/pagination/pagination";
import Banner from "../../components/banner/Styledbanner";
import PressArticle from "./pressArticle";
import Loading from "../../components/loading/loading";
const PressAwards = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  console.log("data is here", data);
  const Html2React = libraries.html2react.Component;
  const [activePage, setactivePage] = useState(1);
  function handlepagechange() {
    if (activePage == 1) {
      setactivePage(2);
    } else {
      setactivePage(1);
    }
  }
  return (
    <div>
      <Banner title="Press & Awards" />
      <Container>
        <Heading>Press Releases</Heading>
        {data.isFetching && <Loading />}
        {!data.isFetching && (
          <Content>
            {data.items ? (
              data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                return <PressArticle key={item.id} item={item} />;
              })
            ) : (
              <Alert variant="success">
                <Alert.Heading>No data found for this page</Alert.Heading>
                <p>
                  Aww yeah, you successfully read this important alert message.
                  Please go to admin panel and create blogs for contribution
                  category. When you will create any blog that will be render
                  here.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </p>
              </Alert>
            )}
          </Content>
        )}
        {!data.isFetching && data.items && (
          <Paginate link="/category/pressawards/page/" />
        )}
      </Container>
    </div>
  );
};

export default connect(PressAwards);
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
        color: #084892;
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
      border:none;
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
    a{
       color: #084892;
    }
    .page-item:last-child .page-link {
      background: none !important;
      border: none;
      font-size: 20px;
    }
    a{
       color: #084892;
    }
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
