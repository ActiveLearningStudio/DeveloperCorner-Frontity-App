import { React, useState } from "react";
import { styled, connect } from "frontity";
import plusicon from "../../assets/images/PLUS.svg";
import DonorImg from "../../assets/images/ourMission/Donors3.png";
import DonateNow from "../../components/donateModal/donateNow";
const Donation = ({ donationposts, state, libraries }) => {
  const [modalshow, setModalShow] = useState(false);
  const posttitle = donationposts[0]?.title;
  const postdesc = donationposts[0]?.content;
  const featureimage =
    state.source.attachment[donationposts[0]?.featured_media];
  const Html2React = libraries.html2react.Component;
  return (
    <Container>
      <Content>
        <LeftCol>
          <Heading
            dangerouslySetInnerHTML={{
              __html: posttitle.rendered,
            }}
          />
          <Innerdiv>
            <div className="para-content">
              {postdesc && <Html2React html={postdesc?.rendered} />}
            </div>
          </Innerdiv>
          {/* <Innerdiv>
            <div className="para-content">
              <img src={plusicon} alt="" />
              <div>
                <Paragraph>If you would like to pay by credit card</Paragraph>
              </div>
            </div>
          </Innerdiv> */}
          {donationposts && (
            <button onClick={() => setModalShow(true)}>CLICK HERE</button>
          )}
        </LeftCol>
        <RightCol>
          <img src={featureimage ? featureimage.source_url : DonorImg} alt="" />
        </RightCol>
      </Content>
      <DonateNow show={modalshow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default connect(Donation);

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
const Content = styled.div`
  display: flex;
  padding: 40px 0px;
  @media screen and (max-width: 1200px) {
    padding: 20px 0px;
  }
`;
const LeftCol = styled.div`
  margin-top: 46px;
  button {
    width: 185px;
    height: 45px;
    font-weight: 700;
    background: #084892;
    color: #fff;
    border: 1px solid #084892;
    box-shadow: 0px 10px 20px -5px rgba (8, 72, 146, 0.35);
    border-radius: 25px;
    margin-top: 10px;
    font-family: "Rubik";
  }
`;
const Paragraph = styled.p`
  margin-left: 20px;
  margin-bottom: 20px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
`;
const RightCol = styled.div`
  @media screen and (max-width: 1200px) {
    overflow: hidden;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const Innerdiv = styled.div`
  display: flex;
  flex-direction: column;
  .para-content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: column;
    }
  }
  p {
    // margin-left: 38px;
    font-family: "Open Sans";
  }
`;
const Heading = styled.h2`
  max-width: 504px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
  margin-bottom: 40px;
  span {
    color: #ffb124;
  }
  @media screen and (max-width: 1024px) {
    max-width: 1000px;
  }
`;
