import React from "react";
import { styled, css, connect } from "frontity";
import Alert from "react-bootstrap/Alert";
import Loading from "../../components/loading/loading";
import arrowIcon from "../../assets/images/yellow-arrow.png";
import webinar2 from "../../assets/images/webinars/web2.png";
import playIcon from "../../assets/images/play.png";
const WebinarArticle = ({ state, postitem }) => {
  const media = state.source.attachment[postitem.featured_media];
  const date = new Date(postitem.date);
  const routerlink = postitem.link;

  return (
    <Card>
      {media && (
        <CardHead
          css={css`
            background: linear-gradient(
                0deg,
                rgba(40, 90, 165, 0.75),
                rgba(40, 90, 165, 0.75)
              ),
              url("${media.source_url}");
          `}
        >
          <div>
            <img src={playIcon} alt="" />
          </div>
        </CardHead>
      )}
      <div className="card-inner-content">
        {postitem.excerpt && (
          <CardHeading
            dangerouslySetInnerHTML={{
              __html: postitem.excerpt.rendered,
            }}
          />
        )}

        <CardPara>{date.toDateString()}</CardPara>
        <CardBottom>
          <a href="#">Watch webinar now</a>
          <img src={arrowIcon} alt="" />
        </CardBottom>
      </div>
    </Card>
  );
};

export default connect(WebinarArticle);

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
  @media screen and (max-width: 767px) {
    width: 100%;
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
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const CardHeading = styled.h5`
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #084892;
    margin-top: 20px;
    height: 84px;
    margin-bottom: 10px;
  }
`;
const CardPara = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 30px;
  color: #515151;
`;
const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-decoration-line: underline;

    color: #084892;
    margin-right: 20px;
  }
`;
