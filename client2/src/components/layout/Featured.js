import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink
} from "reactstrap";

export class Featured extends Component {
  render() {
    return (
      <Card sm={4} style={{ backgroundColor: '#', borderColor: '#' }}>
        <CardImg
          top
          width="10%"
          src="http://speakableslp.com/wp-content/uploads/2015/08/logo5.png"
          alt="Card image cap"
        />
        <CardBody>
          <h3>SpeakableSLP</h3>
          <CardText>
            Providing top quality in-home assessment and therapy services to
            individuals of all ages in Montreal and Toronto
          </CardText>
          <CardLink href="http://speakableslp.com/">Visit</CardLink>
        </CardBody>
      </Card>
    );
  }
}

export default Featured;
