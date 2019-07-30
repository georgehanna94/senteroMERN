import React, { Component } from "react";
import LandingForm from "../search/LandingForm";
import Featured from "../layout/Featured";
import { Row, Col } from "reactstrap";

export class Landing extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row ">
          <div className="colLand">
            <h1 className="landing">Find a service</h1>
            <LandingForm />
          </div>

          <div className="colLand">
            <img
              alt=""
              src={require("../../img/newfam_s.png")}
              srcSet={`
               ${require("../../img/newfam_s.png")} 2x, 
               ${require("../../img/newfam_m.png")} 3x`}
            />{" "}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row colLand">
            <h2 className="landing">Featured</h2>
          </div>
          <Row className="colLand">
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
