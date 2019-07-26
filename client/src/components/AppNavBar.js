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
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AppNavBar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;


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
                {isAuthenticated ? <SignedInLinks/> : <SignedOutLinks/>}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(
  mapStateToProps,
  null
)(AppNavBar);
