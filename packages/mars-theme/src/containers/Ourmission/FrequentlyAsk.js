import React from "react";
import { styled } from "frontity";
import GlobalCss from "../../assets/css/fonts.css";
import { Accordion, Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
const FrequentlyAsk = () => {
  return (
    <Section>
      <Container>
        <HeaderContent>
          <Heading>Frequently Asked Questions</Heading>
          <BottomLine></BottomLine>
        </HeaderContent>
        <Content>
          <Accordion>
            <Card>
              <AccordionTitle>
                <Accordion.Toggle as={Card.Header} eventKey="0" active>
                  Is my donation tax deductible?
                </Accordion.Toggle>
              </AccordionTitle>

              <Accordion.Collapse eventKey="0" active>
                <Card.Body>
                  <Paragraph>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum'
                  </Paragraph>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Can i speak someone about a wire transfer or other type of gift?
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Paragraph>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum'
                  </Paragraph>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Is my donation tax deductible?
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Paragraph>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum'
                  </Paragraph>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Is my donation tax deductible?
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Paragraph>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum'
                  </Paragraph>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Content>
      </Container>
    </Section>
  );
};

export default FrequentlyAsk;
const Section = styled.div``;
const Content = styled.div`
  padding: 35px 0 70px 0px;
  Card {
    color: #084892;
  }
`;
const HeaderContent = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AccordionTitle = styled.div`
  color: #fff;
  background: linear-gradient(0deg, #084892, #084892);
  box-shadow: 0px 10px 20px -5px rgba (8,  72,  146,  0.35);
  border-radius: 5px;
`;
const Heading = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 58px;
  color: #ffb124;
`;
const BottomLine = styled.div`
  width: 100px;
  border-bottom: 2px solid #ffb124;
`;
const Paragraph = styled.div`
  color: #515151;
  font-family: Open Sans;
`;
