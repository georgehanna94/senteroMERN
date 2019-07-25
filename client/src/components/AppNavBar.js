import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import SignedInLinks from "../components/layout/SignedInLinks";
import SignedOutLinks from "../components/layout/SignedOutLinks";

class AppNavBar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm">
          <Container>
            <NavbarBrand href="/">Sentero</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <SignedInLinks />
                <SignedOutLinks />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavBar;
