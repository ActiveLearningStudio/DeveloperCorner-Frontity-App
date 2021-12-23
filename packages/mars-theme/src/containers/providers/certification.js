import React from "react";
import { styled } from "frontity";
import plusicon from "../../assets/images/PLUS.svg";
import resume1 from "../../assets/images/resume1.svg";
import resume2 from "../../assets/images/resume2.svg";
import resume3 from "../../assets/images/resume3.svg";
import resume4 from "../../assets/images/resume4.svg";

const Certification = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h2>CERTIFICATION PROCESS</h2>
          <img src={plusicon} alt="" />
        </Heading>
        <Content>
          <LeftCol>
            <Card>
              <div className="card-content">
                <div>
                  <Span>1</Span>
                </div>
                <Cardbody>
                  <h3> Application</h3>
                  <div>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p> Application Submission</p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p> Technology / Learning Portfolio Review</p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p>Reference Check</p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p> Performance-Based Project Assignment</p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p> Partnership Agreement</p>
                    </p>
                  </div>
                </Cardbody>
              </div>
              <ImageDiv>
                <img src={resume1} alt="" />
              </ImageDiv>
            </Card>
            <Card>
              <div className="card-content">
                <div>
                  <Span>2</Span>
                </div>
                <Cardbody>
                  <h3>Certification</h3>
                  <div>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p>Kickoff and Account Manager Introduction</p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p>Self tour of Resources</p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p>Course Completion</p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p>Support Hours</p>
                    </p>
                  </div>
                </Cardbody>
              </div>
              <ImageDiv>
                <img src={resume2} alt="" />
              </ImageDiv>
            </Card>
          </LeftCol>
          <RightCol>
            <Card>
              <div className="card-content">
                <div>
                  <Span>3</Span>
                </div>
                <Cardbody>
                  <h3>Launch</h3>
                  <div>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p>Co-branded Pitch</p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p>
                        Led Generation → Bring into deep dive/solutioning calls
                      </p>
                    </p>
                  </div>
                </Cardbody>
              </div>
              <ImageDiv>
                <img src={resume3} alt="" />
              </ImageDiv>
            </Card>
            <Card>
              <div className="card-content">
                <div>
                  <Span>4</Span>
                </div>
                <Cardbody>
                  <h3>Success</h3>
                  <div>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p>Bi-monthly Check-ins</p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p>Project and Pipeline Reviews</p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p>
                        Co-Marketing (Webinars, Newsletters, Press Releases),
                        Social Media
                      </p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p> Performance base Project</p>
                    </p>
                    <p className="card-list-item">
                      <img src={plusicon} alt="" />
                      <p>Compatibility testing for New Releases and Features</p>
                    </p>
                  </div>
                </Cardbody>
              </div>
              <ImageDiv>
                <img src={resume4} alt="" />
              </ImageDiv>
            </Card>
          </RightCol>
        </Content>
      </Container>
    </Section>
  );
};

export default Certification;

const Section = styled.div``;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
  @media screen and (max-width: 1200px) {
    padding: 0px 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 40px;
  }
`;
const Heading = styled.div`
  display: flex;
  margin-top: 100px;
  h2 {
    margin-right: 10px;
    color: #084892;
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: #084892;
  }
`;
const Content = styled.div`
  padding: 60px 0px;
  .card-content {
    display: flex;
    align-items: baseline;
  }
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;
const Card = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
    align-items: end;
  }
`;
const ImageDiv = styled.div`
  text-align: right;
  @media screen and (max-width: 992px) {
    margin-top:50px
    padding-right:50px;
  }
  @media screen and (max-width: 768px) {
    text-align:center;
    padding:0;
    margin-top:30px;
    }
`;
const Span = styled.span`
  color: rgb(255, 177, 36);
  font-size: 100px;
  font-weight: bold;
  margin-right: 30px;
`;
const Cardbody = styled.div`
  h3 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: #084892;
    text-transform: uppercase;
  }
  div {
    .card-list-item {
      margin: 0px;
      display: flex;
      align-items: baseline;
      img {
        width: 12px;
        height: 12px;
      }
      p {
        margin-left: 10px;
        font-family: Open Sans;
        color: #515151;
        margin-left: 20px;
        margin-bottom: 0px !important;
      }
    }
  }
`;
const LeftCol = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: left;
    align-items: center;
  }
`;
const RightCol = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
