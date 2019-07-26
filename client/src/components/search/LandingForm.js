import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Card
} from "reactstrap";
import { Redirect } from "react-router-dom";

export default class LandingForm extends Component {
  state = {
    submitted: "false"
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: "true" });
  };
  render() {
    if (this.state.submitted === "true") {
      return <Redirect to="/Dashboard" />;
    }
    return (

      <div>
        <Card
          className="landingcard"
          style={{ backgroundColor: "#F5F5F5", borderColor: "#F5F5F5" }}
        >
          <Form className="landingform" onSubmit={this.onSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleSelect">Choose a type of therapy</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>ABA/BCBA Therapy</option>
                    <option>Speech and Language Therapy</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Client's Age</Label>
                  <Input type="age" name="age" id="Age" placeholder="e.g. 10" />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <Label for="exampleCustomCheckbox">
                  Language Used in Therapy
                </Label>
              </Col>
              <Col md={3}>
                <Label for="exampleCheckbox">Therapy Format</Label>
              </Col>
              <Col md={3}>
                <Label for="exampleCheckbox">Therapy Location</Label>
              </Col>
            </Row>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox"
                    label="English"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox2"
                    label="French"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox3"
                    label="Mandarin"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label="Spanish"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label="Arabic"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label="Hindi"
                />
              </Col>
              <Col md={3}>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label="Individual"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label="Small Group"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label="Large Group"
                />
              </Col>
              <Col md={3}>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label="Home"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label="Center"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label="Community"
                />
              </Col>
            </Row>
            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" id="exampleCity" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">Province</Label>
                  <Input type="text" name="province" id="exampleState" />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input
                    type="text"
                    name="zip"
                    id="exampleZip"
                    placeholder="e.g. M4P 0A2"
                  />
                </FormGroup>
              </Col>
            </Row>
            <div>
              <Button style={{ position: "relative", left: "35em" }}>
                Search
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    );
  }
}
