import React from "react";
import { Global, css, connect } from "frontity";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Navbar, Container, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import Brand from "../../assets/images/Logos/Currikistudio-logo.png";
import usericon from "../../assets/images/UserCircle1.png";
import heartIcon from "../../assets/images/Vector.png";
import dropdownImg from "../../assets/images/dropdownImg.png";
import Link from "./link";
import HeaderCss from "./styles.css";
const Header = ({ state }) => {
  console.log(state.theme.menu);
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {/* Render custom icon here */}
      {children}
    </a>
  ));
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
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-1">
                      <p>Products</p>
                      <img src={dropdownImg} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                      {state.theme.menu.map(([name, link]) => {
                        const isCurrentPage = state.router.link === link;
                        return (
                          <Dropdown.Item key={name}>
                            <Link
                              link={link}
                              aria-current={isCurrentPage ? "page" : undefined}
                            >
                              {name}
                            </Link>
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>{" "}
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-1">
                      <p>Customers</p>
                      <img src={dropdownImg} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>{" "}
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-1">
                      <p>Commmunity</p>
                      <img src={dropdownImg} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>{" "}
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-1">
                      <p>Company</p>
                      <img src={dropdownImg} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>{" "}
                </div>
                <Nav.Link href="#deets" className="header-login">
                  <img src={usericon} alt="user icon" />
                  <a href="/currikiforum">Login </a>
                  {/* <a href="/generaldiscussion">Signup</a> */}
                </Nav.Link>

                <Button className="donate-btn" variant="primary">
                  <div>
                    <img src={heartIcon} alt="" />
                  </div>
                  <span>Donate</span>
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
