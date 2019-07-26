import React, { Component } from "react";
import famimg from "../../img/newfam.png";
import LandingForm from "../search/LandingForm";
import Featured from "../layout/Featured";
import { Row, Col } from "reactstrap";

export class Landing extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row ">
          <div className="col margin-right">
            <h1 className="landing">Find a service</h1>
            <LandingForm />
          </div>

          <div className="col">
            <img src={famimg} width="650px" height="500px" alt="family img"/>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <h1 className="landing">Featured</h1>
          </div>
          <Row className="margin-right">
            <Col sm="2" className="margin-right">
              <Featured />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Landing;
