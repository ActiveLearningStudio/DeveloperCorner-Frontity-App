import React from "react";
import { Global, css, connect } from "frontity";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Brand from "../../assets/images/curriki_new_logo.png";
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
                <NavDropdown title="Costumers" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/providers">
                    Providers
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Community" id="collasible-nav-dropdown">
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
                <NavDropdown title="Company" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#deets" className="header-login">
                  <img src={usericon} alt="user icon" />
                  <a href="/currikiforum">Login </a>/{" "}
                  <a href="/generaldiscussion">Signup</a>
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

export default connect(Header);
