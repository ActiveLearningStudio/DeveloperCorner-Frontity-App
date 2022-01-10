import React from "react";
import { styled, connect } from "frontity";
import Link from "../../components/Header/link";
import Card2 from "../../assets/images/Card2.png";
import Arrow from "../../assets/images/Arrow.svg";
import Group2 from "../../assets/images/Group2.png";
const StoryCard = ({ state, item }) => {
  const media = state.source.attachment[item.featured_media];
  //   const author = state.source.author[item.author];
  return (
    <Card>
      <Cardbody>
        {media && <img src={media.source_url} alt="rectangle-image" />}
        <div className="card-inner-content">
          {item.excerpt && (
            <Paragraph
              dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
            />
          )}
          <Cardtext>
            <p>Category:&nbsp; </p>

            <p dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          </Cardtext>
        </div>
      </Cardbody>
      <Cardlink>
        <Link link={item.link}>
          <a href="#">Read more</a>

          <img src={Arrow} alt="image"></img>
        </Link>
      </Cardlink>
    </Card>
  );
};

export default connect(StoryCard);

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 55px;
  max-width: 333px;
  background: #ffffff;
  box-shadow: 0px 2px 25px 5px rgba(81, 81, 81, 0.1);
  border-radius: 5px;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px) {
    margin: 0px 0px 40px 0px;
    max-width: 300px;
  }
  @media screen and (max-width: 767px) {
    max-width: 620px;
  }
`;

const Cardbody = styled.div`
  border-radius: 5px;
  img {
    width: 100%;
    height: 196px;
    border-radius: 5px;
  }
  .card-inner-content {
    padding: 22px;
  }
`;
const Paragraph = styled.p`
    font-style:normal;
    font-weight-normal;
    font-size:18px;
    color:#515151;
    line-height:25px;
    margin-bottom:10px;
    `;
const Cardtext = styled.p`
  display: flex;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #285aa5;
    margin-bottom: 0 !important;
    margin-top: 0;
    color: #084892 !important;
  }
`;
const Cardlink = styled.div`
  background-image: url(${Group2});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  padding: 40px 0px 33px;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #084892;
    font-size: 18px;
    line-height: 21px;
    font-family: Rubic;
    font-style: normal;
    text-decoration: underline;
    margin-left: 12px;
  }
  img {
    margin-right: 25px;
  }
`;
