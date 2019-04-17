import React from "react";
import { Link } from "../routes";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import auth0Client from "../services/Auth0";

const Login = () => {
  return (
    <Link>
      <span
        onClick={auth0Client.login}
        className="nav-link port-navbar-link clickable">
        Login
      </span>
    </Link>
  );
};
const Logout = () => {
  return (
    <Link>
      <span
        onClick={auth0Client.logout}
        className="nav-link port-navbar-link clickable">
        Logout
      </span>
    </Link>
  );
};

const BsNavlink = ({ route, text }) => (
  <Link route={route}>
    <a className="nav-link port-navbar-link">{text}</a>
  </Link>
);

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar
          className="port-navbar port-default absolute"
          color="transparent"
          light
          expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">
            <strong>Kehinde</strong> Orilogbon
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavlink text="Home" route="/" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavlink text="About" route="/about" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavlink text="Portfolio" route="/portfolio" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavlink text="Blogs" route="/blogs" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavlink text="CV" route="/cv" />
              </NavItem>
              {!auth0Client.isAuthenticated() && (
                <NavItem className="port-navbar-item">
                  <Login />
                </NavItem>
              )}
              {auth0Client.isAuthenticated() && (
                <NavItem className="port-navbar-item">
                  <Logout />
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
