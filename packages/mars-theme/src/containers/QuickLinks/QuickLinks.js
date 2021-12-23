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
        <Linksheading titlebar="Quick Links" />
        <Cards>
          <Card>
            <CardContent>
              <CardHead>
                <img src={SettingIcon} alt="" />
                <p>Set up, configure and run Curriki Studio</p>
              </CardHead>
              <InnerLinks>
                <ol>
                  <li>Commondo non nulla vel.</li>
                  <li>
                    Velit donec <a>diam at viverra</a> tempor.
                  </li>
                  <li>Neque consequat elementum.</li>
                  <li>
                    Velit <a> pellentesque sed tellus.</a>
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
                  <li>
                    <a href="#">Lacinia senectus</a> nulla est proin.
                  </li>
                  <li>
                    Eget molestie <a href="#">non habitant.</a>
                  </li>
                  <li>
                    Ultricies a <a href="#">tristique et</a> eu orci velit.
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
                  <li>
                    Vestibulum <a href="#">elit arcu elementum id.</a>
                  </li>
                  <li>
                    <a href="#">Adipiscing fringilla morbi semper.</a>
                  </li>
                  <li>
                    Turpis dictum <a href="#">egestas odio sed.</a>
                  </li>
                  <li>
                    Dictumst <a href="#">tellus ante dui</a>pharetra.
                  </li>
                  <li>
                    <a href="#">Consectetur</a> tristique sodales.
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
                  <li>
                    Rutrum <a href="#">sodales cras nec</a> quis eget.
                  </li>
                  <li>
                    Nunc <a href="#">enim dui integer</a> egestas a.
                  </li>
                  <li>
                    Sit sollicitudin <a href="#">a enim velit.</a>
                  </li>
                  <li>
                    Semper <a href="#">tortor in ut risus </a>convallis.
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
                <p>Web Applications</p>
              </CardHead>
              <InnerLinks>
                <ol>
                  <li>Lacus justo egestas ultrices a.</li>
                  <li>
                    <a href="#">Duis gravida mauris</a> proin lectus.
                  </li>
                  <li>Morbi faucibus volutpat eleifend.</li>
                  <li>
                    Et leo id vitae <a href="#">eget porta lacus.</a>
                  </li>
                  <li>Porttitor et posuere eu velit luctus.</li>
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
                  <li>
                    Sit auctor <a href="#">viverra porta dui.</a>
                  </li>
                  <li>
                    Justo <a href="#">arcu scelerisque</a> sodales.
                  </li>
                  <li>
                    Sit <a href="#">sodales ac </a>consectetur pulvinar.
                  </li>
                  <li>
                    Urna ornare <a href="#">fringilla eu tincidunt.</a>
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
  padding: 30px 60px 70px;
  @media screen and (max-width: 1200px) {
    padding: 30px 30px 70px;
  }
  @media (max-width: 980px) {
    padding: 30px 20px 70px;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 603px) {
    justify-content: center;
  }
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
  @media screen and (max-width: 723px) {
    width: 260px;
  }
  @media screen and (max-width: 603px) {
    width: 100%;
  }
`;
const CardHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  p {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 700;
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
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    color: #515151;
    margin-bottom: 5px;
    a {
      color: #2e68bf !important;
      text-decoration: none;
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
  @media screen and (max-width: 723px) {
    width: 260px;
  }
  @media screen and (max-width: 603px) {
    width: 100%;
  }
`;
const Link = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    font-family: "Rubik";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #084892 !important;
    margin-right: 15px;
  }
`;
