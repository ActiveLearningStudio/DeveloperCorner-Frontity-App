import React from "react";
import { Global, css, connect } from "frontity";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Brand from "../../assets/images/Logos/Currikistudio-logo.png";
import usericon from "../../assets/images/UserCircle1.png";
import Link from "./link";
import HeaderCss from "./styles.css";
const Header = ({ state }) => {
  console.log(state.theme.menu);
  console;
  return (
    <>
      <Global styles={css(HeaderCss)} />
      <Global styles={css(bootstrapCss)} />
      <div className="header">
        <Navbar collapseOnSelect expand="xl" className="Navbar">
          <Container>
            <Navbar.Brand href="/">
              <img src={Brand} alt="developer-hub-brand" />
            </Navbar.Brand>
            {/* <div className="navbar-dropdown"> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <div className="centered-menu">
                  <NavDropdown
                    title="Blog"
                    id="collasible-nav-dropdown"
                    color="#285AA5"
                  >
                    {state.theme.menu.map(([name, link]) => {
                      const isCurrentPage = state.router.link === link;
                      return (
                        <NavDropdown.Item key={name}>
                          <Link
                            link={link}
                            aria-current={isCurrentPage ? "page" : undefined}
                          >
                            {name}
                          </Link>
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                  <NavDropdown title="Community" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/providers">
                      Providers
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Support" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#">
                      Curriki Documentation
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Database Schemas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Deploying The Curriki Platfrom
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Bussiness Product
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </div>
                <Nav.Link href="#deets" className="header-login">
                  <img src={usericon} alt="user icon" />
                  <a href="/currikiforum">Login </a>
                  {/* <a href="/generaldiscussion">Signup</a> */}
                </Nav.Link>

                {/* <Button className="donate-btn" variant="primary">
                  Donate
                </Button> */}
              </Nav>
            </Navbar.Collapse>
            {/* </div> */}
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default connect(Header);
