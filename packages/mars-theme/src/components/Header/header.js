import React, { useState } from "react";
import { Global, css, connect } from "frontity";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { Navbar, Container, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import Brand from "../../assets/images/Logos/Currikistudio-logo.png";
import usericon from "../../assets/images/UserCircle1.png";
import heartIcon from "../../assets/images/Vector.png";
import dropdownImg from "../../assets/images/dropdownImg.png";
import Link from "./link";
import HeaderCss from "./styles.css";
const Header = ({ state }) => {
  const [closebtn, setclosebtn] = useState(false);
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
        <Navbar
          collapseOnSelect
          expanded={closebtn ? true : false}
          expand="xl"
          className="Navbar"
        >
          <Container>
            <Navbar.Brand href="/">
              <img src={Brand} alt="developer-hub-brand" />
            </Navbar.Brand>
            {/* <div className="navbar-dropdown"> */}
            {closebtn === false ? (
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => setclosebtn(true)}
              />
            ) : (
              <Modal.Header
                closeButton
                onClick={() => setclosebtn(false)}
              ></Modal.Header>
            )}
            <Navbar.Collapse expand={true} id="responsive-navbar-nav">
              <Nav>
                <div className="centered-menu">
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-1">
                      <p>Products</p>
                      <img src={dropdownImg} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                      {state.theme.menu.products.map(([name, link]) => {
                        const isCurrentPage = state.router.link === link;
                        return (
                          <Dropdown.Item eventKey={name}>
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
                      {state.theme.menu.customers.map(([name, link]) => {
                        const isCurrentPage = state.router.link === link;
                        return (
                          <Dropdown.Item eventKey={name}>
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
                      <p>Commmunity</p>
                      <img src={dropdownImg} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                      {state.theme.menu.community.map(([name, link]) => {
                        const isCurrentPage = state.router.link === link;
                        return (
                          <Dropdown.Item eventKey={name}>
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
                      <p>Company</p>
                      <img src={dropdownImg} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                      {state.theme.menu.company.map(([name, link]) => {
                        const isCurrentPage = state.router.link === link;
                        return (
                          <Dropdown.Item eventKey={name}>
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
                </div>
                <div className="link-btn">
                  {/* {state.theme.menu.login.map(([name, link]) => {
                    const isCurrentPage = state.router.link === link;
                    return (
                      <Link
                        link={link}
                        aria-current={isCurrentPage ? "page" : undefined}
                      > */}
                  <Nav.Link
                    href="https://www.currikistudio.org/login/"
                    target="_blank"
                    className="header-login"
                  >
                    <img src={usericon} alt="user icon" />
                    <a>Login </a>
                    {/* <a href="/generaldiscussion">Signup</a> */}
                  </Nav.Link>
                  {/* </Link>
                    );
                  })} */}
                  <Button className="donate-btn" variant="primary">
                    {state.theme.menu.donate.map(([name, link]) => {
                      const isCurrentPage = state.router.link === link;
                      return (
                        <Link
                          link={link}
                          aria-current={isCurrentPage ? "page" : undefined}
                          className="flex-btn"
                        >
                          <div>
                            <img src={heartIcon} alt="" />
                          </div>
                          <span>Donate</span>
                        </Link>
                      );
                    })}
                  </Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default connect(Header);
