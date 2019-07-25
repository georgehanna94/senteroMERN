import React, { Component } from "react";
import { Redirect } from "react-router-dom";


export class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex" />
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="Username"
                      onChange={this.handleChange}
                      required
                      autofocus
                    />
                    <label for="username">Username</label>
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
                    <label for="email">Email address</label>
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
                    <label for="password">Password</label>
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
                    <label for="password2">Confirm password</label>
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
                  <button
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-google mr-2" /> Sign up with Google
                  </button>
                  <button
                    className="btn btn-lg btn-facebook btn-block text-uppercase"
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

export default SignUp;
