import React from "react";
import { Global, css } from "frontity";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
// import patternFly from "../../../../../node_modules/patternfly/dist/css/patternfly.css";
import { Button } from "react-bootstrap";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Brand from "../../assets/images/curriki_new_logo.png";
// import hearticon from "../../assets/images/Vector.png";
import usericon from "../../assets/images/UserCircle1.png";
// import Button from "../../../../../node_modules/curriki-design-system/dist/utils/Buttons/buttons";
import HeaderCss from "./styles.css";
const Header = () => {
  return (
    <>
      <Global styles={css(HeaderCss)} />
      <Global styles={css(bootstrapCss)} />
      <div className="header">
        <Navbar collapseOnSelect expand="xl" bg="light" className="Navbar">
          <Container>
            <Navbar.Brand href="/">
              <img src={Brand} alt="developer-hub-brand" />
            </Navbar.Brand>
            {/* <div className="navbar-dropdown"> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <NavDropdown
                  title="Products"
                  id="collasible-nav-dropdown"
                  color="#285AA5"
                >
                  <NavDropdown.Item href="/documentation">
                    Curriki Documentation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/databaseschemas">
                    Database Schemas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/deployingthecurrikiplatfrom">
                    Deploying The Curriki Platfrom
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/businessProduct/">
                    Bussiness Product
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Costumers" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/providers">
                    Providers
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Community" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Company" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#deets" className="header-login">
                  <img src={usericon} alt="user icon" />
                  <a href="/currikiforum" target="_blank">
                    Login{" "}
                  </a>
                  /{" "}
                  <a href="/generaldiscussion" target="_blank">
                    Signup
                  </a>
                </Nav.Link>
                {/* <button>donate</button> */}
                <Button className="donate-btn" variant="primary">
                  Donate
                </Button>
              </Nav>
            </Navbar.Collapse>
            {/* </div> */}
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
