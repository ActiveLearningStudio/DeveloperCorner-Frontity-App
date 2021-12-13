import {React,useState} from "react";
import { styled } from "frontity";
import plusicon from "../../assets/images/PLUS.svg";
import DonorImg from "../../assets/images/ourMission/Donors3.png";
import DonateNow from "../../components/donateModal/donateNow";
const Donation = () => {
  const [modalshow, setModalShow] = useState(false)
  return (
    <Section>
      <Container>
        <Content>
          <LeftCol>
            <Heading>
              Your donation <span>supports our non-profit mission,</span> which
              is to bring free and open technology tools into every school, college
              and nonprofit organization.
            </Heading>

            <Innerdiv>
              <div>
                <img src={plusicon} alt="" />

                <Paragraph>
                  If contributing by check please send your tax exept donation
                  ot Curriki, 20660 Stevens Creek blvd #332, Cupertino, CA 95014
                </Paragraph>
              </div>
              <p>Curriki non profit taX ID#203478467</p>
            </Innerdiv>
            <Innerdiv>
              <div>
                <img src={plusicon} alt="" />
                <Paragraph>If you would like to pay by credit card</Paragraph>
              </div>
            </Innerdiv>
            <button onClick={() => setModalShow(true)}>CLICK HERE</button>
          </LeftCol>
          <RightCol>
            <img src={DonorImg} alt="" />
          </RightCol>
        </Content>
        <DonateNow
        show={modalshow}
        onHide={() => setModalShow(false)}
      />
      </Container>
    </Section>
  );
};

export default Donation;

const Section = styled.div``;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
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
    font-weight:700;
    background: #084892;
    color: #fff;
    border: 1px solid #084892;
    box-shadow: 0px 10px 20px -5px rgba (8, 72, 146, 0.35);
    border-radius: 25px;
    margin-top: 10px;
  }
`;
const Paragraph = styled.div`
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Innerdiv = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: flex-start;
  }
  p {
    margin-left: 38px;
  }
`;
const Heading = styled.h2`
  max-width: 504px;
  font-family: Rubic;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
  margin-bottom: 40px;
  span {
    color: #ffb124;
  }
`;
const Para1 = styled.div``;
