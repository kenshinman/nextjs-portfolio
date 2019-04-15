import React from "react";
import { Link } from "../routes";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const BsNavlink = ({ route, text }) => (
  <Link route={route}>
    <a className="nav-link">{text}</a>
  </Link>
);

export default class Example extends React.Component {
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
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <strong>Kehinde</strong> Orilogbon
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <BsNavlink text="Home" route="/" />
              </NavItem>
              <NavItem>
                <BsNavlink text="About" route="/about" />
              </NavItem>
              <NavItem>
                <BsNavlink text="Portfolio" route="/portfolio" />
              </NavItem>
              <NavItem>
                <BsNavlink text="Blogs" route="/blogs" />
              </NavItem>
              <NavItem>
                <BsNavlink text="CV" route="/cv" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
