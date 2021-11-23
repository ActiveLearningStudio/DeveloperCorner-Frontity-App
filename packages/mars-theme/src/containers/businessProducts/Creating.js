import React from "react";
import { styled } from "frontity";
import { Container } from "react-bootstrap";
import StartedImg from "../../assets/images/Trynow1.svg";
const Creating = () => {
  return (
    <StyleDiv>
      <Container>
        <Content>
          <LeftDiv>
            <h2>Try Curriki Studio Now</h2>
            <p>
              Curriki Studio demo envirenment means to give you a preview of how
              your organization can use use our technology. It is completetly
              free. For more information on how to integrate your LMS, contact
              us using the form below.
            </p>
            <button>START CREATING</button>
          </LeftDiv>
          <RightDiv>
            <img src={StartedImg} alt="" />
          </RightDiv>
        </Content>
      </Container>
    </StyleDiv>
  );
};

export default Creating;

const StyleDiv = styled.div`
  background: #084892;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftDiv = styled.div`
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    color: #f8af2c;
    margin-bottom: 1rem;
  }
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    margin-bottom: 2rem;
  }
  button {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 5px 40px;
    border-radius: 25px;
    font-weight: bold;
    @media screen and (max-width: 991px) {
      margin-bottom: 20px;
    }
  }
`;
const RightDiv = styled.div``;
