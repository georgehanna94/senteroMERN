import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { Alert } from "reactstrap";
import { clearErrors } from "../../actions/errorActions";

export class SignUp extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    this.props.clearErrors();
    e.preventDefault();
    const { first_name, last_name, email, password, password2 } = this.state;
    if (password !== password2) {
      alert("Passwords don't match");
    } else {
      const newUser = {
        first_name,
        last_name,
        password,
        email
      };
      this.props.register(newUser);
    }
  };

  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) return <Redirect to="/Dashboard" />;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex" />
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                {this.state.msg ? (
                  <Alert color="danger">{this.state.msg}</Alert>
                ) : null}
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="first_name"
                      className="form-control"
                      placeholder="First Name"
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="last_name"
                      className="form-control"
                      placeholder="Last Name"
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="last_name">Last Name</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      onChange={this.handleChange}
                      placeholder="Email address"
                      required
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  <hr />

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="password2"
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="password2">Confirm password</label>
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Register
                  </button>

                  <a className="d-block text-center mt-2 small" href="#">
                    Sign In
                  </a>
                  <hr className="my-4" />
                  <button className="btn-lg btn-google btn-block" type="submit">
                    <i className="fab fa-google mr-2" /> Sign up with Google
                  </button>
                  <button
                    className="btn-lg btn-facebook btn-block"
                    type="submit"
                  >
                    <i className="fab fa-facebook-f mr-2" /> Sign up with
                    Facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  error: state.errorReducer,
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(SignUp);
