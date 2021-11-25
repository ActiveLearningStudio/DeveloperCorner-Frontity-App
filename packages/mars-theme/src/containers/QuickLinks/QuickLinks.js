import React from "react";
import { styled, css } from "frontity";
import Linksheading from "../../components/QuickLinksHeading/index";
import SettingIcon from "../../assets/images/setting-icon.png";
import Arrowicon from "../../assets/images/arrrowIcon.png";
import heartIcon from "../../assets/images/heart.png";
import eyeIcon from "../../assets/images/eye.png";
import settingIcon from "../../assets/images/setting.png";
import pcIcon from "../../assets/images/pc.png";
import mobileIcon from "../../assets/images/mobile.png";
const QuickLinks = () => {
  return (
    <Container>
      <Content>
        <Linksheading />
        <Cards>
          <Card>
            <CardContent>
              <CardHead>
                <img src={SettingIcon} alt="" />
                <p>Set up, configure and run curriki studio</p>
              </CardHead>
              <InnerLinks>
                <ol>
                  <li>lorem ipsum is the first link</li>
                  <li>
                    Ipsum lorem the <a>second link</a>
                  </li>
                  <li>this is the third link</li>
                  <li>
                    this is the <a>fourth link</a>
                  </li>
                </ol>
              </InnerLinks>
            </CardContent>
            <CardBottom>
              <Link>
                <a> See more</a>
                <img src={Arrowicon} alt="" />
              </Link>
            </CardBottom>
          </Card>
          <Card>
            <CardContent>
              <CardHead>
                <img src={heartIcon} alt="" />
                <p>How to contribute</p>
              </CardHead>
              <InnerLinks>
                <ol>
                  <li>lorem ipsum is the first link</li>
                  <li>
                    Ipsum lorem the <a>second link</a>
                  </li>
                  <li>this is the third link</li>
                  <li>
                    this is the <a>fourth link</a>
                  </li>
                </ol>
              </InnerLinks>
            </CardContent>
            <CardBottom>
              <Link>
                <a> See more</a>
                <img src={Arrowicon} alt="" />
              </Link>
            </CardBottom>
          </Card>
          <Card>
            <CardContent>
              <CardHead>
                <img src={eyeIcon} alt="" />
                <p>System Overview</p>
              </CardHead>
              <InnerLinks>
                <ol>
                  <li>lorem ipsum is the first link</li>
                  <li>
                    Ipsum lorem the <a>second link</a>
                  </li>
                  <li>this is the third link</li>
                  <li>
                    this is the <a>fourth link</a>
                  </li>
                </ol>
              </InnerLinks>
            </CardContent>
            <CardBottom>
              <Link>
                <a> See more</a>
                <img src={Arrowicon} alt="" />
              </Link>
            </CardBottom>
          </Card>
          <Card>
            <CardContent>
              <CardHead>
                <img src={settingIcon} alt="" />
                <p>APIs</p>
              </CardHead>
              <InnerLinks>
                <ol>
                  <li>lorem ipsum is the first link</li>
                  <li>
                    Ipsum lorem the <a>second link</a>
                  </li>
                  <li>this is the third link</li>
                  <li>
                    this is the <a>fourth link</a>
                  </li>
                </ol>
              </InnerLinks>
            </CardContent>
            <CardBottom>
              <Link>
                <a> See more</a>
                <img src={Arrowicon} alt="" />
              </Link>
            </CardBottom>
          </Card>
          <Card>
            <CardContent>
              <CardHead>
                <img src={pcIcon} alt="" />
                <p>Web Application</p>
              </CardHead>
              <InnerLinks>
                <ol>
                  <li>lorem ipsum is the first link</li>
                  <li>
                    Ipsum lorem the <a>second link</a>
                  </li>
                  <li>this is the third link</li>
                  <li>
                    this is the <a>fourth link</a>
                  </li>
                </ol>
              </InnerLinks>
            </CardContent>
            <CardBottom>
              <Link>
                <a> See more</a>
                <img src={Arrowicon} alt="" />
              </Link>
            </CardBottom>
          </Card>
          <Card>
            <CardContent>
              <CardHead>
                <img src={mobileIcon} alt="" />
                <p>Mobile App</p>
              </CardHead>
              <InnerLinks>
                <ol>
                  <li>lorem ipsum is the first link</li>
                  <li>
                    Ipsum lorem the <a>second link</a>
                  </li>
                  <li>this is the third link</li>
                  <li>
                    this is the <a>fourth link</a>
                  </li>
                </ol>
              </InnerLinks>
            </CardContent>
            <CardBottom>
              <Link>
                <a> See more</a>
                <img src={Arrowicon} alt="" />
              </Link>
            </CardBottom>
          </Card>
        </Cards>
      </Content>
    </Container>
  );
};

export default QuickLinks;

const Container = styled.div`
  max-width: 1200px;
`;
const Content = styled.div`
  padding: 30px 75px 70px 75px;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  margin-right: 10px;
  background: #ffffff;

  box-shadow: 0px 2px 8px 1px rgba(81, 81, 81, 0.16);
  border-radius: 8px;
  margin-right: 22px;
  margin-top: 22px;
`;
const CardHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #084892;
    margin-left: 10px;
  }
`;
const CardContent = styled.div`
  padding: 14px 14px 30px 14px;
`;
const InnerLinks = styled.div`
  li {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    color: #515151;
    margin-bottom: 5px;
    a {
      color: #2e68bf !important;
    }
    ::marker {
      color: #084892 !important;
    }
  }
`;
const CardBottom = styled.div`
  padding: 8px 16px;
  height: 32px;
  width: 320px;
  background: #f1f1f1;
  align-item: right;
`;
const Link = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #084892 !important;
    margin-right: 15px;
  }
`;
